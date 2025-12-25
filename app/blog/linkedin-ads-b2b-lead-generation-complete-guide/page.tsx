import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedIn Ads for B2B Lead Generation: A Complete Guide | ClientFuse Blog',
  description: 'How to run profitable LinkedIn advertising campaigns for B2B clients, from targeting to creative to conversion.',
  keywords: 'linkedin ads, marketing agency, digital marketing, agency tips, client management, linkedin, generation:, complete, guide, targeting',
  authors: [{ name: 'ClientFuse' }],
  openGraph: {
    title: 'LinkedIn Ads for B2B Lead Generation: A Complete Guide',
    description: 'How to run profitable LinkedIn advertising campaigns for B2B clients, from targeting to creative to conversion.',
    url: 'https://clientfuse.io/blog/linkedin-ads-b2b-lead-generation-complete-guide',
    siteName: 'ClientFuse',
    type: 'article',
    publishedTime: '2025-12-25T14:16:17.862Z',
    modifiedTime: '2025-12-25T14:16:17.862Z',
    section: 'LinkedIn Ads',
    images: [
      {
        url: 'https://clientfuse.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LinkedIn Ads for B2B Lead Generation: A Complete Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Ads for B2B Lead Generation: A Complete Guide',
    description: 'How to run profitable LinkedIn advertising campaigns for B2B clients, from targeting to creative to conversion.',
    images: ['https://clientfuse.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://clientfuse.io/blog/linkedin-ads-b2b-lead-generation-complete-guide',
  },
};

export default function BlogPost() {
  const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "LinkedIn Ads for B2B Lead Generation: A Complete Guide",
      "description": "How to run profitable LinkedIn advertising campaigns for B2B clients, from targeting to creative to conversion.",
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
      "datePublished": "2025-12-25T14:16:17.862Z",
      "dateModified": "2025-12-25T14:16:17.862Z",
      "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://clientfuse.io/blog/linkedin-ads-b2b-lead-generation-complete-guide"
      },
      "articleSection": "LinkedIn Ads",
      "wordCount": 192
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
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">LinkedIn Ads</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">LinkedIn Ads for B2B Lead Generation: A Complete Guide</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime="2025-12-25">December 25, 2025</time>
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
              How to run profitable LinkedIn advertising campaigns for B2B clients, from targeting to creative to conversion.
            </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why LinkedIn for B2B</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            LinkedIn is the most powerful B2B advertising platform. Nowhere else can you target by job title, company size, industry, and seniority with such precision. Yes, CPMs are higher than Facebook—but the quality of leads often justifies the premium for B2B clients.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Targeting Strategy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Start narrow and expand. Target specific job titles at companies in your ICP. Layer on company size and industry. Use matched audiences for retargeting and ABM campaigns. Avoid targeting by skills or groups—these audiences are too broad and often irrelevant.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ad Formats That Work</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sponsored Content performs best for most objectives. Single image ads with clear value propositions outperform complex carousels. Lead Gen Forms reduce friction significantly—use them when lead quality isn't a concern. Video ads build awareness but rarely drive direct conversions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Content-to-Conversion Path</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            LinkedIn users aren't ready to buy immediately. Build a funnel: Thought leadership content → Gated asset (ebook, webinar) → Product demo. Each stage warms the audience for the next. Expect a longer sales cycle than consumer advertising.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Budgeting and Optimization</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            LinkedIn requires meaningful budgets—plan for $3,000/month minimum to gather useful data. Start with manual CPC bidding, then transition to automated bidding once you have conversion data. Refresh creative every 4-6 weeks to combat frequency fatigue.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Resources & Further Reading</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>
              <a href="https://business.linkedin.com/marketing-solutions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                LinkedIn Marketing Solutions
              </a>
            </li>
            <li>
              <a href="https://business.linkedin.com/marketing-solutions/success/advertising-benchmarks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                LinkedIn Ads Benchmarks
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
