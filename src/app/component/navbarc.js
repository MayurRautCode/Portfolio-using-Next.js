"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4 hover:text-blue-500 `}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-black text-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md scroll-smooth `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md h-16 border-b border-slate-600">
        {/*logo container*/}
        <Image alt="picture" src={logo} className="h-10 w-10" />
      </div>
      <div className="flex flex-col ml-4 text-white">
        <a
          className="text-xl font-medium my-4 hover:text-blue-500"
          href="#home"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-blue-500"
          href="#Education"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Education
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-blue-500"
          href="#Certificates"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Certificates
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-blue-500"
          href="#Skills"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Skills
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-blue-500"
          href="#Project"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Projects
        </a>
        <a
          className="text-xl font-normal my-4 hover:text-blue-500"
          href="#Profile"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact us
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-black text-white px-6 md:px-4 lg:px-8 py-4 h-16 items-center border-b border-slate-600">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Image alt="picture" src={logo} className="h-10 w-10" />
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#Education">Education</NavLink>
          <NavLink to="#Certificates">Certificates</NavLink>
          <NavLink to="#Skills">Skills</NavLink>
          <NavLink to="#Project">Projects</NavLink>
          <NavLink to="#Profile">Contact us</NavLink>
        </div>
      </div>
    </nav>
  );
}
