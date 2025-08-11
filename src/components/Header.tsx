import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-teal rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <a href="#" className="text-xl font-bold text-teal-primary font-heading cursor-pointer">
              MaanShanti
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-teal-primary transition-colors font-medium">
              Business
            </a>
            <a href="#" className="text-foreground hover:text-teal-primary transition-colors font-medium">
              About
            </a>
            <a href="#" className="text-foreground hover:text-teal-primary transition-colors font-medium">
              Advice
            </a>
            <a href="#" className="text-foreground hover:text-teal-primary transition-colors font-medium">
              Therapist Jobs
            </a>
            <a href="#" className="text-foreground hover:text-teal-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Sign In Button */}
          <Button variant="hero" className="rounded-full px-6">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;