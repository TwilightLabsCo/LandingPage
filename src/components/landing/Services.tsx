import { TrendingUp, Code2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
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
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              How We Help
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
              Full-service digital asset partner
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
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
