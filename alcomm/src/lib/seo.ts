import type { Metadata } from "next";
import { site } from "@/config/site";

/** Per-page metadata with matching Open Graph tags (Next replaces, not merges, openGraph). */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      images: [{ url: "/images/hero/hero-night-home.jpg", width: 719, height: 388, alt: site.name }],
    },
  };
}
