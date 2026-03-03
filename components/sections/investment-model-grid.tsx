"use client";

import { Scale, LineChart, ShieldCheck, Calendar, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const MODELS = [
  {
    name: "Monthly",
    icon: Scale,
    cadence: "12 contributions / year",
    suitedFor: "Emerging angels building discipline and deal exposure.",
    copy: "Smooth, recurring allocations that compound into a diversified portfolio of women-led ventures.",
  },
  {
    name: "Quarterly",
    icon: LineChart,
    cadence: "4 contributions / year",
    suitedFor: "Senior professionals balancing liquidity and momentum.",
    copy: "Aligned with board and reporting cycles for clearer performance narratives and rebalancing.",
  },
  {
    name: "Semi-Annual",
    icon: ShieldCheck,
    cadence: "2 contributions / year",
    suitedFor: "Operators and executives with concentrated capital windows.",
    copy: "Fewer, larger entries into high-conviction deals, backed by LAN due diligence.",
  },
  {
    name: "Annual",
    icon: Calendar,
    cadence: "1 contribution / year",
    suitedFor: "Strategic allocators making one high-conviction commitment per cycle.",
    copy: "Single, focused deployment into a chosen deal with full LAN support and documentation.",
  },
  {
    name: "Bulk / As & When",
    icon: Zap,
    cadence: "Flexible",
    suitedFor: "Experienced investors syndicating tickets across rounds.",
    copy: "Deploy capital tactically into specific opportunities while remaining inside the LAN architecture.",
  },
];

const INSTRUMENTS = [
  {
    name: "Convertible",
    description:
      "Convertible notes or SAFEs with clear conversion triggers, caps, and discount—aligned with standard market terms where possible.",
  },
  {
    name: "Preference shares",
    description:
      "Equity with preferred rights, liquidation preference, and governance provisions documented up front.",
  },
  {
    name: "Straight debt",
    description:
      "Structured debt instruments with defined tenor, interest, and repayment scenarios for later-stage or revenue-backed ventures.",
  },
];

export function InvestmentModelGrid() {
  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/60 bg-background/95"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Investment Architecture
            </p>
            <h2 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              Models that let women invest on their own terms.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            Members commit to investing within a two-year period, choosing a
            schedule that matches their cashflow profile while maintaining
            professional, institutional-grade discipline.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS.slice(0, 3).map((model) => {
            const Icon = model.icon;
            return (
              <Card
                key={model.name}
                className="bg-gradient-to-br from-foreground/[0.04] via-muted/80 to-background"
              >
                <CardHeader className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xs tracking-[0.26em] uppercase text-foreground/70">
                      {model.name} Model
                    </CardTitle>
                    <CardDescription className="mt-1 text-[11px] uppercase tracking-[0.18em] text-foreground/60">
                      {model.cadence}
                    </CardDescription>
                  </div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {model.copy}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-foreground/55">
                    Best for: {model.suitedFor}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {MODELS.slice(3).map((model) => {
            const Icon = model.icon;
            return (
              <Card
                key={model.name}
                className="bg-gradient-to-br from-foreground/[0.04] via-muted/80 to-background"
              >
                <CardHeader className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xs tracking-[0.26em] uppercase text-foreground/70">
                      {model.name} Model
                    </CardTitle>
                    <CardDescription className="mt-1 text-[11px] uppercase tracking-[0.18em] text-foreground/60">
                      {model.cadence}
                    </CardDescription>
                  </div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {model.copy}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-foreground/55">
                    Best for: {model.suitedFor}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
            Instruments
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {INSTRUMENTS.map((inst) => (
              <Card
                key={inst.name}
                className="border-border/80 bg-muted/50"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs tracking-[0.2em] uppercase text-foreground/80">
                    {inst.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {inst.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 text-xs text-foreground/60 md:grid-cols-2">
          <div>
            <p className="font-semibold tracking-[0.22em] uppercase">
              Governance
            </p>
            <p className="mt-2 leading-relaxed">
              Deals pass through selection committees, valuation reviews, and
              structured documentation before capital is deployed.
            </p>
          </div>
          <div>
            <p className="font-semibold tracking-[0.22em] uppercase">
              Member Commitments
            </p>
            <p className="mt-2 leading-relaxed">
              Each member commits to at least one investment within two years,
              and mentors at least one founder within the network.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

