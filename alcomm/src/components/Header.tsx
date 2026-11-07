"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { nav, site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const { phone, whatsapp, email } = site.contact;
  const hasTopBar = Boolean(phone || whatsapp || email);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 text-navy shadow-[0_1px_0_rgba(10,31,99,0.08)] backdrop-blur-md">
        {hasTopBar && (
          <div className="hidden bg-navy text-sm text-slate-200 lg:block">
            <div className="container-x flex items-center justify-end gap-6 px-8 py-2">
              {phone && <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 hover:text-gold"><Phone className="size-4 text-gold" aria-hidden="true" />{phone}</a>}
              {whatsapp && <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold"><MessageCircle className="size-4 text-gold" aria-hidden="true" />Chat on WhatsApp</a>}
              {email && <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="size-4 text-gold" aria-hidden="true" />{email}</a>}
            </div>
          </div>
        )}
        <div className="container-x flex h-16 items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
          <Logo tone="dark" />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-mist ${active ? "bg-mist text-brand" : "text-navy"}`}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/contact#quote" className="btn btn-primary hidden lg:inline-flex">Request a Quote</Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-11 items-center justify-center rounded-xl text-navy transition hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden"
            >
              {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={open} pathname={pathname} onClose={() => setOpen(false)} />
    </>
  );
}
