
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { locations } from "@/data/locations";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin } from "lucide-react";
import MapView from "@/components/MapView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LocationDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl mb-2">Location Not Found</h2>
            <p className="text-gray-500 mb-4">The location doesn't exist.</p>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-muted rounded hover:bg-muted/60 transition"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <button
          className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-forest-600 transition"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 animate-bounce" />
          Back to list
        </button>
        <Card className="p-0 overflow-hidden mb-8">
          <div className="md:flex">
            <img 
              src={location.image}
              alt={location.name}
              className="w-full md:w-2/5 h-64 object-cover animate-pulse"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="outline" className={`
                  ${location.type === 'camp' 
                    ? 'bg-forest-100 text-forest-700 border-forest-200'
                    : 'bg-safari-100 text-safari-700 border-safari-200'
                  } animate-fade-in
                `}>
                  {location.type === 'camp' ? "Camp" : "Hidden Gem"}
                </Badge>
                {location.recommended && (
                  <Badge className="bg-kenya-red text-white border-none animate-bounce">
                    Recommended
                  </Badge>
                )}
                {location.rating && (
                  <div className="flex items-center gap-1 px-2">
                    <svg className="w-5 h-5 text-yellow-400 fill-current animate-spin" viewBox="0 0 24 24">
                      <polygon points="12 2 15 9 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 9 9" />
                    </svg>
                    <span className="font-medium">{location.rating.toFixed(1)}</span>
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-bold mt-4 mb-2 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-forest-600 animate-bounce" />
                {location.name}
              </h2>
              <div className="text-muted-foreground mb-1">{location.region}</div>
              <p className="mb-4">{location.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {location.features && location.features.map((feature, i) => (
                  <Badge key={i} className="bg-muted text-muted-foreground animate-fade-in-up">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <h3 className="text-xl font-semibold mb-4">On the Map</h3>
        <div className="h-64 rounded-lg overflow-hidden mb-8 shadow-lg">
          <MapView locations={[location]} height="h-64 mb-8" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocationDetailsPage;
