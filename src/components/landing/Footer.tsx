const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm tracking-tight">TL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground tracking-tight">Twilight Labs</span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Digital Assets</span>
              </div>
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
