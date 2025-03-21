import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KnowledgeMap from "./pages/KnowledgeMap";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import AIPageHeader from "@/components/AIPageHeader";
import AILearningSection from "@/components/AILearningSection";
import AstronomyLearningSection from "@/components/AstronomyLearningSection";

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
                <PageHeader />
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
          <Route path="/knowledge-map" element={<KnowledgeMap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
