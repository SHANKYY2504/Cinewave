"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Members = () => {
  const images = ["member3.jpg", "memberp2.jpg"]; // Add more images as needed
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center">
      {/* Responsive image container */}
      <div className="relative w-full max-w-[800px] h-[50vh] md:h-[60vh] lg:h-[600px] overflow-hidden shadow-lg rounded-lg">
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/${image}`}
            alt="Profile Picture"
            fill
            className={`absolute transition-opacity duration-1000 ease-in-out object-cover w-full h-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {/* Responsive text positioning */}
      <h2 className="text-sm md:text-base text-gray-500 font-bold mt-2 md:mt-3">All Members</h2>
    </div>
  );
};

export default Members;