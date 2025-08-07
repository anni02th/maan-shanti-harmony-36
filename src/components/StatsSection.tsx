const StatsSection = () => {
  const stats = [
    {
      number: "408K+",
      label: "People who have started therapy"
    },
    {
      number: "33K+",
      label: "Credentialed ready to help"
    },
    {
      number: "3M+",
      label: "Messages and live sessions"
    }
  ];

  return (
    <section className="bg-gradient-teal text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Scroll Down Indicator */}
            <div className="hidden lg:flex items-center text-white/70 text-sm">
              <div className="w-px h-16 bg-white/30 mr-4"></div>
              <span className="transform -rotate-90 whitespace-nowrap">Scroll Down</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight font-heading">
                The world's largest
                <br />
                therapy service
                <br />
                <span className="text-yellow-soft">100% online.</span>
              </h2>

              {/* Decorative Line */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-yellow-soft"></div>
                <div className="w-6 h-0.5 bg-yellow-soft"></div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              When you join MaanShanti, our goal is to provide you with a personalized 
              therapist match that is tailored to your preferences and needs. All of our 
              therapists are credentialed professionals that are skilled in treating 
              challenges like anxiety and depression.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;