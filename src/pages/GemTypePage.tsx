
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationCard from '@/components/LocationCard';
import MapView from '@/components/MapView';
import { locations } from '@/data/locations';
import { Location } from '@/types/location';

const gemTypeDisplayNames: Record<string, string> = {
  'waterfalls': 'Waterfalls',
  'caves': 'Caves',
  'lakes': 'Lakes',
  'viewpoints': 'Viewpoints'
};

// This is a simplified filter since our current data structure doesn't include 
// specific gem types. In a real app, you'd have this data.
const gemTypeFeatures: Record<string, string[]> = {
  'waterfalls': ['Waterfalls', 'Blue pools'],
  'caves': ['Cave exploration'],
  'lakes': ['Lake views'],
  'viewpoints': ['Mountain views', 'Kilimanjaro views', 'Sunset views']
};

const GemTypePage = () => {
  const { gemType } = useParams<{ gemType: string }>();
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  
  useEffect(() => {
    if (!gemType) return;
    
    // Filter locations by gem type feature
    const featuresToMatch = gemTypeFeatures[gemType] || [];
    
    const filtered = locations.filter(location => 
      location.type === 'gem' && 
      location.features?.some(feature => 
        featuresToMatch.some(typeFeature => 
          feature.toLowerCase().includes(typeFeature.toLowerCase())
        )
      )
    );
    
    setFilteredLocations(filtered);
  }, [gemType]);
  
  const typeName = gemType ? gemTypeDisplayNames[gemType] || gemType : '';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2 text-forest-800">{typeName}</h1>
          <p className="text-gray-600 mb-8">
            Discover Kenya's hidden {typeName.toLowerCase()} that will take your breath away.
          </p>
          
          <div className="h-[40vh] mb-8">
            <MapView locations={filteredLocations} />
          </div>
          
          {filteredLocations.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Explore {typeName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredLocations.map(location => (
                  <LocationCard key={location.id} location={location} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">No {typeName.toLowerCase()} found</h2>
              <p className="text-gray-600">
                We don't have any {typeName.toLowerCase()} listed yet.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GemTypePage;
