import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";

export default function MissionVisionValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To transform healthcare delivery across India through innovative solutions, comprehensive services, and unwavering commitment to excellence while expanding our impact across multiple industries."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be India's most trusted and innovative conglomerate, leading the healthcare revolution while creating sustainable value across all our business verticals for generations to come."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Innovation, Integrity, Impact, and Inclusivity—these four pillars guide every decision we make, ensuring we deliver excellence while maintaining the highest ethical standards."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-inventta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Foundation
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Built on a foundation of excellence, innovation, and social responsibility, guiding our path toward a healthier future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-6">
                <value.icon className="text-white text-3xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-white/90 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
