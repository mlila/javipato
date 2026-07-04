import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Booking & Inquiry",
  description:
    "Book a consultation with Javi Pato for illustrative blackwork tattoos in Madrid.",
};

export default function BookPage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pb-section-gap pt-[120px] md:px-margin-desktop">
      <header className="mb-stack-lg md:mb-section-gap">
        <h1 className="mb-stack-md font-display-lg text-display-lg-mobile md:text-display-lg">
          Booking &amp; Inquiry
        </h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Thank you for your interest in my work. Please fill out the form below
          with as much detail as possible to begin your consultation process.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="md:col-span-7 lg:col-span-8">
          <BookingForm />
        </div>

        <aside className="space-y-stack-lg md:col-span-5 lg:col-span-4">
          <div className="border border-white/5 bg-surface-container p-stack-lg">
            <h3 className="mb-stack-md flex items-center gap-2 font-label-caps text-label-caps text-primary">
              <span className="material-symbols-outlined text-[16px]">
                location_on
              </span>
              Current Location
            </h3>
            <div className="space-y-stack-sm">
              <p className="font-headline-sm text-headline-sm">Madrid, Spain</p>
              <p className="font-mono-technical text-mono-technical text-on-surface-variant">
                Private Studio, Malasaña District
              </p>
            </div>
            <div className="mt-stack-md overflow-hidden grayscale transition-all duration-500 hover:grayscale-0">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${images.booking.map}')` }}
              />
            </div>
          </div>

          <div className="border border-white/5 bg-surface-container p-stack-lg">
            <h3 className="mb-stack-md flex items-center gap-2 font-label-caps text-label-caps text-primary">
              <span className="material-symbols-outlined text-[16px]">rule</span>
              Booking Requirements
            </h3>
            <ul className="space-y-stack-md">
              {[
                {
                  num: "01",
                  title: "Must be 18+",
                  desc: "Valid ID required at session.",
                },
                {
                  num: "02",
                  title: "Deposit Required",
                  desc: "€100 non-refundable deposit to secure slot.",
                },
                {
                  num: "03",
                  title: "Artistic Style",
                  desc: "I only take projects fitting my noir aesthetic.",
                },
              ].map((item) => (
                <li key={item.num} className="flex gap-stack-md">
                  <span className="font-mono-technical text-mono-technical text-primary">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-body-md leading-tight text-primary">
                      {item.title}
                    </p>
                    <p className="font-mono-technical text-mono-technical text-on-surface-variant">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative hidden overflow-hidden lg:block">
            <Image
              alt="Dark minimalist tattoo studio interior."
              className="aspect-[4/5] w-full object-cover brightness-75 transition-all duration-700 group-hover:brightness-100"
              height={800}
              src={images.booking.studio}
              width={640}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          </div>
        </aside>
      </div>
    </main>
  );
}
