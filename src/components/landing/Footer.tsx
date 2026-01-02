import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Final CTA */}
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Get your free strategy today.
          </p>
          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full px-6 gap-2 group mb-10"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Branding */}
          <div className="flex flex-col items-center gap-2 pt-6 border-t border-border/30">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Twilight Labs" className="w-5 h-5 object-contain opacity-70" />
              <span className="font-medium text-muted-foreground text-sm">Twilight Labs</span>
            </div>
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
