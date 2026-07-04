import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { images } from "@/lib/images";

const latestWorks = [
  {
    title: "I. Nocturnal Flora",
    src: images.portfolio.nocturnalFlora,
    aspect: "aspect-[3/4]",
    offset: "",
    alt: "Detailed blackwork tattoo of a skeletal hand holding a wilted rose.",
  },
  {
    title: "II. Geometric Void",
    src: images.portfolio.geometricVoid,
    aspect: "aspect-[4/5]",
    offset: "lg:mt-12",
    alt: "Abstract geometric tattoo design featuring heavy black fills and negative space alchemy symbols.",
  },
  {
    title: "III. Corvus Monolith",
    src: images.portfolio.corvusMonolith,
    aspect: "aspect-[3/4]",
    offset: "",
    alt: "Intricate black and grey tattoo of a raven in mid-flight.",
  },
  {
    title: "IV. Classical Ruin",
    src: images.portfolio.classicalRuin,
    aspect: "aspect-[4/5]",
    offset: "lg:mt-24",
    alt: "Large scale illustrative leg tattoo of a classical bust draped in organic creeping vines.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-black/60" />
          <Image
            alt="Intricate illustrative blackwork tattoo with dark botanical elements and fine-line geometry."
            className="h-full w-full object-cover brightness-75 grayscale"
            fill
            priority
            sizes="100vw"
            src={images.hero}
          />
        </div>
        <div className="relative z-20 px-margin-mobile text-center">
          <h2 className="mb-6 block font-label-caps text-label-caps tracking-[0.4em] text-primary">
            ILLUSTRATIVE BLACKWORK
          </h2>
          <h1 className="mb-12 font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
            JAVI PATO
          </h1>
          <div className="flex flex-col justify-center gap-stack-md md:flex-row">
            <Link
              className="border border-primary bg-primary px-10 py-5 font-label-caps text-label-caps text-on-primary transition-all hover:opacity-90"
              href="/book"
            >
              Book Your Session
            </Link>
            <Link
              className="border border-white/30 bg-transparent px-10 py-5 font-label-caps text-label-caps text-primary transition-all hover:bg-white/10"
              href="/portfolio"
            >
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-3xl text-primary/50">
            keyboard_double_arrow_down
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="mb-2 block font-label-caps text-label-caps text-on-surface-variant">
              SELECTED PORTFOLIO
            </span>
            <h2 className="font-headline-md text-primary">Latest Works</h2>
          </div>
          <Link
            className="hidden border-b border-primary/30 pb-1 font-label-caps text-label-caps text-primary transition-all hover:border-primary md:block"
            href="/portfolio"
          >
            VIEW ALL COLLECTIONS
          </Link>
        </div>
        <div className="grid grid-cols-1 items-start gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {latestWorks.map((work) => (
            <div
              key={work.title}
              className={`masonry-item group cursor-crosshair ${work.offset}`}
            >
              <div
                className={`mb-4 overflow-hidden border border-white/5 ${work.aspect} transition-all group-hover:border-white/20`}
              >
                <Image
                  alt={work.alt}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  height={800}
                  src={work.src}
                  width={600}
                />
              </div>
              <p className="font-mono-technical text-mono-technical uppercase text-on-surface-variant">
                {work.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden bg-surface-container py-section-gap"
      >
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-stack-lg px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 mx-auto aspect-square w-full max-w-md">
              <Image
                alt="Professional portrait of Javi Pato in a dark tattoo studio."
                className="h-full w-full border border-white/10 object-cover grayscale"
                height={600}
                src={images.artist}
                width={600}
              />
            </div>
            <div className="absolute -left-10 -top-10 hidden h-40 w-40 border border-white/5 lg:block" />
          </div>
          <RevealOnScroll className="order-1 lg:order-2">
            <span className="mb-6 block font-label-caps text-label-caps tracking-widest text-primary">
              ARTIST STATEMENT
            </span>
            <h2 className="mb-8 font-display-lg text-headline-md text-primary">
              The Alchemy of Ink
            </h2>
            <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              I believe a tattoo is more than just pigment on skin; it is a
              permanent dialogue between the artist and the body&apos;s natural
              architecture. My work explores the intersection of dark
              illustrative themes and technical precision, favoring deep blacks
              and intentional stippling.
            </p>
            <p className="mb-12 border-l border-primary/20 pl-6 font-body-lg text-body-lg italic text-on-surface-variant">
              &ldquo;Every line is a commitment. Every shade is a memory.&rdquo;
            </p>
            <div className="flex items-center gap-stack-md">
              <span className="font-mono-technical text-mono-technical text-primary">
                SPECIALTIES:
              </span>
              <div className="flex flex-wrap gap-2">
                {["Illustrative", "Blackwork", "Dark Arts"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 px-3 py-1 font-label-caps text-[10px] uppercase text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-y border-white/5 px-margin-mobile py-section-gap text-center md:px-margin-desktop">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mb-16 max-w-2xl font-body-lg text-on-surface-variant">
            Currently accepting bookings for large-scale illustrative projects
            and flash designs. Limited sessions available each month.
          </p>
          <div className="group inline-block">
            <Link
              className="relative overflow-hidden bg-primary px-16 py-6 text-lg font-label-caps text-label-caps text-on-primary transition-all hover:bg-white/90 active:scale-95"
              href="/book"
            >
              BOOK YOUR SESSION
            </Link>
            <div className="mt-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
