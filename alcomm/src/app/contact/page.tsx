import { ContactSection } from "@/components/ContactSection";
import { PageHeader } from "@/components/PageHeader";
import { getService } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact Us", "Contact Alcomm Securities & Smart Home Automation for a free quote on security, smart home, solar, DStv and internet installation.", "/contact");

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const { service } = await searchParams;
  const slug = Array.isArray(service) ? service[0] : service;
  const defaultService = slug ? getService(slug)?.title ?? "" : "";
  return (
    <>
      <PageHeader title="Contact Us" description="Get in touch for a free quote or to ask about our services." crumbs={[{ label: "Contact" }]} />
      <ContactSection defaultService={defaultService} />
    </>
  );
}
