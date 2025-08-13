import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, BookOpen, Heart, Target, TrendingUp, Bell, Settings, LogOut, Plus, Play, Pause, CheckCircle, Star, MessageCircle, FileText, Video, Music, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data - in real app this would come from authentication
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    joinDate: "March 2024",
    progress: 75,
    streak: 12,
    totalSessions: 8
  };

  const upcomingSessions = [
    {
      id: 1,
      therapist: "Dr. Michael Chen",
      date: "Dec 18, 2024",
      time: "2:00 PM",
      type: "Individual Session",
      duration: "50 minutes",
      status: "confirmed"
    },
    {
      id: 2,
      therapist: "Dr. Sarah Johnson",
      date: "Dec 22, 2024",
      time: "10:00 AM",
      type: "Individual Session",
      duration: "50 minutes",
      status: "pending"
    }
  ];

  const recentSessions = [
    {
      id: 1,
      therapist: "Dr. Emily Rodriguez",
      date: "Dec 11, 2024",
      type: "Family Session",
      duration: "90 minutes",
      rating: 5,
      notes: "Great progress on communication skills"
    },
    {
      id: 2,
      therapist: "Dr. Michael Chen",
      date: "Dec 4, 2024",
      type: "Individual Session",
      duration: "50 minutes",
      rating: 4,
      notes: "Worked on anxiety management techniques"
    }
  ];

  const affirmations = [
    "I am capable of handling whatever comes my way",
    "My mental health is a priority and I deserve support",
    "I am making progress every day, even if it's small",
    "It's okay to not be okay sometimes",
    "I am stronger than my struggles"
  ];

  const quickActions = [
    {
      title: "Book Session",
      icon: Calendar,
      color: "from-blue-500 to-indigo-600",
      description: "Schedule your next therapy session"
    },
    {
      title: "Journal Entry",
      icon: FileText,
      color: "from-green-500 to-teal-600",
      description: "Write about your thoughts and feelings"
    },
    {
      title: "Meditation",
      icon: Heart,
      color: "from-purple-500 to-pink-600",
      description: "Take a moment to center yourself"
    },
    {
      title: "Resources",
      icon: BookOpen,
      color: "from-orange-500 to-red-600",
      description: "Access helpful articles and tools"
    }
  ];

  const progressData = [
    { label: "Anxiety", value: 65, color: "from-blue-500 to-blue-600" },
    { label: "Stress", value: 45, color: "from-green-500 to-green-600" },
    { label: "Mood", value: 80, color: "from-purple-500 to-purple-600" },
    { label: "Sleep", value: 70, color: "from-orange-500 to-orange-600" }
  ];

  const contentLibrary = [
    {
      title: "Managing Anxiety in Daily Life",
      type: "Article",
      duration: "5 min read",
      icon: FileText,
      completed: true
    },
    {
      title: "Mindfulness Breathing Exercise",
      type: "Audio",
      duration: "10 min",
      icon: Music,
      completed: false
    },
    {
      title: "Building Healthy Boundaries",
      type: "Video",
      duration: "15 min",
      icon: Video,
      completed: false
    },
    {
      title: "CBT Techniques for Depression",
      type: "Course",
      duration: "2 hours",
      icon: BookOpen,
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dashboard Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                  Welcome back, {user.name}! 👋
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-600"
                >
                  Continue your mental health journey with personalized support and resources.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 lg:mt-0 flex items-center space-x-4"
              >
                <button className="bg-white text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications
                </button>
                <button className="bg-white text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Settings
                </button>
                <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-600 transition-colors flex items-center">
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "overview", label: "Overview", icon: Target },
                { id: "sessions", label: "Sessions", icon: Calendar },
                { id: "progress", label: "Progress", icon: TrendingUp },
                { id: "resources", label: "Resources", icon: BookOpen },
                { id: "journal", label: "Journal", icon: FileText }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { label: "Total Sessions", value: user.totalSessions, icon: Users, color: "from-blue-500 to-indigo-600" },
                    { label: "Current Streak", value: `${user.streak} days`, icon: Target, color: "from-green-500 to-teal-600" },
                    { label: "Progress", value: `${user.progress}%`, icon: TrendingUp, color: "from-purple-500 to-pink-600" },
                    { label: "Member Since", value: user.joinDate, icon: Award, color: "from-orange-500 to-red-600" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-lg"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                          <action.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                        <p className="text-gray-600 text-sm">{action.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Sessions & Daily Affirmation */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Upcoming Sessions */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sessions</h2>
                    <div className="space-y-4">
                      {upcomingSessions.map((session, index) => (
                        <motion.div
                          key={session.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                        >
                          <div>
                            <h3 className="font-semibold text-gray-900">{session.therapist}</h3>
                            <p className="text-sm text-gray-600">{session.date} at {session.time}</p>
                            <p className="text-sm text-gray-500">{session.type} • {session.duration}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              session.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {session.status}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center">
                      <Plus className="w-5 h-5 mr-2" />
                      Book New Session
                    </button>
                  </div>

                  {/* Daily Affirmation */}
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl text-white">
                    <h2 className="text-2xl font-bold mb-6">Daily Affirmation</h2>
                    <div className="text-center mb-6">
                      <Heart className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-xl leading-relaxed">
                        "{affirmations[Math.floor(Math.random() * affirmations.length)]}"
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="bg-white text-purple-600 px-6 py-2 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                        New Affirmation
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Sessions Tab */}
            {activeTab === "sessions" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">Your Sessions</h2>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Book Session
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Upcoming Sessions */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Sessions</h3>
                    <div className="space-y-4">
                      {upcomingSessions.map((session, index) => (
                        <motion.div
                          key={session.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="border border-gray-200 rounded-xl p-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">{session.therapist}</h4>
                              <p className="text-sm text-gray-600">{session.type}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              session.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {session.status}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {session.date} at {session.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Clock className="w-4 h-4 mr-2" />
                            {session.duration}
                          </div>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                              Reschedule
                            </button>
                            <button className="flex-1 bg-red-50 text-red-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                              Cancel
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Sessions */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Sessions</h3>
                    <div className="space-y-4">
                      {recentSessions.map((session, index) => (
                        <motion.div
                          key={session.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="border border-gray-200 rounded-xl p-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">{session.therapist}</h4>
                              <p className="text-sm text-gray-600">{session.type}</p>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {session.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Clock className="w-4 h-4 mr-2" />
                            {session.duration}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{session.notes}</p>
                          <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                            View Details
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Progress Tab */}
            {activeTab === "progress" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-gray-900">Your Progress</h2>
                
                {/* Progress Metrics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {progressData.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-lg"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{metric.label}</h3>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div 
                            className={`h-3 bg-gradient-to-r ${metric.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.value}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <div className="text-right mt-2">
                          <span className="text-2xl font-bold text-gray-900">{metric.value}%</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Chart Placeholder */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Progress Over Time</h3>
                  <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                      <p>Progress chart will be displayed here</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Resources Tab */}
            {activeTab === "resources" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-gray-900">Content Library</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contentLibrary.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        {item.completed && (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.type}</p>
                      <p className="text-sm text-gray-500 mb-4">{item.duration}</p>
                      <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        item.completed
                          ? 'bg-green-100 text-green-700 cursor-default'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}>
                        {item.completed ? 'Completed' : 'Start'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Journal Tab */}
            {activeTab === "journal" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">Journal</h2>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    New Entry
                  </button>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-center text-gray-500">
                    <FileText className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">No journal entries yet</p>
                    <p className="text-sm">Start writing to track your thoughts and feelings</p>
                  </div>
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

export default Dashboard; 