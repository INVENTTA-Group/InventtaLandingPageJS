/**
 * Business Verticals Section Component
 * 
 * Displays all 14 business verticals with featured healthcare and pharmaceutical
 * verticals prominently showcased. Uses modular card components for consistency.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { businessVerticals, getFeaturedVerticals, getOtherVerticals } from "@/data/businessVerticals.js";
import { useNavigate } from "react-router-dom";
import BusinessVerticalCard from "@/components/sections/BusinessVerticalCard.jsx";

export default function BusinessVerticals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const featuredVerticals = getFeaturedVerticals();
  const otherVerticals = getOtherVerticals();

  const navigate = useNavigate();

  const handleVerticalClick = (vertical) => {
    navigate(`/verticals/${vertical.id}`, { state: { scrollTo: `${vertical.id}-vertical` } });
  };

  return (
    <section id="businesses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Business Verticals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare innovation to sustainable energy, we're building India's future across multiple industries with excellence and integrity.
          </p>
        </motion.div>

        {/* Featured Healthcare & Pharmaceutical Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredVerticals.map((vertical, index) => (
            <BusinessVerticalCard
              key={vertical.id}
              vertical={vertical}
              index={index}
              onClick={handleVerticalClick}
              featured={true}
              animationDelay={0.2}
            />
          ))}
        </div>

        {/* Other Business Verticals Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {otherVerticals.map((vertical, index) => (
            <BusinessVerticalCard
              key={vertical.id}
              vertical={vertical}
              index={index}
              onClick={handleVerticalClick}
              featured={false}
              animationDelay={0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}