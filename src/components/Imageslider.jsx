import React from 'react';
import secondimage from '../assets/second pic.png';

const ImageSlider = () => {
  return (
    <div className="h-screen w-full relative bg-gradient-to-b from-[#545454] to-[#28bab1]">
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-white text-xl font-serif">
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Best Dev Stories Platform
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-full z-10 relative">
        <img className="w-full max-w-[1120px] h-auto" src={secondimage} alt="Second Image" />
      </div>
    </div>
  );
}

export default ImageSlider;
