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
                  <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <g transform="translate(10, 10)">
                  <!-- Center shape with 4 concave cutouts -->
                  <path d="M20 8 C 26 8, 32 8, 32 14 C 32 20, 32 20, 26 20 C 20 20, 20 26, 20 32 C 20 38, 14 38, 8 38 C 2 38, 2 32, 2 26 C 2 20, 2 20, 8 20 C 14 20, 14 14, 14 8 C 14 2, 20 2, 20 8 Z" fill="url(#centerGradient)" stroke="#ffffff" stroke-width="2"/>
                  
                  <!-- Top circle -->
                  <circle cx="20" cy="8" r="4" fill="#8B5CF6" stroke="#ffffff" stroke-width="1.5"/>
                  
                  <!-- Right circle -->
                  <circle cx="32" cy="20" r="4" fill="#8B5CF6" stroke="#ffffff" stroke-width="1.5"/>
                  
                  <!-- Bottom circle -->
                  <circle cx="20" cy="32" r="4" fill="#EC4899" stroke="#ffffff" stroke-width="1.5"/>
                  
                  <!-- Left circle -->
                  <circle cx="8" cy="20" r="4" fill="#3B82F6" stroke="#ffffff" stroke-width="1.5"/>
                </g>
              </svg>
              <span className="text-2xl font-bold gradient-text">ClientFuse</span>
            </a>
          </div>

          {/* Desktop Navigation */}
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
            <a href="https://app.clientfuse.io/login" className="text-gray-700 hover:text-gray-900 transition-colors">
              Log In
            </a>
            <a href="https://app.clientfuse.io/signup" className="btn-primary">
              Try Free
            </a>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-gray-900">How It Works</a>
            <a href="#integrations" className="block text-gray-700 hover:text-gray-900">Integrations</a>
            <a href="#pricing" className="block text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="/blog" className="block text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#faq" className="block text-gray-700 hover:text-gray-900">FAQ</a>
            <a href="https://app.clientfuse.io/login" className="block text-gray-700 hover:text-gray-900">Log In</a>
            <a href="https://app.clientfuse.io/signup" className="block btn-primary text-center">Try Free</a>
          </div>
        </div>
      )}
    </nav>
  );
}

