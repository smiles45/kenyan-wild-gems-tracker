
import { Location } from "../types/location";

export const locations: Location[] = [
  {
    id: "1",
    name: "Lake Paradise Camp",
    type: "camp",
    description: "Hidden high on Mount Marsabit, this campsite offers stunning views of the lake and wildlife. A true paradise for nature lovers and photographers.",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VueWElMjBjYW1wJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 2.3082,
      lng: 37.9698
    },
    features: ["Lake views", "Wildlife", "Hiking trails"],
    rating: 4.8,
    recommended: true,
    region: "Northern Kenya"
  },
  {
    id: "2",
    name: "Ngare Ndare Forest",
    type: "gem",
    description: "A lush indigenous forest with crystal-clear blue pools and waterfalls. Experience the canopy walk for a bird's eye view of this magical forest.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2VueWElMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.2342,
      lng: 37.4112
    },
    features: ["Canopy walk", "Blue pools", "Waterfalls"],
    rating: 4.9,
    recommended: true,
    region: "Central Kenya"
  },
  {
    id: "3",
    name: "Kipsing Gap Camp",
    type: "camp",
    description: "A remote campsite in the heart of Samburu country with spectacular views of Ewaso Nyiro river. Perfect for stargazing and disconnecting.",
    image: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.6411,
      lng: 37.6731
    },
    features: ["River access", "Stargazing", "Cultural experiences"],
    rating: 4.5,
    region: "Northern Kenya"
  },
  {
    id: "4",
    name: "Kitum Cave",
    type: "gem",
    description: "An extraordinary cave on Mount Elgon where elephants dig for salt. One of Kenya's most unique natural wonders.",
    image: "https://images.unsplash.com/photo-1564295213136-88bb52f614d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F2ZXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 1.1184,
      lng: 34.6258
    },
    features: ["Elephant visits", "Cave exploration", "Salt deposits"],
    rating: 4.7,
    region: "Western Kenya"
  },
  {
    id: "5",
    name: "Ol Donyo Sabuk",
    type: "camp",
    description: "A serene camping spot on this isolated mountain, offering panoramic views and buffalo sightings. Only an hour from Nairobi but feels worlds away.",
    image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwY2FtcHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -1.1295,
      lng: 37.2555
    },
    features: ["Mountain views", "Buffalo", "Hiking"],
    rating: 4.2,
    region: "Central Kenya"
  },
  {
    id: "6",
    name: "Marafa Depression",
    type: "gem",
    description: "Known as 'Hell's Kitchen', this eroded sandstone canyon creates a stunning colorful landscape that's best viewed at sunset.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FueW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -3.1026,
      lng: 39.7277
    },
    features: ["Colorful landscape", "Sunset views", "Unique geology"],
    rating: 4.6,
    recommended: true,
    region: "Coastal Kenya"
  },
  {
    id: "7",
    name: "Sleeping Warrior Camp",
    type: "camp",
    description: "Nestled at the base of the Sleeping Warrior hill in the Great Rift Valley, offering stunning lake views and walking safaris.",
    image: "https://images.unsplash.com/photo-1600184894875-4be93c9903cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzb3J0JTIwdGVudHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -0.4511,
      lng: 36.2345
    },
    features: ["Lake views", "Walking safaris", "Bird watching"],
    rating: 4.7,
    region: "Rift Valley"
  },
  {
    id: "8",
    name: "Chyulu Hills",
    type: "gem",
    description: "The 'Green Hills of Africa' as described by Hemingway, home to ancient volcanic tubes and caves with spectacular views of Kilimanjaro.",
    image: "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBoaWxsc3xlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -2.5583,
      lng: 37.8355
    },
    features: ["Cave exploration", "Kilimanjaro views", "Cloud forests"],
    rating: 4.5,
    region: "Southern Kenya"
  }
];
