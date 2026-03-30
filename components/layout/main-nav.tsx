"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const sections = [
  { id: "network", label: "Network" },
  { id: "about", label: "About" },
  { id: "membership", label: "Membership" },
  { id: "investment-models", label: "Investments" },
  { id: "deal-selection", label: "For Businesses" },
  { id: "impact", label: "Impact" },
];

export function MainNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** On the home page, smooth-scroll in place. Else navigate to `/#id` so legal routes work. */
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    setOpen(false);
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? "glass border-b border-border/40 py-3 shadow-sm"
        : "border-b border-transparent bg-transparent py-5"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Logo className="h-8 w-auto min-w-[140px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8">
            {sections.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleSectionClick(e, item.id)}
                className="group relative text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 transition-colors hover:text-primary"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-4 border-l border-border/40">
            <ThemeToggle />
            <Link
              href="/#investor-application"
              onClick={(e) => handleSectionClick(e, "investor-application")}
              className="inline-flex items-center justify-center rounded-full border border-primary/70 bg-primary px-6 py-5 text-[10px] font-bold tracking-[0.25em] uppercase text-primary-foreground shadow-lg shadow-primary/10 transition-transform hover:bg-primary/90 active:scale-95"
            >
              Apply Now
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 text-foreground transition-colors hover:bg-muted"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/40 bg-background md:hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {sections.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleSectionClick(e, item.id)}
                  className="rounded-xl px-4 py-4 text-left text-xs font-semibold tracking-[0.2em] uppercase text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#investor-application"
                onClick={(e) => handleSectionClick(e, "investor-application")}
                className="mt-4 flex w-full items-center justify-center rounded-2xl border border-primary/70 bg-primary py-6 text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground shadow-lg shadow-primary/10 transition-transform hover:bg-primary/90 active:scale-95"
              >
                Apply for Membership
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// No content at the bottom

