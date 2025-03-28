import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const Events = () => {
  return (
    <section id="event">
      {/* Added mt-20 (or any other value you prefer) to push content down */}
      <div className="py-10 mt-20" id="#event">
        {/* Header with centered title and right-aligned image */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute -right-16 top-10">
            {" "}
            
            <Image
              src="/waocamera.png"
              alt="Wao Camera"
              height={450}
              width={450}
              className="mb-10"
            />
          </div>

          <div className="absolute -left-16 top-10">
            {" "}
            
            <Image
              src="/waocamera2.png"
              alt="Wao Camera2"
              height={470}
              width={470}
              className="mb-10"
            />
          </div>

          {/* <div className="absolute left-0 top-32">
            <Image
              src="/reel.png"
              alt="Wao Camera"
              height={450}
              width={450}
              className="mb-10"
            />
          </div> */}
          <h1 className="uppercase text-bold mt-20 text-5xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)]">
            Events
          </h1>
        </div>

        {/* Rest of your event cards remain unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {/* First Event Card */}
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <PinContainer
              title="Acting workshop"
              href="https://www.instagram.com/p/DAVSIINomiV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            >
              <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-image" />
                </div>

                <Image
                  src="/acting.jpg"
                  height={250}
                  width={250}
                  alt="acting"
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                Acting workshop
              </h1>
              <p className="lg:text-lg lg:font-normal font-light text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                Exclusive Acting Workshop with Amit Pahel – Learn from the Best!
              </p>

              <a
                href="https://www.instagram.com/p/DB_aCbnNsEV/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[-15px] right-0 text-blue-500 text-sm font-semibold hover:underline p-2"
              >
                Check this →
              </a>
            </PinContainer>
          </div>

          {/* Second Event Card */}
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <PinContainer
              title="Scriptwriting workshop"
              href=" https://www.instagram.com/cinewaveiitbbs/p/C7_vECey2wl/"
            >
              <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-image" />
                </div>
                <Image
                  src="/script.jpg"
                  height={250}
                  width={250}
                  alt="acting"
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                Scriptwriting Workshop
              </h1>
              <p className="lg:text-lg lg:font-normal font-light text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                Online Screenwriting Workshop with Gundeep Kaur.
              </p>
              <a
                href="https://www.instagram.com/p/DB_aCbnNsEV/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[-15px] right-0 text-blue-500 text-sm font-semibold hover:underline p-2"
              >
                Check this →
              </a>
            </PinContainer>
          </div>

          {/* Third Event Card */}
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <PinContainer
              title="Bootcamp"
              href=" https://www.instagram.com/cinewaveiitbbs/p/C-3MEPSTK0r/ "
            >
              <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-image" />
                </div>
                <Image
                  src="/film.jpg"
                  height={250}
                  width={250}
                  alt="acting"
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                Filmmaking Bootcamp
              </h1>
              <p className="lg:text-lg lg:font-normal font-light text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                2-Day Filmmaking Bootcamp – Learn, Shoot, Edit
              </p>
              <a
                href="https://www.instagram.com/p/DB_aCbnNsEV/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[-15px] right-0 text-blue-500 text-sm font-semibold hover:underline p-2"
              >
                Check this →
              </a>
            </PinContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;