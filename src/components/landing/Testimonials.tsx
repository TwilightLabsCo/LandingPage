import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Twilight Labs turned our concept into a fully operational platform in 6 weeks. The ROI exceeded our expectations by 3x.",
      name: "Marcus Chen",
      role: "Founder, DeFi Protocol",
      metric: "312% ROI"
    },
    {
      quote: "Their strategic approach and technical expertise helped us navigate the complex crypto landscape with confidence.",
      name: "Sarah Williams",
      role: "CEO, Web3 Startup",
      metric: "$2.1M Raised"
    },
    {
      quote: "We went from idea to market in record time. The team delivered beyond what we thought possible.",
      name: "James Rodriguez",
      role: "Managing Partner",
      metric: "6 Week Launch"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Trusted by Partners
          </p>
          
          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 flex flex-col items-center justify-center ${
                  index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-6 max-w-2xl">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm font-semibold text-primary mt-2">{testimonial.metric}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
