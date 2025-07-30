/**
 * Business Verticals Data Configuration
 * 
 * This file contains all the business vertical data for Inventta Group.
 * Each vertical includes services, descriptions, and visual elements.
 */

import {
  Heart,
  PillBottle,
  Monitor,
  GraduationCap,
  Building,
  Car,
  Handshake,
  ShoppingBasket,
  Shield,
  Home,
  Cpu,
  Sun,
  Shirt,
  Video,
} from "lucide-react";
import type { BusinessVertical } from "@/types/business";

/**
 * Complete list of Inventta Group's 14 business verticals
 * 
 * Healthcare and Pharmaceuticals are featured as primary verticals
 * reflecting the company's core focus on healthcare innovation.
 */
export const businessVerticals: BusinessVertical[] = [
  {
    id: "healthcare",
    title: "Healthcare Services",
    description: "Comprehensive wellness healthcare services, path labs, diagnosis centers, and cloud hospitals providing world-class medical care.",
    icon: Heart,
    color: "text-inventta-blue",
    bgColor: "bg-blue-100",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Wellness Healthcare Services",
      "Inventta Path Labs",
      "Biohelp Diagnosis and Health Care",
      "Inventta Cloud Hospitals"
    ],
    featured: true,
    category: 'healthcare'
  },
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    description: "Leading pharmaceutical solutions including generic medicines, regulatory services, B2B distribution, and cold chain logistics.",
    icon: PillBottle,
    color: "text-inventta-green",
    bgColor: "bg-green-100",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Generic Medicine Supply",
      "Regulatory & Compliance Services",
      "Wholesale & B2B Distribution",
      "Cold Chain Logistics"
    ],
    featured: true,
    category: 'healthcare'
  },
  {
    id: "zyrarx",
    title: "ZyraRx HealthTech",
    description: "AI-based health monitoring, telemedicine, and electronic health records.",
    icon: Monitor,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Telemedicine & Virtual Consultations",
      "AI-Based Health Monitoring",
      "Electronic Health Records (EHR/EMR)",
      "Health Data Analytics & Insights"
    ],
    category: 'technology'
  },
  {
    id: "education",
    title: "Education",
    description: "K-12 schools, UPSC coaching, corporate training, and professional development.",
    icon: GraduationCap,
    color: "text-green-600",
    bgColor: "bg-green-100",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Inventtta International High School (K–12)",
      "Tech Platform for Professionals",
      "UPSC / Government Exam Preparation",
      "Corporate Training & L&D Services"
    ],
    category: 'services'
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Hotels, resorts, event management, and travel tourism services.",
    icon: Building,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Hotels & Accommodation",
      "Resorts & Nature Stays",
      "Event & Emergency Services Management",
      "Travel & Tourism"
    ],
    category: 'services'
  },
  {
    id: "automobiles",
    title: "Automobiles",
    description: "Luxury vehicle sales, authorized dealerships, leasing and maintenance.",
    icon: Car,
    color: "text-red-600",
    bgColor: "bg-red-100",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Sales & Purchase of Luxury Vehicles",
      "Authorized Dealerships – Toyota & Skoda",
      "Vehicle Leasing & Rental Services",
      "Auto Service & Maintenance Centers"
    ],
    category: 'consumer'
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "Business consulting, HR services, legal advisory, and IT support.",
    icon: Handshake,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Business Consulting Services",
      "HR & Recruitment Services",
      "Law & Legal Advisory Services",
      "IT & Software Support Consulting"
    ],
    category: 'services'
  },
  {
    id: "consumer-goods",
    title: "Consumer Goods",
    description: "Coffee cafés, home essentials, e-commerce, and sustainable products.",
    icon: ShoppingBasket,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Coffee Café Alliance",
      "Home Essentials",
      "E-commerce & Retail through App",
      "CTC & Green Team – Sustainable Living"
    ],
    category: 'consumer'
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Health, life, and general insurance with digital services and investment advisory.",
    icon: Shield,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Health & Life Insurance",
      "General Insurance",
      "Digital Insurance Services",
      "Mutual Fund & Investment Advisory"
    ],
    category: 'services'
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Property advisory, commercial leasing, investment consulting, and digital platform.",
    icon: Home,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Residential Property Advisory",
      "Commercial Space Leasing & Sales",
      "Real Estate Investment Consulting",
      "Digital Property Platform"
    ],
    category: 'services'
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "Consumer electronics, smart home devices, IoT products, and after-sales service.",
    icon: Cpu,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Consumer Electronics",
      "Smart Home Devices",
      "IoT Products",
      "After-Sales Service & AMC Plans"
    ],
    category: 'technology'
  },
  {
    id: "green-energy",
    title: "Green Energy",
    description: "Solar solutions, EV charging stations, plantation programs, and environmental awareness.",
    icon: Sun,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Solar Energy Solutions",
      "EV Charging Stations",
      "Enrich Plantation Program",
      "Global Warming Awareness Programs"
    ],
    category: 'industrial'
  },
  {
    id: "fashion",
    title: "Fashion & Lifestyle",
    description: "Apparel, footwear, private label brands, and lifestyle products.",
    icon: Shirt,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Apparel & Accessories",
      "Private Label Fashion Brands",
      "Footwear & Athleisure",
      "Lifestyle Products & Personal Care"
    ],
    category: 'consumer'
  },
  {
    id: "media",
    title: "Media & Entertainment",
    description: "Book publishing, podcasts, movies, and news channel services.",
    icon: Video,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Book Publishing",
      "True Story Podcast",
      "Movies in Local Languages",
      "News Channel"
    ],
    category: 'services'
  }
];

/**
 * Get featured business verticals (Healthcare & Pharmaceuticals)
 */
export const getFeaturedVerticals = (): BusinessVertical[] => {
  return businessVerticals.filter(vertical => vertical.featured);
};

/**
 * Get non-featured business verticals
 */
export const getOtherVerticals = (): BusinessVertical[] => {
  return businessVerticals.filter(vertical => !vertical.featured);
};

/**
 * Get business verticals by category
 */
export const getVerticalsByCategory = (category: BusinessVertical['category']): BusinessVertical[] => {
  return businessVerticals.filter(vertical => vertical.category === category);
};

/**
 * Get business vertical by ID
 */
export const getVerticalById = (id: string): BusinessVertical | undefined => {
  return businessVerticals.find(vertical => vertical.id === id);
};

/**
 * Get all unique categories
 */
export const getCategories = (): string[] => {
  const categories = businessVerticals
    .map(vertical => vertical.category)
    .filter((category): category is string => category !== undefined);
  
  return Array.from(new Set(categories));
};