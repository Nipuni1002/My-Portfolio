'use client';

import React from 'react'

const About = () => {
  return (
    <div className="w-full" id="about">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white pt-20">
        About <span className="text-[#CBACF9]">me</span>
      </h1>

      <div className="w-full bg-[#0d131f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">

          {/* Left Text Column */}
          <div className="flex-1 flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4 tracking-wide">
              Know who am I
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-medium">
              My journey in few words
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
              I am Nipuni Marasinghe, a graduate of Sabaragamuwa University of Sri Lanka, with a passion for UX design and digital product innovation. During my experience as a UX Designer at Dialog Axiata PLC, I had the opportunity to work on designing user-centered interfaces and gaining practical exposure to industry-level design processes. This role strengthened my ability to understand user behavior, create intuitive design solutions, and collaborate effectively within professional environments. I am enthusiastic about crafting seamless digital experiences that are both functional and visually engaging, while continuously expanding my knowledge and skills in the field of design.
            </p>

            <a href="https://www.linkedin.com/in/nipuni-nadeeshani-b8937624b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-white/20 rounded-full text-white text-sm hover:bg-white/5 transition-colors w-max">
              Know more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Image Column */}
          <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
            {/* Polaroid Frame */}
            <div className="relative transform rotate-3 bg-white p-3 pb-10 shadow-2xl w-64 md:w-80 transition-transform hover:rotate-0 duration-500 z-10">
              <div className="w-full h-64 md:h-80 bg-gray-200 overflow-hidden relative">
                {/* Fallback pattern */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-medium z-0">
                  Image Placeholder
                </div>
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
                />
              </div>
            </div>

            {/* Floating Cursor/Badge */}
            <div className="absolute -bottom-8 md:-bottom-12 right-10 md:right-20 z-20 flex flex-col items-start animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#a6f4c5" stroke="#000" strokeWidth="1" className="transform -rotate-12 drop-shadow-md">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                <path d="M13 13l6 6" />
              </svg>
              <div className="bg-[#a6f4c5] text-black text-xs font-semibold px-2 py-1 mt-1 shadow-md ml-4">
                Nipuni Marasinghe
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
