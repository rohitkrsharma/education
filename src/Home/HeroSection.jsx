import React from 'react';

function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/hero.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-10 py-20  flex flex-col items-start justify-center md:h-full">
        <p className="text-lg text-white mb-4 sm:mb-6">A cultured society is considered by the world.</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white ">The Education</h1>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-12">Culture.</h2>
        <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
