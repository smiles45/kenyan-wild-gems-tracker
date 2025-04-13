
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6 text-forest-800">About Kenyan Wild Gems</h1>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-forest-700">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Kenyan Wild Gems aims to showcase the hidden natural treasures and excellent camping spots 
              across Kenya. Our platform connects adventure seekers with local guides and helps preserve 
              these beautiful places for generations to come.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-forest-700">Why Kenya?</h2>
            <p className="text-gray-700 mb-6">
              Kenya is blessed with diverse landscapes from mountains and forests to savannahs and pristine 
              beaches. While its national parks and reserves are world-famous, many incredible natural 
              wonders remain off the beaten path. We're here to change that.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-forest-700">Join Our Community</h2>
            <p className="text-gray-700">
              Are you passionate about exploring Kenya's wilderness? Share your own discoveries, connect 
              with like-minded adventurers, and help us create the most comprehensive guide to Kenya's 
              wild gems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-safari-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-safari-800">For Explorers</h3>
              <p className="text-gray-600">
                Discover new destinations, share your experiences, and connect with local guides for 
                authentic adventures.
              </p>
            </div>
            
            <div className="bg-safari-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-safari-800">For Local Communities</h3>
              <p className="text-gray-600">
                Promote sustainable tourism in your area, showcase your culture, and benefit from 
                eco-friendly visitors.
              </p>
            </div>
            
            <div className="bg-safari-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-safari-800">For Conservation</h3>
              <p className="text-gray-600">
                Help protect Kenya's natural wonders through awareness, education, and promoting 
                responsible tourism practices.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
