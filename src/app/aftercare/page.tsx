import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Aftercare",
  description:
    "Tattoo aftercare guide for clients of Javi Pato — immediate care, long-term preservation, and FAQs.",
};

const immediateCare = [
  {
    icon: "sanitizer",
    title: "01. FIRST WASH",
    text: "Wait 2-4 hours before removing the bandage. Wash gently with fragrance-free, antibacterial soap and lukewarm water.",
  },
  {
    icon: "dry_cleaning",
    title: "02. DRYING",
    text: "Pat dry with a clean, single-use paper towel. Do not use bath towels as they can harbor bacteria and lint.",
  },
  {
    icon: "mixture_med",
    title: "03. OINTMENT",
    text: 'Apply a very thin layer of recommended ointment. The skin should look hydrated, never greasy or "clogged."',
  },
  {
    icon: "bedtime",
    title: "04. SLEEPING",
    text: "Wear loose, clean clothing to bed. If the tattoo sticks to fabric, do not rip it; soak the area in warm water first.",
  },
];

const longTermCare = [
  {
    title: "SUN PROTECTION",
    text: "UV rays are the #1 cause of fading. Always use SPF 50+ on healed tattoos when exposed to direct sunlight.",
    src: images.aftercare.sunProtection,
    alt: "Healed tattoo on forearm showing fine lines and intricate shading.",
  },
  {
    title: "HYDRATION",
    text: "Healthy skin holds ink better. Drink plenty of water and moisturize the area daily with a fragrance-free lotion.",
    src: images.aftercare.hydration,
    alt: "Hand applying moisturizer onto a tattooed shoulder.",
  },
  {
    title: "SUBMERSION",
    text: "Avoid pools, saunas, and oceans for at least 3 weeks. Standing water is a primary source of tattoo infections.",
    src: images.aftercare.submersion,
    alt: "Dimly lit pool with ripples of water.",
  },
];

const faqs = [
  {
    question: "Is this amount of redness normal?",
    answer:
      "Moderate redness and swelling are normal for the first 48-72 hours. If redness spreads significantly or is accompanied by extreme heat and fever, please contact the studio immediately.",
  },
  {
    question: "Can I exercise after my session?",
    answer:
      "Avoid heavy sweating and friction for 5-7 days. Stretching the skin or exposing it to gym bacteria can compromise the healing process and lead to ink fallout.",
  },
  {
    question: "It's itching—what do I do?",
    answer:
      "Do NOT scratch or pick. This is part of the healing process. Gently pat the area or apply a tiny amount of moisturizer to soothe the sensation.",
  },
  {
    question: "When can I get a touch-up?",
    answer:
      "Wait at least 6 weeks for the skin to fully regenerate. Touch-ups requested within 3 months of the original session are typically complimentary, excluding hands and feet.",
  },
];

export default function AftercarePage() {
  return (
    <main className="pb-section-gap pt-32">
      <header className="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop">
        <RevealOnScroll activeClass="active">
          <span className="mb-stack-md block font-label-caps text-label-caps text-on-surface-variant">
            CLIENT GUIDANCE
          </span>
          <h1 className="max-w-4xl font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
            Preserving your investment with technical precision.
          </h1>
        </RevealOnScroll>
      </header>

      <section className="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <RevealOnScroll activeClass="active" className="md:col-span-4">
            <h2 className="mb-stack-md border-l-2 border-primary pl-stack-md font-headline-md text-headline-md">
              Immediate Aftercare
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              The first 48 hours are critical for the longevity and clarity of
              your piece.
            </p>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-stack-lg sm:grid-cols-2 md:col-span-8">
            {immediateCare.map((item, i) => (
              <RevealOnScroll
                key={item.title}
                activeClass="active"
                className="border border-white/5 bg-surface-container p-stack-lg"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <span
                  className="material-symbols-outlined mb-stack-md text-primary"
                  style={{ fontSize: 32 }}
                >
                  {item.icon}
                </span>
                <h3 className="mb-stack-sm font-label-caps text-label-caps text-primary">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.text}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-section-gap bg-surface-container-low py-section-gap">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <RevealOnScroll activeClass="active" className="mb-stack-lg flex flex-col items-end justify-between md:flex-row">
            <div>
              <span className="mb-stack-md block font-label-caps text-label-caps text-on-surface-variant">
                WEEKS 2 - 4 &amp; BEYOND
              </span>
              <h2 className="font-headline-md text-headline-md">Long Term Care</h2>
            </div>
            <p className="mt-stack-md max-w-md font-body-md text-body-md text-on-surface-variant md:mt-0">
              Once the initial peeling is finished, your focus shifts to
              preservation and ink vibrance.
            </p>
          </RevealOnScroll>
          <div className="mt-stack-lg grid grid-cols-1 gap-gutter md:grid-cols-3">
            {longTermCare.map((item, i) => (
              <RevealOnScroll
                key={item.title}
                activeClass="active"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="group relative mb-stack-md h-64 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-black/40 transition-colors group-hover:bg-black/20" />
                  <Image
                    alt={item.alt}
                    className="h-full w-full object-cover grayscale"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={item.src}
                  />
                </div>
                <h4 className="mb-stack-sm font-label-caps text-label-caps text-primary">
                  {item.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.text}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-margin-mobile">
        <RevealOnScroll activeClass="active">
          <h2 className="mb-stack-lg text-center font-headline-md text-headline-md">
            Common Concerns
          </h2>
        </RevealOnScroll>
        <div className="space-y-stack-md">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-white/10 bg-surface-container transition-all duration-300 open:bg-surface-container-high"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-stack-lg">
                <span className="font-label-caps text-label-caps uppercase text-primary">
                  {faq.question}
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-stack-lg pb-stack-lg">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop">
        <RevealOnScroll activeClass="active">
          <div className="flex flex-col items-center bg-primary p-stack-lg text-center md:p-24">
            <h2 className="mb-stack-lg font-display-lg text-display-lg-mobile uppercase text-on-primary md:text-headline-md">
              Unsure about your healing?
            </h2>
            <p className="mb-stack-lg max-w-2xl font-body-lg text-body-lg text-on-primary/80">
              If you experience anything outside of the normal healing process,
              we are here to help. Send us a clear photo of the area.
            </p>
            <div className="flex flex-col gap-stack-md sm:flex-row">
              <a
                className="border border-on-primary bg-on-primary px-stack-lg py-4 font-label-caps text-label-caps text-primary transition-all hover:bg-transparent hover:text-on-primary"
                href="mailto:care@javipato.com"
              >
                Email Studio
              </a>
              <Link
                className="border border-on-primary px-stack-lg py-4 font-label-caps text-label-caps text-on-primary transition-all hover:bg-on-primary hover:text-primary"
                href="/aftercare#faq"
              >
                Emergency Guide
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
