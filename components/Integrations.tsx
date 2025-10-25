const integrations = [
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  { name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
  { name: "Google Ads", logo: "/logos/google-ads.png" },
  { name: "Google Analytics", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg" },
  { name: "Google Tag Manager", logo: "/logos/google-tag-manager.svg" },
  { name: "Google Business Profile", logo: "/logos/google-business-profile.png" },
  { name: "Google Search Console", logo: "/logos/google-search-console.svg" },
  { name: "Google Merchant Center", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connect to <span className="gradient-text">Meta & Google platforms</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get access to all the marketing platforms your clients use—all from one unified interface.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md cursor-pointer group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-sm font-medium text-gray-700 text-center">{integration.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need something else?</p>
          <a href="mailto:support@clientfuse.io" className="text-blue-600 hover:text-blue-700 font-semibold">
            Request a new integration →
          </a>
        </div>
      </div>
    </section>
  );
}
