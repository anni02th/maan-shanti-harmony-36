import { Star, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";

const TherapistSection = () => {
  const therapists = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      image: therapist1,
      specialization: "Anxiety & Depression Specialist",
      experience: "8 years experience",
      rating: 4.9,
      reviews: 127,
      credentials: ["PhD Psychology", "Licensed Therapist"],
      languages: ["English", "Hindi", "Punjabi"],
      approach: "Cognitive Behavioral Therapy (CBT)",
      availability: "Available Today",
    },
    {
      id: 2,
      name: "Dr. Arjun Patel",
      image: therapist2,
      specialization: "Stress & Relationship Counselor",
      experience: "5 years experience",
      rating: 4.8,
      reviews: 89,
      credentials: ["MA Clinical Psychology", "Certified Counselor"],
      languages: ["English", "Gujarati", "Hindi"],
      approach: "Mindfulness-Based Therapy",
      availability: "Available Tomorrow",
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      image: therapist3,
      specialization: "Trauma & PTSD Expert",
      experience: "15 years experience",
      rating: 5.0,
      reviews: 203,
      credentials: ["PhD Clinical Psychology", "EMDR Certified"],
      languages: ["English", "Hindi", "Bengali"],
      approach: "EMDR & Trauma-Focused Therapy",
      availability: "Available This Week",
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet Our Expert <span className="text-blue-600">Therapists</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our licensed therapists are here to help you on your journey to better mental health.
            Each specialist brings unique expertise and compassionate care.
          </motion.p>
        </motion.div>

        {/* Therapist Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {therapists.map((therapist) => (
            <motion.div
              key={therapist.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Therapist Image */}
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl font-bold">{therapist.name.split(' ')[1][0]}</span>
                    </div>
                    <p className="text-sm opacity-90">Professional Photo</p>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium border border-green-200">
                    {therapist.availability}
                  </div>
                </div>
              </div>

              {/* Therapist Info */}
              <div className="text-center space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {therapist.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {therapist.specialization}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(therapist.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {therapist.rating} ({therapist.reviews} reviews)
                  </span>
                </div>

                {/* Experience & Credentials */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">
                      {therapist.experience}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">
                      {therapist.credentials.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap justify-center gap-2">
                  {therapist.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Approach */}
                <p className="text-sm text-gray-600 italic">
                  "{therapist.approach}"
                </p>

                {/* CTA Button */}
                <Link 
                  to={`/therapists/${therapist.id}`}
                  className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/therapists"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 py-3 px-8 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
            >
              View All Therapists
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TherapistSection; 