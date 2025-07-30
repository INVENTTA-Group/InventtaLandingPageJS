/**
 * Business Vertical Card Component
 * 
 * A reusable card component for displaying business vertical information.
 * Supports both featured (large) and standard (compact) layouts.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { BusinessVerticalProps } from "@/types/business";

interface BusinessVerticalCardProps extends BusinessVerticalProps {
  /** Whether to use the featured card layout */
  featured?: boolean;
  /** Animation delay multiplier */
  animationDelay?: number;
}

/**
 * Individual business vertical card component
 * Displays business information with image, icon, title, description, and services
 */
export default function BusinessVerticalCard({ 
  vertical, 
  index, 
  onClick, 
  className = "",
  featured = false,
  animationDelay = 0.1
}: BusinessVerticalCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleClick = () => {
    if (onClick) {
      onClick(vertical);
    }
  };

  const baseClasses = "business-card bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2";
  const featuredClasses = featured ? "rounded-2xl p-8 shadow-lg hover:shadow-2xl" : "p-6";
  const iconSize = featured ? 28 : 24;
  const titleSize = featured ? "text-2xl font-bold" : "text-xl font-semibold";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * animationDelay }}
      className={`${baseClasses} ${featuredClasses} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label={`Learn more about ${vertical.title}`}
    >
      {/* Business Vertical Image */}
      <img
        src={vertical.image}
        alt={`${vertical.title} - Inventta Group Business Vertical`}
        className="w-full h-48 object-cover rounded-xl mb-6"
        loading="lazy"
      />
      
      {/* Header with Icon and Title */}
      <div className="flex items-center mb-4">
        <div className={`${vertical.bgColor} p-3 rounded-full mr-4 flex-shrink-0`}>
          <vertical.icon 
            className={`${vertical.color}`} 
            size={iconSize}
            aria-hidden="true"
          />
        </div>
        <h3 className={`${titleSize} text-gray-800`}>
          {vertical.title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {vertical.description}
      </p>
      
      {/* Services List */}
      <div className="space-y-2 text-sm text-gray-500">
        {vertical.services.map((service, idx) => (
          <div key={idx} className="flex items-start">
            <span className="text-inventta-green mr-2 flex-shrink-0">•</span>
            <span>{service}</span>
          </div>
        ))}
      </div>
      
      {/* Category Badge (if featured) */}
      {featured && vertical.category && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="inline-block px-3 py-1 bg-inventta-blue/10 text-inventta-blue text-xs font-medium rounded-full">
            {vertical.category.charAt(0).toUpperCase() + vertical.category.slice(1)}
          </span>
        </div>
      )}
    </motion.div>
  );
}