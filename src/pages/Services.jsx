import { motion } from "framer-motion";
import { Brain, Heart, Users, Shield, BookOpen, Clock, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      category: "Individual Therapy",
      services: [
        {
          name: "Cognitive Behavioral Therapy (CBT)",
          description: "Evidence-based approach to identify and change negative thought patterns and behaviors.",
          duration: "50-60 minutes",
          price: "$120-150",
          icon: Brain,
          features: ["Anxiety management", "Depression treatment", "Stress reduction", "Behavioral change"]
        },
        {
          name: "Dialectical Behavior Therapy (DBT)",
          description: "Skills-based therapy for emotional regulation, mindfulness, and interpersonal effectiveness.",
          duration: "50-60 minutes",
          price: "$130-160",
          icon: Heart,
          features: ["Emotional regulation", "Mindfulness skills", "Interpersonal effectiveness", "Distress tolerance"]
        },
        {
          name: "Trauma-Informed Therapy",
          description: "Specialized approach for healing from past trauma and building resilience.",
          duration: "60-90 minutes",
          price: "$140-180",
          icon: Shield,
          features: ["PTSD treatment", "Trauma processing", "Safety planning", "Resilience building"]
        }
      ]
    },
    {
      category: "Specialized Therapies",
      services: [
        {
          name: "Anxiety & Depression Treatment",
          description: "Comprehensive treatment for anxiety disorders and depressive symptoms.",
          duration: "50-60 minutes",
          price: "$120-150",
          icon: Brain,
          features: ["Anxiety assessment", "Depression screening", "Coping strategies", "Relapse prevention"]
        },
        {
          name: "Family Therapy",
          description: "Systemic approach to improve family dynamics and communication.",
          duration: "60-90 minutes",
          price: "$150-200",
          icon: Users,
          features: ["Communication skills", "Conflict resolution", "Parenting support", "Family dynamics"]
        },
        {
          name: "Mindfulness & Meditation",
          description: "Guided practices for stress reduction and mental clarity.",
          duration: "30-45 minutes",
          price: "$80-100",
          icon: BookOpen,
          features: ["Stress reduction", "Focus improvement", "Emotional balance", "Self-awareness"]
        }
      ]
    },
    {
      category: "Wellness Programs",
      services: [
        {
          name: "Stress Management",
          description: "Comprehensive program to identify and manage stress triggers effectively.",
          duration: "45-60 minutes",
          price: "$100-130",
          icon: Shield,
          features: ["Stress assessment", "Coping techniques", "Lifestyle changes", "Prevention strategies"]
        },
        {
          name: "Life Coaching",
          description: "Goal-oriented guidance for personal and professional development.",
          duration: "45-60 minutes",
          price: "$110-140",
          icon: Star,
          features: ["Goal setting", "Action planning", "Accountability", "Progress tracking"]
        },
        {
          name: "Group Therapy",
          description: "Supportive group sessions for shared experiences and collective healing.",
          duration: "90 minutes",
          price: "$60-80",
          icon: Users,
          features: ["Peer support", "Shared learning", "Cost-effective", "Community building"]
        }
      ]
    }
  ];

  const additionalServices = [
    {
      name: "Crisis Intervention",
      description: "24/7 emergency mental health support and crisis management.",
      icon: Shield
    },
    {
      name: "Online Therapy",
      description: "Convenient virtual sessions from the comfort of your home.",
      icon: Clock
    },
    {
      name: "Assessment & Evaluation",
      description: "Comprehensive mental health assessments and diagnostic evaluations.",
      icon: BookOpen
    },
    {
      name: "Referral Services",
      description: "Connections to specialized mental health professionals and resources.",
      icon: Users
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
        className="pt-24 pb-16 bg-gradient-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-heading"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive mental health services tailored to your unique needs. 
            From individual therapy to specialized programs, we're here to support your journey to wellness.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">{category.category}</h2>
                <div className="w-24 h-1 bg-gradient-teal mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl shadow-card p-6 hover:shadow-lg transition-all duration-300 border border-border"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-teal rounded-xl">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.duration} • {service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-teal-primary rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-teal text-white py-3 px-4 rounded-xl font-medium hover:bg-teal-dark transition-all duration-300 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">Additional Support Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beyond therapy sessions, we offer comprehensive support to ensure your mental health journey is complete.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow text-center border border-border"
              >
                <div className="w-16 h-16 bg-gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">Ready to Start Your Journey?</h2>
            <p className="text-xl text-teal-light mb-8 max-w-2xl mx-auto">
              Take the first step towards better mental health. Our team is here to guide you 
              through every step of your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-primary py-4 px-8 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Book a Consultation
              </button>
              <button className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-teal-primary transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 