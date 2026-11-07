import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getService } from "@/data/services";

export function SolarShowcase() {
  const solar = getService("solar-system-installation");
  if (!solar?.includes || !solar.image) return null;
  return (
    <section aria-labelledby="solar-title" className="relative isolate overflow-hidden bg-deep text-white">
      <div aria-hidden="true" className="absolute -right-32 top-0 -z-10 size-[30rem] rounded-full bg-gold/20 blur-3xl" />
      <div className="container-x grid items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <h2 id="solar-title" className="text-4xl font-extrabold sm:text-5xl">A complete solar system, from panels to inverter</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{solar.description}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {solar.includes.map(({ icon: Icon, title, text }) => (
              <li key={title} className="glass rounded-2xl p-5">
                <Icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{text}</p>
              </li>
            ))}
          </ul>
          <Link href={`/services/${solar.slug}`} className="btn btn-primary mt-8">Explore Solar &amp; Inverter Systems <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </div>
        <div className="reveal relative">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/50 via-transparent to-brand/50 blur-xl" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-white/20">
            <Image src={solar.image.src} alt={solar.image.alt} fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
