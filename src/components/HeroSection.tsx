import { Button } from "@/components/ui/button";
import anxietyPerson from "@/assets/anxiety-person-new.jpg";
import depressionPerson from "@/assets/depression-person-new.jpg";
import traumaPerson from "@/assets/trauma-person-new.jpg";
import personalNeedsPerson from "@/assets/personal-needs-new.jpg";

const HeroSection = () => {
  const emotionalStates = [
    {
      image: depressionPerson,
      label: "Depressed",
      bgColor: "bg-yellow-soft",
      shape: "rounded-3xl"
    },
    {
      image: anxietyPerson,
      label: "Anxiety",
      bgColor: "bg-green-soft",
      shape: "rounded-full"
    },
    {
      image: traumaPerson,
      label: "Lost & Trauma",
      bgColor: "bg-teal-light",
      shape: "rounded-2xl"
    },
    {
      image: personalNeedsPerson,
      label: "Personal needs",
      bgColor: "bg-orange-soft",
      shape: "rounded-3xl"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-teal-light/50 border border-teal-primary/20 rounded-full text-sm text-teal-dark font-medium">
              No.1 Mental Health Support Platform
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-heading">
                Deserve and
                <br />
                <span className="text-teal-primary">Embrace Your</span>
                <br />
                Peace
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                Feeling stressed, anxious or depressed? Check your mood and 
                anxiety with our free online test. Online evidence-based 
                programs to help improve the way you feel.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="rounded-xl px-8">
                Get Started
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-xl px-8">
                Log In
              </Button>
            </div>
          </div>

          {/* Right Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {emotionalStates.map((state, index) => (
                <div
                  key={index}
                  className={`relative ${state.bgColor} ${state.shape} p-4 md:p-6 shadow-card hover:shadow-soft transition-all duration-300 group`}
                >
                  {/* Label Tag */}
                  <div className="absolute -top-3 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-foreground shadow-soft border border-border/20">
                    {state.label}
                  </div>
                  
                  {/* Image */}
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={state.image}
                      alt={state.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-teal-primary rounded rotate-45 opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-soft rounded-full opacity-70"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-soft rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;