import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sq-accent font-600 tracking-wide uppercase text-sm mb-3 font-heading">
          Get Started
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-700 text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to transform your operations? Reach out and let&apos;s discuss how we
          can help.
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
              <h3 className="font-heading font-600 text-white mb-1">Email</h3>
              <p className="text-gray-400">{siteConfig.contact.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-sq-accent" />
            </div>
            <div>
              <h3 className="font-heading font-600 text-white mb-1">Phone</h3>
              <p className="text-gray-400">{siteConfig.contact.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-sq-accent" />
            </div>
            <div>
              <h3 className="font-heading font-600 text-white mb-1">Office</h3>
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
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-sq-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-500 text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-sq-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-500 text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-sq-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sq-gradient text-white py-3 rounded-lg font-heading font-600 hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
