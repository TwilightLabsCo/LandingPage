import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const stats = [
    { value: "50+", label: "Partners Served" },
    { value: "2.4x", label: "Avg. Returns" },
    { value: "100%", label: "Money-Back Guarantee" },
    { value: "<24h", label: "Response Time" }
  ];

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
            Proven track record in digital assets
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            We combine technical expertise with strategic investment acumen to identify opportunities and build solutions that deliver real results.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-secondary/50 border border-border/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
