
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tent, Gem, Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { LocationType } from '@/types/location';

interface LocationFiltersProps {
  activeFilter: LocationType | 'all';
  setActiveFilter: (filter: LocationType | 'all') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const LocationFilters: React.FC<LocationFiltersProps> = ({
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            className={activeFilter === 'all' ? 'bg-forest-600 hover:bg-forest-700' : ''}
            onClick={() => setActiveFilter('all')}
          >
            <MapPin className="mr-2 h-4 w-4" />
            All Locations
          </Button>
          <Button
            variant={activeFilter === 'camp' ? 'default' : 'outline'}
            className={activeFilter === 'camp' ? 'bg-forest-600 hover:bg-forest-700' : ''}
            onClick={() => setActiveFilter('camp')}
          >
            <Tent className="mr-2 h-4 w-4" />
            Camping Sites
          </Button>
          <Button
            variant={activeFilter === 'gem' ? 'default' : 'outline'}
            className={activeFilter === 'gem' ? 'bg-safari-600 hover:bg-safari-700' : ''}
            onClick={() => setActiveFilter('gem')}
          >
            <Gem className="mr-2 h-4 w-4" />
            Hidden Gems
          </Button>
        </div>
        <div className="relative flex-grow md:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search locations..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationFilters;
