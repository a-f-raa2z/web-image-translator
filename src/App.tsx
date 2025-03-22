
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KnowledgeMap from "./pages/KnowledgeMap";
import AstronomyKnowledgeMap from "./pages/AstronomyKnowledgeMap";
import AstronomyResource from "./pages/AstronomyResource";
import AstronomyPlayground from "./pages/AstronomyPlayground";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import AIPageHeader from "@/components/AIPageHeader";
import AILearningSection from "@/components/AILearningSection";
import AstronomyLearningSection from "@/components/AstronomyLearningSection";
import AstronomyPageHeader from "@/components/AstronomyPageHeader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-gray-50">
              <Sidebar />
              <div className="ml-16 p-6 animate-fade-in">
                <AstronomyPageHeader />
                <AstronomyLearningSection />
              </div>
            </div>
          } />
          <Route path="/ai" element={
            <div className="min-h-screen bg-gray-50">
              <Sidebar />
              <div className="ml-16 p-6 animate-fade-in">
                <AIPageHeader />
                <AILearningSection />
              </div>
            </div>
          } />
          <Route path="/knowledge-map" element={<AstronomyKnowledgeMap />} />
          <Route path="/resource" element={<AstronomyResource />} />
          <Route path="/playground" element={<AstronomyPlayground />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
