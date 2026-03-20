import { Target, Lightbulb, Handshake } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Precision Engineering",
    text: "We deliver targeted solutions that align technology investments with measurable business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    text: "From IoT and AI to cloud-native architectures, we bring cutting-edge technology to real-world challenges.",
  },
  {
    icon: Handshake,
    title: "Partnership Approach",
    text: "We work alongside your teams — transferring knowledge and building internal capability, not dependency.",
  },
];

export default function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-sq-primary font-600 tracking-wide uppercase text-sm mb-3 font-heading">
          About Us
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-700 text-sq-text mb-6">
          Technology Meets Business
        </h2>
        <p className="text-sq-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
          Smart Quartrix bridges the gap between technology and business strategy.
          With deep expertise across hardware engineering and enterprise software,
          we help organizations modernize operations, automate processes, and unlock
          new levels of efficiency.
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
