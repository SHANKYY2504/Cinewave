"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const imagePaths = ["/e1.jpg", "/e2.jpg", "/e3.jpg", "/e4.jpg", "/e5.jpg", "/e6.jpg", "/e7.jpg"]

const FilmScroll = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Toggle play/pause on click
  const togglePlayback = () => {
    setIsPlaying((prev) => !prev)
  }

  // Add projector sound effect
  useEffect(() => {
    const audio = new Audio("/projector-sound.mp3")
    audio.loop = true
    audio.volume = 0.2

    if (isPlaying) {
      audio.play().catch(() => {
        // Handle autoplay restrictions
        console.log("Audio playback blocked by browser")
      })
    } else {
      audio.pause()
    }

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [isPlaying])

  return (
    <div className="relative w-full overflow-hidden p-6 bg-black/90" onClick={togglePlayback}>
      {/* Projector light effect */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-50/10 to-transparent opacity-70 animate-flicker pointer-events-none"></div>

      {/* Film strip container */}
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div
          className={cn(
            "flex space-x-4 transition-all duration-300",
            isPlaying ? "animate-infinite-scroll" : "animate-paused",
          )}
        >
          {[...Array(8)].map((_, frameIndex) => (
            <FilmFrame
              key={frameIndex}
              imagePath={imagePaths[frameIndex % imagePaths.length]}
              frameNumber={frameIndex + 1}
              isPlaying={isPlaying}
            />
          ))}
          {[...Array(8)].map((_, frameIndex) => (
            <FilmFrame
              key={`dup-${frameIndex}`}
              imagePath={imagePaths[frameIndex % imagePaths.length]}
              frameNumber={frameIndex + 9}
              isPlaying={isPlaying}
            />
          ))}
        </div>
      </div>

      {/* Projector controls */}
      <div className="absolute bottom-2 right-2 bg-gray-800/80 px-3 py-1 rounded-full text-white text-sm">
        {isPlaying ? "Playing" : "Paused"} - Click to {isPlaying ? "pause" : "play"}
      </div>
    </div>
  )
}

const FilmFrame = ({ imagePath, frameNumber, isPlaying }) => {
  const frameRef = useRef<HTMLDivElement>(null)
  const [randomJitter, setRandomJitter] = useState({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    rotation: (Math.random() * 1 - 0.5) * 0.5,
  })

  // More random and realistic jitter effect
  useEffect(() => {
    if (!isPlaying) return

    const jitterInterval = setInterval(
      () => {
        if (frameRef.current && Math.random() > 0.7) {
          frameRef.current.classList.add("film-jitter")

          // Random jitter values
          setRandomJitter({
            x: Math.random() * 3 - 1.5,
            y: Math.random() * 3 - 1.5,
            rotation: (Math.random() * 1 - 0.5) * 0.8,
          })

          setTimeout(
            () => {
              if (frameRef.current) {
                frameRef.current.classList.remove("film-jitter")
              }
            },
            100 + Math.random() * 150,
          )
        }
      },
      1000 + Math.random() * 2000,
    )

    return () => clearInterval(jitterInterval)
  }, [isPlaying])

  // Generate a random set of scratches for this frame
  const scratchCount = Math.floor(Math.random() * 5) + 1
  const scratches = Array(scratchCount)
    .fill(0)
    .map((_, i) => ({
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      width: `${Math.random() * 30 + 5}px`,
      height: `${Math.random() * 1 + 0.5}px`,
      rotation: `${Math.random() * 180}deg`,
      opacity: Math.random() * 0.4 + 0.1,
    }))

  // Generate random dust particles
  const dustCount = Math.floor(Math.random() * 15) + 5
  const dustParticles = Array(dustCount)
    .fill(0)
    .map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`,
      opacity: Math.random() * 0.5 + 0.1,
    }))

  return (
    <div
      ref={frameRef}
      className="relative w-[240px] h-[135px] bg-gray-900 overflow-hidden shadow-2xl transition-all duration-100"
      style={{
        transform: `translate(${randomJitter.x}px, ${randomJitter.y}px) rotate(${randomJitter.rotation}deg)`,
      }}
    >
      {/* Film content area with Image and vintage effects */}
      <div className="absolute inset-[16px] bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
        <img
          src={imagePath || "/placeholder.svg"}
          alt="Film Content"
          className="w-full h-full object-cover"
          style={{
            filter: "sepia(15%) contrast(110%) brightness(90%)",
          }}
        />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40 pointer-events-none"></div>

        {/* Film scratches */}
        {scratches.map((scratch, i) => (
          <div
            key={`scratch-${i}`}
            className="absolute bg-white/80"
            style={{
              left: scratch.left,
              top: scratch.top,
              width: scratch.width,
              height: scratch.height,
              transform: `rotate(${scratch.rotation})`,
              opacity: scratch.opacity,
            }}
          ></div>
        ))}

        {/* Dust particles */}
        {dustParticles.map((dust, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white/90"
            style={{
              left: dust.left,
              top: dust.top,
              width: dust.size,
              height: dust.size,
              opacity: dust.opacity,
            }}
          ></div>
        ))}

        {/* Film grain effect - more authentic */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-10 animate-subtle-noise"></div>

        {/* Color aberration effect */}
        <div className="absolute inset-0 bg-red-500/5 mix-blend-screen transform translate-x-[0.5px]"></div>
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-screen transform translate-x-[-0.5px]"></div>
      </div>

      {/* Film perforations - Left */}
      <div className="absolute top-0 left-0 h-full w-[16px] bg-gray-900 flex flex-col justify-between py-1">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div key={`left-${index}`} className="w-full px-[1px]">
              <div className="h-[8px] bg-black rounded-sm border border-gray-800 flex items-center justify-center">
                <div className="w-[6px] h-[6px] rounded-sm bg-black border border-gray-700"></div>
              </div>
            </div>
          ))}
      </div>

      {/* Film perforations - Right */}
      <div className="absolute top-0 right-0 h-full w-[16px] bg-gray-900 flex flex-col justify-between py-1">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div key={`right-${index}`} className="w-full px-[1px]">
              <div className="h-[8px] bg-black rounded-sm border border-gray-800 flex items-center justify-center">
                <div className="w-[6px] h-[6px] rounded-sm bg-black border border-gray-700"></div>
              </div>
            </div>
          ))}
      </div>

      {/* Film metadata */}
      <div className="absolute top-1 left-[20px] text-gray-500 text-[8px] font-mono tracking-tight">
        KODAK VISION3 500T
      </div>
      <div className="absolute bottom-1 left-[20px] text-gray-500 text-[8px] font-mono tracking-tight">
        SCENE {String(Math.floor(frameNumber / 3) + 1).padStart(2, "0")}
      </div>
      <div className="absolute bottom-1 right-[20px] text-gray-500 text-[8px] font-mono tracking-tight">
        TAKE {frameNumber}A
      </div>

      {/* Frame counter */}
      <div className="absolute top-[50%] left-[20px] transform -translate-y-1/2 text-gray-500 text-[10px] font-mono">
        {String(frameNumber * 24).padStart(4, "0")}
      </div>
    </div>
  )
}

export default FilmScroll

