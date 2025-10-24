import { Zap, Shield, Bell, Search, Palette, BarChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "One Link to Rule Them All",
    description: "Forget the PDFs and complicated instructions. Send one link and get access to everything you need—Meta, Google, TikTok, and more.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "GDPR compliant, SOC 2 certified, and officially approved by Meta, Google, and TikTok. Your clients' data is always protected.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Never chase access requests again. Get instant alerts when clients grant access, so you can start working immediately.",
  },
  {
    icon: Search,
    title: "Access Detective",
    description: "Automatically diagnose access issues. Find missing admins, forgotten permissions, and broken connections in seconds.",
  },
  {
    icon: Palette,
    title: "White-Label Your Brand",
    description: "Customize everything—logo, colors, fonts, even the URL. Make ClientFuse invisible and showcase your agency's brand.",
  },
  {
    icon: BarChart,
    title: "Complete Dashboard",
    description: "Track every request, see who's granted access, and monitor your onboarding pipeline all in one beautiful dashboard.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to <span className="gradient-text">streamline access</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to save you time and eliminate friction in your client onboarding process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

