import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroVideo from "@/assets/meditation.mp4"; // <-- add your video file here

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-teal-light/50 border border-teal-primary/20 rounded-full text-sm text-teal-dark font-medium"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              No.1 Mental Health Support Platform
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-heading">
                Deserve and
                <br />
                <span className="text-teal-primary">Embrace Your</span>
                <br />
                Peace
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                Feeling stressed, anxious or depressed? Check your mood and anxiety with our free online test. Online evidence-based programs to help improve the way you feel.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="rounded-xl px-8">
                Get Started
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-xl px-8">
                Log In
              </Button>
            </div>
          </motion.div>

          {/* Right Section with Video */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Optional decorative element */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-soft rounded-full opacity-70"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
