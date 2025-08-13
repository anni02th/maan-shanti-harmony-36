import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
            <Link to="/" className="text-xl font-bold text-teal-primary font-heading">
              MaanShanti
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-teal-primary font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-teal-primary font-medium">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-teal-primary font-medium">
              Services
            </Link>
            <Link to="/therapists" className="text-foreground hover:text-teal-primary font-medium">
              Therapists
            </Link>
            <Link to="/contact" className="text-foreground hover:text-teal-primary font-medium">
              Contact
            </Link>
          </nav>

          {/* Sign In */}
          <Link to="/login">
            <Button variant="hero" className="rounded-full px-6">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
