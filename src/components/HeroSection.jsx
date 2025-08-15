import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef,useState, useEffect } from "react";
import {  } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

// Import or define your emotion images here
import anxietyPerson from "@/assets/anxiety-person-new.jpg";
import depressionPerson from "@/assets/depression-person-new.jpg";
import traumaPerson from "@/assets/trauma-person-new.jpg";
import personalNeedsPerson from "@/assets/personal-needs-new.jpg";

const emotionalStates = [
  {
    image: depressionPerson,
    label: "Depressed",
    bgColor: "bg-yellow-soft",
    shape: "rounded-3xl",
  },
  {
    image: anxietyPerson,
    label: "Anxiety",
    bgColor: "bg-green-soft",
    shape: "rounded-full",
  },
  {
    image: traumaPerson,
    label: "Lost & Trauma",
    bgColor: "bg-teal-light",
    shape: "rounded-2xl",
  },
  {
    image: personalNeedsPerson,
    label: "Personal needs",
    bgColor: "bg-orange-soft",
    shape: "rounded-3xl",
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

// Variants for entrance fade and slide
const entranceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
  // Ref to get card bounds
  const ref = useRef(null);

  // Motion values for cursor position relative to center of card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform rotation based on cursor with clamp to small degrees
  const rotateX = useTransform(y, [-30, 30], [7, -7]);
  const rotateY = useTransform(x, [-30, 30], [-7, 7]);

  // Handler for mouse move to update x,y motion values for parallax
  function handleMouseMove(event) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width; // 0 to 1
    const py = (event.clientY - rect.top) / rect.height; // 0 to 1

    // Calculate normalized x,y from center -30 to +30 range
    x.set((px - 0.5) * 60);
    y.set((py - 0.5) * 60);
  }

  // Reset on mouse leave
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
      tabIndex={0} // allow keyboard focus
    >
      {children(x, y)}
    </motion.div>
  );
};
const words = ["Embrace Your", "Feel Your", "See Your", "Learn About"];

const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // change every 2 seconds
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
                No.1 Mental Health Support Platform
              </motion.div>

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-heading">
          Deserve and{" "}
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
{" "} <br />
          Peace
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
          Feeling stressed, anxious or depressed? Check your mood and anxiety with our free online test. Online
          evidence-based programs to help improve the way you feel.
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
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {emotionalStates.map((state, index) => (
                    <ParallaxCard key={index}>
                      {(xMotion, yMotion) => (
                        <motion.div
                          className={classNames(
                            "relative p-4 md:p-6 shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer",
                            state.bgColor,
                            state.shape
                          )}
                          variants={maskedRevealVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{ scale: 1.1, rotate: 3 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          {/* Label Tag */}
                          <div className="absolute -top-3 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-foreground shadow-soft border border-border/20">
                            {state.label}
                          </div>

                          {/* Image with light sweep and magnet effect */}
                          <motion.div
                            style={{
                              x: xMotion,
                              y: yMotion,
                              originX: 0.5,
                              originY: 0.5,
                              position: "relative",
                              borderRadius: 12,
                              overflow: "hidden",
                            }}
                            className="rounded-xl"
                          >
                            {/* Image */}
                            <img
                              src={state.image}
                              alt={state.label}
                              className="w-full h-full object-cover"
                              draggable={false}
                            />
                            {/* Light sweep effect */}
                            <div style={lightSweepStyle} />
                          </motion.div>
                        </motion.div>
                      )}
                    </ParallaxCard>
                  ))}
                </div>

                {/* Decorative rotating and floating elements */}
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 