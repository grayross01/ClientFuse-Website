import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EmailPopup from "@/components/EmailPopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <Integrations />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Footer />
      <EmailPopup />
    </main>
  );
}

