
import React, { useState, useMemo } from 'react';
import { locations } from '@/data/locations';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, BedDouble } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AirbnbPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const airbnbLocations = useMemo(() => {
    return locations
      .filter(location => location.type === 'airbnb')
      .filter(location => 
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-forest-600">
              Find Your Perfect Stay in Kenya
            </h1>
            <p className="text-muted-foreground">
              Discover unique stays and experiences across Kenya's most beautiful locations
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by location, region, or features..."
              className="w-full pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airbnbLocations.map((location) => (
              <Card 
                key={location.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/location/${location.id}`)}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {location.price}
                  </div>
                </div>
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{location.name}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm">{location.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{location.region}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BedDouble className="h-4 w-4" />
                    <p className="line-clamp-2">{location.features?.join(' · ')}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AirbnbPage;
