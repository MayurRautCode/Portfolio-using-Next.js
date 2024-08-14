import React from 'react';
import { SlCalender } from "react-icons/sl";
import { FcGraduationCap } from "react-icons/fc";
import { ImLocation } from "react-icons/im";
import { FcHome } from "react-icons/fc";

function Education() {
  return (
    <section id='Education' className='scroll-smooth'>
        <h1 className='text-[#FEB901] text-4xl lg:text-6xl font-bold text-center lg:mt-10'>Education</h1>

        <div className='grid grid-cols-1 md:grid-cols-12 my-14 lg:my-20 mx-4 md:mx-7 lg:mx-10 gap-7'>

          <div className='col-span-6 bg-[#DAD2D8] hover:bg-white w-full rounded-[2rem] place-self-center px-4 md:px-5 lg:px-8 py-4 md:py-5 lg:py-8 hover:duration-300'>
            <span className='flex justify-between'>
              <button className='bg-black text-[#FEB901] px-2 md:px-4 md:py-2 rounded-full font-bold text-sm lg:text-xl flex items-center'> <SlCalender className='mr-2 md:mr-3' />2018 - 2021</button>
              <button className='bg-white px-2 md:px-4 md:py-2 rounded-full font-bold text-sm lg:text-xl border-black border-2 flex items-center'> <FcGraduationCap className='mr-1 md:mr-2 h-8 w-8' /> Graduation</button>
            </span>
            <span>
              <button className='bg-white px-5 py-2 rounded-full font-bold  text-sm lg:text-xl my-4 mr-4 border-black border-2'>Bachelor’s Degree</button>
              <button className='bg-black text-[#FEB901] px-5 py-2 rounded-full font-bold  text-sm lg:text-xl'>BCA</button>
              <h1 className='font-bold text-2xl lg:text-3xl'>Bachelor of Computer Applications</h1>
              <p className='text-base md:text-xl my-2 md:my-4 flex items-center'> <button className='bg-white text-[#FEB901] rounded-full px-1 py-1 mr-2'><FcHome className='h-6 w-6' /></button> ST. Francis De Sales College</p>
              <p className='text-base md:text-xl my-2 md:my-4 flex items-center'><button className='bg-white text-[#FEB901] rounded-full px-1 py-1  mr-2'><ImLocation className='h-6 w-6' /></button> Nagpur, Maharastra, India</p>
            </span>
          </div>

          <div className='col-span-6 bg-[#DAD2D8] hover:bg-white w-full rounded-[2rem] place-self-center px-4 md:px-5 lg:px-8    py-4 md:py-5 lg:py-8 hover:duration-300'>
            <span className='flex justify-between'>
              <button className='bg-black text-[#FEB901] px-2 md:px-4 md:py-2 rounded-full font-bold text-sm lg:text-xl flex items-center'> <SlCalender className='mr-2 md:mr-3' />2021 - 2023</button>
              <button className='bg-white px-2 md:px-4 md:py-2 rounded-full font-bold text-sm lg:text-xl border-black border-2 flex items-center'> <FcGraduationCap className='mr-1 md:mr-2 h-8 w-8' />Post Graduation</button>
            </span>
            <span>
              <button className='bg-white px-5 py-2 rounded-full font-bold  text-sm lg:text-xl my-4 mr-4 border-black border-2'>Master’s Degree</button>
              <button className='bg-black text-[#FEB901] px-5 py-2 rounded-full font-bold  text-sm lg:text-xl'>MCA</button>
              <h1 className='font-bold text-2xl lg:text-3xl'>Master’s of Computer Applications</h1>
              <p className='text-base md:text-xl my-2 md:my-4 flex items-center'> <button className='bg-white text-[#FEB901] rounded-full px-1 py-1 mr-2'><FcHome className='h-6 w-6' /></button> GH Raisoni University</p>
              <p className='text-base md:text-xl my-2 md:my-4 flex items-center'><button className='bg-white text-[#FEB901] rounded-full px-1 py-1  mr-2'><ImLocation className='h-6 w-6' /></button> Nagpur, Maharastra, India</p>
            </span>
          </div>

        </div>
    </section>
  )
}

export default Education