import VerticalNavigation from "@/components/vertical-navigation.jsx";
import About from "@/components/vertical-info.jsx"
import ContactSection from "@/components/contact-section.jsx";
import Footer from "@/components/layout/Footer.jsx";
// import Carousel from "@/components/ui/carousel";
// import SubVerticalHeader from "../components/sub-vertical";

export default function Consulting() {
  return (
    <div className="min-h-screen">
      <VerticalNavigation />
      <About currentPage="consulting"/>
      {/* <SubVerticalHeader currentPage="consulting"/> */}
      {/* <Carousel currentPage="consulting"/> */}
      <ContactSection />
      <Footer />
    </div>
  );
}