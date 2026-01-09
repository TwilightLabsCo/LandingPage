import { TrendingUp, Code2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: TrendingUp,
      title: "Invest",
      description: "Strategic capital deployment in high-growth digital assets with proven ROI potential.",
      features: ["Portfolio Management", "Due Diligence", "Risk Assessment"]
    },
    {
      icon: Code2,
      title: "Build",
      description: "Production-ready blockchain solutions shipped in weeks, not months.",
      features: ["Smart Contracts", "DeFi Solutions", "Web3 Integration"]
    },
    {
      icon: Sparkles,
      title: "Launch",
      description: "From concept to market—tokenomics, design, and launch strategy handled.",
      features: ["Token Design", "NFT Projects", "Asset Tokenization"]
    }
  ];

  return (
    <section 
      id="services" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              How We Help
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
              Full-service digital asset partner
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '650ms' }}>
            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="rounded-full px-8 gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
