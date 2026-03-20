import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n";

const footerNavKeys = ["about", "services", "hardware", "software"] as const;

export function AppFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-sq-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/public/logo2.jpg"
                alt="Smart Quartrix"
                className="h-10 w-auto"
              />
              <span className="font-heading font-700 text-white text-lg">
                Smart Quartrix
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-600 text-white mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {footerNavKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-600 text-white mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
