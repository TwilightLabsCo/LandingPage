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
          <p className="animate-fade-up text-primary font-medium text-sm tracking-widest uppercase mb-6">
            Digital Asset Innovation
          </p>
          
          <h1 className="animate-fade-up-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight mb-6">
            We invest in, code, and create{" "}
            <span className="text-primary">digital assets</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Twilight Labs is a forward-thinking company at the intersection of technology and finance, 
            building the digital infrastructure of tomorrow.
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="rounded-full px-8 gap-2 group h-12 hover:scale-105 hover:shadow-lg active:scale-100 transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 h-12 hover:scale-105 hover:shadow-md active:scale-100 transition-all duration-300"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;
