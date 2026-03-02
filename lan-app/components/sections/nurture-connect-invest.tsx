"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type Pill = "nurture" | "connect" | "invest";

const config: Record<
  Pill,
  { label: string; heading: string; body: string; stats: string[] }
> = {
  nurture: {
    label: "Nurture",
    heading: "Designing founders for institutional readiness.",
    body: "Structured bootcamps, specialist mentors, and deep-dive clinics that de-risk execution before capital is deployed.",
    stats: ["Bootcamp cohorts: 6+", "Mentorship hours: 1,200+", "Expert domains: Product, GTM, Governance"],
  },
  connect: {
    label: "Connect",
    heading: "An invitation-only network, not a mailing list.",
    body: "Curated introductions across angels, operators, and fund managers who share a thesis on women-led value creation.",
    stats: ["Acceptance rate: < 20%", "Global chapters: 4", "Strategic intros per deal: 3–5"],
  },
  invest: {
    label: "Invest",
    heading: "Institutional-grade instruments with human context.",
    body: "From convertible notes to preference shares, each instrument is framed with clear scenarios, protections, and upside.",
    stats: ["Instruments: Convertible Debt, Preference Shares", "Ticket sizes: 10k – 250k+", "Syndicated rounds: Seed to Series B"],
  },
};

export function NurtureConnectInvest() {
  const [active, setActive] = useState<Pill>("nurture");
  const activeConfig = config[active];

  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/60 bg-background/90"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Nurture · Connect · Invest
            </p>
            <h2 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              The operating system behind every LAN investment.
            </h2>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <div className="inline-flex self-start rounded-full border border-border/80 bg-muted/60 p-1 text-[11px] uppercase tracking-[0.22em] text-foreground/70">
              {(["nurture", "connect", "invest"] as Pill[]).map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActive(pill)}
                  className={`rounded-full px-4 py-1.5 transition-colors ${
                    active === pill
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {config[pill].label}
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-muted/70 p-6 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
                >
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-primary/80">
                    {config[active].label}
                  </p>
                  <h3 className="mb-3 font-serif text-lg leading-snug text-foreground">
                    {activeConfig.heading}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                    {activeConfig.body}
                  </p>
                  <dl className="grid gap-3 text-[11px] uppercase tracking-[0.18em] text-foreground/60 sm:grid-cols-3">
                    {activeConfig.stats.map((stat) => (
                      <div key={stat} className="space-y-1">
                        <dt className="sr-only">Stat</dt>
                        <dd>{stat}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

