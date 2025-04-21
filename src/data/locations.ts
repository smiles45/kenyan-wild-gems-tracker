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
  },
  {
    id: "9",
    name: "Shimba Hills Waterfalls",
    type: "gem",
    description: "A series of stunning waterfalls hidden in the Shimba Hills rainforest, surrounded by rare plant species and wildlife.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -4.2345,
      lng: 39.4567
    },
    features: ["Waterfalls", "Rainforest", "Rare plants"],
    rating: 4.8,
    recommended: true,
    region: "Coastal Kenya"
  },
  {
    id: "10",
    name: "Lake Kamnarok",
    type: "camp",
    description: "A hidden gem in the Kerio Valley, this seasonal lake attracts thousands of flamingos and offers spectacular views of the Rift Valley escarpment.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.4567,
      lng: 35.6789
    },
    features: ["Flamingo watching", "Valley views", "Bird watching"],
    rating: 4.6,
    region: "Rift Valley"
  },
  {
    id: "11",
    name: "Kakapel Rock Art",
    type: "gem",
    description: "Ancient rock paintings dating back thousands of years, hidden in the hills of western Kenya. A fascinating glimpse into Kenya's prehistoric past.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGFydHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.7890,
      lng: 34.1234
    },
    features: ["Rock art", "History", "Archaeology"],
    rating: 4.4,
    region: "Western Kenya"
  },
  {
    id: "12",
    name: "Mugie Conservancy",
    type: "camp",
    description: "A private conservancy in Laikipia offering exclusive wildlife experiences and stunning views of Mount Kenya.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc2VydmFuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.1234,
      lng: 36.7890
    },
    features: ["Private game drives", "Mount Kenya views", "Conservation"],
    rating: 4.9,
    recommended: true,
    region: "Central Kenya"
  },
  {
    id: "13",
    name: "Mfangano Island",
    type: "gem",
    description: "A hidden island in Lake Victoria with ancient rock art, sacred caves, and stunning lake views.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -0.4567,
      lng: 34.0123
    },
    features: ["Island life", "Rock art", "Lake views"],
    rating: 4.7,
    region: "Western Kenya"
  },
  {
    id: "14",
    name: "Arabuko Sokoke Forest",
    type: "gem",
    description: "The largest remaining fragment of coastal forest in East Africa, home to rare birds and unique wildlife.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -3.4567,
      lng: 39.8901
    },
    features: ["Bird watching", "Rare species", "Forest trails"],
    rating: 4.8,
    recommended: true,
    region: "Coastal Kenya"
  },
  {
    id: "15",
    name: "Mathews Range",
    type: "camp",
    description: "Remote mountain range in northern Kenya with ancient cedar forests and spectacular views of the desert below.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 1.2345,
      lng: 37.8901
    },
    features: ["Mountain views", "Cedar forests", "Hiking"],
    rating: 4.6,
    region: "Northern Kenya"
  },
  {
    id: "16",
    name: "Lake Bogoria",
    type: "gem",
    description: "A lesser-known gem with hot springs, geysers, and thousands of flamingos, offering a unique geothermal experience.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwc3ByaW5nc3xlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.2345,
      lng: 36.0123
    },
    features: ["Hot springs", "Flamingos", "Geothermal activity"],
    rating: 4.7,
    recommended: true,
    region: "Rift Valley"
  },
  {
    id: "17",
    name: "The Nest at Watamu",
    type: "airbnb",
    description: "A stunning treehouse overlooking the Indian Ocean, offering a unique blend of luxury and nature. Perfect for romantic getaways.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -3.3456,
      lng: 40.0123
    },
    features: ["Ocean views", "Private beach", "Treehouse living"],
    rating: 4.9,
    recommended: true,
    region: "Coastal Kenya",
    price: "$150/night"
  },
  {
    id: "18",
    name: "Samburu Eco Lodge",
    type: "airbnb",
    description: "An eco-friendly lodge in the heart of Samburu, offering traditional manyatta-style accommodation with modern comforts.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.5678,
      lng: 37.2345
    },
    features: ["Cultural experience", "Wildlife viewing", "Sustainable living"],
    rating: 4.7,
    region: "Northern Kenya",
    price: "$120/night"
  },
  {
    id: "19",
    name: "Lake Naivasha Floating House",
    type: "airbnb",
    description: "A unique floating house on Lake Naivasha, offering 360-degree views of the lake and its wildlife. Perfect for bird watchers.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvYXRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -0.7890,
      lng: 36.3456
    },
    features: ["Floating accommodation", "Bird watching", "Lake access"],
    rating: 4.8,
    recommended: true,
    region: "Rift Valley",
    price: "$180/night"
  },
  {
    id: "20",
    name: "Mount Kenya Glass House",
    type: "airbnb",
    description: "A modern glass house with panoramic views of Mount Kenya, offering a luxurious mountain retreat experience.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBob3VzZXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.1234,
      lng: 37.4567
    },
    features: ["Mountain views", "Modern design", "Hiking access"],
    rating: 4.9,
    recommended: true,
    region: "Central Kenya",
    price: "$200/night"
  },
  {
    id: "21",
    name: "Lamu Island House",
    type: "airbnb",
    description: "A traditional Swahili house in Lamu's old town, offering an authentic coastal experience with modern amenities.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dhaGlsaSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -2.2345,
      lng: 40.9012
    },
    features: ["Swahili architecture", "Old town location", "Beach access"],
    rating: 4.8,
    region: "Coastal Kenya",
    price: "$130/night"
  },
  {
    id: "22",
    name: "Maasai Mara Safari Tent",
    type: "airbnb",
    description: "A luxury safari tent in a private conservancy bordering the Maasai Mara, offering exclusive wildlife experiences.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpJTIwdGVudHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -1.4567,
      lng: 35.1234
    },
    features: ["Wildlife viewing", "Luxury tent", "Private game drives"],
    rating: 4.9,
    recommended: true,
    region: "Rift Valley",
    price: "$250/night"
  },
  {
    id: "23",
    name: "Kisite Island Beach House",
    type: "airbnb",
    description: "A private beach house on a secluded island, accessible only by boat, offering complete privacy and stunning ocean views.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kJTIwYmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -4.5678,
      lng: 39.2345
    },
    features: ["Private island", "Beach access", "Snorkeling"],
    rating: 4.9,
    recommended: true,
    region: "Coastal Kenya",
    price: "$300/night"
  },
  {
    id: "24",
    name: "Aberdare Mountain Cabin",
    type: "airbnb",
    description: "A cozy log cabin in the Aberdare Mountains, perfect for those seeking solitude and nature. Great for hiking and bird watching.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBjYWJpbnxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -0.3456,
      lng: 36.7890
    },
    features: ["Mountain views", "Hiking trails", "Cozy atmosphere"],
    rating: 4.7,
    region: "Central Kenya",
    price: "$100/night"
  }
];
