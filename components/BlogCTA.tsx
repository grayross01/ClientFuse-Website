"use client";

// Track signup button clicks with Facebook Pixel
const trackSignupClick = () => {
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'Lead', {
      content_name: 'Blog CTA',
      content_category: 'Blog'
    });
  }
};

export default function BlogCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 mt-16 not-prose">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline Your Client Onboarding</h3>
      <p className="text-gray-700 mb-6">
        Stop chasing clients for account access. ClientFuse lets you send one simple link to get instant access to Facebook, Google, Instagram, and more marketing platforms.
      </p>
      <a 
        href="https://app.clientfuse.io/auth/login?signup=true" 
        className="btn-primary inline-block"
        onClick={trackSignupClick}
      >
        Start Free Trial
      </a>
    </div>
  );
}
