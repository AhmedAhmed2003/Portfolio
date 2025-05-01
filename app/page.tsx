
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import AnimatedGrid from "./components/ui/AnimatedGrid";
import RecentProjects from "./components/RecentProjects";
import { FloatingNav } from "./components/ui/FloatingNavBar";
import { navItems } from "./components/data";
import Client from "./components/Client";
import Experience from "./components/Experience";

export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden
  mx-auto sm:px-10 px-10   ">
    <div className=" max-w-7xl w-full  ">
      <FloatingNav navItems={navItems}>
        
      </FloatingNav>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Client/>
      <Experience/>
     
      
    </div>
  </main>
  );
}
