import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { motion } from "framer-motion";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
// import {projects} from "@/components/sections/projects";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      < Contact />
      <Footer />
    </main>
     {/* <Footer /> */}
    </>
  );
}