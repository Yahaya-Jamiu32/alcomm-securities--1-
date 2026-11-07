import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ServicesGrid } from "@/components/ServicesGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Our Services", "CCTV installation, smart home automation, fire alarm systems, DStv, TV intercom, solar and internet installation for homes and businesses.", "/services");

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" description="Complete security and automation solutions under one roof." crumbs={[{ label: "Services" }]} />
      <ServicesGrid withHeading={false} id="all-services" />
      <CtaBand />
    </>
  );
}
