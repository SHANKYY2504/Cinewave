
import Scroll from "./ui/scroll";
import Scroll1 from "./ui/scroll1";


import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div>
      <div className="relative h-screen flex flex-col items-center justify-center">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="white"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="yellow" />
        </div>

        <div
          className="absolute inset-0 dark:bg-black bg-white 
          dark:bg-grid-white/[0.07] bg-grid-black/[0.2] flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center 
            justify-center dark:bg-black bg-white 
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex flex-col justify-center items-center relative z-10">
          <div className="mb-5"> {/* Reduced margin-top */}
            <Scroll />
          </div>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            

            <h1 className="uppercase text-bold text-8xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-4">
              CINEWAVE
            </h1>
            <h2 className="uppercase tracking-widest text-lg text-center text-white mb-4">
              The Filmmaking Society Of IIT Bhubaneswar
            </h2>
          </div>
          <div className="mt-4">
            <Scroll1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;