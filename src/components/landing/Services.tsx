import { TrendingUp, Code2, Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: TrendingUp,
      title: "Invest",
      description: "Strategic capital deployment in high-growth digital assets with proven ROI potential.",
      features: ["Portfolio Management", "Due Diligence", "Risk Assessment"],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Code2,
      title: "Build",
      description: "Production-ready blockchain solutions shipped in weeks, not months.",
      features: ["Smart Contracts", "DeFi Solutions", "Web3 Integration"],
      gradient: "from-violet-500/10 to-purple-500/10"
    },
    {
      icon: Sparkles,
      title: "Launch",
      description: "From concept to market—tokenomics, design, and launch strategy handled.",
      features: ["Token Design", "NFT Projects", "Asset Tokenization"],
      gradient: "from-amber-500/10 to-orange-500/10"
    }
  ];

  return (
    <section 
      id="services" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-32 bg-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-14 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              How We Help
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Full-service digital asset partner
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-card border border-border/40 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '650ms' }}>
            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="rounded-full px-10 h-14 gap-2.5 group text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
