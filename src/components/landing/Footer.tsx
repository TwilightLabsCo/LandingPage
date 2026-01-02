import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Final CTA */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Get your free consultation and personalized strategy today.
          </p>
          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="rounded-full px-8 gap-2 group mb-12"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Branding */}
          <div className="flex flex-col items-center gap-3 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Twilight Labs" className="w-6 h-6 object-contain" />
              <span className="font-semibold text-foreground text-sm">Twilight Labs</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Twilight Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
