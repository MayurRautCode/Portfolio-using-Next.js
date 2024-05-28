import React from 'react'
import Image from 'next/image'
import flipkart from '../public/flipkart.png'
import html from '../public/html.svg';
import css from '../public/css.svg';
import github from '../public/github.svg';

function Project() {
  return (
    <section id='Project' className='my-10'>
          <h1 className='text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-10 mb-20'>Projects</h1>

          <div className='flex justify-center'>
            <div className='w-[74rem] h-[30rem] bg-[rgba(59,130,246,.5)] px-6 py-6 rounded-[4rem] flex'>
                <Image src={flipkart} className='h-[27rem] w-[32rem] rounded-[4rem]'></Image>
                <div className='ml-10 mt-3'>
                    <h1 className='text-5xl font-bold text-white mb-5'>Flipkart Clone</h1>
                    <p className='text-white font-medium text-xl mb-1'>Worked on</p>
                    <p className='text-black font-medium text-lg mb-1'>•This project is clone of flipkart where user can see front page</p>
                    <p className='text-white font-medium text-xl mb-4'>Technologies I have used</p>
                    <button className='bg-white font-medium text-xl rounded-full px-3 py-1 mr-5 mb-4 flex items-center'> <Image src={html} className='rounded-full mr-2'></Image> HTML5</button>
                    <button className='bg-white font-medium text-xl rounded-full px-3 py-1 mr-5 mb-7 flex items-center'> <Image src={css} className='rounded-full mr-2'></Image> CSS3</button>
                    <button className='px-10 py-4 border-2 border-white text-2xl font-bold rounded-full bg-black bg-opacity-10 text-white hover:bg-white hover:text-black'>Code on Github </button>
                  </div>
            </div>
          </div>
          <button className='bg-[#FEB901] hover:bg-[#f5cb58] text-black font-semibold text-2xl rounded-full px-7 py-3 flex items-center my-10 ml-[35rem]'> <Image src={github} className='rounded-full mr-2'></Image>See GitHub</button>
    </section>
  )
}

export default Project