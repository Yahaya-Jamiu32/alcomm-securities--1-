import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const { image, icon: Icon } = service;
  return (
    <article className="group relative flex h-full flex-col rounded-3xl bg-white p-2.5 shadow-[0_12px_32px_-14px_rgba(10,31,99,0.35)] ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-16px_rgba(23,71,209,0.5)] sm:p-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_40%,#ffffff,#e6edfb)]">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 28vw, 45vw"
            className={image.fit === "contain" ? "object-contain p-3 transition duration-500 group-hover:scale-105" : "object-cover transition duration-500 group-hover:scale-105"}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-deep via-navy to-brand">
            <Icon className="size-14 text-gold" strokeWidth={1.3} aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-1 items-end justify-between gap-2 px-1.5 pb-1.5 pt-3">
        <h3 className="text-sm font-extrabold leading-snug text-navy sm:text-base">{service.title}</h3>
        <Link
          href={`/services/${service.slug}`}
          aria-label={`Learn more about ${service.title}`}
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition group-hover:border-gold group-hover:bg-gold after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <p className="hidden px-1.5 pb-2 text-sm leading-relaxed text-muted sm:block">{service.short}</p>
    </article>
  );
}
