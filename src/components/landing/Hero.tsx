import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              Digital Asset Innovation
            </span>
          </div>
          
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] tracking-tight-custom mb-8">
            We invest in, code, and create digital assets
          </h1>
          
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Twilight Labs operates at the intersection of technology and finance, 
            building sophisticated digital infrastructure for the modern economy.
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="rounded-md px-8 gap-2 group font-medium tracking-tight h-12"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline" 
              size="lg" 
              className="rounded-md px-8 font-medium tracking-tight h-12 border-border/60 hover:bg-secondary"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
