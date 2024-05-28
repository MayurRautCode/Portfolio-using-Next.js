import React from 'react';
import Image from 'next/image';
import avtarnew from '../public/avtarnew.svg';

function Contact() {
  return (
 <section class="bg-[#ffffff] w-[70rem] rounded-[4rem] place-self-center my-10">
    <div class="py-6 px-4 mx-32">
      <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-1 text-lg font-semibold text-gray-900">Your Email</label>
              <input type="email" id="email" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-full focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required></input>
          </div>
          <div>
              <label for="subject" class="block mb-1 text-lg font-semibold text-gray-900">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-full border border-gray-300 shadow-md focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required></input>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-1 text-md font-semibold text-gray-900">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-3xl shadow-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-5 px-5 text-2xl font-semibold text-center text-black rounded-full bg-[#FEB901]">Send message</button>
      </form>
      <Image src={avtarnew} className='absolute right-36 top-[285rem]'></Image>
    </div>
  </section>
  )
}

export default Contact