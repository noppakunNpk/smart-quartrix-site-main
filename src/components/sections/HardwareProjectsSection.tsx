import ProjectShowcase from "./ProjectShowcase";
import { hardwareProjects, hardwareCategories } from "@/data/hardware-projects";
import { useLanguage } from "@/i18n";

export default function HardwareProjectsSection() {
  const { t } = useLanguage();

  return (
    <ProjectShowcase
      id="hardware"
      badge={t.hardwareSection.badge}
      title={t.hardwareSection.title}
      subtitle={t.hardwareSection.subtitle}
      accentColor="#C9A96E"
      projects={hardwareProjects}
      categories={hardwareCategories}
      showMoreLabel={t.hardwareSection.showMore}
      remainingLabel={t.hardwareSection.remaining}
    />
  );
}
