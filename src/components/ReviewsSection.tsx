import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

// Scroll + fade-in animation
const useScrollAnimation = (threshold = 0.3) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

// Counter animation
const useCountUp = (end, duration, trigger) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return count;
};

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      age: 28,
      location: "Mumbai",
      rating: 5,
      review:
        "MaanShanti helped me find the perfect therapist who truly understood my anxiety. The online sessions were convenient and effective. I feel so much better now!",
      therapist: "Dr. Priya Sharma",
      condition: "Anxiety & Stress",
      duration: "3 months",
    },
    {
      id: 2,
      name: "Rajesh K.",
      age: 35,
      location: "Delhi",
      rating: 5,
      review:
        "After struggling with depression for years, I finally found help through MaanShanti. The matching process was seamless and my therapist is amazing.",
      therapist: "Dr. Arjun Patel",
      condition: "Depression",
      duration: "6 months",
    },
    {
      id: 3,
      name: "Meera P.",
      age: 42,
      location: "Bangalore",
      rating: 5,
      review:
        "The trauma therapy I received has been life-changing. Being able to do sessions from home made me feel safe and comfortable to open up.",
      therapist: "Dr. Rajesh Kumar",
      condition: "PTSD & Trauma",
      duration: "8 months",
    },
    {
      id: 4,
      name: "Arjun S.",
      age: 24,
      location: "Pune",
      rating: 5,
      review:
        "As a college student dealing with stress and relationship issues, MaanShanti provided affordable and accessible therapy that fit my schedule perfectly.",
      therapist: "Dr. Priya Sharma",
      condition: "Relationship Issues",
      duration: "2 months",
    },
  ];

  // Heading animation
  const [headingRef, headingVisible] = useScrollAnimation();
  // Stats animation
  const [statsRef, statsVisible] = useScrollAnimation();

  // Counter values
  const rating = useCountUp(4.9, 1500, statsVisible);
  const clients = useCountUp(2500, 1500, statsVisible);
  const success = useCountUp(95, 1500, statsVisible);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            What Our <span className="text-teal-500">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who found healing and hope through
            MaanShanti. Your journey to better mental health starts here.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => {
            const [cardRef, cardVisible] = useScrollAnimation();
            return (
              <div
                ref={cardRef}
                key={review.id}
                className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500 border border-gray-200 relative group ${
                  cardVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-teal-500" />
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {review.rating}/5
                  </span>
                </div>

                <blockquote className="text-gray-800 leading-relaxed mb-6 text-lg">
                  "{review.review}"
                </blockquote>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {review.age} years old, {review.location}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-teal-500">
                      {review.duration} of therapy
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Therapist:</span>
                      <span className="font-medium text-gray-800">
                        {review.therapist}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Condition:</span>
                      <span className="font-medium text-teal-700">
                        {review.condition}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`bg-white rounded-3xl p-8 shadow-md border border-gray-200 transition-all duration-1000 ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-500 mb-2">
                {rating.toFixed(1)}/5
              </div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-500 mb-2">
                {Math.floor(clients).toLocaleString()}+
              </div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-500 mb-2">
                {Math.floor(success)}%
              </div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-500 mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-500">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
