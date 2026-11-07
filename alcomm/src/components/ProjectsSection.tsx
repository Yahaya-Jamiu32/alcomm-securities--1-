import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectEmptyState } from "./ProjectEmptyState";
import { ProjectsExplorer } from "./ProjectsExplorer";
import { SectionHeading } from "./SectionHeading";

/** `limit` shows a short preview (home page); without it the full filterable list is shown. */
export function ProjectsSection({ limit, withHeading = true }: { limit?: number; withHeading?: boolean }) {
  return (
    <section id="projects" aria-labelledby={withHeading ? "projects-title" : undefined} className="section bg-white">
      <div className="container-x">
        {withHeading && <div id="projects-title"><SectionHeading title="Our Projects" description="A look at our installation work." /></div>}
        {projects.length === 0 ? (
          <ProjectEmptyState />
        ) : limit ? (
          <>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, limit).map((p) => <li key={p.id}><ProjectCard project={p} /></li>)}
            </ul>
            {projects.length > limit && <div className="mt-10 text-center"><Link href="/projects" className="btn btn-outline">View all projects</Link></div>}
          </>
        ) : (
          <ProjectsExplorer projects={projects} />
        )}
      </div>
    </section>
  );
}
