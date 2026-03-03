"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

const INVITATION_CRITERIA = [
  "Track record or clear intent to deploy personal capital into early-stage ventures.",
  "Alignment with LAN’s thesis: women-led businesses across emerging and established markets.",
  "Willingness to participate in governance, diligence, or mentorship within the network.",
  "Referral or introduction from an existing member or approved partner.",
];

const MEMBER_BENEFITS = [
  "Access to vetted, women-led deal flow from application through to pitch.",
  "Structured investment models (monthly, quarterly, semi-annual, annual, bulk) to match your cadence.",
  "Participation in bootcamps, clinics, and mentorship—before and alongside capital.",
  "Syndicated access to convertible debt, preference shares, and straight debt instruments.",
  "Governance and selection committee involvement, with transparent terms and documentation.",
  "Global network of aligned angels, operators, and fund managers.",
];

export function MembershipSection() {
  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/40 bg-muted/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Membership
            </p>
            <h2 className="max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Invitation-only. Curated for alignment and impact.
            </h2>
          </div>
          <Button className="w-fit shrink-0" size="lg">
            Apply for Membership
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-[2rem] border border-border/40 bg-background/60 p-8 glass">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Who we invite
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-foreground/75">
              {INVITATION_CRITERIA.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-border/40 bg-background/60 p-8 glass">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
              Member benefits
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-foreground/75">
              {MEMBER_BENEFITS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
