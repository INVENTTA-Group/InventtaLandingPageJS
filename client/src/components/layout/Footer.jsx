/**
 * Footer Component
 * 
 * Company footer with navigation links, contact information,
 * social media links, and corporate branding.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { COMPANY_INFO, FOOTER_LINKS } from "@/data/constants.js";
import SvgIcon from "../assets/logo.jsx";
import { useNavigate } from "react-router-dom";


export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  /**
   * Handles footer navigation clicks with smooth scrolling
   */
  const navigate = useNavigate();
  const handleNavClick = (href) => {
    if (href?.startsWith('/#')) {
      // Split route & path
      const [route, hash] = href.split('#');
      
      // Navigate to Path '/'
      navigate(route);
      // Wait Until the page loads
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        console.log(element);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        else {
          console.log("Element Not Found: ", `#${hash}`);
        }
      }, 400)
    }
     else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Company Information */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <div className="w-88 h-auto">
                <SvgIcon />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {COMPANY_INFO.description}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm text-gray-400">
              <div>Email: {COMPANY_INFO.contact.email.general}</div>
              <div>Phone: {COMPANY_INFO.contact.phone.primary}</div>
              <div>
                {COMPANY_INFO.contact.address.join(', ')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-inventta-green transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Focus */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Healthcare Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.healthcareLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-inventta-green transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {FOOTER_LINKS.socialLinks.map((social) => (
                <button
                  key={social.label}
                  onClick={() => handleNavClick(social.href)}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-inventta-blue transition-colors duration-200"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`} aria-hidden="true"></i>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}