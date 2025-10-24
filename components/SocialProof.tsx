import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "ClientFuse transformed our onboarding process. What used to take days now takes minutes. This is a game-changer for any agency.",
    author: "Sarah Chen",
    role: "Founder, Digital Dynamics",
    avatar: "👩‍💼",
  },
  {
    quote: "We've saved over 20 hours per month on client onboarding. The Access Detective feature alone is worth its weight in gold.",
    author: "Michael Torres",
    role: "Director, Growth Marketing Agency",
    avatar: "👨‍💼",
  },
  {
    quote: "I love that clients don't need to create an account with ClientFuse. They just log into their existing accounts and grant access. So simple!",
    author: "Emily Rodriguez",
    role: "Client Success Manager, BrandBoost",
    avatar: "👩‍💻",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="gradient-text">marketing professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of agencies saving time and delighting clients every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

