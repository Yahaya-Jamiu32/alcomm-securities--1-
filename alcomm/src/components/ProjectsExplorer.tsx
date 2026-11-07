"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => Array.from(new Set(projects.map((p) => p.category))), [projects]);
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {categories.length > 1 && (
        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap justify-center gap-2">
          {["All", ...categories].map((c) => (
            <button key={c} type="button" onClick={() => setActive(c)} aria-pressed={active === c} className={`min-h-11 rounded-full px-5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${active === c ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-slate-300 hover:ring-brand"}`}>
              {c}
            </button>
          ))}
        </div>
      )}
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => <li key={p.id}><ProjectCard project={p} /></li>)}
      </ul>
    </div>
  );
}
