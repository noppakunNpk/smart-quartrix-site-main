import { hardwareProjects } from "@/data/hardware-projects";
import { Cpu } from "lucide-react";

export default function HardwareProjectsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-[#C9A96E] font-600 tracking-wide uppercase text-sm mb-3 font-heading">
          Hardware Division
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-700 text-sq-text mb-4">
          Hardware Solutions
        </h2>
        <p className="text-sq-text-muted text-lg max-w-2xl mx-auto">
          From embedded systems to industrial automation — engineered for performance,
          reliability, and scale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardwareProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            {/* Gradient placeholder image area */}
            <div className="h-48 bg-gradient-to-br from-[#1a2a3a] via-[#2a3a4a] to-[#0A1628] flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hw-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C9A96E" strokeWidth="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hw-grid)" />
                </svg>
              </div>
              <Cpu className="w-12 h-12 text-[#C9A96E] opacity-60" />
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
