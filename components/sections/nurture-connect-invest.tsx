"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type Pill = "nurture" | "connect" | "invest";

const config: Record<
  Pill,
  { label: string; heading: string; body: string; stats: string[] }
> = {
  nurture: {
    label: "Nurture",
    heading: "Institutional readiness.",
    body: "Structured bootcamps, specialist mentors, and deep-dive clinics that de-risk execution before capital is deployed.",
    stats: ["6+ Cohorts", "1,200+ Mentorship Hours", "Expert GTM/Product Support"],
  },
  connect: {
    label: "Connect",
    heading: "A Curated Network.",
    body: "Curated introductions across angels, operators, and fund managers who share a thesis on women-led value creation.",
    stats: ["< 20% Acceptance", "4 Global Chapters", "Strategic Deal Flow"],
  },
  invest: {
    label: "Invest",
    heading: "Grade Instruments.",
    body: "From convertible notes to preference shares, each instrument is framed with clear scenarios, protections, and upside.",
    stats: ["Seed to Series B", "10k – 250k+ Tickets", "Transparent Terms"],
  },
};

export function NurtureConnectInvest() {
  const [active, setActive] = useState<Pill>("nurture");
  const activeConfig = config[active];

  return (
    <ScrollReveal
      as="section"
      className="bg-background py-24 border-b border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 space-y-4">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
            Nurture · Connect · Invest
          </p>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            The operating system behind <br />
            every <span className="text-primary italic">LAN investment</span>.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
          {/* Image Side */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-border/40 shadow-xl lg:aspect-[16/10]">
              <Image
                src="/networking.png"
                alt="Business networking events"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 lg:col-span-2">
            <div className="inline-flex rounded-full bg-muted/50 p-1.5 glass">
              {(["nurture", "connect", "invest"] as Pill[]).map((pill) => (
                <button
                  key={pill}
                  onClick={() => setActive(pill)}
                  className={`rounded-full px-6 py-2 text-[10px] font-bold tracking-[0.15em] uppercase transition-all ${active === pill
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-foreground/40 hover:text-foreground/60"
                    }`}
                >
                  {config[pill].label}
                </button>
              ))}
            </div>

            <div className="relative min-h-[300px] glass rounded-[2rem] p-8 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mb-2 text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                    {config[active].label} Strategy
                  </p>
                  <h3 className="mb-4 font-serif text-3xl text-foreground">
                    {activeConfig.heading}
                  </h3>
                  <p className="mb-8 text-base leading-relaxed text-foreground/60">
                    {activeConfig.body}
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {activeConfig.stats.map((stat, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-[10px] font-bold tracking-wider text-foreground/30 uppercase">
                          Metric {i + 1}
                        </p>
                        <p className="text-sm font-semibold text-foreground/80">
                          {stat}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

