import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, MapPin } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = getProject(id);
  return p ? pageMetadata(p.title, p.description.slice(0, 155), `/projects/${p.id}`) : {};
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  const gallery = Array.from(new Set([project.coverImage, ...project.images]));

  return (
    <>
      <PageHeader title={project.title} description={project.category} crumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
      <section className="section bg-white">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {project.location && <span className="flex items-center gap-1.5"><MapPin className="size-4" aria-hidden="true" />{project.location}</span>}
            {project.date && <span className="flex items-center gap-1.5"><Calendar className="size-4" aria-hidden="true" />{project.date}</span>}
          </div>
          <div className="mb-10 max-w-3xl space-y-4 text-lg leading-relaxed">
            {project.description.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <ProjectGallery images={gallery} title={project.title} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
