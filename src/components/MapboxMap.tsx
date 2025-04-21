
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

  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 bg-white/80 p-4 rounded-lg shadow text-center">
        <div>
          <b>Mapbox Token Required</b>
        </div>
        <div>
          Enter your Mapbox public token (get it from{" "}
          <a
            href="https://account.mapbox.com/access-tokens/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            mapbox.com
          </a>
          ):
        </div>
        <input
          type="text"
          placeholder="pk.eyJ1Ijo..."
          className="input input-bordered w-full"
          value={token ?? ""}
          onChange={(e) => setToken(e.target.value)}
        />
        <button
          className="bg-forest-700 text-white px-4 py-2 rounded hover:bg-forest-800 transition"
          onClick={() => {
            if (token) localStorage.setItem("mapbox_token", token);
            window.location.reload();
          }}
        >
          Save & Reload
        </button>
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
