
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationCard from '@/components/LocationCard';
import MapView from '@/components/MapView';
import { locations } from '@/data/locations';
import { Location } from '@/types/location';

const regionDisplayNames: Record<string, string> = {
  'northern-kenya': 'Northern Kenya',
  'central-kenya': 'Central Kenya',
  'coastal-region': 'Coastal Region',
  'rift-valley': 'Rift Valley'
};

const RegionPage = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const [regionLocations, setRegionLocations] = useState<Location[]>([]);
  
  useEffect(() => {
    if (!regionId) return;
    
    const displayName = regionDisplayNames[regionId] || '';
    
    // Filter locations by region
    const filtered = locations.filter(location => 
      location.region.toLowerCase() === displayName.toLowerCase()
    );
    
    setRegionLocations(filtered);
  }, [regionId]);
  
  const regionName = regionId ? regionDisplayNames[regionId] || regionId : '';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2 text-forest-800">{regionName}</h1>
          <p className="text-gray-600 mb-8">
            Explore the wonderful camping sites and hidden gems in {regionName}.
          </p>
          
          <div className="h-[40vh] mb-8">
            <MapView locations={regionLocations} />
          </div>
          
          {regionLocations.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Locations in {regionName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {regionLocations.map(location => (
                  <LocationCard key={location.id} location={location} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">No locations found</h2>
              <p className="text-gray-600">
                We don't have any locations listed for {regionName} yet.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegionPage;
