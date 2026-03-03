"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/components/providers/theme-provider";

const sections = [
  { id: "network", label: "Network" },
  { id: "about", label: "About" },
  { id: "membership", label: "Membership" },
  { id: "investment-models", label: "Investments" },
  { id: "impact", label: "Impact" },
];

export function MainNav() {
  const { theme } = useTheme();
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

  const handleNavClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="group relative text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 transition-colors hover:text-primary"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-4 border-l border-border/40">
            <ThemeToggle />
            <Button
              className="rounded-full px-6 py-5 text-[10px] font-bold tracking-[0.25em] uppercase shadow-lg shadow-primary/10 transition-transform active:scale-95"
            >
              Apply Now
            </Button>
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
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="rounded-xl px-4 py-4 text-left text-xs font-semibold tracking-[0.2em] uppercase text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <Button className="mt-4 w-full rounded-2xl py-6 text-xs font-bold tracking-[0.2em] uppercase">
                Apply for Membership
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// No content at the bottom

