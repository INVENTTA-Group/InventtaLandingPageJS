import React from "react";

const LogoCard = ({ children }) => {
  return (
    <div className="scroll-inner flex-shrink-0 w-[33vw] md:w-[45vw] aspect-[3/2] bg-white rounded-lg shadow-lg flex items-center justify-center m-4 transition-transform duration-300">
      {children}
    </div>
  );
};

export default LogoCard;
