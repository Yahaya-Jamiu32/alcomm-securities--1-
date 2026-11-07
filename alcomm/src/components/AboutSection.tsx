import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = ["Professional Installation", "Quality Equipment", "Reliable Support", "Customized Solutions"];

export function AboutSection({ showButton = true }: { showButton?: boolean }) {
  return (
    <section aria-labelledby="about-title" className="section bg-white">
      <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal lg:order-2">
          <h2 id="about-title" className="text-4xl font-extrabold text-navy sm:text-5xl">About ALCOMM <span className="text-brand">Securities</span></h2>
          <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-gold" />
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Alcomm Securities &amp; Smart Home Automation provides security and smart technology solutions for residential and commercial properties. We specialize in CCTV installation, smart home automation, fire alarm systems, satellite television, solar installations, and internet connectivity.
          </p>
        </div>
        <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_24px_50px_-20px_rgba(10,31,99,0.5)] lg:order-1">
          <Image src="/images/about/building-camera.jpg" alt="Security cameras mounted on a modern building exterior" fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
        </div>
        <div className="reveal lg:order-3 lg:col-start-2">
          <ul className="grid gap-3 sm:grid-cols-2">
            {points.map((p) => <li key={p} className="flex items-center gap-3 font-semibold text-navy"><CheckCircle2 className="size-6 shrink-0 fill-navy text-white" aria-hidden="true" />{p}</li>)}
          </ul>
          {showButton && <Link href="/about" className="btn btn-navy mt-7 w-full sm:w-auto">Learn More <ArrowRight className="size-4" aria-hidden="true" /></Link>}
        </div>
      </div>
    </section>
  );
}
