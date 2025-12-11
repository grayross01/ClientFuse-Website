import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';

// Blog posts listing
const blogPosts = [
  {
    slug: 'top-5-social-media-management-platforms-agencies',
    title: 'Top 5 Social Media Management Platforms for Marketing Agencies',
    excerpt: 'A comprehensive review of the best social media management platforms, ranked by their suitability for marketing agencies managing multiple clients.',
    date: '2024-01-15',
    readTime: '12 min read',
    category: 'Tools',
    featured: true
  },
  {
    slug: 'how-to-get-client-access-facebook-ads',
    title: 'How to Get Client Access to Facebook Ads Without the Back-and-Forth',
    excerpt: 'Learn the most effective strategies for getting proper access to your clients\' Facebook Ads accounts, including admin roles, permissions, and common pitfalls to avoid.',
    date: '2024-10-24',
    readTime: '5 min read',
    category: 'Facebook Ads',
    featured: true
  },
  {
    slug: 'complete-guide-client-onboarding-marketing-agencies',
    title: 'The Complete Guide to Client Onboarding for Marketing Agencies',
    excerpt: 'A step-by-step framework for onboarding new clients efficiently, setting expectations, and building lasting relationships from day one.',
    date: '2025-11-29',
    readTime: '5 min read',
    category: 'Client Management',
    featured: false
  },
  {
    slug: 'how-to-price-marketing-agency-services-2025',
    title: 'How to Price Your Marketing Agency Services in 2025',
    excerpt: 'A comprehensive breakdown of pricing models, rate calculations, and strategies to maximize profitability while staying competitive.',
    date: '2025-12-01',
    readTime: '5 min read',
    category: 'Agency Growth',
    featured: false
  },
  {
    slug: 'google-ads-account-structure-best-practices-agencies',
    title: 'Google Ads Account Structure Best Practices for Agencies',
    excerpt: 'How to structure Google Ads accounts for maximum performance, easy management, and clear reporting across multiple clients.',
    date: '2025-12-04',
    readTime: '5 min read',
    category: 'Google Ads',
    featured: false
  },
  {
    slug: 'building-repeatable-client-reporting-system',
    title: 'Building a Repeatable Client Reporting System',
    excerpt: 'How to create reports that clients actually read, automate the tedious parts, and turn reporting into a retention tool.',
    date: '2025-12-08',
    readTime: '5 min read',
    category: 'Operations',
    featured: false
  },
  {
    slug: 'managing-remote-marketing-teams-leading-agencies',
    title: 'Managing Remote Marketing Teams: Lessons from Leading Agencies',
    excerpt: 'Proven strategies for building culture, maintaining productivity, and scaling a distributed agency team.',
    date: '2025-12-08',
    readTime: '5 min read',
    category: 'Team Management',
    featured: false
  },
  {
    slug: 'facebook-ads-ecommerce-agency-playbook',
    title: 'Facebook Ads for E-commerce: Agency Playbook',
    excerpt: 'Advanced strategies for running profitable Facebook and Instagram campaigns for e-commerce clients in the post-iOS 14 era.',
    date: '2025-12-11',
    readTime: '5 min read',
    category: 'Facebook Ads',
    featured: false
  },
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Marketing Agency <span className="gradient-text">Insights & Tips</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn proven strategies, best practices, and industry insights to grow your marketing agency and streamline your client management processes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
