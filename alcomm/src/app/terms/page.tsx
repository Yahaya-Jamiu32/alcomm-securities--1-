import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Terms and Conditions", "Terms for using the Alcomm Securities & Smart Home Automation website.", "/terms");

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms and Conditions" crumbs={[{ label: "Terms and Conditions" }]} />
      <section className="section">
        <div className="container-x max-w-3xl space-y-5 leading-relaxed">
          <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">Draft template: please have this text reviewed and completed by the business owner before launch.</p>
          <h2 className="text-2xl font-semibold">Use of this website</h2>
          <p>The information on this website is provided for general guidance about our services. Content may change without notice.</p>
          <h2 className="text-2xl font-semibold">Quotes and services</h2>
          <p>A quote request does not create a binding agreement. Services, pricing and timelines are confirmed with you directly before any work begins.</p>
          <h2 className="text-2xl font-semibold">Images</h2>
          <p>Some images on this website are illustrative and may not show our own installations.</p>
        </div>
      </section>
    </>
  );
}
