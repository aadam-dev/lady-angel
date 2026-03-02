"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

function useAnimatedNumber(target: number) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 1800;
    const initial = 0;

    const animate = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = initial + (target - initial) * eased;
      setDisplay(Math.round(current));
      if (t < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return display;
}

export function ImpactDashboard() {
  const investments = useAnimatedNumber(60);
  const mentorshipHours = useAnimatedNumber(1200);
  const businessesScaled = useAnimatedNumber(40);

  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Impact Dashboard
            </p>
            <h2 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              Where mentorship, capital, and execution meet.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            Since inception, Lady Angel Network has combined personal capital,
            professional expertise, and structured deal flow to move founders
            from idea to investable, scalable businesses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ImpactTile
            label="Total Investments"
            value={investments}
            suffix="+"
            note="Direct and syndicated tickets into women-led ventures."
          />
          <ImpactTile
            label="Mentorship Hours"
            value={mentorshipHours}
            suffix="+"
            note="One-to-one and cohort sessions led by senior professionals."
          />
          <ImpactTile
            label="Businesses Scaled"
            value={businessesScaled}
            suffix="+"
            note="Companies that progressed beyond bootcamp into growth stages."
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

interface ImpactTileProps {
  label: string;
  value: number;
  suffix?: string;
  note: string;
}

function ImpactTile({ label, value, suffix, note }: ImpactTileProps) {
  return (
    <div className="rounded-3xl border border-border/80 bg-muted/70 px-6 py-6 backdrop-blur-xl">
      <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">
        {label}
      </p>
      <motion.p className="mt-3 font-serif text-4xl tracking-tight text-primary">
        {value}
        {suffix}
      </motion.p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{note}</p>
    </div>
  );
}

