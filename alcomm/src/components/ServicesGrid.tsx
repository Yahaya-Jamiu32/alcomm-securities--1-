import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services as allServices, type Service } from "@/data/services";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid({ services = allServices, withHeading = true, id = "services", limit }: { services?: Service[]; withHeading?: boolean; id?: string; limit?: number }) {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <section id={id} aria-labelledby={withHeading ? `${id}-title` : undefined} className="section bg-white">
      <div className="container-x">
        {withHeading && (
          <div id={`${id}-title`}>
            <SectionHeading title="Our Services" description="Comprehensive security and technology solutions under one roof." />
          </div>
        )}
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {shown.map((s) => (
            <li key={s.slug} className="reveal"><ServiceCard service={s} /></li>
          ))}
        </ul>
        {limit && services.length > limit && (
          <div className="mt-8 text-center"><Link href="/services" className="btn btn-navy w-full sm:w-auto">View All Services <ArrowRight className="size-4" aria-hidden="true" /></Link></div>
        )}
      </div>
    </section>
  );
}
