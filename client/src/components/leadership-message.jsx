import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LeadershipMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Inventta Group Leadership"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading with Vision
            </h2>
            
            <div className="text-lg text-gray-600 space-y-6 mb-8 leading-relaxed">
              <p>
                "At Inventta Group, we believe that healthcare is not just a business—it's a mission to transform lives. Our journey across 14 diverse verticals reflects our commitment to building a healthier, more sustainable future for India."
              </p>
              <p>
                "From our state-of-the-art pharmaceutical operations to our innovative HealthTech solutions, every division of Inventta Group is united by a shared purpose: to deliver excellence that makes a meaningful difference in people's lives."
              </p>
              <p>
                "As we continue to expand our footprint across industries, our core values of innovation, integrity, and impact guide every decision we make. Together, we're not just building a business empire—we're building a legacy of positive change."
              </p>
            </div>
            
            <div className="border-l-4 border-inventta-green pl-6">
              <p className="text-xl font-semibold text-gray-900">Founder & CEO</p>
              <p className="text-lg text-gray-600">Inventta Group</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}