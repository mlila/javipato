import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Curated illustrative blackwork tattoos by Javi Pato — portraits, dark art, and botanical ink.",
};

export default function PortfolioPage() {
  return (
    <main className="pb-section-gap pt-32">
      <PortfolioGallery />
    </main>
  );
}
