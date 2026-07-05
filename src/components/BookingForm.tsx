"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";

export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitState, setSubmitState] = useState<
    "idle" | "sending" | "sent"
  >("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [fileCount, setFileCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    setSubmitState("sending");
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const formData = new FormData(formRef.current);
      const formEndpoint =
        process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "/api/book";
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message ?? "We couldn't send your inquiry.");
      }

      setSubmitState("sent");
      setSubmitSuccess("Your inquiry has been sent successfully.");
      setTimeout(() => {
        setSubmitState("idle");
        setSubmitSuccess(null);
        formRef.current?.reset();
        setFileCount(0);
      }, 3000);
    } catch (error) {
      setSubmitState("idle");
      setSubmitError(
        error instanceof Error ? error.message : "We couldn't send your inquiry.",
      );
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileCount(e.target.files?.length ?? 0);
  };

  return (
    <form
      ref={formRef}
      className="space-y-stack-lg"
      id="booking-form"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="font-label-caps text-label-caps text-on-surface-variant"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="border-0 border-b border-white/10 bg-transparent py-3 font-body-md text-primary placeholder:text-surface-variant focus:border-white focus:ring-0"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-label-caps text-label-caps text-on-surface-variant"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="border-0 border-b border-white/10 bg-transparent py-3 font-body-md text-primary placeholder:text-surface-variant focus:border-white focus:ring-0"
            id="email"
            name="email"
            placeholder="email@example.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="font-label-caps text-label-caps text-on-surface-variant"
          htmlFor="description"
        >
          Tattoo Description
        </label>
        <textarea
          className="resize-none border-0 border-b border-white/10 bg-transparent py-3 font-body-md text-primary placeholder:text-surface-variant focus:border-white focus:ring-0"
          id="description"
          name="description"
          placeholder="Describe the concept, subject, and story..."
          required
          rows={4}
        />
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="font-label-caps text-label-caps text-on-surface-variant"
            htmlFor="placement"
          >
            Placement on Body
          </label>
          <input
            className="border-0 border-b border-white/10 bg-transparent py-3 font-body-md text-primary placeholder:text-surface-variant focus:border-white focus:ring-0"
            id="placement"
            name="placement"
            placeholder="e.g., Left Forearm, Right Ribs"
            required
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-label-caps text-label-caps text-on-surface-variant"
            htmlFor="size"
          >
            Approximate Size (cm/in)
          </label>
          <input
            className="border-0 border-b border-white/10 bg-transparent py-3 font-body-md text-primary placeholder:text-surface-variant focus:border-white focus:ring-0"
            id="size"
            name="size"
            placeholder="e.g., 15x10cm"
            required
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-label-caps text-label-caps text-on-surface-variant">
          Reference Images
        </label>
        <label
          className={`group cursor-pointer border-2 border-dashed p-stack-lg text-center transition-colors hover:border-white ${
            fileCount > 0 ? "border-primary" : "border-white/10"
          }`}
        >
          <input
            accept="image/*"
            className="hidden"
            id="file-upload"
            multiple
            name="images"
            type="file"
            onChange={handleFileChange}
          />
          <span className="material-symbols-outlined mb-stack-sm block text-headline-sm text-on-surface-variant group-hover:text-primary">
            upload_file
          </span>
          <p className="font-body-md text-on-surface-variant group-hover:text-primary">
            {fileCount > 0
              ? `${fileCount} file${fileCount > 1 ? "s" : ""} selected`
              : "Drag & drop or browse reference images"}
          </p>
          <p className="mt-2 font-mono-technical text-mono-technical opacity-50">
            JPG, PNG up to 10MB each
          </p>
        </label>
      </div>

      <div className="pt-stack-md">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <button
            className={`w-full px-12 py-5 font-label-caps text-label-caps transition-colors active:scale-95 md:w-auto ${
              submitState === "sent"
                ? "bg-green-600 text-white"
                : "bg-white text-background hover:bg-on-surface-variant"
            }`}
            disabled={submitState !== "idle"}
            type="submit"
          >
            {submitState === "sending"
              ? "SENDING..."
              : submitState === "sent"
                ? "INQUIRY SENT"
                : "SUBMIT INQUIRY"}
          </button>
          {submitError ? (
            <p className="font-body-md text-red-400">{submitError}</p>
          ) : null}
          {submitSuccess ? (
            <p className="font-body-md text-green-400">{submitSuccess}</p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
