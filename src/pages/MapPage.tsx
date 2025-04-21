import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapView from '@/components/MapView';
import { locations } from '@/data/locations';

const MapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-forest-800">Explore Kenya's Wild Treasures</h1>
          <div className="h-[70vh] mb-8">
            <MapView locations={locations} height="h-[70vh] mb-8" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-forest-700">Interactive Map Guide</h2>
            <p className="mb-4 text-gray-600">
              This map shows all the camping sites and hidden gems across Kenya. Click on any marker to 
              see more details about the location. You can zoom in and out to explore different regions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-forest-500 rounded-full"></div>
                <span className="text-sm">Camping Sites</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-safari-500 rounded-full"></div>
                <span className="text-sm">Hidden Gems</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MapPage;
