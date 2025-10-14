import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef,useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

// UPDATED: Card data to reflect the new theme and using placeholder images to resolve path errors
const supportAreas = [
  {
    image: "lander.png",
    label: "Mental Wellness",
  },
];

// Variants for masked reveal with clip-path
const maskedRevealVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

// Light sweep CSS effect for glass morphism
const lightSweepStyle = {
  position: "absolute",
  top: 0,
  left: "-75%",
  width: "50%",
  height: "100%",
  background:
    "linear-gradient(120deg, rgba(255,255,255,0.5) 0%, transparent 80%)",
  transform: "skewX(-25deg)",
  pointerEvents: "none",
  animation: "sweep 10s infinite",
};

// CSS keyframes injected globally for sweep animation
const GlobalStyles = () => (
  <style>{`
    @keyframes sweep {
      0% { left: -75%; }
      100% { left: 125%; }
    }
  `}</style>
);

// Helper component for parallax + magnet effect on cards
const ParallaxCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-30, 30], [7, -7]);
  const rotateY = useTransform(x, [-30, 30], [-7, 7]);

  function handleMouseMove(event) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    x.set((px - 0.5) * 60);
    y.set((py - 0.5) * 60);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 600 }}
      className="will-change-transform"
      tabIndex={0}
    >
      {children(x, y)}
    </motion.div>
  );
};

// UPDATED: Cycling words for the new theme
const words = ["Clarity", "Purpose", "Well-being", "Growth"];

const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyles />
      <section className="min-h-screen bg-gradient-hero flex items-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-8 lg:gap-y-0 lg:gap-x-20 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6 text-center lg:text-left max-w-4xl mx-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-teal-light/50 border border-teal-primary/20 rounded-full text-sm text-teal-dark font-medium"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* UPDATED: Banner text */}
                No. 1 Support for Your Mind and Your Career
              </motion.div>

              <div className="space-y-4">
                {/* UPDATED: Headline text */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-heading">
                  Find Your{" "}
                  <AnimatePresence mode="wait">
                    <motion.span className="text-teal-primary inline-block relative"
                      key={words[index]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                  <br />
                  Build Your Future
                </h1>
                {/* UPDATED: Paragraph text */}
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                  Navigate life's challenges with integrated support for your mental well-being and professional path. Take the first step towards a more balanced life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    className="rounded-xl px-8"
                    onClick={() => navigate("/questionnaire")}
                  >
                    Get Started
                  </Button>
                  
                  <Button
                    variant="hero-outline"
                    size="lg"
                    className="rounded-xl px-8"
                    onClick={() => navigate("/auth")}
                  >
                    Log In
                  </Button>
              </div>
            </motion.div>

            {/* Right Section with Emotional States Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex">
                {/* UPDATED: Using new 'supportAreas' data */}
                <img src="lander.png" alt=""  />
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-teal-primary rounded rotate-45 opacity-60"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-soft rounded-full opacity-70"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-soft rounded-full opacity-60"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

