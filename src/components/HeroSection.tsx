import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import meditation from "@/assets/meditation.png";
import shadow from "@/assets/shadow.png";

// ---- Animation styles for ovals ----
const ovalStyles = `
@keyframes rotate-cw {
  to { transform: rotate(360deg); }
}
@keyframes rotate-ccw {
  to { transform: rotate(-360deg); }
}
.oval-cw {
  animation: rotate-cw 6s linear infinite;
}
.oval-ccw {
  animation: rotate-ccw 8s linear infinite;
}
.oval-cw2 {
  animation: rotate-cw 10s linear infinite;
}
`;

const TEMP_SIZE = 600;
const NUM_CIRCLES = 10;
const MIN_SIZE = 8;
const MAX_SIZE = 24;
const MAX_SPEED = 5;

const TempVisual = () => {
  const [circles, setCircles] = useState(() =>
    Array.from({ length: NUM_CIRCLES }, () => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * MAX_SPEED * 0.5 + 0.05;
      return {
        x: Math.random() * TEMP_SIZE,
        y: Math.random() * TEMP_SIZE,
        size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
        vx: speed * Math.cos(angle),
        vy: speed * Math.sin(angle),
      };
    })
  );

  const circlesRef = useRef(circles);
  circlesRef.current = circles;

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setCircles(prev =>
        prev.map(({ x, y, vx, vy, size }) => {
          let newX = x + vx;
          let newY = y + vy;

          if (newX < 0) { newX = 0; vx = -vx; }
          else if (newX > TEMP_SIZE - size) { newX = TEMP_SIZE - size; vx = -vx; }
          if (newY < 0) { newY = 0; vy = -vy; }
          else if (newY > TEMP_SIZE - size) { newY = TEMP_SIZE - size; vy = -vy; }

          const angleChange = (Math.random() - 0.5) * 0.1;
          let speed = Math.sqrt(vx * vx + vy * vy);
          let angle = Math.atan2(vy, vx);
          angle += angleChange;
          vx = speed * Math.cos(angle);
          vy = speed * Math.sin(angle);

          if (speed > MAX_SPEED) {
            speed = MAX_SPEED;
            vx = speed * Math.cos(angle);
            vy = speed * Math.sin(angle);
          }

          return { x: newX, y: newY, vx, vy, size };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex justify-center flex-col gap-16">
      <style>{ovalStyles}</style>

      {/* Rotating Ovals */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="oval-cw absolute"
          style={{ width: "100%", height: "50%", borderRadius: "50% / 50%", border: "3px solid #81e6d9", opacity: 0.5 }} />
        <div className="oval-ccw absolute"
          style={{ width: "100%", height: "50%", borderRadius: "50% / 50%", border: "3px dashed #4fd1c5", opacity: 0.5 }} />
        <div className="oval-cw2 absolute"
          style={{ width: "80%", height: "40%", borderRadius: "50% / 50%", border: "3px solid #4fd1c5", opacity: 0.5 }} />
      </div>

      {/* Moving Circles */}
      <div className="absolute pointer-events-none"
        style={{ width: TEMP_SIZE, height: TEMP_SIZE, top: "-100px", left: "-100px" }}>
        {circles.map(({ x, y, size }, i) => (
          <div key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: "#81e6d9",
              opacity: 0.75,
              transform: `translate(${x}px, ${y}px)`,
              transition: "transform 0.05s linear",
            }} />
        ))}
      </div>

      {/* Meditation image and shadow */}
      <img src={meditation} alt="Meditation"
        className="w-56 sm:w-72 md:w-96 mx-auto z-10 animate-float"
        style={{ position: "relative" }} />
      <img src={shadow} alt="Shadow"
        className="bottom-0 w-40 sm:w-56 md:w-72 mx-auto animate-shadow"
        style={{ position: "relative" }} />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-8 lg:gap-y-0 lg:gap-x-20 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
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
                Deserve and <br />
                <span className="text-teal-primary">Embrace Your</span> <br /> Peace
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                Feeling stressed, anxious or depressed? Check your mood and anxiety with our free online test. Online evidence-based programs to help improve the way you feel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button variant="hero" size="lg" className="rounded-xl px-8">
                Get Started
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-xl px-8">
                Log In
              </Button>
            </div>
          </motion.div>

          {/* Right Section with TempVisual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mt-10 lg:mt-0"
          >
            <TempVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
