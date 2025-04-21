import React, { useRef, useEffect, useState } from "react";
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
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = 'pk.eyJ1IjoibWlraTAwNyIsImEiOiJjbGNxNHd2aGkwMmg1M29reWd2ZGJod2M1In0.f9-OPY7z8IFoBGwdM7zUZw';
    setToken(savedToken);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !token || !locations.length) return;

    try {
      mapboxgl.accessToken = token;

      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      mapRef.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [
          locations.length === 1 ? locations[0].coordinates.lng : 37.6,
          locations.length === 1 ? locations[0].coordinates.lat : 0.1,
        ],
        zoom: locations.length === 1 ? 7 : 5.3,
        attributionControl: false,
        interactive: true,
        projection: "globe",
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");
      mapRef.current.addControl(new mapboxgl.ScaleControl(), "bottom-left");

      if (locations.length > 1) {
        const bounds = getBounds(locations);
        mapRef.current.fitBounds(bounds, { padding: 60, maxZoom: 9, animate: true });
      }

      locations.forEach((loc) => {
        const marker = new mapboxgl.Marker({
          color: loc.type === "camp" ? "#166534" : "#b45309",
        })
          .setLngLat([loc.coordinates.lng, loc.coordinates.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 12 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold">${loc.name}</h3>
                  <p class="text-sm text-gray-600">${loc.type}</p>
                </div>
              `)
          )
          .addTo(mapRef.current!);
      });

      // Add terrain control
      mapRef.current.on('load', () => {
        mapRef.current?.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });
      });

    } catch (err) {
      setError("Failed to initialize map. Please check your token.");
      console.error("Map initialization error:", err);
    }

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [locations, token]);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newToken = formData.get("token") as string;
    
    if (newToken) {
      localStorage.setItem("mapbox_token", newToken);
      setToken(newToken);
      setError(null);
    }
  };

  if (isLoading) {
    return (
      <div className={`relative w-full rounded-lg shadow ${height} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest-700"></div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className={`relative w-full rounded-lg shadow ${height}`}>
        <div className="bg-gray-100 w-full h-full flex flex-col items-center justify-center rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmNWY1ZjUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBhMiAyIDAgMSAxIDAtNCAgMiAyIDAgMCAxIDAgNHptMTUgMGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6TTE1IDMwYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHoiIGZpbGw9IiNlNWU3ZWIiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
          
          <div className="z-10 bg-white/90 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">Mapbox Token Required</h3>
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <div>
                <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter your Mapbox token
                </label>
                <input
                  type="text"
                  id="token"
                  name="token"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                  placeholder="pk.eyJ1..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-forest-700 text-white px-4 py-2 rounded-md hover:bg-forest-800 transition"
              >
                Save Token
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              <a
                href="https://account.mapbox.com/access-tokens/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-700 hover:underline"
              >
                Get a free token at mapbox.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`relative w-full rounded-lg shadow ${height}`}>
        <div className="bg-red-50 p-4 rounded-lg h-full flex flex-col items-center justify-center">
          <p className="text-red-700 mb-4">{error}</p>
          <button
            onClick={() => {
              localStorage.removeItem("mapbox_token");
              setToken(null);
              setError(null);
            }}
            className="bg-red-100 text-red-700 px-4 py-2 rounded-md hover:bg-red-200 transition"
          >
            Reset Token
          </button>
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
