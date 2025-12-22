import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Winning Agency Proposals: Templates and Strategies | ClientFuse Blog',
  description: 'How to write proposals that close deals, avoid common pitfalls, and stand out from competing agencies.',
  keywords: 'sales, marketing agency, digital marketing, agency tips, client management, winning, agency, proposals:, templates, strategies',
  authors: [{ name: 'ClientFuse' }],
  openGraph: {
    title: 'Winning Agency Proposals: Templates and Strategies',
    description: 'How to write proposals that close deals, avoid common pitfalls, and stand out from competing agencies.',
    url: 'https://clientfuse.io/blog/winning-agency-proposals-templates-strategies',
    siteName: 'ClientFuse',
    type: 'article',
    publishedTime: '2025-12-22T14:17:14.966Z',
    modifiedTime: '2025-12-22T14:17:14.966Z',
    section: 'Sales',
    images: [
      {
        url: 'https://clientfuse.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Winning Agency Proposals: Templates and Strategies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winning Agency Proposals: Templates and Strategies',
    description: 'How to write proposals that close deals, avoid common pitfalls, and stand out from competing agencies.',
    images: ['https://clientfuse.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://clientfuse.io/blog/winning-agency-proposals-templates-strategies',
  },
};

export default function BlogPost() {
  const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Winning Agency Proposals: Templates and Strategies",
      "description": "How to write proposals that close deals, avoid common pitfalls, and stand out from competing agencies.",
      "image": "https://clientfuse.io/og-image.png",
      "author": {
          "@type": "Organization",
          "name": "ClientFuse",
          "url": "https://clientfuse.io"
      },
      "publisher": {
          "@type": "Organization",
          "name": "ClientFuse",
          "logo": {
              "@type": "ImageObject",
              "url": "https://clientfuse.io/combined_logo.png"
          }
      },
      "datePublished": "2025-12-22T14:17:14.966Z",
      "dateModified": "2025-12-22T14:17:14.966Z",
      "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://clientfuse.io/blog/winning-agency-proposals-templates-strategies"
      },
      "articleSection": "Sales",
      "wordCount": 208
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Sales</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Winning Agency Proposals: Templates and Strategies</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime="2025-12-22">December 22, 2025</time>
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
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              How to write proposals that close deals, avoid common pitfalls, and stand out from competing agencies.
            </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Purpose of a Proposal</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A proposal isn't a contract or a scope of work—it's a sales document. Its job is to convince the prospect to say yes. Everything in the proposal should move toward that goal. If it doesn't help close the deal, leave it out.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Structure That Sells</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Start with their problem, not your capabilities. Show you understand their situation deeply. Then present your approach as the solution. Include case studies from similar clients. End with clear pricing and next steps. Keep it under 10 pages—nobody reads 50-page proposals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pricing Presentation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Present 2-3 options when possible. This shifts the conversation from 'yes or no' to 'which one.' Anchor with the premium option first, then show the standard package. Include ROI projections to reframe cost as investment. Never apologize for your pricing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common Proposal Mistakes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Talking too much about yourself instead of the client. Including jargon they don't understand. Burying the price. Not having a clear call to action. Sending a PDF when an interactive presentation would be better. Taking too long to deliver—speed demonstrates responsiveness.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Following Up</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The proposal isn't the end—it's the beginning. Schedule a presentation call to walk through it live. Answer questions in real-time. If you don't hear back, follow up at 2 days, 5 days, and 10 days. Most deals are won or lost in the follow-up.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Resources & Further Reading</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>
              <a href="https://www.proposify.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                Proposify - Proposal Software
              </a>
            </li>
            <li>
              <a href="https://betterproposals.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                Better Proposals
              </a>
            </li>
          </ul>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/blog/complete-guide-client-onboarding-marketing-agencies"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-xs text-blue-600 font-medium">Client Management</span>
              <h4 className="text-gray-900 font-semibold mt-1 line-clamp-2">The Complete Guide to Client Onboarding for Marketing Agencies</h4>
            </Link>
            <Link 
              href="/blog/how-to-price-marketing-agency-services-2025"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-xs text-blue-600 font-medium">Agency Growth</span>
              <h4 className="text-gray-900 font-semibold mt-1 line-clamp-2">How to Price Your Marketing Agency Services in 2025</h4>
            </Link>
            <Link 
              href="/blog/google-ads-account-structure-best-practices-agencies"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-xs text-blue-600 font-medium">Google Ads</span>
              <h4 className="text-gray-900 font-semibold mt-1 line-clamp-2">Google Ads Account Structure Best Practices for Agencies</h4>
            </Link>
            </div>
          </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 mt-16 not-prose">
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
    </>
  );
}
