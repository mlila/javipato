"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/images";

const filters = ["All", "Portraits", "Illustrative", "Nature", "Dark Art"];

const galleryItems = [
  {
    title: "COR VITAE",
    meta: "2023 • 12 HOURS",
    src: images.portfolio.corVitae,
    category: "Illustrative",
    alt: "Surreal anatomical heart entwined with thorny obsidian roses.",
  },
  {
    title: "MEMENTO MORI",
    meta: "2024 • 8 HOURS",
    src: images.portfolio.mementoMori,
    category: "Dark Art",
    alt: "Crow perched on a human skull with celestial patterns.",
  },
  {
    title: "SANTISSIMA",
    meta: "2023 • 15 HOURS",
    src: images.portfolio.santissima,
    category: "Portraits",
    alt: "Dark neo-traditional female portrait with crown of thorns.",
  },
  {
    title: "WILTING LILIES",
    meta: "2022 • 6 HOURS",
    src: images.portfolio.wiltingLilies,
    category: "Nature",
    alt: "Black ink botanical tattoo of wilting lilies and ferns.",
  },
  {
    title: "OUROBOROS",
    meta: "2024 • 10 HOURS",
    src: images.portfolio.ouroboros,
    category: "Dark Art",
    alt: "Cosmic serpent devouring its own tail with stippled shading.",
  },
  {
    title: "OLYMPIAN",
    meta: "2023 • 18 HOURS",
    src: images.portfolio.olympian,
    category: "Portraits",
    alt: "Greek god portrait with marble-like skin texture.",
  },
];

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <header className="mx-auto mb-16 max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col justify-between gap-stack-lg md:flex-row md:items-end">
          <div>
            <h1 className="mb-4 font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
              Portfolio
            </h1>
            <p className="max-w-xl font-body-lg text-on-surface-variant">
              Curated works of narrative ink. Focused on high-contrast
              illustrative compositions and dark botanical art.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 border-b border-white/5 pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-1 pb-2 font-label-caps text-label-caps transition-colors ${
                  activeFilter === filter
                    ? "border-b-2 border-primary text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="masonry-grid">
          {filtered.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="masonry-item group relative cursor-crosshair overflow-hidden bg-surface-container opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <Image
                alt={item.alt}
                className="w-full border border-white/5 brightness-90 grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:border-white/20"
                height={900}
                src={item.src}
                width={700}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="mb-1 font-label-caps text-label-caps text-primary">
                  {item.title}
                </p>
                <p className="font-mono-technical text-mono-technical text-on-surface-variant">
                  {item.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto flex max-w-container-max flex-col items-center bg-surface-container px-12 py-24 text-center">
          <span className="mb-6 font-label-caps text-label-caps text-on-surface-variant">
            NOW BOOKING FOR AUTUMN 2024
          </span>
          <h2 className="mb-12 max-w-4xl font-display-lg text-headline-md text-primary md:text-display-lg">
            Own a Piece of Permanent Narrative
          </h2>
          <Link
            className="bg-primary px-12 py-5 font-label-caps text-label-caps text-base tracking-[0.2em] text-background transition-colors hover:bg-on-surface active:scale-95"
            href="/book"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-[60]">
        <Link
          className="group flex items-center gap-3 bg-primary px-6 py-4 text-background shadow-2xl transition-all active:scale-95"
          href="/book"
        >
          <span className="material-symbols-outlined transition-transform group-hover:rotate-12">
            event
          </span>
          <span className="font-label-caps text-label-caps">BOOK CONSULTATION</span>
        </Link>
      </div>
    </>
  );
}
