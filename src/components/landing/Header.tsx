import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm tracking-tight">TL</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground tracking-tight">Twilight Labs</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Digital Assets</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Contact
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection("contact")}
          size="sm"
          className="rounded-md px-6 font-medium tracking-tight"
        >
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
