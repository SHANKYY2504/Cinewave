"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background elements */}
      <div className="fixed -z-50 inset-0 overflow-hidden">
        <div className="absolute inset-0 dark:bg-black bg-white dark:bg-grid-white/[0.07] bg-grid-black/[0.2]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black bg-white" />
      </div>

      <section id="about" className="relative w-full flex justify-center px-4 sm:px-6 lg:px-8">
        {/* Left Image - Adjusted positioning for responsiveness */}
        <div className="absolute left-0 md:left-[-100px] lg:left-[-200px] top-[20%] transform -translate-y-1/2 hidden md:block">
          <Image 
            src="/camerall.png" 
            alt="Left Decoration" 
            width={500} 
            height={550}
            className="w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>

        <motion.div
          id="about-section"
          className="flex flex-col items-center p-4 mt-12 md:mt-20 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="uppercase text-bold text-3xl sm:text-4xl md:text-5xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-8 md:mb-12">
            About us
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 w-full max-w-full justify-between">
            <div className="w-full max-w-3xl text-gray-500 flex flex-col justify-center p-4 sm:p-6 md:p-8 mx-auto">
              <p className="text-xl sm:text-2xl font-bold">
                Cinewave: The Filmmaking Society of IIT Bhubaneswar
              </p>
              <p className="text-base sm:text-lg mt-4 sm:mt-6">
                Cinewave is the official filmmaking society of IIT Bhubaneswar, dedicated to fostering creativity and excellence in visual storytelling. Our society brings together individuals passionate about filmmaking, providing a platform to explore
                various aspects of the craft, including scriptwriting, cinematography, directing, and editing.
              </p>
              <p className="text-base sm:text-lg mt-4 sm:mt-6">
                We specialize in producing a diverse range of cinematic content, including short films, class songs, farewell videos, freshers&apos; introduction videos, and campus tour films. Through these projects, we capture the essence of campus life,
                document significant moments, and create impactful narratives that resonate with our audience.
              </p>
              <p className="text-base sm:text-lg mt-4 sm:mt-6 text-gray-200">
                Committed to redefining cinematic creativity, Cinewave continues to push boundaries and set new benchmarks in student filmmaking.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center mt-0 lg:mt-[-30px]">
              <Image 
                src="/abouta.png" 
                alt="cine" 
                width={350} 
                height={400}
                className="w-[250px] sm:w-[300px] md:w-[350px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Image - Adjusted positioning for responsiveness */}
        <div className="absolute right-0 md:right-[-100px] lg:right-[-200px] top-[20%] transform -translate-y-1/2 hidden md:block">
          <Image 
            src="/camerar.png" 
            alt="Right Decoration" 
            width={500} 
            height={550}
            className="w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>
      </section>
    </div>
  );
};

export default About;