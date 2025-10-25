"use client";

import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "$39",
    annualPrice: "$33",
    period: "/month",
    description: "For freelancers or small agencies managing a few clients.",
    features: [
      "Connect up to 5 clients per month",
      "Branded ClientFuse link",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Agency",
    monthlyPrice: "$79",
    annualPrice: "$67",
    period: "/month",
    description: "For growing agencies ready to brand their client access experience.",
    features: [
      "Connect up to 20 clients per month",
      "White-label links (your logo and domain)",
      "Multiple team members",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    monthlyPrice: "$199",
    annualPrice: "$169",
    period: "/month",
    description: "For established agencies and enterprise partners managing large client portfolios.",
    features: [
      "Connect up to 75 clients per month",
      "Full white-labeling (custom domain, logo, and email)",
      "API + webhook access",
      "Dedicated success manager",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "",
    description: "For large networks, SaaS platforms, or OEM partners.",
    features: [
      "Unlimited clients",
      "SLAs, and API integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start free, no credit card required. Keep access to all onboarded clients even if you cancel.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Save 15%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  {isAnnual && plan.monthlyPrice !== "Custom" && (
                    <div className="text-sm text-gray-500 mt-1">
                      Billed annually
                    </div>
                  )}
                </div>

                <a
                  href={plan.cta === "Contact Sales" ? "mailto:sales@clientfuse.io" : "https://app.clientfuse.io/signup"}
                  className={`block w-full text-center py-3 rounded-lg font-semibold mb-6 transition-all duration-200 ${
                    plan.popular
                      ? "btn-primary text-white"
                      : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}

