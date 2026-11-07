import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { ContactSummary } from "@/components/ContactSummary";
import { FeatureSlider } from "@/components/FeatureSlider";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { QuoteSection } from "@/components/QuoteSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid limit={6} />
      <FeatureSlider />
      <AboutSection />
      <WhyChooseUs />
      <ProjectsSection limit={6} />
      <QuoteSection />
      <ContactSummary />
    </>
  );
}
