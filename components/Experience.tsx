'use client';

import { workExperience } from '@/data'
import React from 'react'

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
        My <span className="text-[#CBACF9]">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 max-w-7xl mx-auto px-4 sm:px-10">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col lg:flex-row items-center p-6 md:p-10 lg:p-12 border border-white/10 rounded-3xl bg-[#04071D] hover:bg-[#0f1629] transition-colors gap-6 md:gap-10 ${card.className}`}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 flex items-center justify-center bg-black-200/50 rounded-2xl p-4 overflow-hidden relative">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-full h-full object-contain z-10"
                onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
              />
              <span className="text-xs text-white/20 absolute">Icon</span>
            </div>
            
            <div className="flex flex-col w-full text-center lg:text-left">
              <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                {card.title}
              </h1>
              <p className="text-start text-gray-400 mt-3 font-medium text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
