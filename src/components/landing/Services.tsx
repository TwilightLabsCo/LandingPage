import { TrendingUp, Code2, Sparkles, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Invest",
      subtitle: "Strategic Capital Deployment",
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
      subtitle: "Digital Asset Creation",
      description: "We conceptualize and launch new digital assets, from tokenization projects to NFT collections and beyond.",
      features: ["Token Design", "NFT Projects", "Asset Tokenization"]
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Three pillars of excellence
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our integrated approach allows us to capture value across the entire digital asset lifecycle.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
