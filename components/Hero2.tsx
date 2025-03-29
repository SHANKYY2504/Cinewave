"use client"

import { useEffect, useRef } from "react"
import { Spotlight } from "./ui/Spotlight";

const imagePaths = ["/e1.jpg", "/e2.jpg", "/e3.jpg", "/e4.jpg", "/e5.jpg", "/e6.jpg", "/e7.jpg",
  "/e8.jpg", "/e9.jpg", "/e10.jpg", "/e11.jpg", "/e12.jpg", "/e13.jpg", "/e14.jpg"
]

const Heronew = () => {
  const topFilmstripRef = useRef<HTMLDivElement>(null)
  const bottomFilmstripRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  
  // Responsive frame width calculation
  const getFrameWidth = () => {
    if (typeof window === 'undefined') return 224;
    return Math.min(Math.max(window.innerWidth * 0.15, 120), 224);
  }
  
  const getSpeed = () => {
    if (typeof window === 'undefined') return 1.5;
    return window.innerWidth < 768 ? 1 : 1.5;
  }

  const getSideGap = () => {
    if (typeof window === 'undefined') return 40;
    return window.innerWidth < 768 ? 20 : 40;
  }

  useEffect(() => {
    let topPosition = getSideGap(); // Start with initial gap
    let bottomPosition = getSideGap(); // Start with initial gap
    let totalWidth = getFrameWidth() * imagePaths.length;

    const animate = () => {
      const topFilmstrip = topFilmstripRef.current
      const bottomFilmstrip = bottomFilmstripRef.current
      
      if (!topFilmstrip || !bottomFilmstrip) return

      // Update responsive values
      const frameWidth = getFrameWidth();
      const speed = getSpeed();
      const sideGap = getSideGap();
      totalWidth = frameWidth * imagePaths.length;

      // Update positions - both move left but bottom images are reversed
      topPosition -= speed
      bottomPosition -= speed // Both move in same direction now

      // Seamless reset - no visible jump
      if (topPosition <= -totalWidth + sideGap) topPosition = sideGap
      if (bottomPosition <= -totalWidth + sideGap) bottomPosition = sideGap

      // Apply transformations
      topFilmstrip.style.transform = `translateX(${topPosition}px)`
      // For bottom strip, we move it left but the images are reversed
      bottomFilmstrip.style.transform = `translateX(${bottomPosition}px)`

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  // Film frame component - now responsive
  const FilmFrame = ({ imagePath }: { imagePath: string }) => {
    const frameWidth = typeof window !== 'undefined' 
      ? Math.min(Math.max(window.innerWidth * 0.15, 120), 224)
      : 200;
    const frameHeight = frameWidth * 0.56; // Maintain 16:9 aspect ratio
    
    return (
      <div 
        className="relative bg-gray-900 overflow-hidden shadow-lg flex-shrink-0 border border-yellow-500/30 mt-[20px]"
        style={{
          width: `${frameWidth}px`,
          height: `${frameHeight}px`,
          marginLeft: '0.5rem',
          marginRight: '0.5rem'
        }}
      >
        <div className="absolute inset-[12px] bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={imagePath}
            alt="Film Content"
            className="w-full h-full object-cover"
            style={{ filter: "sepia(15%) contrast(110%) brightness(90%)" }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40 pointer-events-none"></div>
        </div>
        {/* Film perforations */}
        {['left', 'right'].map((side) => (
          <div 
            key={side} 
            className={`absolute top-0 ${side}-0 h-full w-[12px] bg-gray-900 flex flex-col justify-between py-1`}
          >
            {Array(6).fill(0).map((_, i) => (
              <div key={`${side}-${i}`} className="w-full px-[1px]">
                <div className="h-[6px] bg-black rounded-sm border border-gray-800 flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-sm bg-black border border-gray-700"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="absolute inset-0 dark:bg-black bg-white dark:bg-grid-white/[0.09] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      
      {/* Logo Container - now responsive */}
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center p-2 md:p-4">
        <img 
          src="/cwlogo.png" 
          alt="Cinewave Logo" 
          className="h-12 md:h-16 lg:h-20 w-auto" 
          style={{ maxWidth: 'min(50vw, 300px)' }}
        />
        <img 
          src="/cultlogo.png" 
          alt="Cult Logo" 
          className="h-10 md:h-14 lg:h-16 w-auto" 
          style={{ maxWidth: 'min(40vw, 250px)' }}
        />
      </div>
      
      <main className="min-h-screen bg-black text-white overflow-hidden">
        <div className="relative h-screen flex flex-col justify-between py-10 md:py-20">
          {/* Top Film Strip - Scrolls Left */}
          <div className="relative h-[100px] md:h-[140px] w-full overflow-hidden border-y border-yellow-500/30 mt-4 md:mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
            <div 
              ref={topFilmstripRef} 
              className="flex h-full items-center absolute left-0 will-change-transform"
              style={{ 
                paddingLeft: `${getSideGap()}px`, 
                paddingRight: `${getSideGap()}px` 
              }}
            >
              {[...imagePaths, ...imagePaths].map((path, i) => (
                <FilmFrame key={`top-${i}`} imagePath={path} />
              ))}
            </div>
          </div>

          {/* Main Content - now responsive */}
          <div className="flex flex-col items-center justify-center flex-grow text-center z-20 mt-2 md:mt-4 px-4">
            <div className="relative mb-4 md:mb-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-yellow-500 tracking-tighter leading-tight">
                CINEWAVE
              </h1>
              <div className="absolute -top-3 md:-top-4 lg:-top-6 -left-3 md:-left-4 lg:-left-6 w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 border-t-2 border-l-2 border-yellow-500/70" />
              <div className="absolute -bottom-3 md:-bottom-4 lg:-bottom-6 -right-3 md:-right-4 lg:-right-6 w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 border-b-2 border-r-2 border-yellow-500/70" />
            </div>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-widest mb-6 md:mb-8">
              THE FILMMAKING SOCIETY OF IIT BHUBANESWAR
            </h2>
          </div>

          {/* Bottom Film Strip - Scrolls Right (but actually moves left with reversed images) */}
          <div className="relative h-[100px] md:h-[140px] w-full overflow-hidden border-y border-yellow-500/30 mb-4 md:mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
            <div 
              ref={bottomFilmstripRef} 
              className="flex h-full items-center absolute left-0 will-change-transform"
              style={{ 
                paddingLeft: `${getSideGap()}px`, 
                paddingRight: `${getSideGap()}px` 
              }}
            >
              {/* Reversed order creates opposite movement effect */}
              {[...imagePaths, ...imagePaths].reverse().map((path, i) => (
                <FilmFrame key={`bottom-${i}`} imagePath={path} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Heronew