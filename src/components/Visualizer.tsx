import { Globe, Cpu, BarChart3, Workflow, Server } from 'lucide-react';

const FloatingCard = ({
  icon,
  title,
  subtitle,
  className = "",
  iconBg,
  delay = "0s"
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
  iconBg: string;
  delay?: string;
}) => (
  <div
    className={`absolute bg-[#0B1220] border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col space-y-2 w-44 animate-bounce-subtle z-20 ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center mb-1`}>
      {icon}
    </div>
    <div className="text-sm font-bold text-white">{title}</div>
    <div className="text-[10px] text-white/50">{subtitle}</div>
  </div>
);

export const Visualizer = () => {
  return (
    <div className="relative w-full h-[500px] max-w-[600px] flex items-center justify-center">

      {/* Glow Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] border border-[#22D3EE]/20 rounded-full animate-ping-slow" />
        <div className="absolute w-[450px] h-[450px] border border-[#8B5CF6]/20 rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-[#38BDF8]/10 rounded-full" />
      </div>

      {/* Center */}
      <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-[#1E3A8A] to-[#0B1220] rounded-full shadow-2xl flex flex-col items-center justify-center border border-white/10">
        <Globe className="w-12 h-12 text-[#22D3EE] animate-pulse" />
        <div className="text-[10px] tracking-widest text-white/60 mt-2">
          SMART CORE
        </div>
      </div>

      {/* Floating Cards */}
      <FloatingCard
        icon={<Cpu className="w-5 h-5 text-[#8B5CF6]" />}
        title="Software"
        subtitle="Enterprise Systems"
        iconBg="bg-[#8B5CF6]/10"
        className="top-10 right-10"
      />
      <FloatingCard
        icon={<BarChart3 className="w-5 h-5 text-[#22D3EE]" />}
        title="Data & AI"
        subtitle="Analytics Engine"
        iconBg="bg-[#22D3EE]/10"
        className="top-10 left-10"
        delay="0.3s"
      />
      <FloatingCard
        icon={<Workflow className="w-5 h-5 text-[#38BDF8]" />}
        title="Automation"
        subtitle="Process Optimization"
        iconBg="bg-[#38BDF8]/10"
        className="bottom-10 left-10"
        delay="0.6s"
      />
      <FloatingCard
        icon={<Server className="w-5 h-5 text-[#D4AF37]" />}
        title="Hardware"
        subtitle="Infra & Devices"
        iconBg="bg-[#D4AF37]/10"
        className="bottom-10 right-10"
        delay="0.9s"
      />

      {/* Orbit SVG */}
      <svg className="absolute w-full h-full opacity-20" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="220" fill="none" stroke="#22D3EE" strokeWidth="1" strokeDasharray="10 20" />
      </svg>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 6s ease-out infinite;
        }
      `}</style>
    </div>
  );
};
