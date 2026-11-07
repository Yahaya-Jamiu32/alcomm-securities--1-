"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const slides = [
  { tag: "CCTV Solutions", title: "Advanced CCTV for Complete Peace of Mind", text: "Monitor what matters most with smart CCTV systems for your home or business.", bullets: ["Indoor and outdoor cameras", "Remote viewing on your phone", "Professional installation"], cta: "Request Consultation", href: "/services/cctv-camera-installation", src: "/images/services/cctv-building.jpg", alt: "CCTV cameras mounted on a modern building" },
  { tag: "Solar Energy", title: "Clean Energy for a Brighter Tomorrow", text: "Complete solar power systems, from panels to inverter, for homes and businesses.", bullets: ["Panels, inverter and batteries", "Sized around your needs", "Professional installation"], cta: "Get a Quote", href: "/services/solar-system-installation", src: "/images/services/solar-roof.jpg", alt: "House with solar panels and a wall-mounted inverter" },
  { tag: "Smart Home", title: "A Smarter, More Secure Home", text: "Smart locks and connected controls designed around the way you live.", bullets: ["Fingerprint and keypad locks", "Control from your phone", "Tailored to your property"], cta: "Request Consultation", href: "/services/smart-home-automation", src: "/images/services/smart-lock.jpg", alt: "Fingerprint smart door lock" },
  { tag: "Satellite TV", title: "Crystal-Clear Satellite Reception", text: "Neat DStv dish installation and set-up for homes and businesses.", bullets: ["Dish mounting and alignment", "Cable routing", "Decoder set-up"], cta: "Get a Quote", href: "/services/dstv-installation", src: "/images/services/dstv.jpg", alt: "Technician installing a DStv dish" },
];

export function FeatureSlider() {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (el) setActive(Math.round(el.scrollLeft / el.clientWidth));
  };
  const go = (i: number) => ref.current?.scrollTo({ left: i * ref.current.clientWidth, behavior: "smooth" });

  return (
    <section aria-roledescription="carousel" aria-label="Featured solutions" className="relative bg-deep text-white">
      <ul ref={ref} onScroll={onScroll} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto">
        {slides.map((s, i) => (
          <li key={s.tag} aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`} className="relative isolate min-h-[34rem] min-w-full snap-center overflow-hidden lg:min-h-[36rem]">
            <Image src={s.src} alt={s.alt} fill sizes="100vw" className="-z-20 object-cover" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/75 to-deep/10 lg:bg-gradient-to-r lg:via-deep/70 lg:to-transparent" />
            <div className="container-x flex min-h-[34rem] flex-col justify-end px-5 pb-16 sm:px-8 lg:min-h-[36rem] lg:justify-center">
              <div className="max-w-lg">
                <p className="inline-block rounded-full bg-gold px-4 py-1.5 text-sm font-extrabold text-deep">{s.tag}</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{s.title}</h2>
                <p className="mt-3 text-slate-200">{s.text}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => <li key={b} className="flex items-center gap-3 text-sm font-medium"><span className="flex size-6 items-center justify-center rounded-full bg-gold text-deep"><Check className="size-4" aria-hidden="true" /></span>{b}</li>)}
                </ul>
                <Link href={s.href} className="btn btn-primary mt-7 w-full sm:w-auto">{s.cta} <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2" role="group" aria-label="Choose slide">
        {slides.map((s, i) => (
          <button key={s.tag} type="button" onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} aria-current={active === i} className={`h-2.5 rounded-full transition-all ${active === i ? "w-7 bg-gold" : "w-2.5 bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
}
