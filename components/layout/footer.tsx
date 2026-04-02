import Link from "next/link";
import { Logo } from "./logo";
import {
  SITE_GOOGLE_MAPS_URL,
  SITE_OFFICE_ADDRESS,
  SITE_WORKING_HOURS,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/55 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-primary/6 via-primary/2 to-transparent"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Logo className="h-8 w-auto min-w-[140px]" />
            </Link>
            <p className="max-w-md text-base leading-relaxed text-foreground/50">
              A private member network aligning capital, mentorship, and
              deal-flow for women-led ventures across emerging markets.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:info@ladyangelnetwork.com"
                className="block text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                info@ladyangelnetwork.com
              </a>
              <a
                href="tel:+233208634000"
                className="block text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                +233 20 863 4000
              </a>
              <div className="space-y-1">
                <p className="max-w-xs text-sm leading-relaxed text-foreground/60">
                  {SITE_OFFICE_ADDRESS}
                </p>
                <p className="text-[11px] font-medium text-foreground/40 italic">
                  {SITE_WORKING_HOURS}
                </p>
              </div>
              <a
                href={SITE_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
              >
                Get directions (Google Maps)
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Legal
            </h4>
            <nav className="flex flex-col gap-4">
              <Link
                href="/legal/privacy"
                className="text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms"
                className="text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="/legal/disclaimer"
                className="text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                Investment Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/20 pt-10 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30">
            © {new Date().getFullYear()} Lady Angel Network. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30">
              Powered by{" "}
              <a
                href="mailto:aadamsays@gmail.com?subject=Project%20Inquiry%20%7C%20Inspired%20by%20Lady%20Angel%20Network&body=Hi%20ProBuild%20Team%2C%0A%0AI%20visited%20the%20Lady%20Angel%20Network%20platform%20and%20was%20truly%20impressed%20by%20the%20design%20and%20architecture.%20I%20would%20love%20to%20discuss%20a%20potential%20project%20or%20development%20service%20for%20my%20own%20venture.%0A%0AMy%20Interest%3A%20%5BBriefly%20describe%20your%20project%20or%20needs%5D%0A%0ALooking%20forward%20to%20connecting!%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D"
                className="text-foreground/50 underline-offset-2 hover:text-primary hover:underline"
              >
                ProBuild
              </a>
            </span>
            <div className="hidden h-1 w-1 rounded-full bg-primary sm:block" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30">
              High Fidelity Design
            </span>
            <div className="h-1 w-1 rounded-full bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30">
              Premium Architecture
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

