import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      age: 28,
      location: "Mumbai",
      rating: 5,
      review: "MaanShanti helped me find the perfect therapist who truly understood my anxiety. The online sessions were convenient and effective. I feel so much better now!",
      therapist: "Dr. Priya Sharma",
      condition: "Anxiety & Stress",
      duration: "3 months"
    },
    {
      id: 2,
      name: "Rajesh K.",
      age: 35,
      location: "Delhi",
      rating: 5,
      review: "After struggling with depression for years, I finally found help through MaanShanti. The matching process was seamless and my therapist is amazing.",
      therapist: "Dr. Arjun Patel",
      condition: "Depression",
      duration: "6 months"
    },
    {
      id: 3,
      name: "Meera P.",
      age: 42,
      location: "Bangalore",
      rating: 5,
      review: "The trauma therapy I received has been life-changing. Being able to do sessions from home made me feel safe and comfortable to open up.",
      therapist: "Dr. Rajesh Kumar",
      condition: "PTSD & Trauma",
      duration: "8 months"
    },
    {
      id: 4,
      name: "Arjun S.",
      age: 24,
      location: "Pune",
      rating: 5,
      review: "As a college student dealing with stress and relationship issues, MaanShanti provided affordable and accessible therapy that fit my schedule perfectly.",
      therapist: "Dr. Priya Sharma",
      condition: "Relationship Issues",
      duration: "2 months"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            What Our <span className="text-teal-primary">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who found healing and hope through MaanShanti. 
            Your journey to better mental health starts here.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 shadow-card hover:shadow-soft transition-all duration-300 border border-border/20 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-teal-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-yellow-soft fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {review.rating}/5
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                "{review.review}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {review.age} years old, {review.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-teal-primary">
                      {review.duration} of therapy
                    </p>
                  </div>
                </div>

                {/* Treatment Info */}
                <div className="bg-teal-light/30 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Therapist:</span>
                    <span className="font-medium text-foreground">{review.therapist}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Condition:</span>
                    <span className="font-medium text-teal-dark">{review.condition}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-8 shadow-card border border-border/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-primary mb-2">2.5K+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;