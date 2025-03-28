import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Skeleton = () => {
  return (
    <section id="reel">
      <div className="flex flex-col items-center p-4 sm:p-6 w-full min-h-screen bg-black overflow-hidden relative pt-24 md:pt-40">
        {/* Text content with higher z-index */}
        <div className="relative z-10 w-full text-center">
          <h1 className="uppercase text-bold text-3xl sm:text-4xl md:text-5xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-4 sm:mb-6">
            Projects
          </h1>
          <p className="text-center font-normal text-gray-500 text-sm sm:text-base max-w-2xl mt-4 sm:mt-8 px-4 sm:px-8 mx-auto">
            Some of our finest work, brought to life by a passionate and dedicated
            team, both on and off the screen.
          </p>
        </div>

        {/* Grid content */}
        <div className="relative w-full mt-8 sm:mt-12 px-2 sm:px-4">
          <BentoGrid className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={
                  <iframe
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl"
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                }
                className={cn(
                  i === 3 || i === 6 ? "sm:col-span-2 lg:col-span-2" : "",
                  "p-2 sm:p-3"
                )}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    videoUrl: "https://www.youtube.com/embed/VGxJaunHDe4", 
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    videoUrl: "https://www.youtube.com/embed/WLJZRiPHLRY",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    videoUrl: "https://www.youtube.com/embed/P9K19ZyOVZk",
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    videoUrl: "https://www.youtube.com/embed/Fm_-6GilOG0",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    videoUrl: "https://www.youtube.com/embed/asQvwclqL0M",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    videoUrl: "https://www.youtube.com/embed/4Umuj7GWdLA",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    videoUrl: "https://www.youtube.com/embed/nlIRAvQamFo",
  },
];

export default Skeleton;