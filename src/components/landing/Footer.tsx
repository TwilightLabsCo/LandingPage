import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Twilight Labs" className="w-7 h-7 object-contain" />
            <span className="font-semibold text-foreground text-sm">Twilight Labs</span>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Twilight Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
