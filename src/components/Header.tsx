
import React from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-forest-600" />
          <h1 className="text-xl font-bold text-forest-800">
            <span className="text-safari-600">Kenyan </span> 
            Wild Gems
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-forest-600 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-forest-600 transition-colors">Map</a>
          <a href="#" className="text-gray-700 hover:text-forest-600 transition-colors">Camping Sites</a>
          <a href="#" className="text-gray-700 hover:text-forest-600 transition-colors">Hidden Gems</a>
          <a href="#" className="text-gray-700 hover:text-forest-600 transition-colors">About</a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-safari-600 hover:bg-safari-700">
            Share a Location
          </Button>
        </div>
        
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-forest-600" />
                  <span className="font-semibold">Kenyan Wild Gems</span>
                </div>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-4 pt-6">
                <a href="#" className="px-2 py-1 text-foreground hover:text-forest-600">Home</a>
                <a href="#" className="px-2 py-1 text-foreground hover:text-forest-600">Map</a>
                <a href="#" className="px-2 py-1 text-foreground hover:text-forest-600">Camping Sites</a>
                <a href="#" className="px-2 py-1 text-foreground hover:text-forest-600">Hidden Gems</a>
                <a href="#" className="px-2 py-1 text-foreground hover:text-forest-600">About</a>
              </nav>
              <div className="mt-auto pt-6">
                <Button className="w-full bg-safari-600 hover:bg-safari-700">
                  Share a Location
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
