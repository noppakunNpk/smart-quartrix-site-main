import ProjectShowcase from "./ProjectShowcase";
import { softwareProjects, softwareCategories } from "@/data/software-projects";
import { useLanguage } from "@/i18n";

export default function SoftwareProjectsSection() {
  const { t } = useLanguage();

  return (
    <ProjectShowcase
      id="software"
      badge={t.softwareSection.badge}
      title={t.softwareSection.title}
      subtitle={t.softwareSection.subtitle}
      accentColor="#0077FF"
      projects={softwareProjects}
      categories={softwareCategories}
      showMoreLabel={t.softwareSection.showMore}
      remainingLabel={t.softwareSection.remaining}
    />
  );
}
