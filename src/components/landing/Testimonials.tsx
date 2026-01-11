import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "Twilight Labs turned our concept into a fully operational platform in 6 weeks. The ROI exceeded our expectations by 3x.",
      name: "Marcus Chen",
      role: "Founder, DeFi Protocol",
      metric: "312% ROI",
      initials: "MC"
    },
    {
      quote: "Their strategic approach and technical expertise helped us navigate the complex crypto landscape with confidence.",
      name: "Sarah Williams",
      role: "CEO, Web3 Startup",
      metric: "$2.1M Raised",
      initials: "SW"
    },
    {
      quote: "We went from idea to market in record time. The team delivered beyond what we thought possible.",
      name: "James Rodriguez",
      role: "Managing Partner",
      metric: "6 Week Launch",
      initials: "JR"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
            What Partners Say
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-16">
            Results that speak for themselves
          </h2>
          
          <div className={`relative min-h-[280px] flex items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 flex flex-col items-center justify-center ${
                  index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <blockquote className="text-xl sm:text-2xl md:text-3xl text-foreground font-medium leading-relaxed mb-8 max-w-3xl">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-primary font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <span className="inline-block mt-3 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-sm">
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className={`flex justify-center gap-3 mt-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/20 w-2.5 hover:bg-primary/40"
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
