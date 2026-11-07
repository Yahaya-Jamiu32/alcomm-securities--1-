"use client";

import Link from "next/link";
import { useEffect } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { nav, site } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function MobileNavigation({ open, pathname, onClose }: { open: boolean; pathname: string; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const { phone, whatsapp } = site.contact;

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-deep px-5 py-6 transition duration-200 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <nav aria-label="Mobile">
        <ul className="divide-y divide-white/10">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} onClick={onClose} aria-current={active ? "page" : undefined} className={`flex min-h-14 items-center font-display text-xl font-semibold ${active ? "text-gold" : "text-white"}`}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-8 grid gap-3">
        <Link href="/contact#quote" onClick={onClose} className="btn btn-primary">Request a Quote</Link>
        {whatsapp && (
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MessageCircle className="size-5" aria-hidden="true" /> Chat on WhatsApp</a>
        )}
        {phone && (
          <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="btn btn-ghost"><Phone className="size-5" aria-hidden="true" /> {phone}</a>
        )}
      </div>
    </div>
  );
}
