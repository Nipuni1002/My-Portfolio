'use client';

import React from 'react';
import { projects } from '@/data';

const RecentProjects = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center w-full" id="projects">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
        A small selection of <span className="text-[#CBACF9]">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-16 mt-10 max-w-7xl mx-auto px-4 sm:px-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col sm:w-[500px] w-[80vw] p-4 sm:p-6 bg-[#04071D] rounded-3xl border border-white/[0.1] hover:border-white/[0.2] transition-colors"
          >
            {/* Image Container */}
            <div className="relative flex items-center justify-center sm:w-[450px] w-full h-[200px] sm:h-[300px] mb-6 overflow-hidden rounded-2xl bg-[#13162d]">
              <div
                className="absolute inset-0 bg-[#000]"
                style={{
                  backgroundImage: "url('/bg.png')",
                  backgroundSize: "cover",
                }}
              />
              <img
                src={project.img}
                alt={project.title}
                className="z-10 absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white z-0">
                <span className="text-sm font-light tracking-widest uppercase">{project.title.split(' ')[0]} Thumbnail</span>
              </div>
            </div>

            {/* Title & Desc */}
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
              {project.title}
            </h1>

            <p className="text-gray-400 mt-3 font-light text-sm md:text-base line-clamp-2 md:mb-8 mb-6">
              {project.des}
            </p>

            {/* Bottom Row */}
            <div className="flex items-center justify-end mt-auto">
              {/* URL/Action */}
              <a href={project.link || "https://www.behance.net/nipunimarasin"} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                <p className="flex text-sm md:text-xs lg:text-sm text-[#CBACF9] font-medium">
                  Case Study
                </p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 text-[#CBACF9]"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
