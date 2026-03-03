"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

type Mode = "old" | "lan";

const copyByMode: Record<Mode, { title: string; bullets: string[] }> = {
  old: {
    title: "The Legacy Constraints",
    bullets: [
      "Fragmented networks based on gatekeeping.",
      "Opaque terms and misaligned incentives.",
      "systemic underfunding of women-led ventures.",
    ],
  },
  lan: {
    title: "The Lady Angel Network model",
    bullets: [
      "Invitation-only network of aligned women investors.",
      "Structured, transparent investment models and governance.",
      "Bootcamps, mentorship, and capital in a single architecture.",
    ],
  },
};

export function HeroFuller() {
  const [mode, setMode] = useState<Mode>("lan");
  const active = copyByMode[mode];

  return (
    <ScrollReveal
      as="section"
      className="relative min-h-[90vh] overflow-hidden bg-background pt-32 pb-24"
    >
      {/* Background Accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.08),_transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content Side */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Architecting the Future
            </div>

            <div className="space-y-6">
              <blockquote className="border-l-2 border-primary/60 pl-5">
                <p className="font-serif text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  You never change things by fighting the existing reality. To
                  change something, build a new model that makes the existing
                  model obsolete.
                </p>
                <cite className="mt-2 block text-[10px] font-medium tracking-[0.2em] uppercase not-italic text-foreground/50">
                  — R. Buckminster Fuller
                </cite>
              </blockquote>
              <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-foreground sm:text-6xl xl:text-7xl">
                Making the <br />
                <span className="text-primary italic">Existing Model</span> <br />
                Obsolete for women-led capital.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-foreground/60">
                Lady Angel Network is a private architecture for women deploying
                personal capital into women-led ventures—combining institutional
                discipline with deeply human deal flow.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button
                size="lg"
                className="rounded-full px-10 py-7 text-xs font-bold tracking-[0.2em] uppercase shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                Apply for Membership
              </Button>
              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-10 w-10 rounded-full border-2 border-background bg-muted" />
                ))}
              </div>
              <p className="text-[11px] font-medium tracking-wide text-foreground/40 italic">
                Join 120+ aligned investors
              </p>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border/40 shadow-2xl">
              <Image
                src="/hero-business.png"
                alt="Women in business collaborating"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Glass Card */}
              <div className="absolute bottom-8 left-8 right-8 glass rounded-3xl p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                    Platform Evolution
                  </span>
                  <div className="flex gap-1 rounded-full bg-foreground/5 p-1">
                    <button
                      onClick={() => setMode("old")}
                      className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-wider uppercase transition-colors ${mode === "old" ? "bg-foreground text-background" : "text-foreground/40"
                        }`}
                    >
                      Legacy
                    </button>
                    <button
                      onClick={() => setMode("lan")}
                      className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-wider uppercase transition-colors ${mode === "lan" ? "bg-primary text-white" : "text-foreground/40"
                        }`}
                    >
                      LAN
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="mb-4 font-serif text-xl text-foreground">
                      {active.title}
                    </h3>
                    <ul className="space-y-3">
                      {active.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

