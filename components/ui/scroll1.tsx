"use client"

import { useEffect, useRef } from "react"
import { keyframes } from "@emotion/react"

const imagePaths = [
  "/e8.jpg", "/e9.jpg", "/e10.jpg", "/e11.jpg", "/e12.jpg", "/e13.jpg", "/e14.jpg"
]

const Scroll1 = () => {
  return (
    <div className="relative w-full overflow-hidden p-6">
      <div className="flex space-x-4 animate-infinite-scroll">
        {[...Array(8)].map((_, frameIndex) => (
          <FilmFrame key={frameIndex} imagePath={imagePaths[frameIndex % imagePaths.length]} />
        ))}
        {[...Array(8)].map((_, frameIndex) => (
          <FilmFrame key={`dup-${frameIndex}`} imagePath={imagePaths[frameIndex % imagePaths.length]} />
        ))} {/* Duplicate frames for seamless looping */}
      </div>
    </div>
  )
}

const FilmFrame = ({ imagePath }) => {
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (frameRef.current) {
        frameRef.current.classList.add("film-jitter")
        setTimeout(() => {
          if (frameRef.current) {
            frameRef.current.classList.remove("film-jitter")
          }
        }, 150)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={frameRef}
      className="relative w-[220px] h-[120px] bg-gray-200 overflow-hidden shadow-2xl transition-transform"
    >
      {/* Film texture overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=10&width=10')] opacity-10 pointer-events-none z-10"></div>

      {/* Film grain effect */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none z-10"></div>

      {/* Film content area with Image */}
      <div className="absolute inset-[12px] bg-gray-100 flex items-center justify-center">
        <img src={imagePath} alt="Film Content" className="w-full h-full object-cover" />
      </div>

      {/* Film perforations - Left */}
      <div className="absolute top-0 left-0 h-full w-[14px] bg-gray-800 flex flex-col justify-between py-1">
        {Array(8).fill(0).map((_, index) => (
          <div key={`left-${index}`} className="w-full px-[2px]">
            <div className="h-[7px] bg-gray-900 rounded-sm border border-gray-700"></div>
          </div>
        ))}
      </div>

      {/* Film perforations - Right */}
      <div className="absolute top-0 right-0 h-full w-[14px] bg-gray-800 flex flex-col justify-between py-1">
        {Array(8).fill(0).map((_, index) => (
          <div key={`right-${index}`} className="w-full px-[2px]">
            <div className="h-[7px] bg-gray-900 rounded-sm border border-gray-700"></div>
          </div>
        ))}
      </div>

      {/* Film metadata */}
      <div className="absolute top-1 left-[18px] text-gray-700 text-[10px] font-mono">KODAK 35mm</div>
      <div className="absolute bottom-1 left-[18px] text-gray-700 text-[10px] font-mono">SCENE 01</div>
      <div className="absolute bottom-1 right-[18px] text-gray-700 text-[10px] font-mono">TAKE 1A</div>
    </div>
  )
}

export default Scroll1;
