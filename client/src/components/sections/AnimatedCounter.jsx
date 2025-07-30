/**
 * Animated Counter Component
 * 
 * A reusable counter component that animates from 0 to a target value
 * when it comes into view. Supports customizable duration and formatting.
 */

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * Animated counter component with customizable styling and animation
 */
export default function AnimatedCounter({ 
  end, 
  label, 
  suffix = "", 
  delay = 0,
  duration = 2000,
  easing = "easeOut",
  textColor = "text-inventta-blue",
  labelColor = "text-gray-600"
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const increment = end / (duration / 16);
        
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, end, delay, duration]);

  /**
   * Format large numbers with appropriate suffixes
   */
  const formatNumber = (num, suffix) => {
    if (suffix) return `${num.toLocaleString()}${suffix}`;
    
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    
    return num.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
      role="region"
      aria-label={`${label}: ${formatNumber(end, suffix)}`}
    >
      {/* Counter Display */}
      <div className={`text-4xl md:text-5xl font-bold ${textColor} mb-2`}>
        {formatNumber(count, suffix)}
      </div>
      
      {/* Label */}
      <div className={`${labelColor} font-medium`}>
        {label}
      </div>
    </motion.div>
  );
}