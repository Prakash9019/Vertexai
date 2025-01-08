import * as React from "react";

import { useNavigate } from 'react-router-dom';

export function Button({ children, variant = "primary", className = "" }) {
 

  const baseStyles = "py-3.5 rounded-[100px] text-xl";
  const variants = {
    primary: "px-11 text-black bg-white",
    secondary: "px-8 text-white border-2 border-white border-solid"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      tabIndex={0}
    >
      {children}
    </button>
  );
}