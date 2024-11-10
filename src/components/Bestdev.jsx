import React from 'react';
import mic from "../assets/mic.png";
import { GoArrowUpRight } from "react-icons/go";

const Bestdev = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-8xl font-semibold italic flex flex-col items-center gap-3">
        <h1 className="flex flex-col items-center gap-3">
          <span className="flex gap-4">The #1 Best 
            <h1 className="text-center font-semibold bg-[#28bab1] text-black translate-y-2 w-[200px] font-serif text-8xl rotate-3">
              Dev
            </h1>
          </span>
          <span className="flex items-center gap-4">
            Stories 
            <img className="w-[70px] bg-[#28bab1] rounded-full" src={mic} alt="Loading..." />
            Platform
          </span>
        </h1>
      </div>
      <p className="text-center max-w-2xl w-[490px] mt-4">
        The World’s Best Developer Platform for Sharing and Reading Behind Development Stories, Experiences, and Real-World Coding Journeys!
      </p>
      <div className="flex items-center group mt-[40px]">
        <button className="text-white h-[55px] text-lg font-serif w-[320px] flex items-center justify-center bg-[#28bab1] px-4 py-2 rounded-l-full rounded-r-none transition-all duration-300 group-hover:mr-[5px]">
          READ STORIES - ITS FREE
        </button>
        <GoArrowUpRight className="bg-[#28bab1] cursor-pointer w-[50px] h-[55px] rounded-r-full rounded-l-none transition-all duration-300 group-hover:ml-[5px]"/>
      </div>
    </div>
  );
};

export default Bestdev;
