
import React from 'react';
import { Star, Tent, Gem } from 'lucide-react';
import { Location } from '@/types/location';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useNavigate } from "react-router-dom";

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const navigate = useNavigate();

  // Animate icons with Tailwind on hover
  return (
    <Card
      className="location-card overflow-hidden h-full flex flex-col cursor-pointer group"
      onClick={() => navigate(`/location/${location.id}`)}
      tabIndex={0}
      aria-label={`View details for ${location.name}`}
      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") navigate(`/location/${location.id}`); }}
      role="button"
    >
      <div className="relative">
        <img 
          src={location.image} 
          alt={location.name} 
          className="location-card-image h-48 w-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className={`
            ${location.type === 'camp' ? 'bg-forest-100 text-forest-700 border-forest-200' : 'bg-safari-100 text-safari-700 border-safari-200'} 
            px-2 py-1 flex items-center gap-1 group-hover:animate-bounce
          `}>
            {location.type === 'camp' ? (
              <>
                <Tent className="h-3 w-3 group-hover:animate-spin" /> Camp
              </>
            ) : (
              <>
                <Gem className="h-3 w-3 group-hover:animate-spin" /> Hidden Gem
              </>
            )}
          </Badge>
        </div>
        {location.recommended && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-kenya-red text-white border-none group-hover:animate-bounce">
              Recommended
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{location.name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{location.region}</span>
        </div>
        {location.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:animate-spin" />
            <span className="text-sm font-medium">{location.rating.toFixed(1)}</span>
          </div>
        )}
        <p className="text-gray-600 text-sm line-clamp-3">{location.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t">
        <div className="flex flex-wrap gap-1 w-full">
          {location.features?.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="secondary" className="bg-muted text-muted-foreground group-hover:animate-fade-in-up">
              {feature}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LocationCard;
