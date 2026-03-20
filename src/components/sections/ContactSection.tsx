import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sq-accent font-600 tracking-wide uppercase text-sm mb-3 font-heading">
          {t.contact.badge}
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-700 text-white mb-4">
          {t.contact.title}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-sq-accent" />
            </div>
            <div>
              <h3 className="font-heading font-600 text-white mb-1">{t.contact.email}</h3>
              <p className="text-gray-400">{siteConfig.contact.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-sq-accent" />
            </div>
            <div>
              <h3 className="font-heading font-600 text-white mb-1">{t.contact.phone}</h3>
              <p className="text-gray-400">{siteConfig.contact.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-sq-accent" />
            </div>
            <div>
              <h3 className="font-heading font-600 text-white mb-1">{t.contact.address}</h3>
              <p className="text-gray-400">{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-500 text-gray-300 mb-2">
              {t.contact.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t.contact.namePlaceholder}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-sq-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-500 text-gray-300 mb-2">
              {t.contact.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t.contact.emailPlaceholder}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-sq-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-500 text-gray-300 mb-2">
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-sq-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sq-gradient text-white py-3 rounded-lg font-heading font-600 hover:opacity-90 transition-opacity"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
}
