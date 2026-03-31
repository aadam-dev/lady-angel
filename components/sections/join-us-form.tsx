"use client";

import { useActionState } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  subscribeToNewsletter,
  type NewsletterState,
} from "@/app/actions/newsletter";

const initialState: NewsletterState = { success: false };

export function JoinUsForm() {
  const [state, formAction, isPending] = useActionState(
    subscribeToNewsletter,
    initialState,
  );

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
          {state.success ? (
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary/80">
                You&apos;re subscribed
              </p>
              <h3 className="font-serif text-xl text-foreground">
                Thank you for joining the Lady Angel Network community.
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                We will be in touch with updates, insights, and opportunities.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
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
              {state.error && (
                <p className="text-[11px] text-red-400" role="alert">
                  {state.error}
                </p>
              )}
              <p className="text-[11px] text-foreground/40">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
