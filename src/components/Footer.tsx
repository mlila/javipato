import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container">
      <div className="mx-auto flex max-w-container-max flex-col items-center gap-stack-lg px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="flex items-center gap-3">
          <Image
            alt="Javi Pato logo"
            className="h-10 w-10 rounded-full object-cover"
            height={40}
            src="/logo.png"
            width={40}
          />
          <h3 className="font-display-lg text-headline-md text-primary">
            JAVI PATO
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-stack-lg">
          <a
            className="font-mono-technical text-mono-technical text-on-surface-variant underline transition-all hover:text-primary active:scale-95"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="font-mono-technical text-mono-technical text-on-surface-variant underline transition-all hover:text-primary active:scale-95"
            href="mailto:hello@javipato.com"
          >
            Email
          </a>
          <Link
            className="font-mono-technical text-mono-technical text-on-surface-variant underline transition-all hover:text-primary active:scale-95"
            href="/privacy"
          >
            Privacy
          </Link>
        </div>
        <p className="mt-8 font-mono-technical text-mono-technical text-on-surface-variant/40">
          © {new Date().getFullYear()} JAVI PATO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
