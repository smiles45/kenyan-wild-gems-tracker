
import React, { useState } from 'react';
import { Compass, Menu, X, ChevronDown, LogOut, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import UserAvatar from './UserAvatar';

const AuthHeader: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleNavHover = (item: string) => {
    setActiveItem(item);
  };

  const handleNavLeave = () => {
    setActiveItem(null);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
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
          <Link to="/map" className="text-gray-700 hover:text-forest-600 transition-colors">Map</Link>
          
          <Link to="/blog" className="text-gray-700 hover:text-safari-600 transition-colors font-semibold">Blog</Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-forest-600 transition-colors outline-none">
              Camping Sites
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/region/northern-kenya" className="w-full">Northern Kenya</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/region/central-kenya" className="w-full">Central Kenya</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/region/coastal-region" className="w-full">Coastal Region</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/region/rift-valley" className="w-full">Rift Valley</Link>
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
                <Link to="/gems/waterfalls" className="w-full">Waterfalls</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/gems/caves" className="w-full">Caves</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/gems/lakes" className="w-full">Lakes</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/gems/viewpoints" className="w-full">Viewpoints</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/about" className="text-gray-700 hover:text-forest-600 transition-colors">About</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <UserAvatar />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/blog/new')}>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Write a Blog</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              className="bg-safari-600 hover:bg-safari-700"
              onClick={() => navigate('/auth')}
            >
              Sign In
            </Button>
          )}
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
                <Link to="/map" className="px-2 py-1 text-foreground hover:text-forest-600">Map</Link>
                <Link to="/blog" className="px-2 py-1 text-foreground hover:text-safari-600 font-semibold">Blog</Link>
                <div className="px-2 py-1">
                  <p className="font-medium mb-2">Camping Sites</p>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link to="/region/northern-kenya" className="text-sm text-foreground hover:text-forest-600">Northern Kenya</Link>
                    <Link to="/region/central-kenya" className="text-sm text-foreground hover:text-forest-600">Central Kenya</Link>
                    <Link to="/region/coastal-region" className="text-sm text-foreground hover:text-forest-600">Coastal Region</Link>
                    <Link to="/region/rift-valley" className="text-sm text-foreground hover:text-forest-600">Rift Valley</Link>
                  </div>
                </div>
                <div className="px-2 py-1">
                  <p className="font-medium mb-2">Hidden Gems</p>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link to="/gems/waterfalls" className="text-sm text-foreground hover:text-forest-600">Waterfalls</Link>
                    <Link to="/gems/caves" className="text-sm text-foreground hover:text-forest-600">Caves</Link>
                    <Link to="/gems/lakes" className="text-sm text-foreground hover:text-forest-600">Lakes</Link>
                    <Link to="/gems/viewpoints" className="text-sm text-foreground hover:text-forest-600">Viewpoints</Link>
                  </div>
                </div>
                <Link to="/about" className="px-2 py-1 text-foreground hover:text-forest-600">About</Link>
              </nav>
              <div className="mt-auto pt-6">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 border rounded">
                      <UserAvatar size="sm" />
                      <span className="text-sm truncate">{user.email}</span>
                    </div>
                    <Button 
                      className="w-full"
                      variant="outline"
                      onClick={() => navigate('/blog/new')}
                    >
                      Write a Blog
                    </Button>
                    <Button 
                      className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300"
                      onClick={handleSignOut}
                    >
                      Log Out
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full bg-safari-600 hover:bg-safari-700"
                    onClick={() => navigate('/auth')}
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default AuthHeader;
