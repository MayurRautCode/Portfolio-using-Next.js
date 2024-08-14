import React from 'react';
import Image from 'next/image';
import googlec from '../public/googlec.jpg'

function page() {
  return (
    <div className='bg-black flex justify-center items-center h-screen'>
        <Image src={googlec} alt='certificate' className='h-[32rem] w-[49rem]'></Image>
    </div>
  )
}

export default page