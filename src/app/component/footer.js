import React from 'react';
import Image from 'next/image';
import html from '../public/html.svg';
import js from '../public/js.svg';
import reactjs from '../public/react.svg';
import nextjs from '../public/nextjs.svg';
import tailwind from '../public/tailwindcss.svg';
import vs from '../public/vscode.svg';
import github from '../public/github.svg';
import figma from "../public/figma.svg"

function Footer() {
  return (
    <footer className='scroll-smooth'>
          <h1 className='text-[#FEB901] text-3xl md:text-5xl lg:text-6xl font-bold text-center my-20'>Portfolio Made With</h1>

          <section className='flex flex-wrap mx-10 lg:mx-20 mb-16 justify-center'>
             <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={html} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10'></Image> HTML5 </button>
             <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={js} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10  mr-1'></Image> JavaScript</button>
             <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={reactjs} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 mr-1'></Image> ReactJS</button>
             <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={figma} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10'></Image> Figma</button>
             <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={nextjs} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 mr-1'></Image> NextJS</button>
             <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-1 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={tailwind} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 md:mr-1'></Image> Tailwind CSS</button>
             <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={vs} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 md:mr-1'></Image> Visual Studio Code</button>
             <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={github} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 mr-1'></Image> Github</button>
         </section>
        <div class="my-20 mx-5 md:mx-10 py-4 px-4 text-xl md:text-2xl font-semibold text-center text-black rounded-full bg-[#FEB901]">Designed & Built by Mayur Raut</div>
    </footer>
  )
}
 
export default Footer