import React from 'react'

const Contributer = () => {
  return (
    <div>
        <div className='flex justify-between px-20 mt-[80px]'>
            <div >
                <h1 className='text-white text-8xl font-serif mt-[50px] font-light'>Become</h1>
                <h1 className='text-[#28bab1] text-8xl font-serif mt-[-30px] font-light'>Contributor</h1>
            </div>
            <div className='bg-black/60 rounded-3xl w-[660px] h-[360px] gap-3 flex flex-col justify-center items-center'>
                <input className='w-[590px] focus:outline-none p-4 h-[50px] text-gray-800 bg-white/30 font-bold font italic rounded-3xl' type="name" placeholder='Name' />
                <input className='w-[590px] focus:outline-none p-4 h-[50px] text-gray-800 bg-white/30 rounded-3xl font-bold font italic' type="email" placeholder='Email'/>
                <textarea className="w-[590px] p-4 border rounded-3xl text-gray-800 bg-white/30 focus:outline-none font-bold font italic" rows="4" placeholder="Designation @ company "></textarea>
                <button className='w-[590px] h-[50px] rounded-3xl bg-[#28bab1] font-light text-xl font-serif '>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contributer