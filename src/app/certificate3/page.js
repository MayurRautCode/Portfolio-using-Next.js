import React from 'react';
import Image from 'next/image';
import react from '../public/react certi.jpg'

function page() {
  return (
    <div className='bg-black flex justify-center items-center h-screen'>
        <Image src={react} alt='certificate' className='h-[32rem] w-[49rem]'></Image>
    </div>
  )
}

export default page