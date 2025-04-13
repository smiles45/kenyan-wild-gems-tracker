
import React from 'react';
import { Map, MapPin, Gem, Tent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Location } from '@/types/location';

interface MapViewProps {
  locations: Location[];
}

const MapView: React.FC<MapViewProps> = ({ locations }) => {
  return (
    <div className="relative w-full h-80 mb-8 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
      {/* This is a placeholder for a proper map integration */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80')] bg-cover bg-center opacity-40"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
      
      {/* Simulated location markers */}
      <div className="absolute top-1/4 left-1/4 animate-pulse-slow">
        <div className="bg-forest-500 p-1 rounded-full text-white">
          <Tent size={16} />
        </div>
      </div>
      <div className="absolute top-1/3 left-2/3 animate-pulse-slow">
        <div className="bg-safari-500 p-1 rounded-full text-white">
          <Gem size={16} />
        </div>
      </div>
      <div className="absolute top-2/3 left-1/3 animate-pulse-slow">
        <div className="bg-forest-500 p-1 rounded-full text-white">
          <Tent size={16} />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 animate-pulse-slow">
        <div className="bg-safari-500 p-1 rounded-full text-white">
          <Gem size={16} />
        </div>
      </div>
      
      {/* Placeholder message */}
      <div className="relative z-10 text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md max-w-md">
        <h2 className="text-xl font-bold text-forest-800 mb-2">Discover Kenya's Hidden Wonders</h2>
        <p className="text-gray-700 mb-4">Explore the map to find camping sites and hidden gems across beautiful Kenya.</p>
        <Button className="bg-forest-600 hover:bg-forest-700">
          <Map className="mr-2 h-4 w-4" />
          Interactive Map Coming Soon
        </Button>
      </div>
    </div>
  );
};

export default MapView;
