import type { Metadata } from "next";
import { HeroFuller } from "@/components/sections/hero-fuller";
import { NurtureConnectInvest } from "@/components/sections/nurture-connect-invest";
import { JoinUsForm } from "@/components/sections/join-us-form";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Explore the Lady Angel Network model: connect, nurture, and invest through a women-led angel investor community in Ghana.",
  alternates: {
    canonical: "/network",
  },
};

export default function NetworkPage() {
  return (
    <>
      <HeroFuller />
      <NurtureConnectInvest />
      <JoinUsForm />
    </>
  );
}
