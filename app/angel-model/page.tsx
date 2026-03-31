import type { Metadata } from "next";
import { InvestmentModelGrid } from "@/components/sections/investment-model-grid";

export const metadata: Metadata = {
  title: "Angel Model",
  description:
    "Review Lady Angel Network's angel investment models, instruments, and structures designed for disciplined women-led capital deployment.",
  alternates: {
    canonical: "/angel-model",
  },
};

export default function AngelModelPage() {
  return <InvestmentModelGrid />;
}
