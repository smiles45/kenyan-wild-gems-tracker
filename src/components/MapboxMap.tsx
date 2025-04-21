
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location } from "@/types/location";

interface MapboxMapProps {
  locations: Location[];
  height?: string;
}

const getBounds = (locations: Location[]) => {
  const bounds = new mapboxgl.LngLatBounds();
  locations.forEach((loc) =>
    bounds.extend([loc.coordinates.lng, loc.coordinates.lat])
  );
  return bounds;
};

const MapboxMap: React.FC<MapboxMapProps> = ({ locations, height = "h-80" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  // Prompt for token if not present
  const [token, setToken] = React.useState<string | null>(null);

  useEffect(() => {
    const savedToken =
      localStorage.getItem("mapbox_token") ??
      (import.meta.env.MAPBOX_PUBLIC_TOKEN as string | undefined) ??
      null;
    setToken(savedToken ?? null);
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !token || !locations.length) return;

    mapboxgl.accessToken = token;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [
        locations.length === 1
          ? locations[0].coordinates.lng
          : 37.6,
        locations.length === 1
          ? locations[0].coordinates.lat
          : 0.1,
      ],
      zoom: locations.length === 1 ? 7 : 5.3,
      attributionControl: false,
      interactive: true,
      projection: "globe",
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    if (locations.length > 1) {
      const bounds = getBounds(locations);
      mapRef.current.fitBounds(bounds, { padding: 60, maxZoom: 9, animate: true });
    }

    locations.forEach((loc) => {
      new mapboxgl.Marker({
        color: loc.type === "camp" ? "#166534" : "#b45309",
      })
        .setLngLat([loc.coordinates.lng, loc.coordinates.lat])
        .setPopup(new mapboxgl.Popup({ offset: 12 }).setText(loc.name))
        .addTo(mapRef.current!);
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [locations, token]);

  // Fallback map visualization when no token is available
  const renderFallbackMap = () => {
    return (
      <div className="bg-gray-100 w-full h-full flex flex-col items-center justify-center rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmNWY1ZjUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBhMiAyIDAgMSAxIDAtNCAgMiAyIDAgMCAxIDAgNHptMTUgMGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6TTE1IDMwYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHoiIGZpbGw9IiNlNWU3ZWIiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        {locations.map((location, index) => {
          // Calculate relative position based on coordinates
          // This is a simplified visualization - not geographically accurate
          const left = ((location.coordinates.lng + 180) / 360) * 100;
          const top = ((90 - location.coordinates.lat) / 180) * 100;
          
          return (
            <div
              key={index}
              className={`absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
                ${location.type === 'camp' ? 'bg-forest-500' : 'bg-safari-500'}`}
              style={{ 
                left: `${Math.min(Math.max(left, 5), 95)}%`, 
                top: `${Math.min(Math.max(top, 10), 90)}%` 
              }}
              title={location.name}
            />
          );
        })}
        
        <div className="z-10 bg-white/80 p-3 rounded-lg shadow-sm text-center">
          <p className="font-medium mb-1">Map Preview</p>
          <p className="text-xs text-gray-500">
            Showing {locations.length} location{locations.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-xs text-gray-500 z-10">
          Enter Mapbox token for interactive map
        </div>
      </div>
    );
  };

  if (!token) {
    return (
      <div className={`relative w-full rounded-lg shadow ${height}`}>
        {renderFallbackMap()}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 rounded-b-lg shadow text-center">
          <button
            onClick={() => {
              const enteredToken = prompt("Enter Mapbox token (get it from mapbox.com):");
              if (enteredToken) {
                localStorage.setItem("mapbox_token", enteredToken);
                setToken(enteredToken);
                window.location.reload();
              }
            }}
            className="bg-forest-700 text-white px-3 py-1 text-sm rounded hover:bg-forest-800 transition"
          >
            Add Mapbox Token
          </button>
          <p className="text-xs text-gray-500 mt-1">
            <a
              href="https://account.mapbox.com/access-tokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Get a free token at mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full rounded-lg shadow ${height}`}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default MapboxMap;
