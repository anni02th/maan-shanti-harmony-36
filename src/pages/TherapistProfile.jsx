import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Calendar, MessageCircle, Phone, Mail, Award, Users, BookOpen, Clock as ClockIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TherapistProfile = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showBooking, setShowBooking] = useState(false);

  // Mock therapist data - in real app this would come from API
  const therapist = {
    id: parseInt(id),
    name: "Dr. Sarah Johnson",
    specialization: "Clinical Psychologist",
    location: "New York, NY",
    languages: ["English", "Spanish"],
    issues: ["Anxiety", "Depression", "Trauma", "PTSD", "Stress Management"],
    rating: 4.9,
    reviews: 127,
    experience: "15+ years",
    availability: "Mon-Fri, 9AM-6PM",
    image: "/src/assets/therapist-1.jpg",
    bio: "Dr. Sarah Johnson is a licensed clinical psychologist with over 15 years of experience specializing in trauma therapy and mindfulness-based interventions. She holds a Ph.D. in Clinical Psychology from Columbia University and has extensive training in evidence-based treatments for anxiety, depression, and post-traumatic stress disorder.",
    education: [
      "Ph.D. in Clinical Psychology - Columbia University",
      "M.A. in Psychology - New York University",
      "B.A. in Psychology - University of California, Berkeley"
    ],
    certifications: [
      "Licensed Clinical Psychologist (NY State)",
      "EMDR Certified Therapist",
      "Mindfulness-Based Cognitive Therapy (MBCT) Certified",
      "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)"
    ],
    approach: "Dr. Johnson takes a holistic, client-centered approach to therapy, combining evidence-based treatments with mindfulness practices. She believes in creating a safe, non-judgmental space where clients can explore their experiences and develop practical skills for managing life's challenges.",
    specialties: [
      "Trauma and PTSD treatment",
      "Anxiety and depression management",
      "Mindfulness and meditation techniques",
      "Cognitive Behavioral Therapy (CBT)",
      "Eye Movement Desensitization and Reprocessing (EMDR)",
      "Stress reduction and coping strategies"
    ],
    price: "$150/session",
    sessionLength: "50-60 minutes",
    insurance: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth"],
    onlineTherapy: true,
    inPersonTherapy: true
  };

  const reviews = [
    {
      id: 1,
      name: "Jennifer M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Dr. Johnson has been incredibly helpful with my anxiety. Her approach is both professional and compassionate. I've learned practical tools that I use every day."
    },
    {
      id: 2,
      name: "Michael R.",
      rating: 5,
      date: "1 month ago",
      comment: "After struggling with PTSD for years, Dr. Johnson's trauma-focused approach has been life-changing. She's patient, understanding, and truly knows her field."
    },
    {
      id: 3,
      name: "Sarah L.",
      rating: 4,
      date: "2 months ago",
      comment: "Great experience overall. Dr. Johnson is very knowledgeable and creates a safe environment. The mindfulness techniques she taught me have been invaluable."
    }
  ];

  const availableSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const availableDates = [
    "Monday, Dec 16", "Tuesday, Dec 17", "Wednesday, Dec 18", "Thursday, Dec 19", "Friday, Dec 20"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 h-80 rounded-2xl flex items-center justify-center">
                  <Users className="w-32 h-32 text-white" />
                </div>
              </motion.div>

              {/* Profile Info */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{therapist.name}</h1>
                    <p className="text-xl text-blue-600 font-medium mb-3">{therapist.specialization}</p>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-6">
                        <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold">{therapist.rating}</span>
                        <span className="text-gray-500 ml-1">({therapist.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-gray-600">{therapist.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{therapist.price}</div>
                    <div className="text-gray-600">{therapist.sessionLength}</div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">{therapist.bio}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {therapist.issues.map((issue, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {issue}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setShowBooking(true)}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </button>
                  <button className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detailed Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">About Dr. Johnson</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                      Education
                    </h3>
                    <ul className="space-y-2">
                      {therapist.education.map((edu, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Certifications
                    </h3>
                    <ul className="space-y-2">
                      {therapist.certifications.map((cert, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Therapeutic Approach</h3>
                    <p className="text-gray-600 leading-relaxed">{therapist.approach}</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialties & Services</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas of Expertise</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {therapist.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Options</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-gray-700">Online Therapy</span>
                        <span className="text-green-600 font-medium">Available</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-gray-700">In-Person Sessions</span>
                        <span className="text-green-600 font-medium">Available</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance Accepted</h3>
                    <div className="flex flex-wrap gap-2">
                      {therapist.insurance.map((ins, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {ins}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
              <p className="text-xl text-gray-600">What clients say about their experience</p>
            </motion.div>

            <div className="space-y-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBooking && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowBooking(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Appointment</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <select 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose a date</option>
                  {availableDates.map((date, index) => (
                    <option key={index} value={date}>{date}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                <select 
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose a time</option>
                  {availableSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setShowBooking(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    // Handle booking logic here
                    setShowBooking(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default TherapistProfile; 