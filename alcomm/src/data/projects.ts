/**
 * ──────────────────────────────────────────────────────────────────────────
 *  PROJECTS — HOW TO ADD YOUR REAL INSTALLATIONS
 * ──────────────────────────────────────────────────────────────────────────
 *  1. PICTURES: create a folder per project inside public/images/projects/
 *       public/images/projects/project-001/cover.jpg
 *       public/images/projects/project-001/image-1.jpg
 *     Paths in this file start with "/images/..." (never include "public").
 *
 *  2. NEW PROJECT: copy the example block below into the `projects` array,
 *     remove the comment markers, and give it a UNIQUE `id` (it becomes the URL:
 *     /projects/project-001).
 *
 *  3. DESCRIPTION: write what was installed and for whom in `description`.
 *     Use "\n\n" between paragraphs.
 *
 *  4. MORE IMAGES: add more paths to the `images` array. They appear in the
 *     gallery on the project's page.
 *
 *  5. CATEGORY: use any text for `category`. Projects with the same category
 *     are grouped automatically into filter buttons. Suggested values:
 *     "CCTV Installation", "Smart Home Automation", "Fire Alarm Systems",
 *     "DStv Installation", "TV Intercom Systems", "Solar Installation",
 *     "Internet Installation", "Smart Security Systems".
 *
 *  `location` and `date` are optional.
 *
 *  Example (uncomment and edit):
 *
 *  {
 *    id: "project-001",
 *    title: "Project Title",
 *    category: "CCTV Installation",
 *    description: "Write the actual project description here.",
 *    location: "Project Location",
 *    date: "Project Date",
 *    coverImage: "/images/projects/project-001/cover.jpg",
 *    images: [
 *      "/images/projects/project-001/image-1.jpg",
 *      "/images/projects/project-001/image-2.jpg",
 *    ],
 *  },
 */
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location?: string;
  date?: string;
  coverImage: string;
  images: string[];
}

// Intentionally empty: only real company projects belong here.
export const projects: Project[] = [];

export const getProject = (id: string) => projects.find((p) => p.id === id);
export const projectCategories = () => Array.from(new Set(projects.map((p) => p.category)));
