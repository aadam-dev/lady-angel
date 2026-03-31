import type { Metadata } from "next";
import { ImpactDashboard } from "@/components/sections/impact-dashboard";
import { PortfolioMasonry } from "@/components/sections/portfolio-masonry";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See Lady Angel Network's five-year impact projections and portfolio stories across women-led ventures in emerging markets.",
  alternates: {
    canonical: "/impact",
  },
};

export default function ImpactPage() {
  return (
    <>
      <ImpactDashboard />
      <PortfolioMasonry />
    </>
  );
}
