"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Shortfilm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("shortfilm-section");
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
    <section id="film" className="relative z-[1]">
      <motion.div
        id="shortfilm-section"
        className="flex flex-col items-center pt-40" // Removed p-6 here
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <h1 className="uppercase text-5xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-6">
          Short Film
        </h1>

        <p className="text-center font-normal text-gray-500 max-w-lg mt-2 px-8">
          Some of our finest work, brought to life by a passionate and dedicated
          team, both on and off the screen.
        </p>

        <div className="w-full"> {/* Removed px-4 here */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {[
              "t2Kq25C8ylg",
              "bYlbs5KzLpA",
              "ppjlXxNtBxQ",
              "-dctDc8eBxo",
              "MIvxJ2QWOYs",
              "fg7F1DPCAw0",
              "6fX1cQsMgog",
              "yfzBn4KE5Pg",
              "XK5RjwdxtAw",
            ].map((videoId, index) => (
              <motion.iframe
                key={index}
                className="w-full aspect-video rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube video ${index + 1}`}
                allowFullScreen
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Shortfilm;