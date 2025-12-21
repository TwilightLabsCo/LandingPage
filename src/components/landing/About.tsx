const About = () => {
  const stats = [
    { value: "2019", label: "Founded" },
    { value: "50+", label: "Projects Delivered" },
    { value: "$10M+", label: "Assets Under Management" },
  ];

  return (
    <section id="about" className="py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                About Twilight Labs
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight tracking-tight-custom">
                A disciplined approach to digital asset management
              </h2>
            </div>
            <div className="lg:pt-10">
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
                We combine rigorous technical expertise with strategic investment methodology. 
                Our team of engineers and analysts work in concert to identify opportunities 
                and execute with precision.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Founded with a commitment to excellence, Twilight Labs has grown into a 
                trusted partner for institutions and individuals navigating the digital asset landscape.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/40">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-display font-medium text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
