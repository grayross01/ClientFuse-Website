const integrations = [
  // Meta Platforms
  { name: "Facebook", icon: "📘", category: "Meta" },
  { name: "Instagram", icon: "📷", category: "Meta" },
  { name: "Facebook Ads", icon: "📘", category: "Meta" },
  { name: "Meta Business Suite", icon: "📱", category: "Meta" },
  // Google Platforms
  { name: "Google Ads", icon: "🔍", category: "Google" },
  { name: "Google Analytics", icon: "📊", category: "Google" },
  { name: "Google Tag Manager", icon: "🏷️", category: "Google" },
  { name: "Google Business Profile", icon: "📍", category: "Google" },
  { name: "Google Search Console", icon: "🌐", category: "Google" },
  { name: "Google Merchant Center", icon: "🛒", category: "Google" },
  { name: "YouTube", icon: "▶️", category: "Google" },
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

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Meta Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {integrations.filter(i => i.category === "Meta").map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md cursor-pointer group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <div className="text-sm font-medium text-gray-700 text-center">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Google Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {integrations.filter(i => i.category === "Google").map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md cursor-pointer group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <div className="text-sm font-medium text-gray-700 text-center">{integration.name}</div>
              </div>
            ))}
          </div>
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
