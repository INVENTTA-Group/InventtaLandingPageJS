import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Businesses", href: "#businesses" },
    { label: "Leadership", href: "#leadership" },
    { label: "Careers", href: "#" },
    { label: "Sustainability", href: "#" },
  ];

  const healthcareLinks = [
    { label: "Healthcare Services", href: "#" },
    { label: "Pharmaceuticals", href: "#" },
    { label: "ZyraRx HealthTech", href: "#" },
    { label: "Path Labs", href: "#" },
    { label: "Cloud Hospitals", href: "#" },
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin", href: "#", label: "LinkedIn" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-facebook", href: "#", label: "Facebook" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-4">
              INVENTTA<span className="text-inventta-green">GROUP</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading India's healthcare revolution across 14 business verticals, transforming lives through innovation, excellence, and integrity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Healthcare</h3>
            <ul className="space-y-2">
              {healthcareLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-300"
        >
          <p>&copy; 2024 Inventta Group. All rights reserved. | Privacy Policy | Terms of Service</p>
        </motion.div>
      </div>

    </footer>
  );
}
