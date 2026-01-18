import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check, Zap, TrendingUp, Crown, MessageSquare, Shield, Settings } from "lucide-react";

const tiers = [
  {
    name: "Operator",
    tagline: "Lower barrier, higher per-transaction fees",
    designedFor: "Retail traders and hobbyist investors managing ~$2,000+ who want structured execution without heavy automation.",
    icon: Zap,
    popular: false,
    features: [
      "Access to core execution systems",
      "Risk management frameworks",
      "Semi-autonomous tooling (manual approval)",
      "Higher per-transaction / usage fees",
      "Community access & updates",
    ],
  },
  {
    name: "Leverage",
    tagline: "Balanced fees, higher system access",
    designedFor: "Active retail traders managing ~$5,000+ who want meaningful leverage through automation and systemization.",
    icon: TrendingUp,
    popular: true,
    features: [
      "Advanced execution systems",
      "Lower per-transaction fees",
      "Expanded automation rules",
      "Priority system updates",
      "Enhanced dashboards & monitoring",
      "Community + priority support",
    ],
  },
  {
    name: "Pro / Whale",
    tagline: "Flat-rate access, zero transaction fees",
    designedFor: "High-volume traders managing ~$15,000+ who want predictable costs and maximum execution efficiency.",
    icon: Crown,
    popular: false,
    features: [
      "Full system access",
      "Flat monthly rate",
      "Zero per-transaction fees",
      "Early access to new systems",
      "Advanced automation controls",
      "Direct support channel",
    ],
  },
];

const addOns = [
  {
    name: "Consultation",
    price: "Free",
    description: "Initial fit assessment and system overview.",
    icon: MessageSquare,
  },
  {
    name: "General Risk Assessment",
    price: "$49",
    description: "Portfolio structure review, risk exposure analysis, and execution constraints.",
    icon: Shield,
  },
  {
    name: "Setup & Onboarding Assistance",
    price: "$13 / seat",
    description: "Hands-on assistance configuring systems, permissions, and monitoring tools.",
    icon: Settings,
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="pricing"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Access Level</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Credible. Scalable. Aligned with your goals. Select the tier that matches your trading volume and automation needs.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`group relative rounded-3xl bg-card p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
                tier.popular ? 'ring-2 ring-primary scale-[1.02]' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Gradient border */}
              <div className={`absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br ${
                tier.popular 
                  ? 'from-primary/60 via-primary/40 to-primary/60' 
                  : 'from-primary/40 via-primary/20 to-primary/40'
              } -z-10`}>
                <div className="w-full h-full rounded-3xl bg-card" />
              </div>

              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8 pt-2">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  <tier.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-primary font-medium">{tier.tagline}</p>
              </div>

              {/* Designed for */}
              <div className="mb-6 p-4 rounded-xl bg-muted/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Designed for: </span>
                  {tier.designedFor}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full ${
                  tier.popular 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30' 
                    : 'bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary'
                } transition-all duration-300`}
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Services & Add-Ons */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Services & Add-Ons
            </h3>
            <p className="text-muted-foreground">Enhance your experience with our specialized services</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={addon.name}
                className="group relative rounded-2xl bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-primary/20 to-primary/40 -z-10">
                  <div className="w-full h-full rounded-2xl bg-card" />
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <addon.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{addon.name}</h4>
                    <p className="text-primary font-bold">{addon.price}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold">Disclaimer:</span> Pricing reflects access to systems, tooling, and services. 
            Twilight Labs does not guarantee financial performance or outcomes. All systems require user oversight and carry inherent risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
