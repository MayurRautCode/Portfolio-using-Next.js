import React from 'react';
import Image from 'next/image';
import mayur from '../public/mayur photo.jpg';
import avtar from '../public/avatar.svg';
import { FaDownload } from "react-icons/fa6";
import Link from 'next/link';

function Profile() {
 return (
     <section id='Profile' className='flex items-center flex-col md:my-5 lg:my-10 mx-5 md:mx-10 lg:mx-20 scroll-smooth'>
         <h1 className='text-[#FEB901] text-3xl md:text-5xl lg:text-6xl font-bold text-center mt-5 md:mt-10 mb-16 md:mb-20'>Connect With Me</h1>
         <div className='w-full h-full bg-white bg-opacity-10 py-8 md:py-14 rounded-[4rem] flex flex-col items-center'>   
             <Image className="w-24 md:w-32 h-24 md:h-32 p-[6px] rounded-full ring-1 ring-[#FEB901]" src={mayur} alt="Bordered avatar"></Image>
             <h1 className='text-[#FEB901] text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-2 lg:mt-5'>Mayur Raut</h1>
             <p className='text-white text-sm md:text-xl lg:text-2xl mt-3 lg:mt-7 mx-8 text-center'>Front End Developer / Web Designer / UI Developer</p>
             <div className='mt-4 lg:mt-7 flex max-md:flex-col'>
                <Link href={'https://flowcv.com/resume/k7k9ls8bsn'}>
                   <button className='py-2 md:py-3 lg:py-4 px-4 md:px-8 lg:px-12 rounded-full font-semibold text-lg md:text-xl lg:text-2xl text-[#FEB901] hover:text-black border border-[#FEB901] bg-[#FEB901] bg-opacity-10 hover:bg-[#FEB901] flex items-center'> <FaDownload className='mr-2' /> Resume</button>
                </Link>
                 <button className='max-md:mt-3 md:ml-4 py-2 md:py-3 lg:py-4 px-4 md:px-8 lg:px-12 rounded-full font-semibold text-lg md:text-xl lg:text-2xl text-[#FEB901] hover:text-black border border-[#FEB901] bg-[#FEB901] bg-opacity-10 hover:bg-[#FEB901] flex items-center justify-center'> <a href='#send'> Hire Me </a></button>
             </div>
          </div>
      <Image alt="ss" src={avtar} className="max-md:h-[15rem] max-md:w-[15rem] my-8"></Image>
    </section>
  );
}

export default Profile;
