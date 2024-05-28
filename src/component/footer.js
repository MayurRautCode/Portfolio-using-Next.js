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
    <footer>
        <div>
          <h1 className='text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-10 mb-20'>Portfolio Made With</h1>

          <section className='flex flex-wrap mx-20 mb-10'>
            <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={html} className='rounded-full mr-2'></Image> HTML5</button>
            <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src= {js} className='rounded-full mr-2'></Image> JavaScript</button>
            <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={reactjs} className='rounded-full mr-2'></Image> ReactJS</button>
            <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={figma} className='rounded-full mr-2'></Image> Figma</button>
            <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={nextjs} className='rounded-full mr-2'></Image> NextJS</button>
            <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={tailwind} className='rounded-full mr-2'></Image> Tailwind CSS</button>
            <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={vs} className='rounded-full mr-2'></Image> Visual Studio Code</button>
            <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={github} className='rounded-full mr-2'></Image> Github</button>
         </section>
        </div>
        <div class="my-10 py-4 px-4 w-[72rem] text-2xl font-semibold text-center text-black rounded-full bg-[#FEB901] ml-20">Designed & Built by Mayur Raut</div>
    </footer>
  )
}
 
export default Footer