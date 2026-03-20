import { ArrowRight } from "lucide-react";
import { Visualizer } from "@/components/Visualizer";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center bg-sq-navy overflow-hidden">
      {/* Circuit pattern background decoration */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#0077FF" />
              <path
                d="M50 0 L50 48 M50 52 L50 100 M0 50 L48 50 M52 50 L100 50"
                stroke="#0077FF"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="0" cy="0" r="1.5" fill="#7B5EA7" />
              <circle cx="100" cy="100" r="1.5" fill="#7B5EA7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Gradient orb decorations */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-sq-gradient opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#7B5EA7] opacity-15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="max-w-3xl">
          {/* Logo */}
          <img
            src="/public/logo2.jpg"
            alt="Smart Quartrix"
            className="h-20 w-auto mb-8"
          />

          <h1 className="font-heading text-5xl md:text-7xl font-800 text-white leading-tight mb-4">
            Smart{" "}
            <span className="text-sq-gradient">Quartrix</span>
          </h1>

          <p className="font-heading text-2xl md:text-3xl font-500 text-sq-gold mb-6">
            Business Consulting
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
            Bridging technology and business through expert hardware and software
            consulting. We help enterprises modernize, automate, and scale with
            confidence.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-sq-gradient text-white px-8 py-4 rounded-lg text-lg font-600 hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Visualizer — hidden on mobile/tablet */}
        <div className="relative hidden lg:block w-[560px] h-[560px] shrink-0">
          <Visualizer />
        </div>
      </div>
    </div>
  );
}
