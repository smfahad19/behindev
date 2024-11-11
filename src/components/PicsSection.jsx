import React from "react";
import Seo from "../assets/SEO.jpg";
import Organic from "../assets/Organic.jpg";
import Guide from "../assets/Guide.jpg";
import { MdOutlineDateRange } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";



const data = [
  {
    id: 1,
    img: Seo,
    des: "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools",
    date: 'FEB 7, 2024',
    blog: 'BLOG'
  },
  {
    id: 2,
    img: Organic,
    des: "Unveiling the Power of Organic Search: Why it Matters and how to Leverage it",
    date: 'FEB 7, 2024',
    blog: 'BLOG'
  },
  {
    id: 3,
    img: Guide,
    des: `The Ultimate Guide to Boosting Your Website's SEO Performance`,
    date: 'MAR 7, 2024',
    blog: 'BLOG'
  },
];

const PicsSection = () => {
  return (
    <div className="grid px-14 hover:duration-700  mt-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((data, i) => (
        <div className="hover:-translate-y-3.5 bg-white/5 h-[380px] rounded-2xl hover:grayscale cursor-pointer duration-500" key={i}>
            <div>
          <img src={data.img} alt={data.id} className="w-full  h-[300px] object-cover rounded-lg" />
          <div className="flex absolute ml-[10px] mt-[-30px] gap-2" >

            <h1 className="text-white text-sm flex justify-center w-[110px] h-6 items-center bg-white/20 backdrop-blur-lg font-bold rounded-2xl gap-1"><MdOutlineDateRange className="flex "/> {data.date}</h1>
            <h2 className=" text-white text-sm flex justify-center w-[70px] h-6 items-center bg-white/20 backdrop-blur-lg rounded-2xl font-bold gap-1"><BiNotepad className="flex "/> {data.blog}</h2>
          </div>
          </div>
          <p className=" mt-2 bg-white/10 w-[455px] text-lg px-3 flex justify-center items-center rounded-xl font italic h-[60px] text-white">{data.des}</p>
        </div>
        
      ))}
    </div>
  );
};

export default PicsSection;
