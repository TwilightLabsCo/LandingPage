import result1 from "@/assets/result-1.jpeg";
import result2 from "@/assets/result-2.jpeg";
import result3 from "@/assets/result-3.jpeg";

const Results = () => {
  const results = [
    {
      image: result1,
      title: "Portfolio Growth",
      description: "+471% return on digital asset investments"
    },
    {
      image: result2,
      title: "Successful Transactions",
      description: "Seamless blockchain network integrations"
    },
    {
      image: result3,
      title: "Performance Tracking",
      description: "+59.71% all-time portfolio performance"
    }
  ];

  return (
    <section id="results" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
              Proven Results
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Real performance, real returns
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our track record speaks for itself. See the results of our strategic investments and digital asset management.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {result.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {result.description}
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

export default Results;
