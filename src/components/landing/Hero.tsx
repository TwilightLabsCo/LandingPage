import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle2, Clock } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-br from-secondary/80 via-background to-background pt-14 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Social proof badge */}
          <div className="animate-fade-up inline-flex items-center gap-2.5 bg-background/80 backdrop-blur-sm border border-border/60 shadow-sm rounded-full px-5 py-2.5 mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-foreground/90 font-medium text-sm">Trusted by 50+ partners worldwide</span>
          </div>
          
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-7">
            Turn Ideas Into{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Profitable Assets
            </span>
          </h1>
          
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We invest, build, and launch digital assets that generate real returns. 
            <span className="text-foreground font-medium"> Get your free strategy today.</span>
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="rounded-full px-10 gap-2.5 group h-14 text-base font-semibold hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 active:scale-100 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="animate-fade-up-delay-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Shield className="w-4.5 h-4.5 text-primary" />
              100% Money-Back Guarantee
            </span>
            <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <CheckCircle2 className="w-4.5 h-4.5 text-primary" />
              No Upfront Fees
            </span>
            <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Clock className="w-4.5 h-4.5 text-primary" />
              24h Response
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
