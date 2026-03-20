import { partners } from "@/data/partners";
import { useLanguage } from "@/i18n";

export default function PartnersSection() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sq-primary font-600 tracking-wide uppercase text-sm mb-3 font-heading">
          {t.partners.badge}
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-700 text-sq-text mb-4">
          {t.partners.title}
        </h2>
        <p className="text-sq-text-muted text-lg max-w-2xl mx-auto">
          {t.partners.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white rounded-xl border border-gray-100 p-8 flex items-center justify-center hover:shadow-md hover:border-sq-primary/20 transition-all"
          >
            <span className="font-heading font-600 text-sq-text-muted text-lg text-center">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
