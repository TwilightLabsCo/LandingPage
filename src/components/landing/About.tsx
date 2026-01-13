import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, TrendingUp, Shield, Zap } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const stats = [
    { value: "50+", label: "Partners Served", icon: Users },
    { value: "2.4x", label: "Avg. Returns", icon: TrendingUp },
    { value: "100%", label: "Money-Back Guarantee", icon: Shield },
    { value: "<24h", label: "Response Time", icon: Zap }
  ];

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-32 bg-background relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Proven track record in digital assets
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16 font-light">
            We combine technical expertise with strategic investment acumen to identify opportunities and build solutions that deliver real results.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-b from-secondary/60 to-secondary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Gradient border overlay */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-primary/20 to-primary/40 -z-10">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-b from-secondary/60 to-card" />
                </div>
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
