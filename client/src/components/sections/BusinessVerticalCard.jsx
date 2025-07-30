/**
 * Business Vertical Card Component
 * 
 * A reusable card component for displaying business vertical information.
 * Supports both featured (large) and standard (compact) layouts.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
}) {
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
        <h3 className={`${titleSize} text-gray-900 leading-tight`}>
          {vertical.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {vertical.description}
      </p>

      {/* Services List */}
      <div className="space-y-2">
        <h4 className="font-semibold text-gray-800 mb-3">Key Services:</h4>
        <ul className="space-y-2">
          {vertical.services.map((service, serviceIndex) => (
            <li 
              key={serviceIndex}
              className="flex items-start text-sm text-gray-600"
            >
              <div className={`w-2 h-2 rounded-full ${vertical.bgColor} mr-3 mt-2 flex-shrink-0`} />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Badge for Healthcare/Pharmaceutical */}
      {featured && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${vertical.bgColor} ${vertical.color}`}>
            ✨ Featured Vertical
          </span>
        </div>
      )}
    </motion.div>
  );
}