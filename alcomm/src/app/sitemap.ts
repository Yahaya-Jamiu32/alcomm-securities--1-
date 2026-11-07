import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/about", "/services", "/projects", "/contact", "/privacy", "/terms",
    ...services.map((s) => `/services/${s.slug}`),
    ...projects.map((p) => `/projects/${p.id}`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
