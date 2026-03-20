import { useState } from "react";
import * as Icons from "lucide-react";
import { hardwareServices, softwareServices } from "@/data/services";
import type { Service } from "@/data/services";
import { useLanguage } from "@/i18n";
import type { Language } from "@/i18n";

type TabKey = "hardware" | "software";

function ServiceCard({ service, lang }: { service: Service; lang: Language }) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-transparent hover:shadow-lg transition-all relative overflow-hidden">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-xl bg-sq-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10 scale-[1.02]" />
      <div className="absolute inset-[1px] rounded-[11px] bg-white -z-10 group-hover:block hidden" />

      <div className="w-11 h-11 rounded-lg bg-sq-light flex items-center justify-center mb-4 group-hover:bg-sq-gradient transition-colors">
        {IconComponent && (
          <IconComponent className="w-5 h-5 text-sq-primary group-hover:text-white transition-colors" />
        )}
      </div>
      <h3 className="font-heading text-lg font-600 text-sq-text mb-2">
        {service.title[lang]}
      </h3>
      <p className="text-sq-text-muted text-sm leading-relaxed">
        {service.description[lang]}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("hardware");
  const { lang, t } = useLanguage();

  const tabs: { key: TabKey; label: string }[] = [
    { key: "hardware", label: t.services.hardwareTab },
    { key: "software", label: t.services.softwareTab },
  ];

  const services = activeTab === "hardware" ? hardwareServices : softwareServices;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sq-primary font-600 tracking-wide uppercase text-sm mb-3 font-heading">
          {t.services.badge}
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-700 text-sq-text mb-6">
          {t.services.title}
        </h2>
        <p className="text-sq-text-muted text-lg max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 rounded-lg font-heading font-600 text-sm transition-all ${
              activeTab === tab.key
                ? "bg-sq-gradient text-white shadow-md"
                : "bg-gray-100 text-sq-text-muted hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.title.en} service={service} lang={lang} />
        ))}
      </div>
    </div>
  );
}
