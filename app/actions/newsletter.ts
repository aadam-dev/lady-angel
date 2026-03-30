"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Please enter a valid email address."),
});

export type NewsletterState = {
  success: boolean;
  error?: string;
};

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message };
  }

  const { name, email } = parsed.data;

  // If a RESEND_API_KEY and RESEND_AUDIENCE_ID are configured, forward to Resend.
  // Otherwise fall back to a simple JSON API route or log for now.
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (apiKey && audienceId) {
    try {
      const res = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            first_name: name,
            unsubscribed: false,
          }),
        },
      );

      if (!res.ok) {
        const body = await res.text();
        console.error("Resend API error:", body);
        return { success: false, error: "Something went wrong. Please try again." };
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      return { success: false, error: "Something went wrong. Please try again." };
    }
  } else {
    // Fallback: log to server console until an email provider is configured
    console.log("[Newsletter signup]", { name, email, timestamp: new Date().toISOString() });
  }

  return { success: true };
}
