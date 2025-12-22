import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Twilight Labs" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-foreground">Twilight Labs</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Twilight Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
