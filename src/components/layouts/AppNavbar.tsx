import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n";

const navKeys = [
  { key: "about" as const, href: "#about" },
  { key: "services" as const, href: "#services" },
  { key: "hardware" as const, href: "#hardware" },
  { key: "software" as const, href: "#software" },
  // { key: "partners" as const, href: "#partners" },
  // { key: "contact" as const, href: "#contact" },
];

const NAVBAR_HEIGHT = 76;

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function AppNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sq-navy/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
        >
          <img
            src="/public/logo2.jpg"
            alt="Smart Quartrix"
            className="h-10 w-auto"
          />
          <span className="font-heading font-700 text-white text-lg hidden sm:block">
            Smart Quartrix
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-4 py-2 text-sm font-500 text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              {t.nav[link.key]}
            </a>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center bg-white/10 rounded-full p-0.5 text-sm ml-3">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-white text-[#0B1220] font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("th")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "th"
                  ? "bg-white text-[#0B1220] font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              TH
            </button>
          </div>
        </nav>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex items-center bg-white/10 rounded-full p-0.5 text-xs">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-white text-[#0B1220] font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("th")}
              className={`px-2 py-1 rounded-full transition-all ${
                lang === "th"
                  ? "bg-white text-[#0B1220] font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              TH
            </button>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-sq-navy border-t border-white/5 px-6 py-4 space-y-1">
          {navKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                scrollToSection(e, link.href);
                setMobileOpen(false);
              }}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
