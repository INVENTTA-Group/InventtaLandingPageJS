import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import BusinessVerticals from "@/components/business-verticals";
import LeadershipMessage from "@/components/leadership-message";
import MissionVisionValues from "@/components/mission-vision-values";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <BusinessVerticals />
      <LeadershipMessage />
      <MissionVisionValues />
      <ContactSection />
      <Footer />
    </div>
  );
}
