/**
 * Statistics Section Component
 * 
 * Displays key company statistics with animated counters.
 * Uses modular AnimatedCounter components for consistency and reusability.
 */

import { COMPANY_STATS } from "@/data/constants.js";
import AnimatedCounter from "@/components/sections/AnimatedCounter.jsx";

export default function StatsSection() {
  return (
    <section className="py-20 bg-white" aria-label="Company Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {COMPANY_STATS.map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
              duration={2000}
              textColor="text-inventta-blue"
              labelColor="text-gray-600"
            />
          ))}
        </div>
      </div>
    </section>
  );
}