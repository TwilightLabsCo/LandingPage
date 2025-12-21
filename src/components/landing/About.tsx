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
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
                Building the future of digital finance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Twilight Labs, we combine deep technical expertise with strategic investment acumen. 
                Our team of engineers, analysts, and visionaries work together to identify opportunities 
                and build solutions that shape the digital economy.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a mission to democratize access to digital assets, we've grown into a 
                multifaceted operation spanning investment, development, and asset creation.
              </p>
            </div>

            {/* Right - Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/20 hover:bg-secondary transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
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
