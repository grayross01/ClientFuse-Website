"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What platforms can I access through ClientFuse?",
    answer: "ClientFuse supports major marketing platforms including Facebook, Instagram, Google Ads, Google Analytics, Google Tag Manager, Google Business Profile, Google Search Console, and Google Merchant Center. We're constantly adding more integrations based on user feedback.",
  },
  {
    question: "Is ClientFuse secure?",
    answer: "Absolutely! ClientFuse is officially approved by Meta and Google. All data is encrypted and stored securely. We're partnered with major platforms to ensure your access is granted through their official APIs.",
  },
  {
    question: "Do my clients need to create a ClientFuse account?",
    answer: "No! Your clients don't need to create an account with ClientFuse. They simply click your link, log into their existing accounts (Facebook, Google, etc.), and grant access through our guided flow. This keeps the process simple and reduces friction.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "We believe you should keep what you've built. Even if you cancel your ClientFuse subscription, you retain access to all clients you've already onboarded. ClientFuse only facilitates the initial connection—the access relationship is between you and your client through the platforms directly.",
  },
  {
    question: "How does Access Detective work?",
    answer: "Access Detective automatically diagnoses common access issues like missing Facebook admins, forgotten permissions, broken connections, or missing Meta assets. It analyzes the connection and provides clear, actionable steps to resolve any problems—saving you hours of troubleshooting.",
  },
  {
    question: "Can I customize the branding?",
    answer: "Yes! ClientFuse offers white-label options where you can customize your logo, colors, fonts, and even use your own domain. On Agency and Enterprise plans, you can make ClientFuse completely invisible and showcase your agency's brand.",
  },
  {
    question: "How quickly will I get access after sending a link?",
    answer: "Most clients grant access within minutes of receiving your link. You'll get notified as soon as they complete the flow. The entire process typically takes less than 5 minutes per platform.",
  },
  {
    question: "Do you have a free trial?",
    answer: "Yes! Every plan includes a 14-day free trial with no credit card required. The trial extends until you successfully onboard your first client, giving you plenty of time to test ClientFuse with real scenarios.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ClientFuse
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="mailto:support@clientfuse.io" className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}

