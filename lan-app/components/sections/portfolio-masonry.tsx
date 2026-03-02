"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

const PORTFOLIO = [
  {
    name: "AuroraPay",
    tag: "Fintech · East Africa",
    story:
      "Digitising informal savings circles into regulated, women-first financial products.",
  },
  {
    name: "Verdant Lace",
    tag: "Sustainable Fashion · West Africa",
    story:
      "Building an ethical supply chain that takes artisans from cottage to global.",
  },
  {
    name: "Helia Health",
    tag: "HealthTech · Pan-Africa",
    story:
      "Remote-first women’s health clinics meeting patients where they already are—on mobile.",
  },
  {
    name: "CivicGrid",
    tag: "GovTech · Southern Africa",
    story:
      "Streamlining permits and licenses for women-led MSMEs locked out of formal systems.",
  },
  {
    name: "Mesa Markets",
    tag: "AgriSupply · East Africa",
    story:
      "Connecting women smallholders to buyers with transparent pricing and logistics.",
  },
];

export function PortfolioMasonry() {
  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/60 bg-background/95"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Portfolio
            </p>
            <h2 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              A magazine of women-led stories, not just logos.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            LAN companies span sectors and geographies—but share a common
            architecture: women designing, owning, and compounding the value
            they create.
          </p>
        </div>

        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {PORTFOLIO.map((company, index) => (
            <article
              key={company.name}
              className="mb-5 break-inside-avoid rounded-3xl border border-border/80 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/10 px-5 py-5 shadow-[0_24px_80px_rgba(15,23,42,0.85)] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">
                Portfolio {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-lg leading-snug text-foreground">
                {company.name}
              </h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-primary/80">
                {company.tag}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {company.story}
              </p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

