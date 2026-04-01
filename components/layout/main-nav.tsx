"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SITE_GOOGLE_MAPS_URL } from "@/lib/site";

const navItems = [
  { href: "/network", label: "Network" },
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/angel-model", label: "Angel Model" },
  { href: "/investments", label: "Investments" },
  { href: "/impact", label: "Impact" },
];

export function MainNav() {
  const pathname = usePathname();
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? "glass border-b border-border/40 shadow-sm"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <div className="border-b border-primary/30 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 sm:px-8 lg:px-12">
          <p className="hidden text-[10px] font-semibold tracking-[0.18em] uppercase text-primary-foreground/90 lg:block">
            Welcome to Lady Angel Network
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] font-medium tracking-[0.14em] uppercase sm:text-[11px]">
            <a
              href="tel:+233208634000"
              className="inline-flex items-center gap-1.5 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Phone size={12} />
              +233 20 863 4000
            </a>
            <a
              href="mailto:info@ladyangelnetwork.com"
              className="inline-flex items-center gap-1.5 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Mail size={12} />
              info@ladyangelnetwork.com
            </a>
            <a
              href={SITE_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <MapPin size={12} aria-hidden />
              <span className="lg:hidden">Directions</span>
              <span className="hidden lg:inline">East Legon, Accra</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 sm:py-4 lg:px-12">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Logo className="h-8 w-auto min-w-[140px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 border-l border-border/40 pl-4">
            <ThemeToggle />
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
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-4 text-left text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// No content at the bottom

