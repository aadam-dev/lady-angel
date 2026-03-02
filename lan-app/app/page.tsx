import { HeroFuller } from "@/components/sections/hero-fuller";
import { NurtureConnectInvest } from "@/components/sections/nurture-connect-invest";
import { InvestmentModelGrid } from "@/components/sections/investment-model-grid";
import { DealFlowTimeline } from "@/components/sections/deal-flow-timeline";
import { ImpactDashboard } from "@/components/sections/impact-dashboard";
import { PortfolioMasonry } from "@/components/sections/portfolio-masonry";
import { JoinUsForm } from "@/components/sections/join-us-form";

export default function Home() {
  return (
    <>
      <section id="network">
        <HeroFuller />
      </section>
      <NurtureConnectInvest />
      <section id="investment-models">
        <InvestmentModelGrid />
      </section>
      <section id="deal-flow">
        <DealFlowTimeline />
      </section>
      <section id="impact">
        <ImpactDashboard />
      </section>
      <section id="portfolio">
        <PortfolioMasonry />
      </section>
      <section id="join-us">
        <JoinUsForm />
      </section>
    </>
  );
}
