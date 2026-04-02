"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function JoinUsForm() {
  const [success, setSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    const subject = encodeURIComponent("Newsletter Subscription Request");
    const body = encodeURIComponent(
      `Hello Lady Angel Network team,\n\nPlease add me to your newsletter.\n\nName: ${name}\nEmail: ${email}\n\nThank you.`
    );

    window.location.href = `mailto:info@ladyangelnetwork.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSuccess(true);
      setIsPending(false);
    }, 800);
  };

  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3 section-heading">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Stay Connected
            </p>
            <h2 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              Join the Lady Angel Network newsletter.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            Get updates on deal selection, upcoming bootcamps, portfolio news,
            and insights from across the network.
          </p>
        </div>

        <div className="rounded-3xl border border-border/80 bg-muted/70 p-6 backdrop-blur-xl">
          {success ? (
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary/80">
                You're subscribed
              </p>
              <h3 className="font-serif text-xl text-foreground">
                Thank you for joining the Lady Angel Network community.
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                We're redirecting you to your email client to complete the subscription.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto"
                  >
                    {isPending ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
              </div>
              <p className="text-[11px] text-foreground/40">
                This will prepare an email in your default email client.
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
