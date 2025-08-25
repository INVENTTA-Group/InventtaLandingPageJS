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
import Consulting from "../components/assets/consulting/consulting.jpg"
import Insurance from "../components/assets/insurance/insurance.jpg"
import Electronics from "../components/assets/electronics/electronics.jpg"
import Svg01 from "../components/assets/healthcare/inventta-path-labs.jsx";
import Svg02 from "../components/assets/healthcare/biohelp.jsx";
import Svg11 from "../components/assets/pharmaceuticals/logo1.jsx";
import Svg12 from "../components/assets/pharmaceuticals/logo2.jsx";
import Svg21 from "../components/assets/zyrarx/logo1.jsx";
import Svg22 from "../components/assets/zyrarx/logo2.jsx";
import Svg31 from "../components/assets/education/logo1.jsx";
import Svg32 from "../components/assets/education/logo2.jsx";
import Svg41 from "../components/assets/hospitality/logo1.jsx";
import Svg42 from "../components/assets/hospitality/logo2.jsx";
import Svg51 from "../components/assets/automobiles/logo1.jsx";
import Svg52 from "../components/assets/automobiles/logo2.jsx";
import Svg61 from "../components/assets/consumer-goods/logo1.jsx";
import Svg62 from "../components/assets/consumer-goods/logo2.jsx";
import Svg71 from "../components/assets/real-estate/logo1.jsx";
import Svg72 from "../components/assets/real-estate/logo2.jsx";
import Svg81 from "../components/assets/electronics/logo1.jsx";
import Svg82 from "../components/assets/electronics/logo2.jsx";
import Svg91 from "../components/assets/green-energy/logo1.jsx";
import Svg92 from "../components/assets/green-energy/logo2.jsx";
import Svg101 from "../components/assets/fashion/logo1.jsx";
import Svg102 from "../components/assets/fashion/logo2.jsx";
import Svg111 from "../components/assets/media/logo1.jsx";
import Svg112 from "../components/assets/media/logo2.jsx";
import { title } from "process";
/**
 * Complete list of Inventta Group's 14 business verticals
 * 
 * Healthcare and Pharmaceuticals are featured as primary verticals
 * reflecting the company's core focus on healthcare innovation.
 */
export const businessVerticals = [
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
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1541596993953-970dd2ffdbdb?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
 * Complete list of Inventta Group's 14 business verticals & their 
 * respective Info to be displayed on their respective page
 * 
 * Healthcare is the only one displaying it's Subsidiary companies
 */

export const verticalInfo = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Our healthcare vertical integrates physical and digital health ecosystems to deliver patient-centric services across multiple domains.",
    blurb: "Delivering integrated healthcare solutions — from clinical networks to digital HealthTech. Sub-verticals and technologies designed to enhance patient outcomes.",
    subBlurb: "Our healthcare subsidiaries connect clinics, labs, and tech for seamless patient-centered care.",
    icon: Heart,
    color: "text-inventta-blue",
    bgColor: "bg-blue-100",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    blurbImg: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    blurbAlt: "Healthcare Stock Image - XRay OK Hand",
    svgLogo: [
      Svg01,
      Svg02
    ],
    services: [
      "Comprehensive clinical networks and advanced cloud hospitals providing accessible, specialized healthcare services.",
      "Accredited diagnostic laboratories and state-of-the-art pathology facilities for precise testing results.",
      "Fully integrated pharmaceutical supply chain supported by in-house research and innovation.",
      "Telemedicine platforms and remote monitoring tools improving patient access and care outcomes."
    ],
    featured: true,
    category: "healthcare"
  },
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    description: "We provide end-to-end pharmaceutical solutions, from marketing to global distribution, ensuring safety, quality, and compliance.",
    blurb: "Advancing pharmaceutical with marketing, branding, retailing, regulatory affairs, and distribution with strict compliance and optimized supply chains.",
    subBlurb: "Our pharma companies deliver trusted medicines, research, and compliance-driven distribution worldwide.",
    icon: PillBottle,
    color: "text-inventta-green",
    bgColor: "bg-green-100",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0",
    blurbImg: "https://plus.unsplash.com/premium_photo-1661374914839-a84dc1314c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhhcm1hY2V1dGljYWx8ZW58MHx8MHx8fDA%3D",
    blurbAlt: "Pharmaceutical Stock Image - Woman Testing Samples in Test Tube",
    /*svgLogo: [
      Svg11,
      Svg12
    ],*/
    services: [
      "High-quality pharmaceutical marketing and branding of trusted generic and branded medicines.",
      "Specialized research and development facilities creating innovative healthcare solutions.",
      "Expert regulatory affairs and quality control compliant with FDA, WHO, EMA standards.",
      "Robust supply chain and cold chain logistics ensuring safe medicine delivery."
    ],
    featured: true,
    category: "healthcare"
  },
  {
    id: "zyrarx",
    title: "ZyraRx HealthTech",
    description: "ZyraRx builds AI-powered health platforms that combine virtual care, monitoring, and secure health records in one integrated ecosystem.",
    blurb: "AI-powered healthcare platform offering telemedicine, remote monitoring, and secure health data management.",
    subBlurb: "ZyraRx unites AI, telemedicine, and analytics for smarter, more connected healthcare.",
    icon: Monitor,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    blurbImg: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Health Tech Stock Image - Turned On Flat Screen Monitor",
    /*svgLogo: [
      Svg21,
      Svg22
    ],*/
    services: [
      "Instant telemedicine consultations with licensed doctors via secure online platforms.",
      "AI-driven health monitoring systems for real-time patient data tracking.",
      "Secure and compliant EHR/EMR solutions supporting integrated healthcare delivery.",
      "Advanced analytics turning health data into actionable medical insights."
    ],
    category: "technology"
  },
  {
    id: "education",
    title: "Education",
    description: "From schools to corporate learning, we deliver education that blends traditional expertise with modern platforms for lifelong learning.",
    blurb: "Delivering high-quality education from K–12 to professional training, backed by modern technology platforms.",
    subBlurb: "Our education group spans schools, coaching, and corporate learning for all stages of growth.",
    icon: GraduationCap,
    color: "text-green-600",
    bgColor: "bg-green-100",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbImg: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Education Stock Image - Child Reading Under A Tree",
    /*svgLogo: [
      Svg31,
      Svg32
    ],*/
    services: [
      "Global-standard K–12 schools fostering academic and personal excellence.",
      "Comprehensive UPSC and competitive exam coaching with expert mentors.",
      "Corporate L&D solutions tailored to skill-building and leadership needs.",
      "Tech-enabled platforms offering professional certifications and career development."
    ],
    category: "services"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Our hospitality services offer comfort, luxury, and curated experiences for both leisure and business travel.",
    blurb: "Premium hospitality services, event management, and curated travel experiences for diverse customer needs.",
    subBlurb: "Hospitality brands delivering luxury stays, curated travel, and seamless event experiences globally.",
    icon: Building,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    blurbImg: "https://images.unsplash.com/photo-1660557989688-1564893ccf8c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Hospitality Stock Image - Luggage Carrier In Reception",
    /*svgLogo: [
      Svg41,
      Svg42
    ],*/
    services: [
      "Luxury hotels and premium resorts offering top-tier guest experiences.",
      "Expert event and conference management for any scale or audience.",
      "Eco-resorts and wellness retreats promoting relaxation and health.",
      "Custom travel itineraries for unique and memorable journeys."
    ],
    category: "services"
  },
  {
    id: "automobiles",
    title: "Automobiles",
    description: "We bring together premium dealerships, leasing programs, and maintenance services for automotive excellence.",
    blurb: "Luxury vehicle dealerships, leasing solutions, and premium after-sales services.",
    subBlurb: "Our auto network offers premium cars, rentals, and maintenance under trusted brands.",
    icon: Car,
    color: "text-red-600",
    bgColor: "bg-red-100",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbImg: "https://plus.unsplash.com/premium_photo-1694014984611-69459822359b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Automobiles Stock Image - Back Of A Car",
    /*svgLogo: [
      Svg51,
      Svg52
    ],*/
    services: [
      "Sales of high-end vehicles from globally recognized automotive brands.",
      "Authorized dealerships for certified new and used luxury cars.",
      "Flexible leasing and rental services for individuals and corporates.",
      "Premium after-sales maintenance and servicing programs."
    ],
    category: "consumer"
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "We offer specialized consulting services that align business strategies with operational execution across industries.",
    blurb: "Business, HR, legal, and IT advisory services to drive growth and efficiency.",
    subBlurb: "Consulting experts helping businesses optimize strategy, operations, and compliance across industries.",
    icon: Handshake,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    blurbImg: Consulting,
    blurbAlt: "Consulting Stock Image - People Doing A Day Meeting On The Table - Photo by <a href='https://unsplash.com/@dylandgillis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Dylan Gillis</a> on <a href='https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-KdeqA3aTnBY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>",
    /*svgLogo: [
      Svg61,
      Svg62
    ],*/
    services: [
      "Strategic business advisory improving market position and operational effectiveness.",
      "Complete HR services covering recruitment, retention, and talent management.",
      "Specialized legal consulting to mitigate risk and ensure full compliance.",
      "IT transformation consulting to modernize infrastructure and boost efficiency."
    ],
    category: "services"
  },
  {
    id: "consumer-goods",
    title: "Consumer Goods",
    description: "Our consumer goods vertical covers essential products, lifestyle brands, and eco-conscious solutions for everyday living.",
    blurb: "Retail and e-commerce solutions for everyday essentials, lifestyle, and sustainable living.",
    subBlurb: "Brands delivering everyday essentials, lifestyle products, and sustainable goods to modern consumers.",
    icon: ShoppingBasket,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    image: "https://images.unsplash.com/photo-1541596993953-970dd2ffdbdb?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbImg: "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Consumer Goods Stock Image - Woman Checking Labels",
    /*svgLogo: [
      Svg71,
      Svg72
    ],*/
    services: [
      "Specialty coffee outlets offering premium drinks with curated snack menus.",
      "Affordable yet quality home essentials for daily living convenience.",
      "E-commerce solutions for fast, reliable product access across categories.",
      "Eco-friendly product lines promoting sustainable and responsible consumption."
    ],
    category: "consumer"
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Offering a complete suite of insurance and investment advisory services to protect and grow your wealth.",
    blurb: "Comprehensive insurance services and investment advisory for health, life, and general needs.",
    subBlurb: "Insurance brands safeguarding health, assets, and investments with expert advisory services.",
    icon: Shield,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    blurbImg: Insurance, 
    blurbAlt: "Insurance Stock Image - Man Signing A Paper - Photo by <a href='https://unsplash.com/@amstram?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Scott Graham</a> on <a href='https://unsplash.com/photos/man-writing-on-paper-OQMZwNd3ThU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>",
    /*svgLogo: [
      Svg81,
      Svg82
    ],*/
    services: [
      "Tailored health and life policies for individuals, families, and corporates.",
      "Comprehensive asset and general coverage protecting diverse investments.",
      "Digital-first policy tracking and fast claim processing systems.",
      "Mutual fund and wealth management guidance for financial growth."
    ],
    category: "services"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Our real estate services connect clients with residential, commercial, and investment opportunities through innovative platforms.",
    blurb: "Residential, commercial, and investment property services with digital integration.",
    subBlurb: "Real estate companies offering housing, commercial spaces, and smart investment opportunities.",
    icon: Home,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    blurbImg: "https://images.unsplash.com/photo-1660481860920-d9b9a1895161?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Real Estate Stock Image - Building",
    /*svgLogo: [
      Svg91,
      Svg92
    ],*/
    services: [
      "Residential property advisory tailored to buyers’ needs and goals.",
      "Leasing and sales for premium-grade commercial spaces.",
      "Investment advisory maximizing long-term property returns.",
      "Digital tools for transparent and efficient transactions."
    ],
    category: "services"
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "We design, distribute, and support electronics, IoT, and smart home solutions for modern living.",
    blurb: "Smart devices, consumer electronics, and IoT solutions with reliable service support.",
    subBlurb: "Electronics brands providing innovative devices, IoT solutions, and after-sales support.",
    icon: Cpu,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbImg: Electronics,
    blurbAlt: "Arduino",
    /*svgLogo: [
      Svg101,
      Svg102
    ],*/
    services: [
      "Wide range of consumer electronics from global and local manufacturers.",
      "Smart home automation devices for energy savings and convenience.",
      "IoT-based solutions enabling smarter living and connected workplaces.",
      "Reliable after-sales maintenance and service agreements."
    ],
    category: "technology"
  },
  {
    id: "green-energy",
    title: "Green Energy",
    description: "We deliver renewable energy solutions and promote environmental sustainability through technology and advocacy.",
    blurb: "Renewable energy solutions and environmental initiatives for a sustainable future.",
    subBlurb: "Green energy companies driving solar, EV, and sustainability initiatives worldwide.",
    icon: Sun,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbImg: "https://images.unsplash.com/photo-1632103996718-4a47cf68b75e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Green Energy Stock Image - Wind Mill in Desert",
    /*svgLogo: [
      Svg111,
      Svg112
    ],*/
    services: [
      "Turnkey solar energy systems for all scales of use.",
      "EV charging solutions supporting the shift to electric mobility.",
      "Afforestation and eco-restoration projects for greener communities.",
      "Awareness programs promoting renewable adoption and climate action."
    ],
    category: "industrial"
  },
  {
    id: "fashion",
    title: "Fashion & Lifestyle",
    description: "We create and curate fashion and lifestyle products that combine trend, comfort, and quality.",
    blurb: "Trend-driven apparel, footwear, and lifestyle products for modern consumers.",
    subBlurb: "Fashion labels offering stylish apparel, footwear, and lifestyle goods for all tastes.",
    icon: Shirt,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    blurbImg: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Fashion & Lifestyle Stock Image - Assorted Colored Shirts Hanging",
    /*svgLogo: [
      Svg121,
      Svg122
    ],*/
    services: [
      "Trendy clothing collections for men, women, and children.",
      "Exclusive in-house labels blending quality with modern style.",
      "Athleisure and footwear designed for performance and comfort.",
      "Lifestyle and personal care products enhancing daily living."
    ],
    category: "consumer"
  },
  {
    id: "media",
    title: "Media & Entertainment",
    description: "From books to broadcasts, our media vertical delivers engaging content across formats and platforms.",
    blurb: "Publishing, film production, podcasts, and news platforms to engage diverse audiences.",
    subBlurb: "Media brands producing books, films, and digital content to inspire and inform.",
    icon: Video,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    blurbImg: "https://images.unsplash.com/photo-1588800347304-ec7e6f353327?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blurbAlt: "Healthcare Stock Image - XRay OK Hand",
    /*svgLogo: [
      Svg131,
      Svg132
    ],*/
    services: [
      "Book publishing for authors, brands, and educational content.",
      "Original podcast creation spanning diverse genres and topics.",
      "Film production services for entertainment and corporate projects.",
      "Digital and TV news channels delivering accurate reporting."
    ],
    category: "services"
  }
];


/**
 * Get featured business verticals (Healthcare & Pharmaceuticals)
 */
export const getFeaturedVerticals = () => {
  return businessVerticals.filter(vertical => vertical.featured);
};

/**
 * Get non-featured business verticals
 */
export const getOtherVerticals = () => {
  return businessVerticals.filter(vertical => !vertical.featured);
};

/**
 * Get business verticals by category
 */
export const getVerticalsByCategory = (category) => {
  return businessVerticals.filter(vertical => vertical.category === category);
};

/**
 * Get business vertical by ID
 */
export const getVerticalById = (id) => {
  return businessVerticals.find(vertical => vertical.id === id);
};

/**
 * Get all unique categories
 */
export const getCategories = () => {
  const categories = businessVerticals
    .map(vertical => vertical.category)
    .filter((category) => category !== undefined);
  
  return Array.from(new Set(categories));
};