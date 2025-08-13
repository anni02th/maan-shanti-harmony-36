import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const location = useLocation();

  const navigation = [
    { name: "Business", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Advice", href: "/questionnaire" },
    { name: "Therapist Jobs", href: "/therapists" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-teal rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <Link to="/" className="text-xl font-bold text-teal-primary font-heading cursor-pointer">
              MaanShanti
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-teal-primary'
                    : 'text-foreground hover:text-teal-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-teal-primary to-teal-dark text-white px-6 py-2 rounded-full font-medium hover:from-teal-dark hover:to-teal-primary transition-all duration-300 flex items-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-foreground hover:text-teal-primary transition-colors flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="text-foreground hover:text-teal-primary font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Button variant="hero" className="rounded-full px-6">
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-teal-primary hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-border py-4"
          >
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-teal-primary bg-teal-light/20'
                      : 'text-foreground hover:text-teal-primary hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-border pt-4">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-teal-primary font-medium"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-foreground font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-foreground font-medium"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/auth"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 bg-teal-primary text-white rounded-lg font-medium text-center"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header; 