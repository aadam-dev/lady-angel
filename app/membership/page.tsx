import type { Metadata } from "next";
import { MembershipSection } from "@/components/sections/membership-section";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Discover Lady Angel Network membership criteria, benefits, and commitments for women investors supporting high-potential startups.",
  alternates: {
    canonical: "/membership",
  },
};

export default function MembershipPage() {
  return <MembershipSection />;
}
