import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background pt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Social proof badge */}
          <div className="animate-fade-up inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background" />
              <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-background" />
              <div className="w-6 h-6 rounded-full bg-primary/40 border-2 border-background" />
            </div>
            <span className="text-foreground font-medium text-xs sm:text-sm">50+ partners trust us</span>
          </div>
          
          <h1 className="animate-fade-up-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight mb-6">
            Turn Ideas Into{" "}
            <span className="text-primary">Profitable Assets</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            We invest, build, and launch digital assets that generate real returns. Get your free strategy today.
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="rounded-full px-8 gap-2 group h-12 hover:scale-105 hover:shadow-lg active:scale-100 transition-all duration-300 bg-primary text-primary-foreground"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="animate-fade-up-delay-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground text-xs sm:text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              100% Money-Back Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              No Upfront Fees
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
              24h Response
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
