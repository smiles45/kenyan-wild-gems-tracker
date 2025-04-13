
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MapView from '@/components/MapView';
import LocationCard from '@/components/LocationCard';
import LocationFilters from '@/components/LocationFilters';
import { locations } from '@/data/locations';
import { LocationType } from '@/types/location';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<LocationType | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(locations);

  useEffect(() => {
    // Filter locations based on the active filter and search term
    const filtered = locations.filter(location => {
      // Filter by type
      const typeMatch = activeFilter === 'all' || location.type === activeFilter;
      
      // Filter by search term
      const searchMatch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.region.toLowerCase().includes(searchTerm.toLowerCase());
      
      return typeMatch && searchMatch;
    });
    
    setFilteredLocations(filtered);
  }, [activeFilter, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        <section className="container mx-auto px-4 py-12 mt-6">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Kenya's Wilderness</h2>
          
          <MapView locations={filteredLocations} />
          
          <LocationFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLocations.length > 0 ? (
              filteredLocations.map(location => (
                <LocationCard key={location.id} location={location} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-lg text-gray-500">No locations found. Try changing your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
