import { useState, useEffect } from "react";
import type { Project, BilingualCategory } from "@/data/hardware-projects";
import { useLanguage } from "@/i18n";

interface ProjectShowcaseProps {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  accentColor: string;
  projects: Project[];
  categories: BilingualCategory[];
  showMoreLabel: string;
  remainingLabel: string;
}

export default function ProjectShowcase({
  id,
  badge,
  title,
  subtitle,
  accentColor,
  projects,
  categories,
  showMoreLabel,
  remainingLabel,
}: ProjectShowcaseProps) {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setVisibleCount(6);
    setAnimKey((k) => k + 1);
  }, [activeCategory]);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <section id={id} className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-semibold tracking-wide uppercase text-sm mb-3 font-heading"
            style={{ color: accentColor }}
          >
            {badge}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Tab Bar */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
          {categories.map((cat) => {
            const isActive = cat.en === activeCategory;
            return (
              <button
                key={cat.en}
                onClick={() => setActiveCategory(cat.en)}
                className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200"
                style={
                  isActive
                    ? {
                        backgroundColor: `${accentColor}15`,
                        color: accentColor,
                        border: `1px solid ${accentColor}40`,
                      }
                    : {
                        backgroundColor: "#f3f4f6",
                        color: "#4b5563",
                        border: "1px solid transparent",
                      }
                }
              >
                {cat[lang]}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div key={animKey} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image.replace("public/", "/")}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {project.title[lang]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {project.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + 6)}
              className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md"
              style={{
                color: accentColor,
                border: `1.5px solid ${accentColor}50`,
                backgroundColor: "transparent",
              }}
            >
              {showMoreLabel} ({filtered.length - visibleCount} {remainingLabel})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
