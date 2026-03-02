"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

type Mode = "old" | "lan";

const copyByMode: Record<Mode, { title: string; bullets: string[] }> = {
  old: {
    title: "Old reality of angel investing",
    bullets: [
      "Networks built on gatekeeping, not inclusion.",
      "Opaque deal terms and misaligned incentives.",
      "Women-led founders systematically underfunded.",
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
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background/90 to-background/60"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(circle_at_top,_rgba(180,83,9,0.18),_transparent_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:flex-row lg:items-end">
        <div className="relative z-10 flex-1 space-y-8">
          <p className="text-xs font-medium tracking-[0.32em] uppercase text-foreground/60">
            Build a new model
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Making the{" "}
            <span className="text-primary">existing model obsolete</span>{" "}
            for women-led capital.
          </h1>
          <p className="max-w-xl text-sm text-foreground/70 leading-relaxed">
            Lady Angel Network is a private architecture for women deploying
            personal capital into women-led ventures—combining institutional
            discipline with deeply human deal flow.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="tracking-[0.26em] uppercase"
            >
              Apply for Membership
            </Button>
            <span className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">
              Invitation only · Globally distributed members
            </span>
          </div>
        </div>

        <div className="relative z-10 flex-1">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.26em] text-foreground/60">
              The New Model
            </p>
            <div className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-muted/60 p-1 text-[11px] tracking-[0.2em] uppercase text-foreground/70">
              <button
                type="button"
                onClick={() => setMode("old")}
                className={`rounded-full px-3 py-1 transition-colors ${
                  mode === "old"
                    ? "bg-foreground/10 text-foreground"
                    : "text-foreground/60"
                }`}
              >
                Old Reality
              </button>
              <button
                type="button"
                onClick={() => setMode("lan")}
                className={`rounded-full px-3 py-1 transition-colors ${
                  mode === "lan"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60"
                }`}
              >
                LAN Model
              </button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              className="pointer-events-none absolute -inset-12 rounded-[3rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-background/40 to-background/90 opacity-60"
              style={{ mixBlendMode: "screen" }}
            />
            <div className="relative rounded-[2.4rem] border border-border/80 bg-background/70 p-6 backdrop-blur-2xl shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.26em] ${
                      mode === "old"
                        ? "text-foreground/40"
                        : "text-primary/80"
                    }`}
                  >
                    {mode === "old" ? "Legacy Constraints" : "Architected Flow"}
                  </p>
                  <h2
                    className={`mt-3 max-w-md font-serif text-xl leading-relaxed ${
                      mode === "old"
                        ? "text-foreground/60"
                        : "text-foreground"
                    }`}
                  >
                    {active.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed">
                    {active.bullets.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 ${
                          mode === "old"
                            ? "text-foreground/50"
                            : "text-foreground/80"
                        }`}
                      >
                        <span
                          className={`mt-1 h-1.5 w-1.5 rounded-full ${
                            mode === "old"
                              ? "bg-foreground/30"
                              : "bg-primary/90"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 grid grid-cols-2 gap-4 text-[11px] uppercase tracking-[0.2em] text-foreground/55">
                <div className="space-y-1">
                  <p>Members</p>
                  <p className="text-lg font-semibold tracking-[0.12em] text-primary">
                    120+
                  </p>
                </div>
                <div className="space-y-1">
                  <p>Markets</p>
                  <p className="text-lg font-semibold tracking-[0.12em] text-foreground/80">
                    14
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

