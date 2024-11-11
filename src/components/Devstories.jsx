import React from 'react'
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Devstories = () => {
  return (
    <div className='mt-[180px] px-10'>
        <div className='bg-white/10 flex justify-center items-center h-[40px] text-sm font italic font-bold rounded-3xl w-[110px]'>
            <h1 className='text-[#28bab1]'>DEV STORIES</h1>
        </div>
        <div className='text-6xl font italic w-[630px] text-white font-semibold'>
            <h1>Dive into our collection of engaging Dev Stories.</h1>
        </div>
        <div className='flex justify-end'>
        <div className="flex items-center group mt-[50px] mr-[30px]">
        <button className="text-white h-[45px] text-sm font-serif w-[140px] flex items-center justify-center bg-[#28bab1] px-4 py-2 rounded-l-full rounded-r-none transition-all duration-300 group-hover:mr-[1px]">
          READ STORIES
        </button>
        <HiMiniArrowUpRight className="bg-[#28bab1] cursor-pointer w-[56px] h-[45px] rounded-r-full rounded-l-none text-black transition-all duration-300 group-hover:ml-[5px] md:w-[45px] md:h-[45px]" />
      </div>
        </div>
    </div>
  )
}

export default Devstories