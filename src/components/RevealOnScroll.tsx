"use client";

import { useEffect, useRef } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  activeClass?: "visible" | "active";
};

export function RevealOnScroll({
  children,
  className = "",
  style,
  activeClass = "visible",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeClass]);

  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`} style={style}>
      {children}
    </div>
  );
}
