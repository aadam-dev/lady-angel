import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Lady Angel Network, established in 2015 and officially registered in 2018, supporting women-led businesses with capital and technical support.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
