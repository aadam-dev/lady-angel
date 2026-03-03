"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function AboutSection() {
  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/40 bg-background/95"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 rounded-[2rem] border border-border/40 bg-muted/30 p-8 glass">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              About LAN
            </p>
            <h2 className="max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Established in 2015. Built by women, for women-led capital.
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-foreground/70">
              Lady Angel Network was founded on a simple belief: women
              understand their own needs, risk appetite, and the ventures they
              want to back better than any external gatekeeper. We created a
              private architecture where capital, mentorship, and deal flow
              align—so members invest on their terms, with institutional
              discipline and human context.
            </p>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-border/40 bg-muted/30 p-8 glass">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Core beliefs
            </p>
            <ul className="space-y-4 text-sm leading-relaxed text-foreground/75">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                Women are best placed to assess and fund women-led ventures.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                Transparent structures and clear instruments build trust and
                scale.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                Nurture before capital—bootcamps and mentorship de-risk before
                deployment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
