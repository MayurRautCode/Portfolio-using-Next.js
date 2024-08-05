import React from 'react';
import Image from 'next/image';
import html from '../public/html.svg';
import css from '../public/css.svg';
import js from '../public/js.svg';
import bootstrap from '../public/bootstrap.svg';
import reactjs from '../public/react.svg';
import nextjs from '../public/nextjs.svg';
import tailwind from '../public/tailwindcss.svg';
import vs from '../public/vscode.svg';
import git from '../public/git.svg';
import github from '../public/github.svg';
import figma from "../public/figma.svg"

function Skills() {
  return (
    <div id='Skills'>
        <h1 className='text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-20 lg:mt-28 mb-16 lg:mb-20 scroll-smooth'>Skills</h1>

        <section className='flex flex-wrap mx-10 lg:mx-24 mb-10 justify-center'>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={html} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10'></Image> HTML5 </button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={css} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10'></Image> CSS3</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={bootstrap} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 mr-1'></Image> Bootstrap</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={js} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10  mr-1'></Image> JavaScript</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={reactjs} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 mr-1'></Image> ReactJS</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-4 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={git} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 mr-1'></Image> Git</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={nextjs} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 mr-1'></Image> NextJS</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={figma} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10'></Image> Figma</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={github} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 mr-1'></Image> Github</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-1 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={tailwind} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 md:mr-1'></Image> Tailwind CSS</button>
          <button className='bg-white font-semibold text-sm md:text-lg lg:text-2xl rounded-full px-2 md:px-3 lg:px-5 py-2 lg:py-3 mr-2 md:mr-3 lg:mr-5 mb-6 flex items-center'> <Image src={vs} className='h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 md:mr-1'></Image> Visual Studio Code</button>
        </section>
    </div>
  )
}

export default Skills