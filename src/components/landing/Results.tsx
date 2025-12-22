import { useState, useEffect } from "react";
import result1 from "@/assets/result-1.jpeg";
import result2 from "@/assets/result-2.jpeg";
import result3 from "@/assets/result-3.jpeg";

const Results = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [results.length]);

  return (
    <section id="results" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Proven Results
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
              Real performance, real returns
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
              Our track record speaks for itself. See the results of our strategic investments.
            </p>
          </div>

          {/* Single Cycling Frame */}
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg max-w-sm mx-auto">
            {/* Image Container */}
            <div className="aspect-[3/4] relative overflow-hidden bg-muted">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {result.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {result.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {results.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-5"
                      : "bg-white/50 w-2 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
