"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email."),
  location: z.string().min(2, "Location is required."),
  profession: z.string().min(2, "Profession is required."),
  capacity: z.string().min(1, "Select a range."),
  experience: z.string().min(1, "Tell us about your experience."),
  mentoringInterest: z.boolean(),
  mentoringFocus: z.string().optional(),
  mentoringHours: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const capacityOptions = [
  "USD 10k – 50k",
  "USD 50k – 250k",
  "USD 250k+",
];

const experienceOptions = [
  "New to investing",
  "Some angel experience",
  "Institutional / fund experience",
];

export function JoinUsForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      mentoringInterest: true,
    },
  });

  const onNext = async () => {
    const fieldsByStep: (keyof FormValues)[][] = [
      ["name", "email", "location", "profession"],
      ["capacity", "experience"],
      ["mentoringInterest", "mentoringFocus", "mentoringHours"],
    ];
    const currentFields = fieldsByStep[step];
    const valid = await form.trigger(currentFields);
    if (!valid) return;
    if (step < 2) setStep(step + 1);
  };

  const onBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const onSubmit = async (values: FormValues) => {
    const valid = await form.trigger();
    if (!valid) return;
    // Placeholder: integrate with backend or API later.
    // For now we simply mark as submitted.
    setSubmitted(true);
  };

  const progress = ((step + 1) / 3) * 100;

  return (
    <ScrollReveal
      as="section"
      className="border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-foreground/60">
              Join Us
            </p>
            <h2 className="max-w-xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
              A private, invitation-only network of women investors.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            Share a few details about your professional journey, investment
            capacity, and mentoring interests. LAN membership requires an
            investment commitment within two years and a willingness to
            support young women-led businesses.
          </p>
        </div>

        <div className="rounded-3xl border border-border/80 bg-muted/70 p-6 backdrop-blur-xl">
          {submitted ? (
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary/80">
                Application received
              </p>
              <h3 className="font-serif text-xl text-foreground">
                Thank you for reaching out to Lady Angel Network.
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                A member of the LAN team will review your profile against our
                invitation criteria. If there is alignment, we will contact you
                with next steps and timelines.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                  <span>Step {step + 1} of 3</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {step === 0 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label="Full Name"
                      description="The name you use in professional contexts."
                      error={form.formState.errors.name?.message}
                    >
                      <Input
                        {...form.register("name")}
                        autoComplete="name"
                      />
                    </Field>
                    <Field
                      label="Email"
                      description="We’ll only use this to contact you about LAN."
                      error={form.formState.errors.email?.message}
                    >
                      <Input
                        {...form.register("email")}
                        type="email"
                        autoComplete="email"
                      />
                    </Field>
                    <Field
                      label="Location"
                      description="City and country where you are primarily based."
                      error={form.formState.errors.location?.message}
                    >
                      <Input {...form.register("location")} />
                    </Field>
                    <Field
                      label="Profession / Role"
                      description="Your current primary professional focus."
                      error={form.formState.errors.profession?.message}
                    >
                      <Input {...form.register("profession")} />
                    </Field>
                  </div>
                )}

                {step === 1 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label="Indicative Investment Capacity"
                      description="Non-binding range for your typical annual allocation."
                      error={form.formState.errors.capacity?.message}
                    >
                      <select
                        {...form.register("capacity")}
                        className="h-11 w-full rounded-full border border-border/80 bg-background/60 px-4 text-sm text-foreground outline-none focus:border-primary/80 focus-visible:ring-2 focus-visible:ring-primary/60"
                      >
                        <option value="">Select a range</option>
                        {capacityOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field
                      label="Investment Experience"
                      description="How would you describe your investing background?"
                      error={form.formState.errors.experience?.message}
                    >
                      <select
                        {...form.register("experience")}
                        className="h-11 w-full rounded-full border border-border/80 bg-background/60 px-4 text-sm text-foreground outline-none focus:border-primary/80 focus-visible:ring-2 focus-visible:ring-primary/60"
                      >
                        <option value="">Select one</option>
                        {experienceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label="Mentoring Interest"
                      description="LAN members mentor at least one founder."
                      error={form.formState.errors.mentoringInterest?.message}
                    >
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            form.setValue(
                              "mentoringInterest",
                              !form.getValues("mentoringInterest"),
                            )
                          }
                          className={`inline-flex h-6 w-11 items-center rounded-full border border-border/80 bg-background/70 px-1 transition ${
                            form.getValues("mentoringInterest")
                              ? "border-primary/80 bg-primary/20"
                              : ""
                          }`}
                        >
                          <span
                            className={`h-4 w-4 rounded-full bg-foreground transition-transform ${
                              form.getValues("mentoringInterest")
                                ? "translate-x-4"
                                : ""
                            }`}
                          />
                        </button>
                        <span className="text-xs text-foreground/70">
                          {form.getValues("mentoringInterest")
                            ? "Yes, I’m interested in mentoring."
                            : "Not at this time."}
                        </span>
                      </div>
                    </Field>
                    <Field
                      label="Mentoring Focus (optional)"
                      description="Domains where you are best placed to support founders."
                      error={form.formState.errors.mentoringFocus?.message}
                    >
                      <Input
                        {...form.register("mentoringFocus")}
                        placeholder="e.g. Product, strategy, fundraising, governance"
                      />
                    </Field>
                    <Field
                      label="Approximate Hours / Month (optional)"
                      description="How many hours could you reasonably commit?"
                      error={form.formState.errors.mentoringHours?.message}
                    >
                      <Input
                        {...form.register("mentoringHours")}
                        placeholder="e.g. 2–4 hours"
                      />
                    </Field>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    disabled={step === 0}
                    onClick={onBack}
                  >
                    Back
                  </Button>
                  {step < 2 ? (
                    <Button type="button" size="sm" onClick={onNext}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" size="sm">
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

interface FieldProps {
  label: string;
  description?: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, description, error, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
          {label}
        </label>
        {description && (
          <p className="hidden text-[11px] text-foreground/50 md:block">
            {description}
          </p>
        )}
      </div>
      {children}
      {error && (
        <p className="text-[11px] text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

