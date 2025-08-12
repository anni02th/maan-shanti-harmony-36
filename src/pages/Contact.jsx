import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-heading">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you have questions about our services, want to book an appointment, 
                or just want to learn more about how we can help, we're here for you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@maanshanti.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">123 Wellness Street, Mumbai, Maharashtra</p>
                  <p className="text-sm text-muted-foreground">By appointment only</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-teal-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                className="w-full py-3 text-lg rounded-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How do I book my first session?
              </h3>
              <p className="text-muted-foreground">
                You can book your first session through our online booking system, 
                by calling us directly, or by filling out the contact form above. 
                We'll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What should I expect in my first session?
              </h3>
              <p className="text-muted-foreground">
                Your first session is an initial consultation where we'll discuss 
                your needs, goals, and concerns. This helps us understand how 
                best to support you and create a personalized treatment plan.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Do you offer online sessions?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer both in-person and online therapy sessions. 
                Online sessions are conducted through secure video platforms 
                and are just as effective as in-person sessions.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What are your cancellation policies?
              </h3>
              <p className="text-muted-foreground">
                We require 24 hours notice for session cancellations. 
                This allows us to offer the slot to other clients who may be waiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
