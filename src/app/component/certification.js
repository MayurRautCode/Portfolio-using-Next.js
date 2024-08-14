import React from "react";
import Image from "next/image";
import Great from "../public/great.png";
import google from "../public/google.png";
import clogo from "../public/clogo.svg";
import { GrFormView } from "react-icons/gr";
import Link from "next/link";

function Certificates(props) {
  return (
    <div className="scroll-smooth " id="Certificates">
      <h1 className="text-[#FEB901] text-4xl lg:text-6xl font-bold text-center mt-10">
        Certificates
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 mt-20 mb-7 mx-4 md:mx-7 lg:mx-10 gap-7">
        <div className="col-span-6 bg-[#DAD2D8] hover:bg-white w-full rounded-[2rem] place-self-center px-4 md:px-5 lg:px-8 py-4 md:py-5 lg:py-8 hover:duration-300">
          <span className="flex justify-between items-center">
            <div className="bg-black text-[#FEB901] rounded-full flex pr-2 md:pr-4 items-center">
              <Image className="h-10 md:h-12 lg:h-16 w-10 md:w-12 lg:w-16 rounded-full" src={Great} alt="picture"></Image>

              <h1 className="text-sm md:text-lg lg:text-2xl font-bold ml-1 lg:ml-2">Great Learning</h1>
            </div>
            <Image src={clogo} alt="picvfv" className="h-10 md:h-12 lg:h-16 w-10 md:w-12 lg:w-16"></Image>
          </span>
          <h1 className="font-extrabold text-xl md:text-3xl my-3 md:my-4 lg:my-7">
            Master Course in Full Stack Development
          </h1>
          <Link href="/certificate1">
         <button className="border border-black bg-[#e2e2e2] text-black hover:bg-black hover:text-white px-2 md:px-5 lg:px-7 py-1 lg:py-2 rounded-full text-lg md:text-xl lg:text-2xl flex items-center font-medium">
            <GrFormView className="text-xl md:text-3xl lg:text-5xl" />
            View
          </button>
          </Link>
        </div>

        <div className="col-span-6 bg-[#DAD2D8] hover:bg-white w-full rounded-[2rem] place-self-center px-4 md:px-5 lg:px-8 py-4 md:py-5 lg:py-8 hover:duration-300">
          <span className="flex justify-between items-center">
            <div className="bg-black text-[#FEB901] rounded-full flex pr-2 md:pr-4 items-center">
              <Image alt="pidvdvure" className="h-10 md:h-12 lg:h-16 w-10 md:w-12 lg:w-16 rounded-full" src={google}></Image>

              <h1 className="text-sm md:text-lg lg:text-2xl font-bold ml-1 lg:ml-2">Google Digital Garage</h1>
            </div>
            <Image alt="wefef" src={clogo} className="h-10 md:h-12 lg:h-16 w-10 md:w-12 lg:w-16"></Image>
          </span>
          <h1 className="font-extrabold text-xl md:text-3xl my-3 md:my-4 lg:my-7">
            The Fundamentals of Digital Marketing
          </h1>
          <Link href="/certificate2">
          <button className="border border-black bg-[#e2e2e2] text-black hover:bg-black hover:text-white px-2 md:px-5 lg:px-7 py-1 lg:py-2 rounded-full text-lg md:text-xl lg:text-2xl flex items-center font-medium">
              <GrFormView className="text-xl md:text-3xl lg:text-5xl" />
              View
          </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 mx-4 md:mx-7 lg:mx-10 gap-7">
        <div className="col-span-6 bg-[#DAD2D8] hover:bg-white w-full rounded-[2rem] place-self-center px-4 md:px-5 lg:px-8 py-4 md:py-5 lg:py-8 hover:duration-300">
          <span className="flex justify-between items-center">
            <div className="bg-black text-[#FEB901] rounded-full flex pr-2 md:pr-4 items-center">
              <Image alt="dvdvve" className="h-10 md:h-12 lg:h-16 w-10 md:w-12 lg:w-16 rounded-full" src={Great}></Image>
              <h1 className="text-sm md:text-lg lg:text-2xl font-bold ml-1 lg:ml-2">Great Learning</h1>
            </div>
            <Image alt="xae" src={clogo} className="h-10 md:h-12 lg:h-16 w-10 md:w-12 lg:w-16"></Image>
          </span>
          <h1 className="font-extrabold text-xl md:text-3xl my-3 md:my-4 lg:my-7"> React JS Tutorial </h1>
          <Link href="/certificate3">
          <button className="border border-black bg-[#e2e2e2] text-black hover:bg-black hover:text-white px-2 md:px-5 lg:px-7 py-1 lg:py-2 rounded-full text-lg md:text-xl lg:text-2xl flex items-center font-medium">
            <GrFormView className="text-xl md:text-3xl lg:text-5xl" />
            View
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Certificates;
