import React, { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import { businessVerticals, verticalInfo } from "@/data/businessVerticals.js";



const SubVerticalHeader = ({currentPage}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const currentVertical = verticalInfo.find(info => info.id === currentPage);

  return (
  <section id="sub">
    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <br />
        <br />
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Subsidiaries</h2>
        <p className="text-lg md:text-2xl mb-8 opacity-90 text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {currentVertical?.subBlurb}
        </p>
      </motion.div>
    </div>
  </section>
  );
};

export default SubVerticalHeader;