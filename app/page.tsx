import Hero from "@/components/Hero";

import Events from "@/components/Events";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import About from "@/components/About";
import { navItems } from "@/data";
import Workshop from "@/components/Workshop";
import Hero2 from "@/components/Hero2";
import Shortfilm from "@/components/Shortfilm";
import Cine from "@/components/Cine";

import Crew from "@/components/Crew";
import Members from "@/components/Members";
import Contact from "@/components/Contact";
import Skeleton from "@/components/Skeleton";
import Heronew from "@/components/Heronew";



// import Hlo from "@/components/Hlo";






export default function Home() {
  return (
  <main className="relative bg-black flex justify-center items-center flex-col
  overflow-hidden mx-auto">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      {/* <Hero /> */}
      {/* <Heronew /> */}
      {/* <Hlo /> */}
      <Hero2 />
      <About />
      <Shortfilm/>
      <Skeleton />
      {/* <Cine /> */}
      <Events />
      <Workshop />
      <Crew />
      <Members />
      <Contact />
      

            
      
    </div>
  </main>
  );
}
