import { motion } from "framer-motion";
import { Heart, Target, Users, Award, Shield, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import about_img from "../assets/header-about.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Director",
      image: "/src/assets/therapist-1.jpg",
      bio: "Licensed clinical psychologist with 15+ years of experience in trauma therapy and mindfulness-based interventions."
    },
    {
      name: "Dr. Michael Chen",
      role: "Lead Therapist",
      image: "/src/assets/therapist-2.jpg",
      bio: "Specialist in cognitive behavioral therapy and anxiety disorders with a focus on evidence-based treatments."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Child & Family Therapist",
      image: "/src/assets/therapist-3.jpg",
      bio: "Expert in family systems therapy and child psychology with certification in play therapy."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every individual with empathy, understanding, and unconditional positive regard."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Creating a secure, confidential environment where healing can flourish."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to the highest standards of professional practice and evidence-based care."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making mental health support available to everyone, regardless of background or circumstances."
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
        className="pt-24 pb-16 relative overflow-hidden"
      >
        {/* Background Image - Updated to use a placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-left lg:bg-center"
          style={{ backgroundImage: `url('https://placehold.co/1920x1080/a2d2ff/ffffff?text=About+Us')` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading"
          >
            About Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Dedicated to integrating mental wellness with career fulfillment, providing holistic support for a balanced and purposeful life.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-teal p-8 rounded-2xl text-white">
                <Target className="w-16 h-16 mb-6" />
                <h2 className="text-3xl font-bold mb-4 font-heading">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To empower individuals to achieve mental well-being and career satisfaction through accessible, high-quality, integrated guidance and support.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-teal p-8 rounded-2xl text-white">
                <Award className="w-16 h-16 mb-6" />
                <h2 className="text-3xl font-bold mb-4 font-heading">Our Vision</h2>
                <p className="text-lg leading-relaxed">
                  A world where personal happiness and professional success are seen as interconnected, and everyone has the tools to nurture both.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our integrated approach to your well-being and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow border border-border"
              >
                <value.icon className="w-12 h-12 text-teal-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your personal and professional growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-shadow border border-border"
              >
                <div className="h-64 bg-gradient-teal flex items-center justify-center">
                  <Users className="w-24 h-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-teal-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Paths Transformed" },
              { number: "50+", label: "Expert Counselors" },
              { number: "100+", label: "Holistic Programs" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">{stat.number}</div>
                <div className="text-teal-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 