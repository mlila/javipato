"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#about", label: "About" },
  { href: "/aftercare", label: "Aftercare" },
];

function NavLink({
  href,
  label,
  active,
  mobile = false,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const base =
    "font-label-caps text-label-caps transition-colors duration-150";
  const activeClass = active
    ? "text-primary border-b border-primary pb-1"
    : "text-on-surface-variant hover:text-primary";

  if (mobile) {
    return (
      <Link
        href={href}
        className={`${base} ${activeClass} py-2`}
        onClick={onNavigate}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link href={href} className={`${base} ${activeClass}`}>
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/portfolio") return pathname === "/portfolio";
    if (href === "/aftercare") return pathname === "/aftercare";
    if (href === "/#about") return pathname === "/";
    return false;
  };

  const isBookActive = pathname === "/book";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
        <Link
          href="/"
          className="font-display-lg text-headline-sm tracking-tighter text-primary"
        >
          JAVI PATO
        </Link>

        <div className="hidden items-center gap-stack-lg md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={isActive(link.href)}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/book"
            className={`hidden bg-primary px-6 py-3 font-label-caps text-label-caps text-on-primary transition-all hover:opacity-90 active:scale-95 md:inline-block ${
              isBookActive ? "ring-1 ring-white/20" : ""
            }`}
          >
            Book Now
          </Link>

          <button
            type="button"
            className="text-primary md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-background px-margin-mobile py-stack-lg md:hidden">
          <div className="flex flex-col gap-stack-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(link.href)}
                mobile
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
            <Link
              href="/book"
              className="mt-2 bg-primary px-6 py-3 text-center font-label-caps text-label-caps text-on-primary"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
