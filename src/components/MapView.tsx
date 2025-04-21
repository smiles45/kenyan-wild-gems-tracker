
import React from "react";
import MapboxMap from "./MapboxMap";
import { Location } from "@/types/location";

interface MapViewProps {
  locations: Location[];
  height?: string;
}

const MapView: React.FC<MapViewProps> = ({ locations, height }) => {
  return (
    <MapboxMap locations={locations} height={height} />
  );
};

export default MapView;
