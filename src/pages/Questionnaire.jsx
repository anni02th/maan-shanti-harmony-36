import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, Heart, Users, Shield, ArrowRight, CheckCircle, Circle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import service_img from "../assets/header-about.jpg"; // Updated import path

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: 1,
      category: "Personal Information",
      question: "What is your primary reason for seeking therapy?",
      type: "single",
      options: [
        "Anxiety or stress",
        "Depression or mood issues",
        "Relationship problems",
        "Trauma or past experiences",
        "Personal growth and self-improvement",
        "Work or career challenges",
        "Family issues",
        "Other"
      ]
    },
    {
      id: 2,
      category: "Personal Information",
      question: "How long have you been experiencing these challenges?",
      type: "single",
      options: [
        "Less than 1 month",
        "1-3 months",
        "3-6 months",
        "6-12 months",
        "1-2 years",
        "More than 2 years"
      ]
    },
    {
      id: 3,
      category: "Mental Health",
      question: "Which of the following symptoms do you experience? (Select all that apply)",
      type: "multiple",
      options: [
        "Difficulty sleeping",
        "Loss of appetite or overeating",
        "Feeling tired or low energy",
        "Difficulty concentrating",
        "Feeling hopeless or worthless",
        "Excessive worry or fear",
        "Irritability or anger",
        "Social withdrawal",
        "Physical symptoms (headaches, stomach issues)",
        "None of the above"
      ]
    },
    {
      id: 4,
      category: "Mental Health",
      question: "How would you rate your current stress level?",
      type: "scale",
      options: ["Very Low", "Low", "Moderate", "High", "Very High"]
    },
    {
      id: 5,
      category: "Therapy Preferences",
      question: "What type of therapy approach interests you most?",
      type: "single",
      options: [
        "Cognitive Behavioral Therapy (CBT)",
        "Mindfulness and meditation",
        "Talk therapy",
        "Trauma-focused therapy",
        "Family or couples therapy",
        "I'm not sure, I'd like recommendations",
        "Other"
      ]
    },
    {
      id: 6,
      category: "Therapy Preferences",
      question: "Do you have a preference for session format?",
      type: "single",
      options: [
        "In-person sessions only",
        "Online/virtual sessions only",
        "A combination of both",
        "No preference"
      ]
    },
    {
      id: 7,
      category: "Practical Considerations",
      question: "What is your budget range for therapy sessions?",
      type: "single",
      options: [
        "Under $50 per session",
        "$50-$100 per session",
        "$100-$150 per session",
        "$150-$200 per session",
        "$200+ per session",
        "I need to check insurance coverage"
      ]
    },
    {
      id: 8,
      category: "Practical Considerations",
      question: "What days and times work best for your schedule?",
      type: "multiple",
      options: [
        "Monday morning",
        "Monday afternoon",
        "Monday evening",
        "Tuesday morning",
        "Tuesday afternoon",
        "Tuesday evening",
        "Wednesday morning",
        "Wednesday afternoon",
        "Wednesday evening",
        "Thursday morning",
        "Thursday afternoon",
        "Thursday evening",
        "Friday morning",
        "Friday afternoon",
        "Friday evening",
        "Weekend availability"
      ]
    },
    {
      id: 9,
      category: "Goals",
      question: "What are your main goals for therapy? (Select all that apply)",
      type: "multiple",
      options: [
        "Reduce anxiety and stress",
        "Improve mood and emotional well-being",
        "Better understand myself",
        "Improve relationships",
        "Develop coping skills",
        "Process past trauma",
        "Build self-confidence",
        "Improve communication skills",
        "Set and achieve personal goals",
        "Other"
      ]
    },
    {
      id: 10,
      category: "Goals",
      question: "How quickly do you hope to see improvement?",
      type: "single",
      options: [
        "Immediately (within a few sessions)",
        "Within 1-2 months",
        "Within 3-6 months",
        "I'm patient and understand it takes time",
        "I'm not sure"
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(((currentStep + 2) / questions.length) * 100);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgress((currentStep / questions.length) * 100);
    }
  };

  const handleSubmit = () => {
    // In a real app, you would send the answers to your backend
    console.log("Questionnaire answers:", answers);
    navigate("/assessment-results");
  };

  const currentQuestion = questions[currentStep];
  const hasAnswer = answers[currentQuestion.id];
  const canProceed = currentQuestion.type === "single" ? hasAnswer :
    currentQuestion.type === "multiple" ? (hasAnswer && hasAnswer.length > 0) : true;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-100 relative overflow-hidden"
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service_img})`, zIndex: 0 }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>

        {/* Content Layer */}
        <div className="relative container mx-auto px-4 text-center z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Mental Health Assessment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Take this brief assessment to help us understand your needs and
            connect you with the right therapist and resources.
          </motion.p>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Question Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                      {currentQuestion.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">{currentQuestion.question}</h2>
                  </div>
                </div>
              </div>

              {/* Answer Options */}
              <div className="space-y-4">
                {currentQuestion.type === "single" && (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <label key={index} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          value={option}
                          checked={answers[currentQuestion.id] === option}
                          onChange={() => handleAnswer(currentQuestion.id, option)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${answers[currentQuestion.id] === option
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                          }`}>
                          {answers[currentQuestion.id] === option && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="text-gray-700 font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQuestion.type === "multiple" && (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <label key={index} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                        <input
                          type="checkbox"
                          value={option}
                          checked={answers[currentQuestion.id]?.includes(option) || false}
                          onChange={(e) => {
                            const currentAnswers = answers[currentQuestion.id] || [];
                            if (e.target.checked) {
                              handleAnswer(currentQuestion.id, [...currentAnswers, option]);
                            } else {
                              handleAnswer(currentQuestion.id, currentAnswers.filter(ans => ans !== option));
                            }
                          }}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border-2 mr-4 flex items-center justify-center ${answers[currentQuestion.id]?.includes(option)
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                          }`}>
                          {answers[currentQuestion.id]?.includes(option) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-gray-700 font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQuestion.type === "scale" && (
                  <div className="grid grid-cols-5 gap-4">
                    {currentQuestion.options.map((option, index) => (
                      <label key={index} className="text-center">
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          value={option}
                          checked={answers[currentQuestion.id] === option}
                          onChange={() => handleAnswer(currentQuestion.id, option)}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${answers[currentQuestion.id] === option
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                          }`}>
                          <div className="text-2xl font-bold mb-2">{index + 1}</div>
                          <div className="text-sm">{option}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  Previous
                </button>

                {currentStep === questions.length - 1 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${canProceed
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    Complete Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${canProceed
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    Next
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Assessment Matters</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                This assessment helps us understand your unique situation and match you with the right
                therapist and treatment approach for your specific needs.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Confidential",
                    description: "Your responses are completely private and secure"
                  },
                  {
                    icon: Brain,
                    title: "Personalized",
                    description: "Get recommendations tailored to your specific situation"
                  },
                  {
                    icon: Heart,
                    title: "Compassionate",
                    description: "Designed with care to help you find the right support"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Questionnaire; 