import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-secondary/60 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Final CTA */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 font-light">
            Get your free strategy today.
          </p>
          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full px-8 h-12 gap-2.5 group text-base font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all mb-16"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Branding */}
          <div className="flex flex-col items-center gap-3 pt-8 border-t border-border/40">
            <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logo} alt="Twilight Labs" className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="font-bold text-foreground/80 group-hover:text-foreground transition-colors">Twilight Labs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Twilight Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
