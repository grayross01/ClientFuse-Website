import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'The Complete Guide to Client Onboarding for Marketing Agencies | ClientFuse Blog',
  description: 'A step-by-step framework for onboarding new clients efficiently, setting expectations, and building lasting relationships from day one.',
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
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Client Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Complete Guide to Client Onboarding for Marketing Agencies</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>November 29, 2025</span>
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
            A step-by-step framework for onboarding new clients efficiently, setting expectations, and building lasting relationships from day one.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Client Onboarding Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The first 30 days of a client relationship set the tone for everything that follows. A smooth onboarding process reduces churn, builds trust, and establishes clear communication patterns. Studies show that agencies with structured onboarding retain clients 40% longer than those without.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 1: The Kick-Off Call</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Schedule a dedicated kick-off call within the first week of signing. Use this time to align on goals, introduce team members, and establish communication preferences. Document everything discussed and share a summary afterward. This creates accountability and ensures everyone starts on the same page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 2: Gathering Account Access</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            One of the biggest friction points in onboarding is getting access to client accounts. Create a standardized checklist of all platforms you'll need access to: Google Ads, Facebook Business Manager, Google Analytics, and more. Use a secure access management tool to streamline this process and avoid the back-and-forth emails that delay projects.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 3: Audit and Discovery</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Before launching any campaigns, conduct a thorough audit of existing assets. Review past performance data, identify quick wins, and document areas for improvement. This audit becomes the foundation for your strategy and helps demonstrate value early in the relationship.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 4: Setting Milestones</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Break the first 90 days into clear milestones. Week 1: Access and audit. Week 2-3: Strategy development. Week 4: Campaign launch. Month 2-3: Optimization and reporting. When clients can see a clear roadmap, they feel more confident in your process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Resources & Further Reading</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>
              <a href="https://www.hubspot.com/partners/agency" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                HubSpot Agency Partner Program
              </a>
            </li>
            <li>
              <a href="https://agencymanagementinstitute.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                Agency Management Institute
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
