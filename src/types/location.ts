export type LocationType = 'camp' | 'gem' | 'airbnb';

export interface Location {
  id: string;
  name: string;
  type: LocationType;
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  features?: string[];
  rating?: number;
  recommended?: boolean;
  region: string;
  price?: string;
}
