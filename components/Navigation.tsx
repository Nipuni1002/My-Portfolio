import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
        <Link href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors">Works</Link>
        <Link href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link>
        <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
      </nav>
    </div>
  );
};

export default Navigation;
