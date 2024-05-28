import React from 'react'

function Education() {
  return (
    <div id='Education' className='scroll-smooth'>
        <h1 className='text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-10'>Education</h1>

        <div className='grid grid-cols-1 lg:grid-cols-12 my-20 mx-10'>
          <div className='col-span-6 bg-[#DAD2D8] hover:bg-white h-80 w-[37rem] rounded-[2rem] place-self-center px-8 py-8'>
            <span className='flex justify-between'>
              <button className='bg-black text-[#FEB901] px-5 py-2 rounded-full font-bold text-xl'>2018 - 2021</button>
              <button className='bg-white px-5 py-2 rounded-full font-bold text-xl'>Graduation</button>
            </span>
            <span>
              <button className='bg-white px-5 py-2 rounded-full font-bold text-xl mt-6 mb-6 mr-4'>Bachelor’s Degree</button>
              <button className='bg-black text-[#FEB901] px-5 py-2 rounded-full font-bold text-xl'>BCA</button>
              <h1 className='font-bold text-3xl'>Bachelor of Computer Applications</h1>
              <p className='text-xl mt-4 mb-4'> <button className='bg-black text-[#FEB901] rounded-full px-2'>C</button> ST. FRANCIS DE SALES COLLEGE</p>
              <p className='text-xl'> <button className='bg-black text-[#FEB901] rounded-full px-2'>L</button> Nagpur, Maharastra, India</p>
            </span>
          </div>

          <div className='col-span-6 bg-[#DAD2D8] hover:bg-white h-80 w-[37rem] rounded-[2rem] place-self-center px-8 py-8'>
            <span className='flex justify-between'>
              <button className='bg-black text-[#FEB901] px-5 py-2 rounded-full font-bold text-xl'>2021 - 2023</button>
              <button className='bg-white px-5 py-2 rounded-full font-bold text-xl'>Post Graduation</button>
            </span>
            <span>
              <button className='bg-white px-5 py-2 rounded-full font-bold text-xl mt-6 mb-6 mr-4'>Master’s Degree</button>
              <button className='bg-black text-[#FEB901] px-5 py-2 rounded-full font-bold text-xl'>MCA</button>
              <h1 className='font-bold text-3xl'>Master’s of Computer Applications</h1>
              <p className='text-xl mt-4 mb-4'> <button className='bg-black text-[#FEB901] rounded-full px-2'>C</button> GH Raisoni University</p>
              <p className='text-xl'> <button className='bg-black text-[#FEB901] rounded-full px-2'>L</button> Nagpur, Maharastra, India</p>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Education