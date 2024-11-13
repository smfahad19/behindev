import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";



const Footer = () => {
  return (
    <div>
    <div className='mt-[60px] px-20 '>
    <div className='flex justify-between rounded-2xl text-white bg-white/10 h-[200px] items-center'>
        <div className='px-10 grid grid-rows-2 gap-5'>
            <h1 className='text-lg rounded-3xl bg-white/15 h-14 flex px-5 items-center w-[570px] gap-3'><TfiEmail className='text-2xl text-[#28bab1]'/> Info.behindev@gmail.com</h1>
            <h1 className='text-lg rounded-3xl bg-white/15 h-14 flex px-5 items-center w-[570px] gap-3'><GrLocation className='text-2xl text-[#28bab1]' /> I Floor, 288 Main St, Lander, WY 82520, USA</h1>
        </div>
        <div className="grid gap-16 grid-cols-3">
            <div className='grid grid-rows-3 gap-2'>
                <h1 className='text-lg text-[#28bab1]'>Product</h1>
                <p className='hover:'>Stories</p>
                <p>Events</p>
                <p>Courses</p>
            </div>
            <div className='grid grid-rows-3 gap-3'>
                <h1 className='text-lg text-[#28bab1]'>Community</h1>
                <p>Become Cntributor</p>
                <p>Community</p>
                <p>Career</p>
            </div>
            <div className='grid grid-rows-3 gap-3'>
                <h1 className='text-lg text-[#28bab1]'>Company</h1>
                <p>About Us</p>
                <p>FAQs</p>
                <p>Contact us</p>
            </div>
        </div>
    </div>
    </div>
    <div className='px-20 mr-[70px] mb-[80px] ml-[70px] mt-[-20px] bg-white/20 rounded-2xl h-[240px]'>
    <div className=' flex justify-center mt-[60px] pt-4'>
  <div className='w-[550px] p-[25px]'>
    <h1 className='flex justify-center items-center font-semibold font-serif text-xl mb-[20px] text-[#28bab1]'>Follow us:</h1>
    <div className='gap-3 justify-center flex'>
        <div className='bg-black/10 hover:bg-[#28bab1] cursor-pointer transition duration-300 ease-in rounded-xl w-[45px] h-[45px] flex justify-center items-center'>
        <FaFacebook 
  className='text-3xl border border-transparent hover:border-yellow-300 hover:border-2 rounded-2xl hover:text-black focus:border-yellow-300 hover:bg-yellow-200 transitiom hover:duration-300 hover:ease-in focus:text-black transition duration-300 ease-in-out text-white' 
/>
      </div>
      <div className='bg-black/10 hover:bg-[#28bab1] cursor-pointer transition duration-300 ease-in w-[45px] rounded-xl h-[45px] flex justify-center items-center'>
      <FaTwitter className='text-3xl border border-transparent hover:border-yellow-300 hover:border-2 rounded-2xl hover:text-black focus:border-yellow-300 hover:bg-yellow-200 transitiom hover:duration-300 hover:ease-in focus:text-black transition duration-300 ease-in-out text-white'/>
      </div>
      <div className='bg-black/10 hover:bg-[#28bab1] cursor-pointer transition duration-300 ease-in rounded-xl w-[45px] h-[45px] flex justify-center items-center'>
      <FaLinkedin className='text-3xl border border-transparent hover:border-yellow-300 hover:border-2 rounded-2xl hover:text-black focus:border-yellow-300 hover:bg-yellow-200 transitiom hover:duration-300 hover:ease-in focus:text-black transition duration-300 ease-in-out text-white'/>
      </div>
      <div className='bg-black/10 w-[45px] hover:bg-[#28bab1] cursor-pointer transition duration-300 ease-in rounded-xl h-[45px] flex justify-center items-center'>
      <RiInstagramFill className='text-3xl border border-transparent hover:border-yellow-300 hover:border-2 rounded-2xl hover:text-black focus:border-yellow-300 hover:bg-yellow-200 transitiom hover:duration-300 hover:ease-in focus:text-black transition duration-300 ease-in-out text-white'/>
      </div>
    </div>
  </div>
</div>
<div className='flex justify-center items-center gap-2'>
  <input className='bg-white/15 w-[230px] px-4 h-[50px] text-md font-semibold border-gray-400 border-2 flex justify-center rounded-3xl' type="email" placeholder='name@email.com' />
  <button className='bg-[#28bab1] h-12 w-[300px] rounded-3xl'>Subscribe for newsletter</button>
</div>
</div >
    </div>
  )
}

export default Footer