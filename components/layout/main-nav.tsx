"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "network", label: "The Network" },
  { id: "investment-models", label: "Investment Models" },
  { id: "deal-flow", label: "Deal Flow" },
  { id: "impact", label: "Impact" },
];

export function MainNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-border/80 bg-background/95 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-background/80 via-background/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-xs font-semibold tracking-[0.32em] uppercase text-foreground/60">
            Lady
          </span>
          <span className="font-serif text-lg tracking-[0.18em] uppercase text-foreground">
            Angel Network
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8 text-xs font-medium tracking-[0.18em] uppercase text-foreground/70">
            {sections.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="relative pb-1 transition-colors hover:text-foreground"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-primary/80 transition-transform duration-200 group-hover:scale-x-100" />
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="tracking-[0.22em] uppercase"
          >
            Apply for Membership
          </Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Button
            variant="outline"
            size="sm"
            className="tracking-[0.2em] uppercase"
          >
            Apply
          </Button>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/60 text-foreground hover:bg-background"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/98 px-4 pb-6 pt-3 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {sections.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="w-full rounded-2xl border border-border/70 bg-muted/40 px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 hover:bg-muted/70"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

