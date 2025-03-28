"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Spotlight } from "./ui/Spotlight";
import { ChevronRight, Film, Camera, Users, Calendar } from "lucide-react"

const Heronew=()=>{
  const [isScrolling, setIsScrolling] = useState(false)
  const topFilmstripRef = useRef<HTMLDivElement>(null)
  const bottomFilmstripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const topFilmstrip = topFilmstripRef.current
    const bottomFilmstrip = bottomFilmstripRef.current

    if (!topFilmstrip || !bottomFilmstrip) return

    let topPosition = 0
    let bottomPosition = 0
    const speed = 0.5

    const animate = () => {
      if (!topFilmstrip || !bottomFilmstrip) return

      topPosition -= speed
      bottomPosition += speed

      // Reset position when a full frame has scrolled to create seamless loop
      if (topPosition <= -200) topPosition = 0
      if (bottomPosition >= 200) bottomPosition = 0

      topFilmstrip.style.transform = `translateX(${topPosition}px)`
      bottomFilmstrip.style.transform = `translateX(${bottomPosition}px)`

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <>
    
    <div
          className="absolute inset-0 dark:bg-black bg-white 
          dark:bg-grid-white/[0.09] bg-grid-black/[0.2] flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center 
            justify-center dark:bg-black bg-white 
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Film Strips */}
      <div className="relative h-screen flex flex-col justify-between">
        {/* Top Film Strip */}
        <div className="relative h-[140px] overflow-hidden border-y border-yellow-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
          <div ref={topFilmstripRef} className="flex h-full" style={{ width: "calc(200px * 20)" }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={`top-${i}`} className="relative w-[200px] h-full flex-shrink-0 border-x border-yellow-500/30">
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src={`/placeholder.svg?height=140&width=200&text=SCENE ${i + 1}`}
                    alt={`Film scene ${i + 1}`}
                    width={200}
                    height={140}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-1 text-[8px] text-yellow-500">
                  <div className="flex justify-between w-full">
                    <span>KODAK VISION3 5207</span>
                    <span>SCENE {(i + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>TAKE {(i + 1).toString().padStart(2, "0")}</span>
                    <span>CINEWAVE</span>
                  </div>
                </div>
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-1">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div key={j} className="w-2 h-2 bg-yellow-500/50 rounded-sm" />
                  ))}
                </div>
                <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-1">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div key={j} className="w-2 h-2 bg-yellow-500/50 rounded-sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center flex-grow px-4 text-center z-20">
          <div className="relative mb-6">
            <h1 className="text-7xl md:text-9xl font-bold text-yellow-500 tracking-tighter">CINEWAVE</h1>
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-yellow-500/70" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-yellow-500/70" />
          </div>

          <h2 className="text-xl md:text-2xl font-light tracking-widest mb-8">
            THE FILMMAKING SOCIETY OF IIT BHUBANESWAR
          </h2>

          

        
        </div>

        {/* Bottom Film Strip */}
        <div className="relative h-[140px] overflow-hidden border-y border-yellow-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
          <div ref={bottomFilmstripRef} className="flex h-full" style={{ width: "calc(200px * 20)" }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`bottom-${i}`}
                className="relative w-[200px] h-full flex-shrink-0 border-x border-yellow-500/30"
              >
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src={`/placeholder.svg?height=140&width=200&text=SCENE ${20 - i}`}
                    alt={`Film scene ${20 - i}`}
                    width={200}
                    height={140}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-1 text-[8px] text-yellow-500">
                  <div className="flex justify-between w-full">
                    <span>KODAK VISION3 5207</span>
                    <span>SCENE {(20 - i).toString().padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>TAKE {(20 - i).toString().padStart(2, "0")}</span>
                    <span>CINEWAVE</span>
                  </div>
                </div>
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-1">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div key={j} className="w-2 h-2 bg-yellow-500/50 rounded-sm" />
                  ))}
                </div>
                <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-1">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div key={j} className="w-2 h-2 bg-yellow-500/50 rounded-sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      
    </main>
    </>
  )
}

export default Heronew;

