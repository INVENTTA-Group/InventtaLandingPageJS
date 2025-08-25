import VerticalNavigation from "@/components/vertical-navigation.jsx";
import About from "@/components/vertical-info.jsx"
import ContactSection from "@/components/contact-section.jsx";
import Footer from "@/components/layout/Footer.jsx";
// import Carousel from "@/components/ui/carousel";
// import SubVerticalHeader from "../components/sub-vertical";

export default function Fashion() {
  return (
    <div className="min-h-screen">
      <VerticalNavigation />
      <About currentPage="fashion"/>
      {/* <SubVerticalHeader currentPage="fashion"/> */}
      {/* <Carousel currentPage="fashion"/> */}
      <ContactSection />
      <Footer />
    </div>
  );
}