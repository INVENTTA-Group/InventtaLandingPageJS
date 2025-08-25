import Navigation from "@/components/career-navigation.jsx";
import Career from "@/components/career-section";
import ContactSection from "@/components/contact-section.jsx";
import Footer from "@/components/layout/Footer.jsx";

export default function Careers() {
  return (
    <div id="#careers" className="min-h-screen">
      {/* <Navigation /> */}
      <Career />
      <Footer />
    </div>
  );
}