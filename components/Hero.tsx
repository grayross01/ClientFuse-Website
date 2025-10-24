"use client";

import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-8">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Trusted by 500+ agencies</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Get instant access to your <span className="gradient-text">clients' accounts</span>—no hassle, no wait
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Send one simple link. Your clients grant access to Facebook, Google, TikTok, and more. You get notified instantly. 
            <span className="font-semibold text-gray-900"> That's it.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://app.clientfuse.io/signup" className="btn-primary text-lg px-8 py-4 flex items-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
              <div className="text-sm text-gray-600 mt-1">Active Agencies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-gray-600 mt-1">Accounts Connected</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">95%</div>
              <div className="text-sm text-gray-600 mt-1">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

