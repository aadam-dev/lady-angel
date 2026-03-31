"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";

const CORE_BELIEFS = [
  "Women understand their needs.",
  "Women can nurture, connect, and invest in the next generation of women.",
  "Women can network and build themselves.",
  "Women can create investment opportunities for themselves.",
  "Women can invest for a greater impact.",
];

export function AboutSection() {
  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/40 bg-background/95"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        {/* Intro */}
        <div className="space-y-6 section-heading">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">About Lady Angel Network (LAN)</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Building a new model for women-led investment and impact.
          </h1>
          <p className="max-w-4xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Established in 2015, the Lady Angel Network started as an informal
            network of women professionals coming together to identify and
            support young women entrepreneurs. It was officially registered in
            2018.
          </p>
          <p className="max-w-4xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            The network is a network of professional women devoted to supporting
            women-led businesses with both funds and technical support. Members
            are encouraged to invest personal funds into supporting young
            entrepreneurial women, in addition to mentoring and coaching.
          </p>
        </div>

        {/* Guiding principle */}
        <div className="mt-14 rounded-3xl border border-border/80 bg-muted/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
            Guiding Principle
          </p>
          <blockquote className="mt-4 border-l-2 border-primary/70 pl-5">
            <p className="font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              You never change things by fighting the existing reality. To
              change something, build a new model that makes the existing model
              obsolete.
            </p>
            <cite className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.2em] not-italic text-foreground/55">
              R. Buckminster Fuller
            </cite>
          </blockquote>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-foreground/70">
            So we are building a new model by investing in women-led businesses
            through women-led investors.
          </p>
        </div>

        {/* Core beliefs */}
        <div className="mt-16 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
            We do so on the following beliefs:
          </p>
          <Card className="border-border/80 bg-muted/50">
            <CardContent className="pt-6">
              <ul className="space-y-4 text-sm leading-relaxed text-foreground/75">
                {CORE_BELIEFS.map((belief) => (
                  <li key={belief} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                    {belief}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Closing */}
        <div className="mt-14 space-y-3">
          <p className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
            Join us to make the impact the world needs.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/55">
            Lady Angel Network · Connect. Nurture. Invest.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
