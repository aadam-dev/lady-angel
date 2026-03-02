"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

const STEPS = [
  {
    name: "Call for Applications",
    phase: "Stage 1",
    summary: "Open invitation for women-led businesses across sectors.",
    support:
      "LAN publishes a structured brief and eligibility criteria, aligning founders on expectations and data required up front.",
  },
  {
    name: "Selection Committee",
    phase: "Stage 2",
    summary: "Screening, vetting, and shortlisting by expert committee.",
    support:
      "Committee members review decks, data rooms, and market context, scoring opportunities using a consistent rubric.",
  },
  {
    name: "One-Month Session",
    phase: "Stage 3",
    summary: "Deep-dive engagement with shortlisted startups.",
    support:
      "Founders work with LAN mentors on strategy, governance, and execution, surfacing risks early and refining the thesis.",
  },
  {
    name: "Weekend Bootcamp",
    phase: "Stage 4",
    summary: "Intensive technical and narrative preparation.",
    support:
      "Operational, financial, and legal mentors refine the data room, valuation logic, and investor story ahead of the pitch.",
  },
  {
    name: "Pitch Session",
    phase: "Stage 5",
    summary: "Formal pitch to the Lady Angels for capital commitments.",
    support:
      "A structured room for Q&A, term sheet discussion, and follow-on diligence—keeping both founders and angels aligned.",
  },
];

export function DealFlowTimeline() {
  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/60 bg-background/90"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Deal Flow
            </p>
            <h2 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              A five-stage architecture from application to capital.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            Every company that reaches a pitch has passed through a disciplined
            pipeline of vetting, coaching, and technical support—protecting both
            founders and angels.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[12px] top-0 h-full w-px bg-gradient-to-b from-primary/70 via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-8">
            {STEPS.map((step, index) => {
              const leftAligned = index % 2 === 0;
              return (
                <div
                  key={step.name}
                  className="relative flex items-stretch gap-6 md:gap-10"
                >
                  <div
                    className={`hidden flex-1 md:block ${
                      leftAligned ? "text-right" : "order-2"
                    }`}
                  />
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/60 bg-background">
                      <span className="text-[10px] font-semibold text-primary">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`flex-1 rounded-3xl border border-border/80 bg-muted/70 p-5 backdrop-blur-xl ${
                      leftAligned ? "" : "md:order-1"
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                      {step.phase}
                    </p>
                    <h3 className="mt-1 font-serif text-lg leading-snug text-foreground">
                      {step.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                      {step.summary}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-foreground/60">
                      {step.support}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

