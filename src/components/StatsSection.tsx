import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const stats = [
    { number: 408000, label: "People who have started therapy" },
    { number: 33000, label: "Credentialed ready to help" },
    { number: 3000000, label: "Messages and live sessions" },
  ];

  // Counter animation hook
  const useCountUp = (end, duration, startWhenVisible) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startWhenVisible) return;
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration, startWhenVisible]);

    return count;
  };

  // Typing animation logic
  const headingPhrases = [
    "The world's largest therapy service",
    "India's trusted therapy service",
    "Your personal therapy service"
  ];

  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = headingPhrases[phraseIndex];

    if (!isDeleting && charIndex <= currentPhrase.length) {
      // Typing forward
      setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting backward
      setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex < 0) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % headingPhrases.length);
    }
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="bg-gradient-teal text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="hidden lg:flex items-center text-white/70 text-sm">
              <div className="w-px h-16 bg-white/30 mr-4"></div>
              <span className="transform -rotate-90 whitespace-nowrap">
                Scroll Down
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight font-heading">
                <span className="border-r-4 border-yellow-soft pr-1">
                  {displayText}
                </span>
                <br />
                <span className="text-yellow-soft">100% online.</span>
              </h2>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-yellow-soft"></div>
                <div className="w-6 h-0.5 bg-yellow-soft"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              When you join MaanShanti, our goal is to provide you with a
              personalized therapist match that is tailored to your preferences
              and needs. All of our therapists are credentialed professionals
              that are skilled in treating challenges like anxiety and
              depression.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const { ref, inView } = useInView({ triggerOnce: true });
                const count = useCountUp(stat.number, 1500, inView);

                return (
                  <div ref={ref} key={index} className="text-center md:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {count >= 1000
                        ? `${Math.floor(count / 1000)}${
                            count >= 1000000 ? "M+" : "K+"
                          }`
                        : count}
                    </div>
                    <div className="text-white/80 text-sm leading-tight">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
