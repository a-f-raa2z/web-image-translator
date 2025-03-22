
import React from 'react';
import Sidebar from '@/components/Sidebar';
import AstronomyPageHeader from '@/components/AstronomyPageHeader';
import { Star } from 'lucide-react';
import KnowledgeMapFlow from '@/components/astronomy/knowledge-map/KnowledgeMapFlow';

const AstronomyKnowledgeMap = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AstronomyPageHeader />
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Star className="text-blue-500" />
            Astronomy Knowledge Map
          </h2>
          
          <KnowledgeMapFlow />
        </div>
      </div>
    </div>
  );
};

export default AstronomyKnowledgeMap;
