import { Target, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every decision is data-driven and meticulously planned."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push boundaries to create what doesn't yet exist."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Security and transparency are at our core."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
                About Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
                Building the future of digital finance
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                At Twilight Labs, we combine deep technical expertise with strategic investment acumen. 
                Our team of engineers, analysts, and visionaries work together to identify opportunities 
                and build solutions that shape the digital economy.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Founded with a mission to democratize access to digital assets, we've grown into a 
                multifaceted operation spanning investment, development, and asset creation.
              </p>
            </div>

            {/* Right - Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-secondary hover-lift cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-5 h-5 text-primary icon-pulse" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
