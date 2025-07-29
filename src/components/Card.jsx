import React from "react";
import { twMerge } from "tailwind-merge"; 
import grainImage from "../assets/images/grain.jpg";

export const Card = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl overflow-hidden relative z-0 after:z-10 md:pt-12 md:px-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none pt-8 px-8 lg:pt-16 lg:px-20 mx-2 p-6",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${grainImage})`,
        }}
      ></div>
      {children}
    </div>
  );
};
