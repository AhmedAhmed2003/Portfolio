// import Image from "next/image";
// import styles from "./page.module.css";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
// import AnimatedGrid from "./components/ui/AnimatedGrid";
import RecentProjects from "./components/RecentProjects";
import { FloatingNav } from "./components/ui/FloatingNavBar";
import { navItems } from "./components/data";
import Client from "./components/Client";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip
  mx-auto sm:px-10 px-10   "
    >
      <div className=" max-w-7xl w-full  ">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero />
        <Grid />
        <Suspense
          fallback={
            <div className="h-full w-full text-5xl text-white-100">
              {" "}
              Loading ...
            </div>
          }
        >
          <RecentProjects />
        </Suspense>
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
