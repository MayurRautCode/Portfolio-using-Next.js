import React from "react";
import NavbarC from "../component/navbarc";
import Herosection from "../component/herosection";
import Education from "../component/education";
import Certificates from "../component/certification";
import Skills from "../component/skills";
import Project from "../component/project";
import Profile from "../component/profile";
import Contact from "../component/contact"; 
import Footer from "../component/footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col scroll-smooth">
      <NavbarC />
      <Herosection />
      <Education />
      <Certificates />
      <Skills />
      <Project />
      <Profile />
      <Contact />
      <Footer />
    </main>
  );
}
