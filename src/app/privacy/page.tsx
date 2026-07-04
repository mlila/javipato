import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Javi Pato tattoo studio website.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-margin-mobile pb-section-gap pt-[120px] md:px-margin-desktop">
      <h1 className="mb-stack-lg font-display-lg text-headline-md text-primary">
        Privacy Policy
      </h1>
      <div className="space-y-stack-lg font-body-md text-on-surface-variant">
        <p>
          This site collects information you voluntarily submit through the
          booking inquiry form, including your name, email, tattoo description,
          and any reference images you upload.
        </p>
        <p>
          We use this information solely to evaluate your project and respond to
          your inquiry. We do not sell or share your personal data with third
          parties.
        </p>
        <p>
          For questions about your data, contact{" "}
          <a
            className="text-primary underline"
            href="mailto:hello@javipato.com"
          >
            hello@javipato.com
          </a>
          .
        </p>
      </div>
      <Link
        className="mt-stack-lg inline-block font-label-caps text-label-caps text-primary underline"
        href="/"
      >
        Back to home
      </Link>
    </main>
  );
}
