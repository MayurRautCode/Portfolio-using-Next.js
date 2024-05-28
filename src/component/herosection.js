"use client"
import React from 'react';
import Image from 'next/image';
import Hero1 from '../public/second.jpg';
import { TypeAnimation } from 'react-type-animation';

function Herosection() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 lg:mx-12 lg:my-12 mx-6 my-6'>
        <div className='col-span-7 place-self-center max-md:text-center'>
          <div className='text-white text-3xl lg:text-6xl font-semibold'>
            <h1 className='text-blue-600'>Hello, I'm</h1> 
            <TypeAnimation
             sequence={[
            'Mayur Raut',
             1000, 
             'Full Stack Devloper',
             1000,
             'Front-end Devloper',
              1000,
             'Next.js Devloper',
              1000
             ]}
             wrapper="span"
             speed={50}
             repeat={Infinity} />    
          </div>

          <p className='text-white text-lg lg:text-2xl mt-5'>A Front End Developer | Web Designer with 1+ Year Experience</p> 
          <div className='mt-5 mb-5'>
            <button className='py-3 px-7 bg-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold'>Resume</button>

            <button className='py-3 px-7 bg-white rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500  text-white font-bold ml-5'>Hire Me</button>
          </div>
        </div>
        <div className='col-span-5  place-self-center'>  
           <Image src={Hero1} alt='first image' className='rounded-full' height={400} width={400}></Image>
        </div>
    </div>
  )
}

export default Herosection