import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { getService, services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return s ? pageMetadata(s.title, s.short, `/services/${s.slug}`) : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const { image, icon: Icon } = service;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHeader title={service.title} description={service.short} crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]} />
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-mist ring-1 ring-slate-200">
            {image ? (
              <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 45vw, 92vw" className={image.fit === "contain" ? "object-contain p-8" : "object-cover"} />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-deep via-navy to-brand"><Icon className="size-28 text-gold drop-shadow-[0_0_30px_rgba(0,184,255,0.6)]" strokeWidth={1} aria-hidden="true" /></div>
            )}
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">What we offer</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />{f}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/contact?service=${service.slug}#quote`} className="btn btn-primary">Request a Quote <ArrowRight className="size-4" aria-hidden="true" /></Link>
              <Link href="/services" className="btn btn-outline">All services</Link>
            </div>
          </div>
        </div>
        {service.includes && (
          <div className="container-x mt-12">
            <h2 className="mb-6 text-2xl font-extrabold">What a complete system includes</h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.includes.map(({ icon: I, title, text }) => (
                <li key={title} className="rounded-2xl border border-slate-200 bg-mist p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold"><I className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.gallery && service.gallery.length > 0 && (
          <div className="container-x mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist ring-1 ring-slate-200">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 30vw, 92vw" className={g.fit === "contain" ? "object-contain p-6" : "object-cover"} />
              </div>
            ))}
          </div>
        )}
      </section>
      <section aria-labelledby="more-services" className="section bg-mist">
        <div className="container-x">
          <h2 id="more-services" className="mb-8 text-2xl font-extrabold">Other services</h2>
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{others.map((s) => <li key={s.slug}><ServiceCard service={s} /></li>)}</ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
