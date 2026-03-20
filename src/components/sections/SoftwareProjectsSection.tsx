import { softwareProjects } from "@/data/software-projects";
import { Code2 } from "lucide-react";

export default function SoftwareProjectsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sq-primary font-600 tracking-wide uppercase text-sm mb-3 font-heading">
          Software Division
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-700 text-sq-text mb-4">
          Software Solutions
        </h2>
        <p className="text-sq-text-muted text-lg max-w-2xl mx-auto">
          Enterprise-grade software consulting — from cloud architecture and data
          analytics to AI-powered automation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softwareProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            {/* Gradient placeholder image area */}
            <div className="h-48 bg-gradient-to-br from-[#0a1628] via-[#0e2a4a] to-[#1a1a3a] flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="sw-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="8" cy="8" r="1" fill="#00AAFF" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#sw-dots)" />
                </svg>
              </div>
              <Code2 className="w-12 h-12 text-sq-accent opacity-60" />
            </div>

            <div className="p-6">
              <h3 className="font-heading text-lg font-600 text-sq-text mb-2">
                {project.title}
              </h3>
              <p className="text-sq-text-muted text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
