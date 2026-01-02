import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background pt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium text-xs sm:text-sm tracking-wide">Now Accepting New Partners</span>
          </div>
          
          <h1 className="animate-fade-up-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight mb-6">
            Turn Your Vision Into{" "}
            <span className="text-primary">Profitable Digital Assets</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
            Partner with Twilight Labs to invest, build, and launch digital assets that generate real returns.
          </p>
          
          {/* Social proof */}
          <p className="animate-fade-up-delay-2 text-xs sm:text-sm text-muted-foreground/70 mb-10">
            Trusted by <span className="text-foreground font-medium">50+</span> partners worldwide
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="rounded-full px-8 gap-2 group h-12 hover:scale-105 hover:shadow-lg active:scale-100 transition-all duration-300 bg-primary text-primary-foreground"
            >
              Get Your Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 h-12 hover:scale-105 hover:shadow-md active:scale-100 transition-all duration-300"
            >
              See How It Works
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="animate-fade-up-delay-3 flex items-center justify-center gap-6 mt-10 text-muted-foreground/60 text-xs">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              No upfront fees
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              24h response
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              100% confidential
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;
