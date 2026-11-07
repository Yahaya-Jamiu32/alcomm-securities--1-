import { CtaBand } from "@/components/CtaBand";
import { PageHeader } from "@/components/PageHeader";
import { ProjectsSection } from "@/components/ProjectsSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Projects", "Browse Alcomm Securities installation projects, including CCTV, smart home, fire alarm, solar and internet installations.", "/projects");

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our Projects" description="A look at our installation work." crumbs={[{ label: "Projects" }]} />
      <ProjectsSection withHeading={false} />
      <CtaBand />
    </>
  );
}
