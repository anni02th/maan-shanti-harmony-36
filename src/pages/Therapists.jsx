import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, MapPin, Star, Clock, MessageCircle, Calendar, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Therapists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Clinical Psychologist",
      location: "New York, NY",
      languages: ["English", "Spanish"],
      issues: ["Anxiety", "Depression", "Trauma"],
      rating: 4.9,
      reviews: 127,
      experience: "15+ years",
      availability: "Mon-Fri, 9AM-6PM",
      image: "/src/assets/therapist-1.jpg",
      bio: "Licensed clinical psychologist specializing in trauma therapy and mindfulness-based interventions.",
      price: "$150/session"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Cognitive Behavioral Therapist",
      location: "Los Angeles, CA",
      languages: ["English", "Mandarin"],
      issues: ["Anxiety", "OCD", "Stress"],
      rating: 4.8,
      reviews: 89,
      experience: "12+ years",
      availability: "Mon-Sat, 10AM-7PM",
      image: "/src/assets/therapist-2.jpg",
      bio: "Expert in CBT with focus on anxiety disorders and evidence-based treatments.",
      price: "$140/session"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Family Therapist",
      location: "Chicago, IL",
      languages: ["English", "Spanish"],
      issues: ["Family Issues", "Child Psychology", "Communication"],
      rating: 4.7,
      reviews: 156,
      experience: "18+ years",
      availability: "Mon-Fri, 8AM-5PM",
      image: "/src/assets/therapist-3.jpg",
      bio: "Specialist in family systems therapy and child psychology with play therapy certification.",
      price: "$160/session"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "Psychiatrist",
      location: "Boston, MA",
      languages: ["English"],
      issues: ["Depression", "Bipolar", "Medication Management"],
      rating: 4.6,
      reviews: 203,
      experience: "20+ years",
      availability: "Mon-Fri, 9AM-5PM",
      image: "/src/assets/therapist-1.jpg",
      bio: "Board-certified psychiatrist with expertise in mood disorders and psychopharmacology.",
      price: "$200/session"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      specialization: "Art Therapist",
      location: "Seattle, WA",
      languages: ["English", "Korean"],
      issues: ["Creative Expression", "Trauma", "Self-Discovery"],
      rating: 4.9,
      reviews: 67,
      experience: "10+ years",
      availability: "Mon-Sat, 11AM-8PM",
      image: "/src/assets/therapist-2.jpg",
      bio: "Creative arts therapist helping clients express and heal through artistic mediums.",
      price: "$130/session"
    },
    {
      id: 6,
      name: "Dr. Robert Thompson",
      specialization: "Addiction Counselor",
      location: "Miami, FL",
      languages: ["English", "Spanish"],
      issues: ["Substance Abuse", "Recovery", "Relapse Prevention"],
      rating: 4.5,
      reviews: 134,
      experience: "14+ years",
      availability: "Mon-Fri, 7AM-4PM",
      image: "/src/assets/therapist-3.jpg",
      bio: "Specialized in addiction treatment and recovery support with evidence-based approaches.",
      price: "$120/session"
    }
  ];

  const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Boston, MA", "Seattle, WA", "Miami, FL"];
  const issues = ["Anxiety", "Depression", "Trauma", "Family Issues", "Addiction", "Stress", "OCD", "Bipolar"];
  const languages = ["English", "Spanish", "Mandarin", "Korean", "French", "German"];

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || therapist.location === selectedLocation;
    const matchesIssue = !selectedIssue || therapist.issues.includes(selectedIssue);
    const matchesLanguage = !selectedLanguage || therapist.languages.includes(selectedLanguage);
    
    return matchesSearch && matchesLocation && matchesIssue && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-heading"
          >
            Find Your Therapist
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Connect with experienced mental health professionals who can guide you 
            on your journey to healing and personal growth.
          </motion.p>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search therapists by name or specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-input rounded-xl focus:ring-2 focus:ring-teal-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-4"
            >
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal-primary focus:border-transparent bg-background text-foreground"
              >
                <option value="">All Locations</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>

              <select
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                className="px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal-primary focus:border-transparent bg-background text-foreground"
              >
                <option value="">All Issues</option>
                {issues.map((issue, index) => (
                  <option key={index} value={issue}>{issue}</option>
                ))}
              </select>

              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal-primary focus:border-transparent bg-background text-foreground"
              >
                <option value="">All Languages</option>
                {languages.map((language, index) => (
                  <option key={index} value={language}>{language}</option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapists Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-2 font-heading">
              {filteredTherapists.length} Therapist{filteredTherapists.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-muted-foreground">Showing results based on your search criteria</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTherapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-shadow border border-border"
              >
                <div className="h-48 bg-gradient-teal flex items-center justify-center">
                  <Users className="w-24 h-24 text-white" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{therapist.name}</h3>
                      <p className="text-teal-primary font-medium">{therapist.specialization}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{therapist.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">({therapist.reviews} reviews)</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {therapist.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {therapist.experience} experience
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {therapist.availability}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{therapist.bio}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {therapist.issues.slice(0, 3).map((issue, issueIndex) => (
                        <span key={issueIndex} className="px-3 py-1 bg-teal-light text-teal-primary text-xs rounded-full">
                          {issue}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {therapist.languages.map((language, langIndex) => (
                        <span key={langIndex} className="px-3 py-1 bg-green-soft text-green-800 text-xs rounded-full">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">{therapist.price}</span>
                    <button className="bg-gradient-teal text-white px-6 py-2 rounded-xl font-medium hover:bg-teal-dark transition-all duration-300">
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTherapists.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-muted-foreground mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No therapists found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Need Help Finding the Right Therapist?</h2>
            <p className="text-xl text-teal-light mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect match based on your specific needs, 
              preferences, and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-primary py-4 px-8 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Get Personalized Recommendations
              </button>
              <button className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-teal-primary transition-colors">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Therapists; 