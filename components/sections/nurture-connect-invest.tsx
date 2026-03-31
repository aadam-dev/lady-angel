"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

type Pill = "connect" | "nurture" | "invest";

const config: Record<
  Pill,
  { label: string; heading: string; body: string }
> = {
  nurture: {
    label: "Nurture",
    heading: "Institutional readiness.",
    body: "Members are encouraged to invest personal funds in supporting young entrepreneurial women, in addition to mentoring and coaching.",
  },
  connect: {
    label: "Connect",
    heading: "A Curated Network.",
    body: "Curated connections among investors and entrepreneurs, including mentoring and introductions where founders need support.",
  },
  invest: {
    label: "Invest",
    heading: "Grade Instruments.",
    body: "From convertible notes to preference shares, each instrument is framed with clear scenarios, protections, and upside.",
  },
};

export function NurtureConnectInvest() {
  const [active, setActive] = useState<Pill>("connect");
  const activeConfig = config[active];

  useEffect(() => {
    const cycle: Pill[] = ["connect", "nurture", "invest"];
    const timer = setInterval(() => {
      setActive((current) => {
        const nextIndex = (cycle.indexOf(current) + 1) % cycle.length;
        return cycle[nextIndex];
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollReveal
      as="section"
      className="bg-background py-24 border-b border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 space-y-4 section-heading">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
            Connect · Nurture · Invest
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
              {(["connect", "nurture", "invest"] as Pill[]).map((pill) => (
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

            <div className="relative glass rounded-[2rem] p-8 shadow-xl">
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
                  <p className="text-base leading-relaxed text-foreground/60">
                    {activeConfig.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

