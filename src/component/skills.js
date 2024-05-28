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
        <h1 className='text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-10 mb-20'>Skills</h1>

        <section className='flex flex-wrap mx-20 mb-10'>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={html} className='rounded-full mr-2'></Image> HTML5</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={css} className='rounded-full mr-2'></Image> CSS3</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={js} className='rounded-full mr-2'></Image> JavaScript</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={bootstrap} className='rounded-full mr-2'></Image> Bootstrap</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={reactjs} className='rounded-full mr-2'></Image> ReactJS</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={git} className='rounded-full mr-2'></Image> Git</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={figma} className='rounded-full mr-2'></Image> Figma</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={nextjs} className='rounded-full mr-2'></Image> NextJS</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={tailwind} className='rounded-full mr-2'></Image> Tailwind CSS</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={vs} className='rounded-full mr-2'></Image> Visual Studio Code</button>
          <button className=' bg-white font-semibold text-2xl rounded-full px-5 py-3 mr-5 mb-6 flex items-center'> <Image src={github} className='rounded-full mr-2'></Image> Github</button>
        </section>
    </div>
  )
}

export default Skills