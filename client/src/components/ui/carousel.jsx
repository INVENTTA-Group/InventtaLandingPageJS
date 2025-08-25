// components/Carousel.jsx
import React, { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import LogoCard from "./logo-card";

// Import your logos
import { businessVerticals, verticalInfo } from "@/data/businessVerticals.js";

const Carousel = ({currentPage}) => {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const currentVertical = verticalInfo.find(info => info.id === currentPage);
  const logos = currentVertical.svgLogo;
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // drag sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = () => {
    // Optional: toggle auto-scroll pause
    console.log("Carousel clicked");
  };

  return (
  <section className="scroll-container">
      <div
        ref={containerRef}
        className="whitespace-nowrap cursor-grab px-4 py-8 flex"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {logos.map((Logo, idx) => (
          <LogoCard key={idx}>
            <Logo className="h-24 w-auto" />
          </LogoCard>
        ))}
      </div>
  </section>
  );
};

export default Carousel;