
import { Location } from "../types/location";

export const locations: Location[] = [
  {
    id: "1",
    name: "Lake Paradise Camp",
    type: "camp",
    description: "Hidden high on Mount Marsabit, this campsite offers stunning views of the lake and wildlife. A true paradise for nature lovers and photographers.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7",
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
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
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
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
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
    image: "https://images.unsplash.com/photo-1520867195500-99c46c271fcd",
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
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7",
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
    image: "https://images.unsplash.com/photo-1494825514961-674db1ac2700",
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
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
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
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
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
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9",
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
    image: "https://images.unsplash.com/photo-1518736114810-3f3bedfec66a",
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
    image: "https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8",
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
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
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
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5",
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
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
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
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
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
    image: "https://images.unsplash.com/photo-1572979926275-98e31dd5d681",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
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
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
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
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
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
    image: "https://images.unsplash.com/photo-1582610116397-edb318620e96",
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
  },
  {
    id: "25",
    name: "Loiyangalani Desert Museum",
    type: "gem",
    description: "A fascinating cultural museum situated on the southeastern shore of Lake Turkana, showcasing the heritage of the El Molo, Turkana, Samburu, Rendille, and Gabbra communities.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwbXVzZXVtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 2.7633,
      lng: 36.7176
    },
    features: ["Cultural exhibits", "Lake Turkana views", "Local crafts"],
    rating: 4.5,
    region: "Northern Kenya"
  },
  {
    id: "26",
    name: "Mida Creek Mangrove Forest",
    type: "gem",
    description: "A tidal inlet with exceptional biodiversity featuring a spectacular boardwalk through ancient mangroves. Perfect for birdwatching and sunset views.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ3JvdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -3.3399,
      lng: 39.9945
    },
    features: ["Boardwalk", "Birdwatching", "Canoe trips"],
    rating: 4.7,
    recommended: true,
    region: "Coastal Kenya"
  },
  {
    id: "27",
    name: "Kakamega Rainforest",
    type: "gem",
    description: "Kenya's only tropical rainforest and the easternmost remnant of the ancient Guineo-Congolian rainforest. Home to unique primates, birds, and butterflies found nowhere else in Kenya.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.2833,
      lng: 34.8833
    },
    features: ["Rainforest trails", "Unique wildlife", "Butterflies"],
    rating: 4.8,
    recommended: true,
    region: "Western Kenya"
  },
  {
    id: "28",
    name: "Oloolua Nature Trail",
    type: "gem",
    description: "A hidden forest sanctuary in Karen with caves, waterfalls, and peaceful trails - a perfect escape from Nairobi only 20 minutes from the city center.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwdHJhaWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -1.3528,
      lng: 36.7155
    },
    features: ["Forest walks", "Waterfall", "Caves"],
    rating: 4.3,
    region: "Nairobi Area"
  },
  {
    id: "29",
    name: "Koobi Fora",
    type: "gem",
    description: "A paleontological and archaeological site on the eastern shore of Lake Turkana, known as the 'Cradle of Mankind' with numerous hominid fossil discoveries.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9zc2lsJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 3.9466,
      lng: 36.2057
    },
    features: ["Fossil sites", "Archaeological museum", "Desert landscapes"],
    rating: 4.6,
    region: "Northern Kenya"
  },
  {
    id: "30",
    name: "Taita Hills Cloud Forest",
    type: "gem",
    description: "Mystical cloud forests shrouded in mist with endemic birds and plants found nowhere else on Earth. A biodiversity hotspot with spectacular views.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -3.4833,
      lng: 38.3667
    },
    features: ["Endemic species", "Cloud forest", "Hiking trails"],
    rating: 4.7,
    region: "Southern Kenya"
  },
  {
    id: "31",
    name: "Sibiloi National Park",
    type: "gem",
    description: "A UNESCO World Heritage site with petrified forests, fossil sites, and unique desert adapted wildlife along the shores of Lake Turkana.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0JTIwcGFya3xlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 3.6667,
      lng: 36.2333
    },
    features: ["Petrified forest", "Fossil beds", "Desert wildlife"],
    rating: 4.5,
    region: "Northern Kenya"
  },
  {
    id: "32",
    name: "Chalbi Desert",
    type: "gem",
    description: "Kenya's only true desert featuring stunning salt flats, mirages, and sand dunes. A surreal landscape surrounded by volcanic mountains.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 3.0167,
      lng: 37.5333
    },
    features: ["Salt flats", "Desert landscape", "Cultural experiences"],
    rating: 4.6,
    recommended: true,
    region: "Northern Kenya"
  },
  {
    id: "33",
    name: "Sheldrick Falls",
    type: "gem",
    description: "A beautiful hidden waterfall in Shimba Hills National Reserve where visitors can swim in the cool, clear waters after a scenic forest hike.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJmYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -4.2742,
      lng: 39.4156
    },
    features: ["Swimming", "Waterfall", "Forest hiking"],
    rating: 4.7,
    region: "Coastal Kenya"
  },
  {
    id: "34",
    name: "Lake Chala",
    type: "gem",
    description: "A stunning crater lake on the Kenya-Tanzania border with emerald-turquoise waters. Perfect for swimming, kayaking, and fishing for tilapia.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JhdGVyJTIwbGFrZXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -3.3167,
      lng: 37.6833
    },
    features: ["Crater lake", "Swimming", "Kayaking"],
    rating: 4.8,
    recommended: true,
    region: "Southern Kenya"
  },
  {
    id: "35",
    name: "Ol Lentille Conservancy",
    type: "gem",
    description: "A private conservancy in Laikipia with stunning landscapes and unique activities including camel safaris and cultural immersion with local communities.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc2VydmFuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.8500,
      lng: 36.7833
    },
    features: ["Camel safaris", "Cultural experiences", "Star gazing"],
    rating: 4.9,
    recommended: true,
    region: "Central Kenya"
  },
  {
    id: "36",
    name: "Takawiri Island",
    type: "gem",
    description: "A secluded island in Lake Victoria with pristine white sandy beaches and crystal-clear waters, offering a Caribbean-like experience in Kenya.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -0.4319,
      lng: 34.0500
    },
    features: ["White sand beaches", "Island life", "Swimming"],
    rating: 4.7,
    region: "Western Kenya"
  },
  {
    id: "37",
    name: "Kisere Forest",
    type: "gem",
    description: "A small pocket of Kakamega Forest with a remarkable diversity of birds, butterflies, and monkeys. Home to the rare De Brazza's monkey.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: 0.2897,
      lng: 34.8753
    },
    features: ["Monkey viewing", "Bird watching", "Forest walks"],
    rating: 4.6,
    region: "Western Kenya"
  },
  {
    id: "38",
    name: "Menengai Crater",
    type: "gem",
    description: "One of Africa's largest calderas with spectacular views, hiking trails, and geothermal features. Local legends claim it's a dwelling place for spirits.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JhdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -0.2000,
      lng: 36.0667
    },
    features: ["Crater views", "Hiking", "Geothermal features"],
    rating: 4.5,
    region: "Rift Valley"
  },
  {
    id: "39",
    name: "Gedi Ruins",
    type: "gem",
    description: "Mysterious abandoned Swahili town from the 13th century hidden in the coastal forest, featuring palaces, mosques, and houses now reclaimed by nature.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVpbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    coordinates: {
      lat: -3.3097,
      lng: 40.0183
    },
    features: ["Ancient ruins", "Archaeological site", "Historical exploration"],
    rating: 4.6,
    region: "Coastal Kenya"
  }
];
