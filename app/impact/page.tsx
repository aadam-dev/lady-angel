import { ImpactDashboard } from "@/components/sections/impact-dashboard";
import { PortfolioMasonry } from "@/components/sections/portfolio-masonry";
import { JoinUsForm } from "@/components/sections/join-us-form";

export default function ImpactPage() {
  return (
    <>
      <ImpactDashboard />
      <PortfolioMasonry />
      <JoinUsForm />
    </>
  );
}
