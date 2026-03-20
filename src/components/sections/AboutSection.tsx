import { Target, Lightbulb, Handshake } from "lucide-react";
import { useLanguage } from "@/i18n";

export default function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Target,
      title: t.about.highlight1Title,
      text: t.about.highlight1Text,
    },
    {
      icon: Lightbulb,
      title: t.about.highlight2Title,
      text: t.about.highlight2Text,
    },
    {
      icon: Handshake,
      title: t.about.highlight3Title,
      text: t.about.highlight3Text,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-sq-primary font-600 tracking-wide uppercase text-sm mb-3 font-heading">
          {t.about.badge}
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-700 text-sq-text mb-6">
          {t.about.title}
        </h2>
        <p className="text-sq-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
          {t.about.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-sq-gradient flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading text-xl font-600 text-sq-text mb-3">
              {item.title}
            </h3>
            <p className="text-sq-text-muted leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
