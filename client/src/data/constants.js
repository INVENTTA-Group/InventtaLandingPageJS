/**
 * Application Constants
 * 
 * Centralized configuration file for application-wide constants,
 * company information, and reusable data structures.
 */

import { MapPin, Phone, Mail } from "lucide-react";

/**
 * Company Information
 */
export const COMPANY_INFO = {
  name: "Inventta Group",
  tagline: "Leading India's Healthcare Revolution",
  description: "Pioneering healthcare innovation across 14 business verticals, transforming lives through excellence in pharmaceuticals, medical technology, and comprehensive wellness solutions.",
  foundedYear: 2010,
  headquarters: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
  },
  contact: {
    email: {
      general: "info@inventtagroup.com",
      partnerships: "partnerships@inventtagroup.com"
    },
    phone: {
      primary: "+91 22 1234 5678",
      secondary: "+91 22 8765 4321"
    },
    address: [
      "Inventta Group Corporate Office",
      "Business District, Mumbai",
      "Maharashtra, India"
    ]
  }
};

/**
 * Brand Colors - Exact specifications
 */
export const BRAND_COLORS = {
  primary: {
    blue: "#264f8f",
    green: "#21c174"
  },
  secondary: {
    lightBlue: "#3b82f6",
    darkBlue: "#1e40af"
  }
};

/**
 * Navigation Menu Items
 */
export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#businesses", label: "Businesses" },
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" }
];

/**
 * Company Statistics for Animated Counters
 */
export const COMPANY_STATS = [
  {
    end: 14,
    suffix: "+",
    label: "Business Verticals",
    delay: 0
  },
  {
    end: 150,
    suffix: "+",
    label: "Service Locations",
    delay: 100
  },
  {
    end: 10000,
    suffix: "+",
    label: "Healthcare Professionals",
    delay: 200
  },
  {
    end: 1000000,
    suffix: "+",
    label: "Lives Impacted",
    delay: 300
  }
];

/**
 * Contact Information for Contact Section
 */
export const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Headquarters",
    content: COMPANY_INFO.contact.address,
    color: "text-inventta-blue",
    bgColor: "bg-blue-100"
  },
  {
    icon: Phone,
    title: "Phone",
    content: [
      COMPANY_INFO.contact.phone.primary,
      COMPANY_INFO.contact.phone.secondary
    ],
    color: "text-inventta-green",
    bgColor: "bg-green-100"
  },
  {
    icon: Mail,
    title: "Email",
    content: [
      COMPANY_INFO.contact.email.general,
      COMPANY_INFO.contact.email.partnerships
    ],
    color: "text-inventta-blue",
    bgColor: "bg-blue-100"
  }
];

/**
 * Footer Navigation Links
 */
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Our Businesses", href: "#businesses" },
    { label: "Leadership", href: "#leadership" },
    { label: "Careers", href: "#" },
    { label: "Sustainability", href: "#" }
  ],
  healthcareLinks: [
    { label: "Healthcare Services", href: "#" },
    { label: "Pharmaceuticals", href: "#" },
    { label: "ZyraRx HealthTech", href: "#" },
    { label: "Path Labs", href: "#" },
    { label: "Cloud Hospitals", href: "#" }
  ],
  socialLinks: [
    { icon: "fab fa-linkedin", href: "#", label: "LinkedIn" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-facebook", href: "#", label: "Facebook" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" }
  ]
};

/**
 * Business Vertical Categories
 */
export const BUSINESS_CATEGORIES = {
  healthcare: "Healthcare",
  technology: "Technology",
  consumer: "Consumer",
  industrial: "Industrial",
  services: "Services"
};

/**
 * Animation Configuration
 */
export const ANIMATION_CONFIG = {
  defaultDuration: 0.6,
  staggerDelay: 0.1,
  easing: "ease-out",
  counters: {
    duration: 2000,
    delay: 100
  },
  parallax: {
    offset: 50
  }
};

/**
 * SEO Configuration
 */
export const SEO_CONFIG = {
  title: "Inventta Group - Leading Healthcare & Multi-Industry Conglomerate",
  description: "Inventta Group is India's leading healthcare and pharmaceutical conglomerate with 14 business verticals. Pioneering innovation in healthcare, pharmaceuticals, education, hospitality, and more.",
  keywords: [
    "healthcare",
    "pharmaceuticals",
    "medical technology",
    "health services",
    "business conglomerate",
    "India healthcare",
    "ZyraRx",
    "Inventta Group"
  ],
  openGraph: {
    title: "Inventta Group - Leading Healthcare & Multi-Industry Conglomerate",
    description: "Pioneering healthcare innovation across 14 business verticals, transforming lives through excellence in pharmaceuticals, medical technology, and comprehensive wellness solutions.",
    type: "website",
    url: "https://inventtagroup.com"
  }
};