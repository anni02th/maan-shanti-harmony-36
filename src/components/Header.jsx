import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Business", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Advice", href: "/questionnaire" },
    { name: "Therapists", href: "/therapists" },
    { name: "Contact", href: "/contact" },
    { name: "Career Counselling", href: "/career-counselling" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-teal-dark backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center shadow">
              <img src="logo.png" alt="" />
            </div>
            <Link to="/" className="text-xl font-bold text-white font-heading cursor-pointer tracking-wide">
              MaanShanti
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-semibold px-2 py-1 transition-colors duration-200 group ${
                  isActive(item.href)
                    ? "text-teal-200"
                    : "text-white/90 hover:text-teal-200"
                }`}
                tabIndex={0}
              >
                {item.name}
                {/* Animated underline on hover/focus/active */}
                <span
                  className={`absolute left-0 -bottom-0.5 w-full h-[2px] rounded-full bg-teal-200 scale-x-0 opacity-0 group-hover:scale-x-100 group-focus:scale-x-100 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 ${
                    isActive(item.href)
                      ? "scale-x-100 opacity-100"
                      : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="bg-teal-light text-teal-dark px-6 py-2 rounded-full font-semibold shadow hover:bg-teal-200 focus:ring-2 focus:ring-teal-light flex items-center transition-all"
                >
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-white/80 hover:text-teal-200 font-medium transition-colors flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="text-white/80 hover:text-teal-200 font-semibold transition-colors px-3 py-1"
                >
                  Sign In
                </Link>
                <Button
                  variant="hero"
                  onClick={() => navigate("/questionnaire")}
                  className="rounded-full px-6 font-semibold bg-teal-200 text-teal-dark border-none hover:bg-teal-light shadow transition-all"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-teal-200 hover:bg-teal-primary/20 transition-colors"
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
            className="md:hidden border-t border-teal-primary/20 py-4 bg-teal-dark/95"
          >
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-semibold transition-colors relative group
                    ${
                      isActive(item.href)
                        ? "text-teal-200 bg-teal-primary/10"
                        : "text-white/90 hover:text-teal-200 hover:bg-teal-primary/10"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-4 -bottom-1 w-[80%] h-[2.5px] rounded-full bg-teal-200 scale-x-0 opacity-0 group-hover:scale-x-100 group-focus:scale-x-100 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 ${
                      isActive(item.href)
                        ? "scale-x-100 opacity-100"
                        : ""
                    }`}
                  ></span>
                </Link>
              ))}
              <div className="border-t border-teal-primary/20 pt-4">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-teal-200 font-semibold"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white/90 font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-white/90 font-semibold"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/questionnaire"
                      onClick={() => setIsMenuOpen(false)}
                      className="block mt-2 px-4 py-2 bg-teal-200 text-teal-dark rounded-lg font-semibold text-center shadow"
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
