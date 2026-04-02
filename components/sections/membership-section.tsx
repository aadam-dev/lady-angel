"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  const [success, setSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const ticketSize = formData.get("ticketSize") as string;
    const linkedin = formData.get("linkedin") as string;
    const moreInfo = formData.get("moreInfo") as string;

    const subject = encodeURIComponent(`Membership Application - ${name}`);
    const body = encodeURIComponent(
      `Hello Lady Angel Network team,\n\nI would like to apply for membership. Here are my details:\n\nName: ${name}\nEmail: ${email}\nLinkedIn Profile: ${linkedin}\nTicket Size: ${ticketSize}\n\nAdditional Information:\n${moreInfo}\n\nThank you.`
    );

    window.location.href = `mailto:info@ladyangelnetwork.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSuccess(true);
      setIsPending(false);
    }, 800);
  };
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
          <div className="space-y-4 section-heading">
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
          <div className="rounded-3xl border border-border/80 bg-muted/70 p-6 sm:p-8 backdrop-blur-xl">
            {success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="font-serif text-2xl text-foreground">
                  Application Initiated
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-foreground/70">
                  We're redirecting you to your email client with a pre-filled application. Please review and send it to our team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                      Full Name *
                    </label>
                    <Input name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                      Email Address *
                    </label>
                    <Input name="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                      LinkedIn Profile *
                    </label>
                    <Input name="linkedin" required placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                      Expected Ticket Size *
                    </label>
                    <Input name="ticketSize" required placeholder="e.g. $10k - $50k" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                      Why do you want to join? (Optional)
                    </label>
                    <textarea 
                      name="moreInfo" 
                      className="flex h-24 w-full rounded-2xl border border-border/80 bg-background/50 px-4 py-3 text-sm ring-offset-background placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      placeholder="Tell us briefly about your interest in Lady Angel Network..."
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <Button type="submit" size="lg" disabled={isPending} className="w-full sm:w-auto rounded-full px-10">
                    {isPending ? "Preparing..." : "Submit Application"}
                  </Button>
                  <p className="text-[11px] text-foreground/40 text-center sm:text-left">
                    This will securely open your default email client.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
