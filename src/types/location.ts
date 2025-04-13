
export type LocationType = 'camp' | 'gem';

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
}
