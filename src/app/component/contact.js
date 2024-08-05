"use client"
import React from 'react';
import Image from 'next/image';
import avtarnew from '../public/avtarnew.svg';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xzzprrrz");
  if (state.succeeded) {
    return <span className='my-10 mx-10 py-3 md:py-4 lg:py-5 px-3 md:px-4 lg:px-5 text-lg md:text-xl lg:text-2xl font-semibold md:font-bold text-center text-black rounded-full bg-[#FEB901]'>Thanks for joining!</span>;
  }
  return (
    <section id='send' className="my-10 relative scroll-smooth">
    <div className="bg-[#ffffff] rounded-[1.6rem] md:rounded-[3rem] lg:rounded-[4rem] place-self-center py-4 px-4 md:px-16 mx-5 md:mx-12 lg:mx-32">
      <h2 className="mb-3 md:mb-5 text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-center text-black">Contact Me</h2>
      <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="text-base md:text-lg font-semibold text-black">Your Email</label>
              <input type="email" id="email"  name="email" className="mt-2 mb-2 md:mb-7 shadow-lg bg-gray-100 border border-gray-300 text-black rounded-full w-full p-2.5 outline-none" placeholder="name@gmail.com" required></input>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <label for="message" className=" text-base md:text-lg font-semibold text-black ">Your message</label>
              <textarea id="message" name="message" rows="5" className="mt-2 p-2.5 w-full text-base text-black bg-gray-100 rounded-3xl shadow-lg border border-gray-300 outline-none" placeholder="Leave a comment..." required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting} className="mt-2 md:mt-6 py-3 md:py-4 lg:py-5 px-3 md:px-4 lg:px-5 text-lg md:text-xl lg:text-2xl font-medium md:font-semibold text-center text-black rounded-full bg-[#FEB901] hover:bg-opacity-80">Send message</button>
        </form>
      <Image src={avtarnew} className='h-[11rem] md:h-[20rem] lg:h-[21rem] w-[11rem] md:w-[20rem] lg:w-[21rem] absolute right-0 md:right-10 lg:right-40 bottom-0'></Image>
      </div>
</section>
  );
}

export default Contact;
