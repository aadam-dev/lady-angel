import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Logo className="h-8 w-auto min-w-[140px]" />
            </Link>
            <p className="max-w-md text-base leading-relaxed text-foreground/50">
              A private member network aligning capital, mentorship, and
              deal-flow for women-led ventures across emerging and established
              markets.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@ladyangel.network"
                className="block text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                hello@ladyangel.network
              </a>
              <a
                href="tel:0208634000"
                className="block text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                +233 20 863 4000
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
                href="mailto:aadamsays@gmail.com?subject=Build%20or%20project%20enquiry%20(via%20LAN%20website)&body=Hi%2C%0A%0AI%20saw%20ProBuild%20on%20the%20Lady%20Angel%20Network%20site%20and%20would%20like%20to%20discuss%20a%20possible%20build%20or%20project.%0A%0A[Describe your project or request here]%0A%0A"
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

