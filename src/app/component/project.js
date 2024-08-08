import React from 'react'
import Image from 'next/image'
import html from "../public/html.svg";
import css from "../public/css.svg";
import js from '../public/js.svg';
import git from '../public/git.svg';
import github from "../public/github.svg";
import tailwind from '../public/tailwindcss.svg';
import { FaLink } from "react-icons/fa";
import Link from 'next/link';
import protwitter from "../public/protwitter.png";
import prottt from "../public/prottt.png";
import proflipkar from "../public/proflipkart.png";
import procc from "../public/procc.png";
import prorps from "../public/prorps.png";
import proac from "../public/proac.png";


function Project() {
  return (
    <section id="Project" className="my-10 flex flex-col items-center scroll-smooth">
      <h1 className="text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-10 mb-20">
        Projects
      </h1>

      <div className="flex flex-col justify-center mx-5 md:mx-10 gap-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 bg-[#4d0000cf] px-5 md:px-6 py-4 md:py-6 rounded-[2rem] md:rounded-[4rem]">
          <Image alt="aa"
            src={procc}
            className="col-span-6 h-full rounded-[2rem] md:rounded-[4rem]"
          ></Image>
          <div className="col-span-6 h-full">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-5">
            Currency Converter  
            </h1>
            <p className="text-white font-medium text-base md:text-xl mb-1">
              Worked on
            </p>
            <p className="text-[#FEB901] font-medium text-base md:text-xl mb-3">
              •Integrated a third-party API to fetch real-time currency exchange rates.
              •Designed a responsive and intuitive user interface using HTML, CSS, and JavaScript, fetch API.
            </p>
            <p className="text-white font-medium text-base md:text-xl mb-4">
              Technologies I have used
            </p>
            <span className='flex flex-wrap'>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={html} className='h-6 md:h-8 w-6 md:w-8'></Image> HTML5 </button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={css} className='h-6 md:h-8 w-6 md:w-8'></Image> CSS3</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={js} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> JavaScript</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-4 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={git} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Git</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={github} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Github</button>
            </span>
            <Link href={'https://github.com/MayurRautCode/Currency-Converter'}>
            <button className="px-6 md:px-10 py-2 md:py-4 border border-white text-xl md:text-2xl font-medium rounded-full bg-white bg-opacity-10 text-white hover:bg-white hover:text-black flex">
              <FaLink className="mr-2" /> Code on Github
            </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 bg-[rgb(16,39,98)] px-5 md:px-6 py-4 md:py-6 rounded-[2rem] md:rounded-[4rem]">
          <Image alt="pvve"
            src={prottt}
            className="col-span-6 h-full rounded-[2rem] md:rounded-[4rem]"
          ></Image>
          <div className="col-span-6 h-full">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-5">
            Tic-Tac-Toe
            </h1>
            <p className="text-white font-medium text-base md:text-xl mb-1">
              Worked on
            </p>
            <p className="text-[#FEB901] font-medium text-base md:text-xl mb-3">
            •Implemented game mechanics including player turns, win conditions, and game board rendering.
            •Tech Stack used: HTML, CSS, JavaScript.
            </p>
            <p className="text-white font-medium text-base md:text-xl mb-4">
              Technologies I have used
            </p>
            <span className='flex flex-wrap'>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={html} className='h-6 md:h-8 w-6 md:w-8'></Image> HTML5 </button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={css} className='h-6 md:h-8 w-6 md:w-8'></Image> CSS3</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={js} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> JavaScript</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-4 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={git} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Git</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={github} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Github</button>
            </span>
            <Link href={'https://github.com/MayurRautCode/Tic-Tac-Toe-Game'}>
            <button className="px-6 md:px-10 py-2 md:py-4 border border-white text-xl md:text-2xl font-medium rounded-full bg-white bg-opacity-10 text-white hover:bg-white hover:text-black flex">
              <FaLink className="mr-2" /> Code on Github
            </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 bg-[#4d0000cf] px-5 md:px-6 py-4 md:py-6 rounded-[2rem] md:rounded-[4rem]">
          <Image alt="aas"
            src={prorps}
            className="col-span-6 h-full rounded-[2rem] md:rounded-[4rem]"
          ></Image>
          <div className="col-span-6 h-full">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-5">
            Rock Paper Scissor
            </h1>
            <p className="text-white font-medium text-base md:text-xl mb-1">
              Worked on
            </p>
            <p className="text-[#FEB901] font-medium text-base md:text-xl mb-3">
            •Developed a Rock Paper Scissors game application using JavaScript and HTML/CSS for the user interface.
            </p>
            <p className="text-white font-medium text-base md:text-xl mb-4">
              Technologies I have used
            </p>
            <span className='flex flex-wrap'>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={html} className='h-6 md:h-8 w-6 md:w-8'></Image> HTML5 </button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={css} className='h-6 md:h-8 w-6 md:w-8'></Image> CSS3</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={js} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> JavaScript</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-4 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={git} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Git</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={github} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Github</button>
            </span>
            <Link href={'https://github.com/MayurRautCode/Rock-Paper-Scissors-Game'}>
            <button className="px-6 md:px-10 py-2 md:py-4 border border-white text-xl md:text-2xl font-medium rounded-full bg-white bg-opacity-10 text-white hover:bg-white hover:text-black flex">
              <FaLink className="mr-2" /> Code on Github
            </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 bg-[rgb(16,39,98)]  px-5 md:px-6 py-4 md:py-6 rounded-[2rem] md:rounded-[4rem]">
          <Image alt="asa"
            src={protwitter}
            className="col-span-6 h-full rounded-[2rem] md:rounded-[4rem]"
          ></Image>
          <div className="col-span-6 h-full">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-7">
            Twitter Clone
            </h1>
            <p className="text-white font-medium text-base md:text-xl mb-2">
              Worked on
            </p>
            <p className="text-[#FEB901] font-medium text-base md:text-xl mb-4">
              •This project is a clone of twitter where user can see front page.
              •Tech Stack used: HTML Tailwind css.
            </p>
            <p className="text-white font-medium text-base md:text-xl mb-5">
              Technologies I have used
            </p>
            <span className='flex flex-wrap mb-10'>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={html} className='h-6 md:h-8 w-6 md:w-8'></Image> HTML5 </button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-1 md:mr-3 mb-6 flex items-center'> <Image src={tailwind} className='h-6 md:h-8 w-6 md:w-8 md:mr-1'></Image> Tailwind CSS</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-4 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={git} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Git</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={github} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Github</button>
            </span>
            <Link href={'https://github.com/MayurRautCode/Twitter-clone'}>
            <button className="px-6 md:px-10 py-2 md:py-4 border border-white text-xl md:text-2xl font-medium rounded-full bg-white bg-opacity-10 text-white hover:bg-white hover:text-black flex">
              <FaLink className="mr-2" /> Code on Github
            </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 bg-[#4d0000cf] px-5 md:px-6 py-4 md:py-6 rounded-[2rem] md:rounded-[4rem]">
          <Image alt="adsf"
            src={proac}
            className="col-span-6 h-full rounded-[2rem] md:rounded-[4rem]"
          ></Image>
          <div className="col-span-6 h-full">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-7">
            Amazon Clone
            </h1>
            <p className="text-white font-medium text-base md:text-xl mb-2">
              Worked on
            </p>
            <p className="text-[#FEB901] font-medium text-base md:text-xl mb-5">
            •This project is a clone of amazon where user can see front page
            •Tech Stack used: HTML, CSS
            </p>
            <p className="text-white font-medium text-base md:text-xl mb-5">
              Technologies I have used
            </p>
            <span className='flex flex-wrap mb-5'>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={html} className='h-6 md:h-8 w-6 md:w-8'></Image> HTML5 </button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={css} className='h-6 md:h-8 w-6 md:w-8'></Image> CSS3</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-4 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={git} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Git</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={github} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Github</button>
            </span>
            <Link href={'https://github.com/MayurRautCode/Amazon_clone'}>
            <button className="px-6 md:px-10 py-2 md:py-4 border border-white text-xl md:text-2xl font-medium rounded-full bg-white bg-opacity-10 text-white hover:bg-white hover:text-black flex">
              <FaLink className="mr-2" /> Code on Github
            </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 bg-[rgb(16,39,98)]  px-5 md:px-6 py-4 md:py-6 rounded-[2rem] md:rounded-[4rem]">
          <Image alt="df"
            src={proflipkar}
            className="col-span-6 h-full rounded-[2rem] md:rounded-[4rem]"
          ></Image>
          <div className="col-span-6 h-full">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-8">
              Flipkart Clone
            </h1>
            <p className="text-white font-medium text-base md:text-xl mb-3">
              Worked on
            </p>
            <p className="text-[#FEB901] font-medium text-base md:text-xl mb-5">
            •This project is clone of flipkart where user can see front page
            •Tech Stack used: HTML CSS
            </p>
            <p className="text-white font-medium text-base md:text-xl mb-5">
              Technologies I have used
            </p>
            <span className='flex flex-wrap mb-7'>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={html} className='h-6 md:h-8 w-6 md:w-8'></Image> HTML5 </button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={css} className='h-6 md:h-8 w-6 md:w-8'></Image> CSS3</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-4 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={git} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Git</button>
            <button className='bg-white font-semibold text-sm md:text-lg rounded-full px-2 md:px-3 py-2 mr-2 md:mr-3 mb-6 flex items-center'> <Image src={github} className='h-6 md:h-8 w-6 md:w-8 mr-1'></Image> Github</button>
            </span>
            <Link href={'https://github.com/MayurRautCode/flipkart-clone'}>
            <button className="px-6 md:px-10 py-2 md:py-4 border border-white text-xl md:text-2xl font-medium rounded-full bg-white bg-opacity-10 text-white hover:bg-white hover:text-black flex">
              <FaLink className="mr-2" /> Code on Github
            </button>
            </Link>
          </div>
        </div>

      </div>

      <Link href={'https://github.com/MayurRautCode'}>
      <button className="bg-[#FEB901] hover:bg-opacity-85 text-black font-semibold text-lg md:text-2xl rounded-full px-3 md:px-7 py-2 md:py-3 flex items-center my-10">
        <Image alt="fdh"
          src={github}
          className="h-7 w-7 md:h-10 md:w-10 rounded-full mr-2"
        ></Image>
        See GitHub
      </button>
      </Link>
    </section>
  );
}

export default Project;