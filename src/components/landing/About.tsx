const About = () => {
  const stats = [
    { value: "50+", label: "Partners" },
    { value: "2.4x", label: "Avg. Returns" },
    { value: "$10M+", label: "Assets Managed" },
    { value: "94%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
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
                className="p-6 rounded-xl bg-secondary/50 border border-border/50"
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
