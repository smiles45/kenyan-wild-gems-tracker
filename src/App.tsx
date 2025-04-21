
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import MapPage from "./pages/MapPage";
import RegionPage from "./pages/RegionPage";
import GemTypePage from "./pages/GemTypePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import LocationDetailsPage from "./pages/LocationDetailsPage";
import BlogListPage from "./pages/BlogListPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogCreatePage from "./pages/BlogCreatePage";
import AuthPage from "./pages/AuthPage";

// Create a new QueryClient instance outside of the component
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/region/:regionId" element={<RegionPage />} />
              <Route path="/gems/:gemType" element={<GemTypePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/location/:id" element={<LocationDetailsPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/new" element={<BlogCreatePage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
