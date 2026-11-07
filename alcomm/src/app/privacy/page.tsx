import { PageHeader } from "@/components/PageHeader";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacy Policy", "How Alcomm Securities handles information submitted through this website.", "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="section">
        <div className="container-x max-w-3xl space-y-5 leading-relaxed">
          <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">Draft template: please have this text reviewed and completed by the business owner before launch.</p>
          <h2 className="text-2xl font-semibold">Information we collect</h2>
          <p>When you use the quote or contact form on this website, we collect the details you submit: your name, phone number, email address, the service and property type you select, and your message.</p>
          <h2 className="text-2xl font-semibold">How we use it</h2>
          <p>We use this information only to respond to your enquiry and provide a quote or service you ask about.</p>
          <h2 className="text-2xl font-semibold">Third-party services</h2>
          <p>Form submissions may be processed by an external form service, and WhatsApp and Google Maps are third-party services governed by their own policies.</p>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>Questions about your information can be sent to {site.contact.email || "##########"}.</p>
        </div>
      </section>
    </>
  );
}
