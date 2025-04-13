
import React from 'react';
import { Tent, Gem, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Hero image background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 pt-24 pb-32 h-[70vh] flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover Kenya's Hidden Wonders
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
          Explore breathtaking camping sites and hidden gems across Kenya's untamed wilderness
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center group hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="p-2 bg-forest-500 rounded-full mb-2 group-hover:animate-bounce">
              <Tent className="h-6 w-6 text-white animate-pulse-slow" />
            </div>
            <h3 className="text-white font-medium">Camping Sites</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center group hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="p-2 bg-safari-500 rounded-full mb-2 group-hover:animate-spin">
              <Gem className="h-6 w-6 text-white animate-pulse-slow" />
            </div>
            <h3 className="text-white font-medium">Hidden Gems</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center group hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="p-2 bg-kenya-red rounded-full mb-2 group-hover:animate-ping">
              <MapPin className="h-6 w-6 text-white animate-pulse-slow" />
            </div>
            <h3 className="text-white font-medium">All Around Kenya</h3>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 transform translate-y-1/2 w-full flex justify-center">
        <div className="bg-kenya-red w-28 h-8 rounded-full hover:animate-bounce transition-all duration-300 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default HeroSection;
