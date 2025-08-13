import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, CreditCard, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTherapist, setSelectedTherapist] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);

  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Clinical Psychologist",
      rating: 4.9,
      experience: "15+ years",
      price: "$150",
      image: "/src/assets/therapist-1.jpg",
      availableDates: ["Dec 16", "Dec 17", "Dec 18", "Dec 19", "Dec 20"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Cognitive Behavioral Therapist",
      rating: 4.8,
      experience: "12+ years",
      price: "$140",
      image: "/src/assets/therapist-2.jpg",
      availableDates: ["Dec 17", "Dec 18", "Dec 19", "Dec 20", "Dec 21"]
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Family Therapist",
      rating: 4.7,
      experience: "18+ years",
      price: "$160",
      image: "/src/assets/therapist-3.jpg",
      availableDates: ["Dec 16", "Dec 18", "Dec 20", "Dec 22", "Dec 23"]
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const sessionTypes = [
    {
      id: "individual",
      name: "Individual Session",
      duration: "50 minutes",
      price: "Standard rate",
      description: "One-on-one therapy session"
    },
    {
      id: "couples",
      name: "Couples Session",
      duration: "60 minutes",
      price: "+$50",
      description: "Therapy for couples or partners"
    },
    {
      id: "family",
      name: "Family Session",
      duration: "90 minutes",
      price: "+$75",
      description: "Family therapy session"
    }
  ];

  const availableDates = [
    "Monday, Dec 16", "Tuesday, Dec 17", "Wednesday, Dec 18", 
    "Thursday, Dec 19", "Friday, Dec 20", "Monday, Dec 23"
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setBookingComplete(true);
    setCurrentStep(5);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Choose Your Therapist";
      case 2: return "Select Date & Time";
      case 3: return "Session Details";
      case 4: return "Review & Confirm";
      case 5: return "Booking Confirmed";
      default: return "";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return "Select the therapist who best fits your needs";
      case 2: return "Pick a date and time that works for you";
      case 3: return "Choose your session type and preferences";
      case 4: return "Review your booking details before confirming";
      case 5: return "Your appointment has been successfully scheduled";
      default: return "";
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedTherapist !== "";
      case 2: return selectedDate !== "" && selectedTime !== "";
      case 3: return sessionType !== "";
      case 4: return true;
      default: return false;
    }
  };

  const selectedTherapistData = therapists.find(t => t.id === selectedTherapist);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-100"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Book Your Appointment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Schedule a session with one of our experienced therapists. 
            We'll guide you through the process step by step.
          </motion.p>
        </div>
      </motion.div>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-4 ${
                      currentStep > step ? 'bg-blue-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step Header */}
            <motion.div 
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{getStepTitle()}</h2>
              <p className="text-xl text-gray-600">{getStepDescription()}</p>
            </motion.div>

            {/* Step Content */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Step 1: Choose Therapist */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {therapists.map((therapist) => (
                      <div
                        key={therapist.id}
                        onClick={() => setSelectedTherapist(therapist.id)}
                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          selectedTherapist === therapist.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                          {therapist.name}
                        </h3>
                        <p className="text-blue-600 font-medium text-center mb-2">
                          {therapist.specialization}
                        </p>
                        <div className="text-center text-sm text-gray-600 mb-3">
                          ⭐ {therapist.rating} • {therapist.experience}
                        </div>
                        <div className="text-center text-lg font-bold text-gray-900">
                          {therapist.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Date & Time */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  {/* Date Selection */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Date</h3>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                      {availableDates.map((date, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedDate(date)}
                          className={`p-4 border-2 rounded-xl text-center transition-all duration-300 ${
                            selectedDate === date
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-sm font-medium">{date.split(',')[0]}</div>
                          <div className="text-xs text-gray-500">{date.split(',')[1]}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Time</h3>
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 border-2 rounded-xl text-center transition-all duration-300 ${
                            selectedTime === time
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Session Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Session Type</h3>
                  <div className="space-y-4">
                    {sessionTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          sessionType === type.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value={type.id}
                          checked={sessionType === type.id}
                          onChange={(e) => setSessionType(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                          sessionType === type.id 
                            ? 'border-blue-500 bg-blue-500' 
                            : 'border-gray-300'
                        }`}>
                          {sessionType === type.id && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">{type.name}</h4>
                            <span className="text-blue-600 font-medium">{type.price}</span>
                          </div>
                          <p className="text-sm text-gray-600">{type.description}</p>
                          <p className="text-sm text-gray-500">Duration: {type.duration}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Review & Confirm */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Your Booking</h3>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Appointment Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-gray-600">{selectedTherapistData?.name}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-gray-600">{selectedDate}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-gray-600">{selectedTime}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-gray-600">Online Session</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Session Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Session Type:</span>
                            <span className="font-medium">{sessionTypes.find(t => t.id === sessionType)?.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-medium">{sessionTypes.find(t => t.id === sessionType)?.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Price:</span>
                            <span className="font-medium">{selectedTherapistData?.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> You'll receive a confirmation email with session details and a secure link 
                      to join your online session. Please ensure you have a stable internet connection.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 5: Confirmation */}
              {currentStep === 5 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-6">
                    Your appointment has been successfully scheduled. You'll receive a confirmation email 
                    with all the details shortly.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl max-w-md mx-auto">
                    <h4 className="font-semibold text-gray-900 mb-3">Next Steps</h4>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li>• Check your email for confirmation</li>
                      <li>• Add the session to your calendar</li>
                      <li>• Prepare for your session</li>
                      <li>• Join 5 minutes early</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between mt-12">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Previous
                  </button>

                  {currentStep === 4 ? (
                    <button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center"
                    >
                      Confirm Booking
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                        canProceed()
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Next
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookAppointment; 