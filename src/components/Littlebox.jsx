import React from "react";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import { RiStarSFill } from "react-icons/ri";

const Littlebox = () => {
  return (
    <div className="absolute ml-[-390px] mt-[-70px] left-1/2 transform -translate-x-1/2 z-10">
      <div className="bg-white/5 h-auto border-2 font italic backdrop-blur-sm rounded-3xl w-[390px] p-3">
        <h1 className="flex mt-[25px] ml-[-40px] justify-center text-white text-2xl font-semibold">
          #1 DEV STORIES PLATFORM <br /> IN WORLD
        </h1>
        <hr />
        <div className="flex justify-center items-center mt-2">
          <img className="w-[50px] rounded-full h-[50px]" src={person1} alt="person1" />
          <img className="w-[45px] rounded-full h-[50px]" src={person2} alt="person2" />
          <img className="w-[45px] rounded-full h-[50px]" src={person3} alt="person3" />
          <img className="w-[45px] rounded-full h-[50px]" src={person4} alt="person4" />
          <div className="flex text-md justify-end">
            <div className="flex mr-[-90px] text-lg ml-[20px]">
              <RiStarSFill className="text-orange-500" />
              <RiStarSFill className="text-orange-500" />
              <RiStarSFill className="text-orange-500" />
              <RiStarSFill className="text-orange-500" />
              <RiStarSFill className="text-orange-500" />
            </div>
            <h1 className="text-white text-lg">
              <br />
              200+ 5 Star Reviews
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Littlebox;
