import React from "react";
import personWithLaptop from "../assets/images/laptop-person.png";
import arrowDown from "../assets/icons/arrow-down.svg";
import helloSvg from "../assets/icons/hello.png";
import grainImage from "../assets/images/grain.jpg"

const HeroSection = () => {
  console.log(grainImage)
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage})`
      }}></div>
      <div className="hero-ring size-[620px]">
      </div>
      <div className="hero-ring size-[820px]">
      </div>
      <div className="hero-ring size-[1020px]">
      </div>
      <div className="hero-ring size-[1220px]">
      </div>
      </div>
      <div className="container m-auto">
        <div className="flex flex-col items-center">
          <img
            src={personWithLaptop}
            alt="Person With Laptop"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
        <h1 className="text-3xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I specialize in transforming designs into functional ,high-performing
          web applications.Let's discuss your next project
        </p>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-center lg:gap-2 items-center mt-8">
          <button className="inline-flex items-center border border-white/15 px-6 h-12 gap-2 rounded-xl cursor-pointer z-50">
            <span className="font-semibold">Exlpore My Work</span>
            <span>
              <img src={arrowDown} alt="" className="size-4" />
            </span>
          </button>
          <button className="inline-flex  items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer z-50">
            <span><img src={helloSvg} alt="Hey See My Portfolio" className="size-6" /></span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
