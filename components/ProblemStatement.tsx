import { AlertTriangle, Clock, Users, FileText, Mail } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Hours of Back-and-Forth",
    description: "Endless email chains trying to explain complex permission setups across multiple platforms."
  },
  {
    icon: Users,
    title: "Confused Clients",
    description: "Clients get overwhelmed by technical jargon and complicated admin panel navigation."
  },
  {
    icon: FileText,
    title: "Complex Instructions",
    description: "Creating step-by-step guides for each platform that clients often ignore or mess up."
  },
  {
    icon: Mail,
    title: "Lost Opportunities",
    description: "Delayed campaigns and missed deadlines while waiting for proper access to be granted."
  }
];

export default function ProblemStatement() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We know getting access to <span className="gradient-text">client accounts</span> is a nightmare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every agency owner has been there. You need access to your client's Facebook, Google, and other accounts, but the process is anything but simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">That's why we built ClientFuse</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've eliminated the complexity. One simple link replaces hours of instructions, 
            confused clients, and missed deadlines. Get instant access to everything you need.
          </p>
        </div>
      </div>
    </section>
  );
}
