"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";

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
      "A structured room for Q&A, term sheet discussion, and follow-on diligence, keeping both founders and angels aligned.",
  },
];

export function DealFlowTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/60 bg-background/90"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
            Deal Selection
          </p>
          <h2 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
            A five-stage architecture from application to capital.
          </h2>
        </div>

        <p className="mb-12 max-w-3xl font-serif text-xl leading-relaxed text-foreground/80 sm:text-2xl">
          Every company that reaches a pitch has passed through a disciplined
          pipeline of vetting, coaching, and technical support.{" "}
          <span className="text-primary">Protecting both founders and angels.</span>
        </p>

        <div className="relative">
          <div className="absolute left-[12px] top-0 h-full w-px bg-gradient-to-b from-primary/70 via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-8">
            {STEPS.map((step, index) => {
              const leftAligned = index % 2 === 0;
              const isExpanded = expandedIndex === index;
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
                    className={`flex-1 rounded-3xl border border-border/80 bg-muted/70 backdrop-blur-xl ${
                      leftAligned ? "" : "md:order-1"
                    } ${isExpanded ? "ring-2 ring-primary/30" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="w-full p-5 text-left"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                            {step.phase}
                          </p>
                          <h3 className="mt-1 font-serif text-lg leading-snug text-foreground">
                            {step.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                            {step.summary}
                          </p>
                        </div>
                        <span
                          className="mt-1 shrink-0 rounded-full p-1 text-foreground/60 transition-colors hover:bg-foreground/10 hover:text-foreground"
                          aria-hidden
                        >
                          {isExpanded ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.2, 0.8, 0.2, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-border/60 px-5 pb-5 pt-3 text-xs leading-relaxed text-foreground/60">
                            {step.support}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
            Governance
          </p>
          <Card className="max-w-3xl border-border/80 bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm leading-relaxed text-foreground/70">
                Deals pass through selection committees, valuation reviews, and
                structured documentation before capital is deployed.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Business Application CTA */}
        <div className="mt-16 space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Apply for Investment
            </p>
            <h3 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              Submit your business for consideration.
            </h3>
            <div className="max-w-4xl rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Eligibility criteria
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/75">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Up to USD 150,000 for execution-ready, pre-seed startups.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Startups operating in Ghana that are legally viable.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Open to angel partnership and standard early-stage instruments.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Women-led and women-impact businesses are highly encouraged.
                </li>
              </ul>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-foreground/70">
              If your business meets the criteria, our team will review your
              application and get back to you within two weeks with next steps.
            </p>
          </div>
          <div className="rounded-3xl border border-border/80 bg-muted/70 p-6 backdrop-blur-xl">
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=PLc8utG9UkeB2VqX5zGvpKr_JNEuNNlLiSy9yr1n4M5URTlVVkFNSkFPVTY2NUhBVU1OREY4VzZLOC4u&embed=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary/70 bg-primary px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground shadow-lg shadow-primary/10 transition-transform hover:bg-primary/90 active:scale-95"
            >
              Apply for Capital
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
