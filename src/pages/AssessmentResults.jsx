import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, Heart, Users, Shield, ArrowRight, Star, Calendar, MessageCircle, BookOpen, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AssessmentResults = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("summary");

  // Mock assessment results - in real app this would come from the questionnaire
  const results = {
    primaryConcern: "Anxiety and Stress Management",
    severity: "Moderate",
    recommendedApproach: "Cognitive Behavioral Therapy (CBT) + Mindfulness",
    estimatedDuration: "8-12 weeks",
    confidence: "85%",
    riskLevel: "Low",
    nextSteps: [
      "Schedule initial consultation with recommended therapist",
      "Begin weekly therapy sessions",
      "Practice recommended mindfulness exercises",
      "Track progress using provided tools"
    ]
  };

  const recommendedTherapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Clinical Psychologist",
      matchScore: 95,
      rating: 4.9,
      experience: "15+ years",
      price: "$150/session",
      availability: "Mon-Fri, 9AM-6PM",
      image: "/src/assets/therapist-1.jpg",
      whyRecommended: "Specializes in anxiety disorders and CBT, with excellent track record in stress management"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Cognitive Behavioral Therapist",
      matchScore: 88,
      rating: 4.8,
      experience: "12+ years",
      price: "$140/session",
      availability: "Mon-Sat, 10AM-7PM",
      image: "/src/assets/therapist-2.jpg",
      whyRecommended: "Expert in CBT techniques and has helped many clients with similar anxiety patterns"
    },
    {
      id: 3,
      name: "Dr. Lisa Park",
      specialization: "Mindfulness & Art Therapist",
      matchScore: 82,
      rating: 4.9,
      experience: "10+ years",
      price: "$130/session",
      availability: "Mon-Sat, 11AM-8PM",
      image: "/src/assets/therapist-2.jpg",
      whyRecommended: "Combines traditional therapy with creative mindfulness approaches"
    }
  ];

  const resources = [
    {
      title: "Anxiety Management Workbook",
      type: "Digital Resource",
      description: "Comprehensive guide with exercises and techniques for managing anxiety",
      icon: BookOpen
    },
    {
      title: "Daily Mindfulness App",
      type: "Mobile App",
      description: "Guided meditation and breathing exercises for daily practice",
      icon: Brain
    },
    {
      title: "Stress Reduction Course",
      type: "Online Course",
      description: "6-week program covering stress management techniques and lifestyle changes",
      icon: BookOpen
    },
    {
      title: "Support Group Sessions",
      type: "Group Therapy",
      description: "Weekly virtual support groups for people dealing with anxiety",
      icon: Users
    }
  ];

  const insights = [
    {
      category: "Symptoms Analysis",
      findings: [
        "Your anxiety symptoms are primarily cognitive and physical",
        "Stress levels indicate moderate impact on daily functioning",
        "Good insight into triggers and patterns",
        "Strong motivation for change and improvement"
      ]
    },
    {
      category: "Strengths Identified",
      findings: [
        "High self-awareness and willingness to seek help",
        "Good support system and coping mechanisms",
        "Realistic expectations about therapy process",
        "Commitment to personal growth and wellness"
      ]
    },
    {
      category: "Risk Factors",
      findings: [
        "No immediate safety concerns identified",
        "Mild sleep disruption that could worsen without intervention",
        "Work stress contributing to symptoms",
        "Recommend regular monitoring of mood and anxiety levels"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-100"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Assessment Complete!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Based on your responses, we've analyzed your needs and prepared personalized 
            recommendations to help you on your mental health journey.
          </motion.p>
        </div>
      </motion.div>

      {/* Results Summary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Assessment Summary</h2>
              <p className="text-xl text-gray-600">Here's what we found and how we can help</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  label: "Primary Concern",
                  value: results.primaryConcern,
                  icon: Brain,
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  label: "Severity Level",
                  value: results.severity,
                  icon: Shield,
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  label: "Recommended Approach",
                  value: results.recommendedApproach,
                  icon: Heart,
                  color: "from-green-500 to-teal-500"
                },
                {
                  label: "Estimated Duration",
                  value: results.estimatedDuration,
                  icon: Calendar,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-2">{item.label}</h3>
                  <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Confidence Score */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment Confidence</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - parseInt(results.confidence) / 100)}`}
                      className="text-blue-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">{results.confidence}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Based on the quality and consistency of your responses</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "summary", label: "Summary", icon: CheckCircle },
                { id: "therapists", label: "Recommended Therapists", icon: Users },
                { id: "resources", label: "Resources", icon: BookOpen },
                { id: "insights", label: "Detailed Insights", icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedTab === tab.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Summary Tab */}
            {selectedTab === "summary" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Findings</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Found</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Primary concern: {results.primaryConcern}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Severity level: {results.severity}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Risk level: {results.riskLevel}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Recommended Next Steps</h4>
                      <ul className="space-y-3">
                        {results.nextSteps.map((step, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-2xl text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
                  <p className="text-blue-100 mb-6">Your personalized recommendations are ready. Let's connect you with the right therapist.</p>
                  <button 
                    onClick={() => setSelectedTab("therapists")}
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Recommended Therapists
                  </button>
                </div>
              </motion.div>
            )}

            {/* Therapists Tab */}
            {selectedTab === "therapists" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Recommended Therapists</h3>
                  <p className="text-xl text-gray-600">Based on your assessment, these therapists are the best match for your needs</p>
                </div>

                <div className="space-y-6">
                  {recommendedTherapists.map((therapist, index) => (
                    <motion.div
                      key={therapist.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                            <Users className="w-10 h-10 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-1">{therapist.name}</h4>
                            <p className="text-blue-600 font-medium mb-2">{therapist.specialization}</p>
                            <div className="flex items-center mb-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="text-sm text-gray-600">{therapist.rating} • {therapist.experience}</span>
                            </div>
                            <p className="text-sm text-gray-600">{therapist.availability}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{therapist.price}</div>
                          <div className="text-sm text-gray-500">per session</div>
                          <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {therapist.matchScore}% Match
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{therapist.whyRecommended}</p>
                      
                      <div className="flex gap-3">
                        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                          Book Session
                        </button>
                        <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                          View Profile
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Resources Tab */}
            {selectedTab === "resources" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Recommended Resources</h3>
                  <p className="text-xl text-gray-600">Additional tools and materials to support your mental health journey</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {resources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                    >
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                          <resource.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{resource.title}</h4>
                          <span className="text-sm text-blue-600 font-medium">{resource.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                        Learn More →
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Insights Tab */}
            {selectedTab === "insights" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Detailed Analysis</h3>
                  <p className="text-xl text-gray-600">Deeper insights into your assessment results</p>
                </div>

                <div className="space-y-6">
                  {insights.map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{insight.category}</h4>
                      <ul className="space-y-3">
                        {insight.findings.map((finding, findingIndex) => (
                          <li key={findingIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssessmentResults; 