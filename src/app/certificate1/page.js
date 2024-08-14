import React from 'react';
import Image from 'next/image';
import fullstack from '../public/fullstack.jpg'

function page() {
  return (
    <div className='bg-black flex justify-center items-center h-screen'>
        <Image src={fullstack} alt='certificate' className='h-[32rem] w-[49rem]'></Image>
    </div>
  )
}

export default page