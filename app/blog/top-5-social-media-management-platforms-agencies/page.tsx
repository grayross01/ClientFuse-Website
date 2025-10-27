import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Check } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Tools
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top 5 Social Media Management Platforms for Marketing Agencies in 2024
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive review of the best social media management platforms, ranked by their suitability for marketing agencies managing multiple clients.
          </p>
          
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Choosing the right social media management platform can make or break your agency's efficiency. With countless options available, finding the perfect fit for managing multiple clients, tracking performance, and scaling your operations requires careful consideration.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-100 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline Your Client Access Process</h3>
              <p className="text-gray-700 mb-6">
                Managing social media accounts is just one part of your client management workflow. ClientFuse simplifies the account access process by sending one simple link that handles all platform access requests automatically—eliminating the back-and-forth emails and complex permission setups.
              </p>
              <Link href="https://app.clientfuse.io/signup" className="btn-primary inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/blog" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
