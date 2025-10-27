import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

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
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Facebook Ads
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Get Client Access to Facebook Ads Without the Back-and-Forth
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Learn the most effective strategies for getting proper access to your clients' Facebook Ads accounts, including admin roles, permissions, and common pitfalls to avoid.
          </p>
          
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>October 24, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            As a marketing agency, getting proper access to your clients' Facebook Ads accounts is crucial for campaign management. However, this process often involves endless back-and-forth emails, confused clients, and delayed campaign launches. Here's how to streamline this process and avoid common pitfalls.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Understanding Facebook Ads Access Levels</h2>
          
          <p className="text-gray-700 mb-6">
            Facebook offers several access levels for Business Manager accounts. Understanding these is key to requesting the right permissions:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li><strong>Admin:</strong> Full control over the Business Manager and all assets</li>
            <li><strong>Editor:</strong> Can create and manage ads, but can't add or remove people</li>
            <li><strong>Advertiser:</strong> Can create and manage ads within assigned ad accounts</li>
            <li><strong>Analyst:</strong> View-only access to reports and insights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step-by-Step Process</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Prepare Your Request</h3>
          <p className="text-gray-700 mb-6">
            Before reaching out to your client, prepare a clear, concise request that includes:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Specific access level needed (usually Editor or Advertiser)</li>
            <li>Which ad accounts you need access to</li>
            <li>Why this access is necessary for their campaigns</li>
            <li>Timeline for when you need access</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Use Meta Business Manager</h3>
          <p className="text-gray-700 mb-6">
            The most efficient way to manage access is through Meta Business Manager. This centralized platform allows clients to:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Grant access to multiple ad accounts at once</li>
            <li>Set specific permissions for each team member</li>
            <li>Monitor who has access to what</li>
            <li>Revoke access when needed</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common Pitfalls to Avoid</h2>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Personal vs. Business Accounts</h3>
          <p className="text-gray-700 mb-6">
            Many clients confuse personal Facebook accounts with Business Manager accounts. Ensure your client has a proper Business Manager account set up before requesting access.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Insufficient Permissions</h3>
          <p className="text-gray-700 mb-6">
            Requesting too little access can lead to delays when you need to make changes. Be specific about what permissions you need and why.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Missing Assets</h3>
          <p className="text-gray-700 mb-6">
            Sometimes clients forget to grant access to specific ad accounts, pages, or catalogs. Create a comprehensive checklist of all assets you need access to.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Pro Tips for Success</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-3">💡 Pro Tip</h3>
            <p className="text-blue-800">
              Create a standardized onboarding document that you can send to all new clients. This document should include step-by-step instructions for granting access, screenshots, and contact information for support.
            </p>
          </div>

          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li><strong>Use screen recordings:</strong> Create short videos showing clients exactly how to grant access</li>
            <li><strong>Set expectations:</strong> Let clients know this is a one-time setup process</li>
            <li><strong>Follow up promptly:</strong> Check access within 24 hours of the request</li>
            <li><strong>Document everything:</strong> Keep records of what access was granted and when</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Alternative Solutions</h2>

          <p className="text-gray-700 mb-6">
            If the traditional process is still causing issues, consider using tools like ClientFuse that streamline the entire access request process. These tools can:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Send branded access requests to clients</li>
            <li>Track which permissions have been granted</li>
            <li>Provide clear instructions for each platform</li>
            <li>Automate follow-up reminders</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>

          <p className="text-gray-700 mb-8">
            Getting proper Facebook Ads access doesn't have to be a nightmare. With clear communication, proper preparation, and the right tools, you can streamline this process and get your campaigns running faster than ever.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Ready to streamline your client access process?</h3>
            <p className="text-gray-600 mb-4">
              ClientFuse eliminates the back-and-forth by sending one simple link that handles all platform access requests automatically.
            </p>
            <Link href="https://app.clientfuse.io/auth/login?signup=true" className="btn-primary inline-block">
              Start Free Trial
            </Link>
          </div>
        </div>
      </article>

      {/* Navigation */}
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
