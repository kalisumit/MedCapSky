import React from "react";
import bgImage from "../assets/job_bg.png"; // ✅ adjust the path to where you saved the image
function HeroSection(){
  return (
    // <div ">
    <section
      className="relative h-[500px] flex flex-col justify-center items-center text-center bg-contain bg-no-repeat bg-white bg-center mt-20 md:max-w-[70%] mx-auto"
      style={{ backgroundImage: `url(${bgImage})`, maxWidth : "950px", backgroundSize: "cover", backgroundRepeat:"repeat-x" }}
    
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
          Empowering Careers in <br className="hidden md:block" />
          <span className="text-blue-300">Healthcare & Technology</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-white text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
          Connecting talented professionals with leading organizations in the medical and IT sectors.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 px-4">
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md text-sm md:text-base">
            Explore Medical Jobs
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md text-sm md:text-base">
            Explore IT Jobs
          </button>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default HeroSection;

