import { Link, UserCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Link,
    title: "Send Your ClientFuse Link",
    description: "Share your unique link via email, SMS, or embed it on your website. No app downloads or complicated setup required.",
  },
  {
    number: "2",
    icon: UserCheck,
    title: "Client Grants Access",
    description: "Your client clicks the link, logs into their accounts (Facebook, Google, etc.), and grants access in guided steps.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "You're In! Start Working",
    description: "Get instant notification when access is granted. No back-and-forth emails, no waiting, no hassle. Just start managing their accounts.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From request to access in <span className="font-semibold text-gray-900">under 5 minutes</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

