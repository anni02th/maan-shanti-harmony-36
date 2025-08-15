import { motion } from "framer-motion";
import { Search, MessageSquare, Laptop } from "lucide-react";
import therapySession from "@/assets/therapy-session2.png";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Your Ideal Therapist",
      description: "We know how important it is to have the right therapist who understands you.",
    },
    {
      icon: MessageSquare,
      title: "Communicate your way",
      description: "You can communicate with your therapist by messaging, chat, phone or video.",
      highlight: true,
    },
    {
      icon: Laptop,
      title: "Get therapy when you need it",
      description:
        "You don't need an appointment to reach out to your therapist and you can message them anytime.",
    },
  ];

  // Parameters for circle size animation for 2 circles only
  const circleSizes = [62, 30]; // Base sizes in pixels
  const sizeVariance = 8; // Size variance in pixels
  const minScale1 = 1 - sizeVariance / circleSizes[0];
  const maxScale1 = 1;

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            How the Process Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand that navigating the realm of mental health support can be
            complex, which is why we've designed this section to offer clarity and guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 ${
                  step.highlight
                    ? "bg-teal-primary text-white shadow-lg hover:shadow-xl hover:shadow-teal-primary/30"
                    : "bg-white border border-border/20 shadow-sm hover:shadow-lg hover:shadow-teal-primary/40"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500 ${
                    step.highlight ? "bg-white/20" : "bg-teal-light group-hover:bg-teal-primary/10"
                  }`}
                >
                  <step.icon
                    className={`w-6 h-6 transition-colors duration-500 ${
                      step.highlight ? "text-white" : "text-teal-primary"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-semibold mb-3 font-heading ${
                    step.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    step.highlight ? "text-white/90" : "text-muted-foreground"
                  }`}
                >
                  {step.description}
                </p>

                {/* Step Number */}
                <div
                  className={`absolute top-4 right-6 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step.highlight ? "bg-white/20 text-white" : "bg-teal-light text-teal-primary"
                  }`}
                >
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Animated Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card group">
              <img
                src={therapySession}
                alt="Therapy session with elderly therapist and young client"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-3xl"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>

            {/* Animated Decorative Elements */}
            {/* Circle 1 */}
            <motion.div
              className="absolute -top-6 -left-6 bg-yellow-soft rounded-full opacity-60"
              animate={{
                scale: [minScale1, maxScale1, minScale1], // inverse scaling from smaller to bigger to smaller
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
                ease: "easeInOut",
                delay: 0,
              }}
              style={{ width: circleSizes[0], height: circleSizes[0] }}
            />

            {/* Circle 2 */}
            <motion.div
              className="absolute top-1/4 -right-8 bg-green-soft rounded-full opacity-60"
              animate={{
                scale: [maxScale1, minScale1, maxScale1], // opposite phase of circle 1
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
                ease: "easeInOut",
                delay: 0,
              }}
              style={{ width: circleSizes[1], height: circleSizes[1] }}
            />

            {/* Rotating square-shaped orange element */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-orange-soft rounded-lg opacity-70"
              style={{ width: 48, height: 48 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
