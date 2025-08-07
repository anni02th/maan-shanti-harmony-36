import { Search, MessageSquare, Laptop } from "lucide-react";
import therapySession from "@/assets/therapy-session.jpg";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Your Ideal Therapist",
      description: "We know how important it is to have the right therapist who understands you."
    },
    {
      icon: MessageSquare,
      title: "Communicate your way",
      description: "You can communicate with your therapist by messaging, chat, phone or video.",
      highlight: true
    },
    {
      icon: Laptop,
      title: "Get therapy when you need it",
      description: "You don't need an appointment to reach out to your therapist and you can message them anytime."
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            How the Process Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand that navigating the realm of mental health support can be 
            complex, which is why we've designed this section to offer clarity and guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl transition-all duration-300 hover:shadow-card ${
                  step.highlight
                    ? "bg-teal-primary text-white shadow-card"
                    : "bg-white border border-border/20 hover:border-teal-primary/30"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    step.highlight
                      ? "bg-white/20"
                      : "bg-teal-light"
                  }`}
                >
                  <step.icon
                    className={`w-6 h-6 ${
                      step.highlight ? "text-white" : "text-teal-primary"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-semibold mb-3 font-heading ${
                    step.highlight ? "text-white" : "text-foreground"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    step.highlight ? "text-white/90" : "text-muted-foreground"
                  }`}
                >
                  {step.description}
                </p>

                {/* Step Number */}
                <div
                  className={`absolute top-4 right-6 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step.highlight
                      ? "bg-white/20 text-white"
                      : "bg-teal-light text-teal-primary"
                  }`}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card group">
              <img
                src={therapySession}
                alt="Therapy session with elderly therapist and young client"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-soft rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-orange-soft rounded-lg rotate-45 opacity-70"></div>
            <div className="absolute top-1/4 -right-8 w-6 h-6 bg-green-soft rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;