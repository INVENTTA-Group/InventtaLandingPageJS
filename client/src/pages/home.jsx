import Navigation from "@/components/navigation.jsx";
import HeroSection from "@/components/hero-section.jsx";
import StatsSection from "@/components/stats-section.jsx";
import BusinessVerticals from "@/components/business-verticals.jsx";
import LeadershipMessage from "@/components/leadership-message.jsx";
import MissionVisionValues from "@/components/mission-vision-values.jsx";
import ContactSection from "@/components/contact-section.jsx";
import Footer from "@/components/layout/Footer.jsx";

export default function Home() {
  return (
    <div id="#homepage" className="min-h-screen">
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