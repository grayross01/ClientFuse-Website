import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Building a Repeatable Client Reporting System | ClientFuse Blog',
  description: 'How to create reports that clients actually read, automate the tedious parts, and turn reporting into a retention tool.',
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
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Operations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Building a Repeatable Client Reporting System</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 8, 2025</span>
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
            How to create reports that clients actually read, automate the tedious parts, and turn reporting into a retention tool.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Reporting Problem</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most agency reports are too long, too technical, and never read. Clients receive a 20-page PDF, skim the first page, and file it away. Meanwhile, your team spent hours compiling data that didn't drive any decisions. It's time to rethink reporting entirely.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Start with What Clients Care About</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every report should answer three questions: What did we do? What happened? What's next? Lead with business outcomes (revenue, leads, conversions) not vanity metrics (impressions, clicks). If you can't connect a metric to business impact, leave it out.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Automate Data Collection</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Stop manually pulling data from multiple platforms. Tools like Google Looker Studio, Supermetrics, or AgencyAnalytics can automatically aggregate data across channels. Set up once and your reports populate automatically. This frees your team to focus on insights, not data entry.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every report needs a one-paragraph executive summary at the top. Write it for the CEO who has 30 seconds. What's the headline? What should they know? What action is needed? If they read nothing else, this paragraph should give them confidence in your work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Making Reports a Conversation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Don't just send reports—present them. A 15-minute call to walk through key findings creates more value than any PDF. Use screen sharing to show live data. Answer questions in real-time. This touchpoint reinforces the relationship and surfaces insights that wouldn't come up otherwise.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Resources & Further Reading</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>
              <a href="https://lookerstudio.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                Google Looker Studio
              </a>
            </li>
            <li>
              <a href="https://agencyanalytics.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                Agency Analytics
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
