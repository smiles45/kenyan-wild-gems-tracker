
import React, { useState } from 'react';
import { Compass, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleNavHover = (item: string) => {
    setActiveItem(item);
  };

  const handleNavLeave = () => {
    setActiveItem(null);
  };

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
          <Link to="/" className="text-gray-700 hover:text-forest-600 transition-colors">Home</Link>
          <Link to="/" className="text-gray-700 hover:text-forest-600 transition-colors">Map</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-forest-600 transition-colors outline-none">
              Camping Sites
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Northern Kenya</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Central Kenya</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Coastal Region</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Rift Valley</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-forest-600 transition-colors outline-none">
              Hidden Gems
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Waterfalls</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Caves</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Lakes</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Viewpoints</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/" className="text-gray-700 hover:text-forest-600 transition-colors">About</Link>
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
                <Link to="/" className="px-2 py-1 text-foreground hover:text-forest-600">Home</Link>
                <Link to="/" className="px-2 py-1 text-foreground hover:text-forest-600">Map</Link>
                <div className="px-2 py-1">
                  <p className="font-medium mb-2">Camping Sites</p>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link to="/" className="text-sm text-foreground hover:text-forest-600">Northern Kenya</Link>
                    <Link to="/" className="text-sm text-foreground hover:text-forest-600">Central Kenya</Link>
                    <Link to="/" className="text-sm text-foreground hover:text-forest-600">Coastal Region</Link>
                    <Link to="/" className="text-sm text-foreground hover:text-forest-600">Rift Valley</Link>
                  </div>
                </div>
                <div className="px-2 py-1">
                  <p className="font-medium mb-2">Hidden Gems</p>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link to="/" className="text-sm text-foreground hover:text-forest-600">Waterfalls</Link>
                    <Link to="/" className="text-sm text-foreground hover:text-forest-600">Caves</Link>
                    <Link to="/" className="text-sm text-foreground hover:text-forest-600">Lakes</Link>
                    <Link to="/" className="text-sm text-foreground hover:text-forest-600">Viewpoints</Link>
                  </div>
                </div>
                <Link to="/" className="px-2 py-1 text-foreground hover:text-forest-600">About</Link>
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
