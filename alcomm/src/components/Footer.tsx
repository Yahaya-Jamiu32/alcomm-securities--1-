import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { nav, PLACEHOLDERS, site } from "@/config/site";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo, LogoMark } from "./Logo";

function Item({ icon, value, placeholder, href }: { icon: React.ReactNode; value: string; placeholder: string; href?: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-gold">{icon}</span>
      {value ? (href ? <a href={href} className="hover:text-white">{value}</a> : <span>{value}</span>) : <span className="italic text-slate-400">{placeholder}</span>}
    </li>
  );
}

export function Footer() {
  const { phone, whatsapp, email, address } = site.contact;
  return (
    <footer className="bg-deep text-slate-300">
      <div className="relative overflow-hidden bg-gradient-to-b from-navy to-deep px-5 py-16 text-center sm:px-8">
        <div aria-hidden="true" className="absolute left-1/2 top-0 size-80 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <LogoMark className="mx-auto size-16" />
          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">Let&apos;s Secure Your World Together</h2>
          <p className="mt-4 text-slate-300">Contact Alcomm Securities today for expert consultation and professional service.</p>
          {whatsapp ? (
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 w-full sm:w-auto"><MessageCircle className="size-5" aria-hidden="true" />Chat on WhatsApp<ArrowRight className="size-4" aria-hidden="true" /></a>
          ) : (
            <Link href="/contact#quote" className="btn btn-primary mt-8 w-full sm:w-auto">Request a Quote<ArrowRight className="size-4" aria-hidden="true" /></Link>
          )}
        </div>
      </div>
      <div className="container-x grid gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">Security, smart home automation, fire alarm, satellite TV, solar and internet installation for homes and businesses.</p>
          {site.socials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Social media">
              {site.socials.map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-full border border-white/15 px-4 text-sm hover:border-gold hover:text-white">{s.label}</a></li>
              ))}
            </ul>
          )}
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-base font-semibold text-white">Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Services">
          <h2 className="font-display text-base font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-base font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <Item icon={<Phone className="size-4" aria-hidden="true" />} value={phone} placeholder={PLACEHOLDERS.phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`} />
            <Item icon={<MessageCircle className="size-4" aria-hidden="true" />} value={whatsapp ? "Chat on WhatsApp" : ""} placeholder={PLACEHOLDERS.whatsapp} href={whatsappUrl()} />
            <Item icon={<Mail className="size-4" aria-hidden="true" />} value={email} placeholder={PLACEHOLDERS.email} href={`mailto:${email}`} />
            <Item icon={<MapPin className="size-4" aria-hidden="true" />} value={address} placeholder={PLACEHOLDERS.address} />
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 px-5 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex gap-5">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
