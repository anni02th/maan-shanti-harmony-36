import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    age: 28,
    location: "Mumbai",
    rating: 5,
    review:
      "MaanShanti helped me find the perfect therapist who truly understood my anxiety. The online sessions were convenient and effective. I feel so much better now!",
    therapist: "Dr. Priya Sharma",
    condition: "Anxiety & Stress",
    duration: "3 months",
  },
  {
    id: 2,
    name: "Rajesh K.",
    age: 35,
    location: "Delhi",
    rating: 5,
    review:
      "After struggling with depression for years, I finally found help through MaanShanti. The matching process was seamless and my therapist is amazing.",
    therapist: "Dr. Arjun Patel",
    condition: "Depression",
    duration: "6 months",
  },
  {
    id: 3,
    name: "Meera P.",
    age: 42,
    location: "Bangalore",
    rating: 5,
    review:
      "The trauma therapy I received has been life-changing. Being able to do sessions from home made me feel safe and comfortable to open up.",
    therapist: "Dr. Rajesh Kumar",
    condition: "PTSD & Trauma",
    duration: "8 months",
  },
  {
    id: 4,
    name: "Arjun S.",
    age: 24,
    location: "Pune",
    rating: 5,
    review:
      "As a college student dealing with stress and relationship issues, MaanShanti provided affordable and accessible therapy that fit my schedule perfectly.",
    therapist: "Dr. Priya Sharma",
    condition: "Relationship Issues",
    duration: "2 months",
  },
];

// Duplicate for seamless loop
const duplicatedReviews = [...reviews, ...reviews];

const ReviewCard = ({ name, review, rating, age, location, therapist, condition, duration }) => (
  <div
    className="min-w-[460px] max-w-xs bg-white rounded-3xl p-8  border border-gray-200 relative mx-3 flex-shrink-0 cursor-pointer hover:border-teal-500 transition-all duration-300 ease-in-out"
  >
    <div className="absolute top-6 right-6 opacity-10">
      <Quote className="w-12 h-12 text-teal-500" />
    </div>
    <div className="flex items-center space-x-2 mb-4">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-gray-700">{rating}/5</span>
    </div>
    <blockquote className="text-gray-800 text-wrap leading-relaxed mb-6 text-lg">"{review}"</blockquote>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{age} years old, {location}</p>
        </div>
        <p className="text-sm font-medium text-teal-500">{duration} of therapy</p>
      </div>
      <div className="bg-teal-50 rounded-xl p-4 space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Therapist:</span>
          <span className="font-medium text-gray-800">{therapist}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Condition:</span>
          <span className="font-medium text-teal-700">{condition}</span>
        </div>
      </div>
    </div>
  </div>
);

const ReviewMarquee = () => {
  return (
    <section className="relative py-16 bg-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            What Our <span className="text-teal-600">Clients Say</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Real experiences from people who found healing and hope with us.
          </motion.p>
        </motion.div>

        <div className="group overflow-hidden relative">
          <div className="flex whitespace-nowrap gap-6 animate-marquee group-hover:animation-paused" style={{ minWidth: "200%" }}>
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-teal-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-teal-50 to-transparent" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ReviewMarquee;
