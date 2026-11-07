import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-20px_rgba(0,107,255,0.55)]">
      <div className="relative aspect-[4/3] bg-mist">
        <Image src={project.coverImage} alt={`${project.title} cover photo`} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{project.category}</p>
        <h3 className="mt-3 text-lg font-semibold">
          <Link href={`/projects/${project.id}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">{project.title}</Link>
        </h3>
        {project.location && <p className="mt-2 flex items-center gap-1.5 text-sm text-muted"><MapPin className="size-4" aria-hidden="true" />{project.location}</p>}
      </div>
    </article>
  );
}
