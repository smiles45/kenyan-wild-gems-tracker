
import React from 'react';
import { Compass, Heart, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Compass className="h-6 w-6 text-forest-600 mr-2" />
            <h2 className="text-lg font-bold text-forest-800">
              <span className="text-safari-600">Kenyan </span> 
              Wild Gems
            </h2>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-forest-600">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-forest-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-6 pt-6">
          <p className="text-center text-sm text-gray-500">
            Made with <Heart className="inline h-3 w-3 text-kenya-red" /> for exploring Kenya's beautiful wilderness.
          </p>
          <p className="text-center text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} Kenyan Wild Gems Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
