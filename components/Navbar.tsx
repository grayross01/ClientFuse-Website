"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <g transform="translate(10, 10)">
                  <circle cx="15" cy="15" r="8" fill="url(#centerGradient)" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="15" cy="5" r="4" fill="#8B5CF6" stroke="#ffffff" strokeWidth="1.5"/>
                  <circle cx="15" cy="25" r="4" fill="#EC4899" stroke="#ffffff" strokeWidth="1.5"/>
                  <circle cx="5" cy="15" r="4" fill="#3B82F6" stroke="#ffffff" strokeWidth="1.5"/>
                  <circle cx="25" cy="15" r="4" fill="#8B5CF6" stroke="#ffffff" strokeWidth="1.5"/>
                </g>
              </svg>
              <span className="text-2xl font-bold gradient-text">ClientFuse</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#integrations" className="text-gray-700 hover:text-gray-900 transition-colors">
              Integrations
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">
              FAQ
            </a>
            <a href="https://app.clientfuse.io/auth/login" className="text-gray-700 hover:text-gray-900 transition-colors">
              Log In
            </a>
            <a href="https://app.clientfuse.io/auth/login?signup=true" className="btn-primary">
              Try Free
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-gray-900">How It Works</a>
            <a href="#integrations" className="block text-gray-700 hover:text-gray-900">Integrations</a>
            <a href="#pricing" className="block text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="/blog" className="block text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#faq" className="block text-gray-700 hover:text-gray-900">FAQ</a>
            <a href="https://app.clientfuse.io/auth/login" className="block text-gray-700 hover:text-gray-900">Log In</a>
            <a href="https://app.clientfuse.io/auth/login?signup=true" className="block btn-primary text-center">Try Free</a>
          </div>
        </div>
      )}
    </nav>
  );
}
