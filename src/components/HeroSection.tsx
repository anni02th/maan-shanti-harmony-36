import { Button } from "@/components/ui/button";
import anxietyPerson from "@/assets/anxiety-person-new.jpg";
import depressionPerson from "@/assets/depression-person-new.jpg";
import traumaPerson from "@/assets/trauma-person-new.jpg";
import personalNeedsPerson from "@/assets/personal-needs-new.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

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
                Feeling stressed, anxious or depressed? Check your mood and
                anxiety with our free online test. Online evidence-based
                programs to help improve the way you feel.
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

          {/* Right Visual Grid */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {emotionalStates.map((state, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                  }}
                  className={`relative ${state.bgColor} ${state.shape} p-4 md:p-6 shadow-card transition-all duration-300 group`}
                >
                  {/* Label Tag */}
                  <div className="absolute -top-3 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-foreground shadow-soft border border-border/20">
                    {state.label}
                  </div>

                  {/* Image */}
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <motion.img
                      src={state.image}
                      alt={state.label}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-teal-primary rounded rotate-45 opacity-60"
              animate={{ y: [2, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-soft rounded-full opacity-70"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-soft rounded-full opacity-60"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
