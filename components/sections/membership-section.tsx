"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

const INVITATION_CRITERIA = [
  "Track record or clear intent to deploy personal capital into early-stage ventures.",
  "Alignment with LAN's thesis: women-led businesses across emerging markets.",
  "Willingness to participate in governance, diligence, or mentorship within the network.",
  "Referral or introduction from an existing member or approved partner.",
];

const MEMBER_BENEFITS = [
  "Opportunity to network with fellow women at senior level.",
  "Availability of investment opportunities.",
  "Ability to give back to society through impact investing.",
  "Board seat opportunities.",
  "Investment capacity development.",
  "Build wealth.",
];

export function MembershipSection() {
  const scrollToApply = () => {
    const el = document.getElementById("investor-application");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
              Curated for alignment and impact.
            </h2>
          </div>
          <button
            type="button"
            onClick={scrollToApply}
            className="inline-flex h-11 w-fit shrink-0 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-transform active:scale-95 hover:-translate-y-0.5"
          >
            Apply for Membership
          </button>
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

        <div className="mt-10 space-y-4 rounded-[2rem] border border-border/40 bg-background/60 p-8 glass">
          <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
            Member commitments
          </h3>
          <p className="text-sm leading-relaxed text-foreground/75">
            Each member commits to at least one investment within two years, and
            mentors at least one founder within the network.
          </p>
        </div>

        {/* Investor Application Form */}
        <div id="investor-application" className="mt-16 space-y-6 scroll-mt-24">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Investor Application
            </p>
            <h3 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              Apply to join the Lady Angel Network.
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-foreground/70">
              Share your details and our membership team will review your
              profile against our invitation criteria.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/80 bg-muted/70 p-6 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
              </div>
              <p className="font-serif text-lg text-foreground">
                Investor application form coming soon.
              </p>
              <p className="mt-2 max-w-sm text-sm text-foreground/60">
                In the meantime, reach out to{" "}
                <a href="mailto:info@ladyangelnetwork.com" className="text-primary underline-offset-2 hover:underline">
                  info@ladyangelnetwork.com
                </a>{" "}
                to express your interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
