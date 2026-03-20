import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HardwareProjectsSection from "@/components/sections/HardwareProjectsSection";
import SoftwareProjectsSection from "@/components/sections/SoftwareProjectsSection";
// import PartnersSection from "@/components/sections/PartnersSection";
// import ContactSection from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({ component: App });

const NAVBAR_HEIGHT = 76;

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

    setTimeout(() => {
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about" className="py-24 bg-sq-light">
        <AboutSection />
      </section>

      <section id="services" className="py-24 bg-white">
        <ServicesSection />
      </section>

      <section id="hardware" className="py-24 bg-sq-light">
        <HardwareProjectsSection />
      </section>

      <section id="software" className="py-24 bg-white">
        <SoftwareProjectsSection />
      </section>

      {/* <section id="partners" className="py-24 bg-sq-light">
        <PartnersSection />
      </section> */}

      {/* <section id="contact" className="py-24 bg-sq-navy text-white">
        <ContactSection />
      </section> */}
    </div>
  );
}
