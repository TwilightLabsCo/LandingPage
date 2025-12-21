import { TrendingUp, Code2, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      number: "01",
      title: "Investment",
      description: "Strategic capital deployment across digital assets, blockchain protocols, and emerging technologies. We conduct thorough due diligence and maintain disciplined portfolio management.",
    },
    {
      icon: Code2,
      number: "02",
      title: "Development",
      description: "Custom engineering solutions including smart contracts, DeFi protocols, and enterprise blockchain infrastructure. Built with security and scalability as foundational principles.",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Creation",
      description: "End-to-end digital asset creation from conceptualization to launch. We design and deploy tokenization projects, NFT collections, and novel financial instruments.",
    }
  ];

  return (
    <section id="services" className="py-32 bg-secondary/30 border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight tracking-tight-custom mb-6">
              Comprehensive capabilities across the digital asset lifecycle
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Three integrated disciplines that enable us to capture value at every stage.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-12 gap-8 py-12 border-t border-border/40 last:border-b"
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-sm font-medium text-muted-foreground/60">
                    {service.number}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="md:col-span-3 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/5 border border-border/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-primary/70" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground pt-1.5">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-8">
                  <p className="text-muted-foreground leading-relaxed font-light max-w-xl">
                    {service.description}
                  </p>
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
