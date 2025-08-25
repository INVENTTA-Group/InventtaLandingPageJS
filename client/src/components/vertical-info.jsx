import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { businessVerticals, verticalInfo } from "@/data/businessVerticals.js";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";  


export default function About({currentPage}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const currentVertical = verticalInfo.find(info => info.id === currentPage);
  const handleScrollToNext = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0); // fallback
    }
  }, [location]);

  return (
    <body>
      <main id={`${currentVertical.id}-vertical`} className="min-h-screen">
        {/* Hero / Header */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Parallax Effect */}
          <div
            className="absolute inset-0 hero-parallax"
            style={{
              backgroundImage: `url(${currentVertical.image})`,
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-hero" />

          {/* Content */}
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-inventta-green">{currentVertical.title}</span><br />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl mb-8 opacity-90 font-light max-w-4xl mx-auto leading-relaxed"
            >
              {currentVertical.blurb}
            </motion.p>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
            onClick={handleScrollToNext}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* About Section*/}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-lg md:text-2xl mb-8 opacity-90 text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {currentVertical?.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              
              {currentVertical && (
                <div className="flex items-start space-x-4">
                  <div className={`${currentVertical.bgColor} p-3 rounded-full`}>
                    <currentVertical.icon className={`${currentVertical.color} text-xl`} size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Services</h3>
                    <div className="text-xl text-gray-600 max-w-3xl mx-auto">
                      <ul className="list-disc pl-5">
                        {currentVertical.services.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                      </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <img
                src= {currentVertical.blurbImg}
                alt={currentVertical.blurbAlt}
                className="rounded-xl shadow-lg w-full mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </body>
    
  );
}