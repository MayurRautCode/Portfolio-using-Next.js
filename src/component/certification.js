import React from 'react'

function Certificates() {
  return (
    <div>
        <h1 className='text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-10'>Certificates</h1>

        <div className='grid grid-cols-1 lg:grid-cols-12 my-20 mx-10'>
          <div className='col-span-6 bg-[#DAD2D8] hover:bg-white h-96 w-[37rem] rounded-[2rem] place-self-center px-8 py-8'>
              <button className='bg-black text-[#FEB901] px-5 py-4 rounded-full font-bold text-2xl'>Great Learning</button>
              <h1 className='font-bold text-3xl my-5'>Master Course in Full Stack Development</h1>
              <p className='text-base font-semibold  mt-4 mb-4'> <button className='bg-black text-[#FEB901] rounded-full px-2'>-</button> HTML, CSS, Javascript, Git, Github, Figma, Tailwind, Bootstrap, React.js</p>
              <button className='bg-black text-[#FEB901] px-5 py-4 rounded-full font-bold text-xl'>View</button>
          </div>

          <div className='col-span-6 bg-[#DAD2D8] hover:bg-white h-96 w-[37rem] rounded-[2rem] place-self-center px-8 py-8'>
              <button className='bg-black text-[#FEB901] px-5 py-4 rounded-full font-bold text-2xl'>Google Digital Garage</button>
              <h1 className='font-bold text-3xl my-5'>The Fundamentals of Digital Marketing</h1>
              <button className='bg-black text-[#FEB901] px-5 py-4 rounded-full font-bold text-xl mt-16'>View</button>
          </div>
        </div>
    </div>
  )
}

export default Certificates
