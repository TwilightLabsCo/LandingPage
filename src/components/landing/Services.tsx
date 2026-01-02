import { TrendingUp, Code2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Invest",
      subtitle: "Strategic Capital",
      description: "Identify high-growth digital assets with proven ROI potential. Our due diligence process has a 94% success rate.",
      features: ["Portfolio Management", "Due Diligence", "Risk Assessment"],
      stat: "2.4x",
      statLabel: "Avg. Returns"
    },
    {
      icon: Code2,
      title: "Code",
      subtitle: "Custom Development",
      description: "Launch production-ready blockchain solutions in weeks, not months. Enterprise-grade security guaranteed.",
      features: ["Smart Contracts", "DeFi Solutions", "Web3 Integration"],
      stat: "50+",
      statLabel: "Projects Shipped"
    },
    {
      icon: Sparkles,
      title: "Create",
      subtitle: "Digital Assets",
      description: "From concept to market in record time. We handle everything from tokenomics to launch strategy.",
      features: ["Token Design", "NFT Projects", "Asset Tokenization"],
      stat: "$10M+",
      statLabel: "Assets Created"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
              Three pillars of excellence
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
              Our integrated approach allows us to capture value across the entire digital asset lifecycle.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-lift cursor-pointer"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {/* Stat badge */}
                <div className="absolute top-4 right-4 text-right">
                  <p className="text-lg font-bold text-primary">{service.stat}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{service.statLabel}</p>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary icon-pulse" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary text-xs font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                      <div className="w-1 h-1 rounded-full bg-primary/60 group-hover:scale-150 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA hint */}
                <p className="text-xs text-primary/70 group-hover:text-primary flex items-center gap-1 transition-colors">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            ))}
          </div>
          
          {/* Section CTA */}
          <div className="text-center mt-10">
            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="rounded-full px-8 gap-2 group"
            >
              Start Your Project Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
