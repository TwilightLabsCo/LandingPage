import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Twilight Labs" className="w-8 h-8 object-contain transition-transform group-hover:scale-110" />
          <span className="font-bold text-foreground tracking-tight">Twilight Labs</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          {['About', 'Services', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-all duration-200"
            >
              {item}
            </button>
          ))}
        </nav>

        <Button 
          onClick={() => scrollToSection("contact")}
          size="sm"
          className="rounded-full px-5 h-10 gap-2 group font-semibold shadow-sm hover:shadow-md transition-all"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
