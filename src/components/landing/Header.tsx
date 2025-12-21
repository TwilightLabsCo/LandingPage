import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TL</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Twilight Labs</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection("contact")}
          size="sm"
          className="rounded-full px-6"
        >
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
