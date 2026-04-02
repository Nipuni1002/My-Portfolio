'use client';

import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative overflow-hidden" id="contact">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '5rem 5rem' }}>
      </div>

      {/* Fade the top and bottom of the grid */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#000319]/50 to-[#000319] pointer-events-none"></div>

      <div className="flex flex-col items-center relative z-10 px-4 mt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white max-w-4xl tracking-tight leading-[1.1]">
          Ready to take <span className="text-[#CBACF9]">your</span> digital presence to the next level?
        </h1>
        <p className="text-gray-400 mt-8 text-center max-w-2xl font-normal md:text-lg">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-10">
          <a href="mailto:nipuni.ma2000@gmail.com" className="flex items-center justify-center gap-3 px-8 py-3.5 bg-[#0B0E23]/80 border border-white/[0.08] backdrop-blur-md rounded-xl hover:bg-white/5 transition-colors text-white font-medium shadow-lg w-full sm:w-auto">
            {/* Email Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 4l10 8 10-8" />
            </svg>
            Email me
          </a>
          <a href="https://www.linkedin.com/in/nipuni-nadeeshani-b8937624b/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-3.5 bg-[#0B0E23]/80 border border-white/[0.08] backdrop-blur-md rounded-xl hover:bg-white/5 transition-colors text-white font-medium shadow-lg w-full sm:w-auto">
            {/* LinkedIn Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Linkedin
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center mt-32 md:mt-40 relative z-10 px-4">
        <p className="text-sm text-gray-400 font-light text-center">
          Copyright ©2026 Nipuni Marasinghe
        </p>
      </div>
    </footer>
  )
}

export default Footer
