import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

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
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Analytics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Metricool Analytics: Reporting That Clients Actually Read</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>November 24, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            A practical, agency-focused walkthrough with actionable steps.
          </p>

          <h2>Useful Links</h2>
          <p>Resources referenced in this article:</p>
          <div>
{            }
            - [Metricool](https://metricool.com)
            - [Blog](https://metricool.com/blog/)
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline Client Access</h3>
            <p className="text-gray-700 mb-6">ClientFuse simplifies access onboarding with one secure link.</p>
            <Link href="https://app.clientfuse.io/auth/login?signup=true" className="btn-primary inline-block">Start Free Trial</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
