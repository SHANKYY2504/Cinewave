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

    // Check visibility on mount in case the section is already in view
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="film" className="relative z-10 py-20 bg-black"> {/* Added bg-black and py-20 */}
      <motion.div
        id="shortfilm-section"
        className="flex flex-col items-center container mx-auto px-4" /* Added container and padding */
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <h1 className="uppercase text-5xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-6">
          Short Film
        </h1>

        <p className="text-center font-normal text-gray-300 max-w-lg mt-2 px-4"> {/* Changed text color */}
          Some of our finest work, brought to life by a passionate and dedicated
          team, both on and off the screen.
        </p>

        <div className="w-full mt-20 px-4"> {/* Added horizontal padding */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" /* Increased gap */
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
              <motion.div
                key={index}
                className="w-full overflow-hidden rounded-lg shadow-lg hover:shadow-yellow-500/30 transition-shadow" /* Added hover effect */
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Shortfilm;