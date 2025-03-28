import React from "react";

const Cine = () => {
  return (
    <div className="flex flex-col items-center p-6 mt-40 w-full">
      {/* Title */}
      <h1 className="text-5xl font-bold font-[Pacifico] text-yellow-600 text-center w-full">
        Short Film
      </h1>

      {/* Subtitle */}
      <p className="text-center font-normal text-gray-500 max-w-lg mt-8 px-8">
        Some of our finest work, brought to life by a passionate and dedicated
        team, both on and off the screen.
      </p>

      {/* Video Grid */}
      <div className="w-full">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-10 w-full">
            <iframe
              className="w-full h-72"
              src="https://www.youtube.com/embed/Fm_-6GilOG0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-72"
              src="https://www.youtube.com/embed/3lvREQQI0QY"
              title="YouTube video"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-72"
              src="https://www.youtube.com/embed/uHndf7m2xRc"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cine;
