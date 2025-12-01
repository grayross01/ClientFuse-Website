import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'How to Price Your Marketing Agency Services in 2025 | ClientFuse Blog',
  description: 'A comprehensive breakdown of pricing models, rate calculations, and strategies to maximize profitability while staying competitive.',
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Agency Growth</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How to Price Your Marketing Agency Services in 2025</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 1, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A comprehensive breakdown of pricing models, rate calculations, and strategies to maximize profitability while staying competitive.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Pricing Dilemma</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pricing is one of the hardest decisions agency owners face. Price too low and you burn out your team while struggling to stay profitable. Price too high and you lose deals to competitors. The key is understanding your true costs and the value you deliver.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Understanding Your Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Before setting prices, calculate your fully-loaded costs. This includes salaries, benefits, software subscriptions, overhead, and a profit margin. Most agencies aim for a 50-60% gross margin on services. If your blended team cost is $75/hour, you should be billing at least $150/hour to maintain healthy margins.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Retainer vs Project-Based Pricing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Retainers provide predictable revenue and allow for deeper client relationships. Project-based pricing works better for one-time deliverables or clients testing the waters. Many agencies use a hybrid model: project-based for new clients, transitioning to retainers after proving value.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Value-Based Pricing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The most profitable agencies price based on value, not hours. If your campaign generates $100,000 in revenue for a client, charging $5,000 per month is a bargain regardless of hours worked. Position your pricing around ROI and outcomes, not inputs.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When to Raise Your Rates</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Raise rates when you're at capacity, when you've added new capabilities, or at annual renewals. Give clients 30-60 days notice and frame increases around the additional value you're providing. Most clients expect modest annual increases and won't push back on 5-10% adjustments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Resources & Further Reading</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>
              <a href="https://prometheanresearch.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                Promethean Research - Agency Benchmarks
              </a>
            </li>
            <li>
              <a href="https://agencyanalytics.com/blog/marketing-agency-pricing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                Agency Analytics Pricing Guide
              </a>
            </li>
          </ul>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline Your Client Onboarding</h3>
            <p className="text-gray-700 mb-6">
              Stop chasing clients for account access. ClientFuse lets you send one simple link to get instant access to Facebook, Google, Instagram, and more marketing platforms.
            </p>
            <Link href="https://app.clientfuse.io/auth/login?signup=true" className="btn-primary inline-block">
              Start Free Trial
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
