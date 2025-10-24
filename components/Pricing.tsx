import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small agencies just getting started",
    features: [
      "Up to 5 clients",
      "All platform integrations",
      "Custom branding",
      "Email support",
      "Access Detective included",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Agency",
    price: "$149",
    period: "/month",
    description: "For growing agencies managing multiple clients",
    features: [
      "Up to 25 clients",
      "All platform integrations",
      "Custom branding & domains",
      "Priority support",
      "Advanced dashboard & analytics",
      "Access Detective & auto-diagnostics",
      "Team collaboration (3 users)",
      "14-day free trial",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large agencies and enterprise teams",
    features: [
      "Unlimited clients",
      "All platform integrations",
      "Full white-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security & compliance",
      "Unlimited team members",
      "SLA & onboarding support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, no credit card required. Keep access to all onboarded clients even if you cancel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-500 shadow-xl scale-105"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>

                <a
                  href={plan.cta === "Contact Sales" ? "mailto:sales@clientfuse.io" : "https://app.clientfuse.io/signup"}
                  className={`block w-full text-center py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                    plan.popular
                      ? "btn-primary text-white"
                      : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">All plans include:</h3>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>No credit card required for trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Keep access if you cancel</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>GDPR compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

