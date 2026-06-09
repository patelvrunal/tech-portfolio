import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <ChatBot />
    </>
  );
}
