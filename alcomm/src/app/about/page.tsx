import { AboutSection } from "@/components/AboutSection";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Us", "Alcomm Securities & Smart Home Automation provides security and smart technology solutions for residential and commercial properties.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" description="Security and smart technology solutions for residential and commercial properties." crumbs={[{ label: "About" }]} />
      <AboutSection showButton={false} />
      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
