import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem, Headset, ShieldCheck } from "lucide-react";

const chips = [
  { icon: ShieldCheck, label: "Professional Installation" },
  { icon: Gem, label: "Quality Equipment" },
  { icon: Headset, label: "Reliable Support" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-deep text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[27rem] lg:inset-0 lg:h-auto">
        <Image
          src="/images/hero/hero-night-home.jpg"
          alt="Modern luxury home at night with a security camera, smart lock and phone showing live camera feeds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent lg:bg-gradient-to-r lg:from-deep lg:via-deep/70 lg:to-transparent" />
      </div>
      <div className="container-x px-5 pb-8 pt-[17.5rem] sm:px-8 sm:pt-[20rem] lg:flex lg:min-h-[44rem] lg:flex-col lg:justify-center lg:pb-12 lg:pt-20">
        <div className="max-w-xl">
          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Your Security, <span className="text-gold">Our Priority</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-100 sm:text-lg">
            Smart security and innovative technology solutions for homes, businesses and estates: CCTV, smart home automation, fire alarms, solar and more.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#quote" className="btn btn-primary">Get a Quote <ArrowRight className="size-4" aria-hidden="true" /></Link>
            <Link href="/services" className="btn btn-ghost">Explore Our Services</Link>
          </div>
        </div>
        <svg aria-hidden="true" viewBox="0 0 400 40" preserveAspectRatio="none" className="mt-8 h-10 w-full lg:hidden"><path d="M0 34C110 34 230 24 400 2" stroke="#FFC20E" strokeWidth="5" fill="none" strokeLinecap="round" /></svg>
        <ul className="mt-4 grid grid-cols-3 gap-3 lg:mt-14 lg:max-w-2xl">
          {chips.map(({ icon: Icon, label }) => (
            <li key={label} className="glass flex flex-col items-center gap-2 rounded-2xl px-2 py-4 text-center text-xs font-semibold sm:text-sm">
              <Icon className="size-6 text-gold" aria-hidden="true" />{label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
