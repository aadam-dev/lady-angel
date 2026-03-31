import type { Metadata } from "next";
import { DealFlowTimeline } from "@/components/sections/deal-flow-timeline";

export const metadata: Metadata = {
  title: "Investments",
  description:
    "Apply for capital and understand the Lady Angel Network five-stage deal selection process for execution-ready pre-seed startups in Ghana.",
  alternates: {
    canonical: "/investments",
  },
};

export default function InvestmentsPage() {
  return <DealFlowTimeline />;
}
