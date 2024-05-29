import React from 'react';
import Image from 'next/image';
import mayur from '../public/mayur photo.jpg';
import instagram from '../public/instagram.svg';
import gmail from '../public/gmail.svg';
import linkdin from '../public/linkdin.svg';
import avtar from '../public/avatar.svg';

function Profile() {
  return (
     <section id='Profile' className='flex items-center flex-col my-10'>
         <h1 className='text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-10 mb-20'>Connect With Me</h1>
         <div className='w-[76rem] h-[30rem] bg-white bg-opacity-10 px-10 py-8 rounded-[4rem] flex flex-col items-center'>   
             <Image class="w-32 h-32 p-[6px] rounded-full ring-2 ring-[#FEB901]" src={mayur} alt="Bordered avatar"></Image>
             <h1 className='text-[#FEB901] text-3xl lg:text-5xl font-bold text-center my-3'>Mayur Raut</h1>
             <p className='text-white text-2xl'>Front End Developer / Web Designer / UI Developer</p>
             <div className='mt-5 mb-5'>
                <button className='py-3 px-9 rounded-full font-bold text-xl text-[#FEB901] hover:text-black border-2 border-[#FEB901] bg-[#FEB901] bg-opacity-10 hover:bg-[#FEB901]'>Resume</button>
                <button className='ml-4 py-3 px-9 rounded-full font-bold text-xl hover:text-[#FEB901] text-black border-2 border-[#FEB901] hover:bg-[#FEB901] hover:bg-opacity-10 bg-[#FEB901]'>Hire Me</button>
             </div>
             <div className='flex'>
                 <button className=' bg-white text-blue-800 font-bold text-3xl rounded-full px-4 py-1 mr-5 mb-6 flex items-center'> <Image src={linkdin} className='rounded-full mr-2'></Image> Linkedin</button>
                 <button className=' bg-white text-red-500 font-bold text-3xl rounded-full px-4 py-1 mr-5 mb-6 flex items-center'> <Image src={instagram} className='rounded-full mr-2'></Image> Instagram</button>
                 <button className=' bg-white text-black font-bold text-3xl rounded-full px-4 py-1 mr-5 mb-6 flex items-center'> <Image src={gmail} className='rounded-full mr-2'></Image> Gmail</button>
             </div>
         </div> 
         <Image src={avtar}  className='my-8'></Image>
     </section>                     
  )
}

export default Profile