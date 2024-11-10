import React, { useState, useEffect } from "react";
import logo from "../assets/zLGuh8hegeVw1SIo6aK07Th3M817f5.png";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (index) => {
    setActive(index); 
  };

  return (
    
    <div>
      <div
        className={`fixed top-0 left-0 w-full flex items-center justify-between mx-auto p-4 transition-all duration-300 z-50 ${
          scrolled ? "bg-gray-800/0 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <img className="w-[120px]" src={logo} alt="Logo" />

        <ul className="flex space-x-8 bg-gray-700 w-[530px] h-[66px] rounded-full text-white font-medium backdrop-blur-sm bg-opacity-90">
  {["STORIES", "EVENTS", "COMMUNITY", "ABOUT"].map((item, index) => (
    <li
      key={index}
      className={`cursor-pointer ml-[10px] flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${active === index
        ? "bg-gray-800 h-[40px] mt-[12px] backdrop-blur-md text-[#28bab1]"
        : "hover:bg-gray-700 h-[40px] mt-[12px]"
      }`}
      onClick={() => handleItemClick(index)}
    >
      {item} {item === "ABOUT" && <IoIosArrowDown className="ml-1" />}
    </li>
  ))}
</ul>

        <button className="text-white h-[55px] flex items-center bg-[#28bab1] px-4 py-2 rounded-full font-semibold hover:bg-[#1f9e91] transition duration-200">
          LET'S START - IT'S FREE
          <GoArrowUpRight className="text-sm mt-[5px] ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
