import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className="pb-20 pt-40 relative flex justify-start items-center flex-col min-h-[100dvh] w-full">
      {/* Spotlight effects */}
      <div>
        <Spotlight className="-top-40 -left-10 md:left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Radial Background Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Concentric rings */}
        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full border border-white/[0.05] absolute"></div>
        <div className="w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full border border-white/[0.05] absolute"></div>
        <div className="w-[700px] h-[700px] sm:w-[1100px] sm:h-[1100px] rounded-full border border-white/[0.05] absolute"></div>
        <div className="w-[900px] h-[900px] sm:w-[1400px] sm:h-[1400px] rounded-full border border-white/[0.05] absolute"></div>

        {/* Sparkles / Stars Elements */}
        {/* Top Left Star */}
        <div className="absolute top-[20%] left-[20%] text-emerald-200">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-[30%] left-[30%] text-white/20 scale-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
          </svg>
        </div>
        {/* Top Right Dot/Star */}
        <div className="absolute top-[22%] right-[25%] text-emerald-300">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="currentColor" />
          </svg>
        </div>
        {/* Bottom Right Star */}
        <div className="absolute bottom-[25%] right-[20%] text-emerald-200 scale-150">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-[40%] right-[30%] text-white/20 scale-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl text-center px-4">

        {/* Availability Badge */}
        <div className="flex items-center gap-2 bg-black-200/50 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-200">Available for opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-4xl font-serif text-white tracking-tight leading-[1.1] mb-10">
          Welcome to <br />
          my digital humble abode
        </h1>

        {/* Memoji */}
        <div className="mb-6 w-24 h-24 bg-[#1b1f2e] rounded-full flex items-center justify-center overflow-hidden border border-white/5 shadow-xl">
          <span className="text-5xl">👨‍💻</span>
        </div>

        {/* Description right below the image */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 font-light">
          I&apos;m an independent UX/UI designer. <br className="hidden sm:block" />
          My interest lies in brand experience, and user experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a href="#contact" className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg">
            <span>👋</span>
            Let&apos;s talk
          </a>

          <a href="https://www.behance.net/nipunimarasin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black-200 border border-white/10 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white/5 transition-colors shadow-lg backdrop-blur-sm">
            Portfolio
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
