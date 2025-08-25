import VerticalNavigation from "@/components/vertical-navigation.jsx";
import About from "@/components/vertical-info.jsx"
import ContactSection from "@/components/contact-section.jsx";
import Footer from "@/components/layout/Footer.jsx";
import Carousel from "@/components/ui/carousel";
import SubVerticalHeader from "../components/sub-vertical";

export default function Healthcare() {
  return (
    <div className="min-h-screen">
      <VerticalNavigation />
      <About currentPage="healthcare"/>
      <SubVerticalHeader currentPage="healthcare"/>
      <Carousel currentPage="healthcare"/>
      <ContactSection />
      <Footer />
    </div>
  );
}