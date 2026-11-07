import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PLACEHOLDERS, site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { QuoteForm } from "./QuoteForm";

function InfoCard({ icon, label, value, placeholder, href, external }: { icon: React.ReactNode; label: string; value: string; placeholder: string; href?: string; external?: boolean }) {
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">{icon}</span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-muted">{label}</p>
        {value ? (
          href ? <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-words font-semibold hover:text-brand">{value}</a> : <p className="font-semibold">{value}</p>
        ) : (
          <p className="italic text-muted">{placeholder}</p>
        )}
      </div>
    </li>
  );
}

export function ContactSection({ defaultService = "" }: { defaultService?: string }) {
  const { phone, whatsapp, email, address, mapQuery } = site.contact;
  return (
    <section id="contact" aria-label="Contact details and quote form" className="section bg-mist">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <InfoCard icon={<Phone className="size-5" aria-hidden="true" />} label="Phone" value={phone} placeholder={PLACEHOLDERS.phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`} />
            <InfoCard icon={<MessageCircle className="size-5" aria-hidden="true" />} label="WhatsApp" value={whatsapp ? "Chat on WhatsApp" : ""} placeholder={PLACEHOLDERS.whatsapp} href={whatsappUrl()} external />
            <InfoCard icon={<Mail className="size-5" aria-hidden="true" />} label="Email" value={email} placeholder={PLACEHOLDERS.email} href={`mailto:${email}`} />
            <InfoCard icon={<MapPin className="size-5" aria-hidden="true" />} label="Business address" value={address} placeholder={PLACEHOLDERS.address} />
          </ul>
          <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {mapQuery ? (
              <iframe title="Alcomm Securities location on Google Maps" src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full border-0" />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-2 p-6 text-center text-muted">
                <MapPin className="size-8 text-brand" aria-hidden="true" />
                <p className="font-semibold text-navy">Google Map</p>
                <p className="text-sm">The map will appear here once the business address is added.</p>
              </div>
            )}
          </div>
        </div>
        <div id="quote" className="scroll-mt-24">
          <h2 className="mb-2 text-2xl font-extrabold sm:text-3xl">Send us a message</h2>
          <p className="mb-6 text-muted">Tell us what you need and we will get back to you with a free quote.</p>
          <QuoteForm defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
