import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PLACEHOLDERS, site } from "@/config/site";

function Row({ icon, value, placeholder, label, href }: { icon: React.ReactNode; value: string; placeholder: string; label: string; href?: string }) {
  return (
    <li className="flex items-center gap-4 rounded-2xl bg-mist p-4 ring-1 ring-navy/5">
      <span className="text-brand">{icon}</span>
      <div className="min-w-0">
        {value ? (href ? <a href={href} className="break-words font-bold text-navy hover:text-brand">{value}</a> : <p className="font-bold text-navy">{value}</p>) : <p className="italic text-muted">{placeholder}</p>}
        <p className="text-sm font-semibold text-brand">{label}</p>
      </div>
    </li>
  );
}

export function ContactSummary() {
  const { phone, email, address } = site.contact;
  return (
    <section aria-labelledby="contact-title" className="section bg-white">
      <div className="container-x max-w-3xl">
        <h2 id="contact-title" className="text-4xl font-extrabold text-navy sm:text-5xl">Contact <span className="text-brand">Us</span></h2>
        <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-gold" />
        <p className="mt-5 text-muted sm:text-lg">Get in touch with us for inquiries, quotes or professional advice.</p>
        <ul className="mt-7 grid gap-3">
          <Row icon={<Phone className="size-6" aria-hidden="true" />} value={phone} placeholder={PLACEHOLDERS.phone} label="Call Us" href={`tel:${phone.replace(/[^\d+]/g, "")}`} />
          <Row icon={<Mail className="size-6" aria-hidden="true" />} value={email} placeholder={PLACEHOLDERS.email} label="Email Us" href={`mailto:${email}`} />
          <Row icon={<MapPin className="size-6" aria-hidden="true" />} value={address} placeholder={PLACEHOLDERS.address} label="Our Location" />
        </ul>
        <Link href="/contact" className="btn btn-navy mt-7 w-full">Send a Message <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
