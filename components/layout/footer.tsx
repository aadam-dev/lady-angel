import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-foreground/60">
            Lady Angel Network
          </p>
          <p className="max-w-md text-sm text-foreground/60 leading-relaxed">
            A private member network aligning capital, mentorship, and
            deal-flow for women-led ventures across emerging and established
            markets.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-xs text-foreground/70 sm:flex-row sm:items-center sm:gap-8">
          <nav className="flex flex-wrap gap-4">
            <Link
              href="/legal/privacy"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/disclaimer"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Investment Disclaimer
            </Link>
          </nav>

          <p className="text-[10px] uppercase tracking-[0.32em] text-foreground/50 text-right">
            © 2024 Lady Angel Network. All rights reserved. | Powered by
            {" "}
            [Name/Agency]
          </p>
        </div>
      </div>
    </footer>
  );
}

