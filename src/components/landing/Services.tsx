import { TrendingUp, Code2, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Invest",
      subtitle: "Strategic Capital",
      description: "We identify and invest in promising digital assets, blockchain projects, and emerging technologies with high growth potential.",
      features: ["Portfolio Management", "Due Diligence", "Risk Assessment"]
    },
    {
      icon: Code2,
      title: "Code",
      subtitle: "Custom Development",
      description: "Our engineering team builds robust, scalable solutions including smart contracts, DeFi protocols, and blockchain infrastructure.",
      features: ["Smart Contracts", "DeFi Solutions", "Web3 Integration"]
    },
    {
      icon: Sparkles,
      title: "Create",
      subtitle: "Digital Assets",
      description: "We conceptualize and launch new digital assets, from tokenization projects to NFT collections and beyond.",
      features: ["Token Design", "NFT Projects", "Asset Tokenization"]
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
                className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-primary text-xs font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
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
        </div>
      </div>
    </section>
  );
};

export default Services;
