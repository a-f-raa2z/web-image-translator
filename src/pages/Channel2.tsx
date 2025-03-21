import React from 'react';
import Sidebar from '@/components/Sidebar';
import AIPageHeader from '@/components/AIPageHeader';
import AILearningSection from '@/components/AILearningSection';
import AIActivitiesSection from '@/components/AIActivitiesSection';
import AICommunitySection from '@/components/AICommunitySection';
import AIExploreSection from '@/components/AIExploreSection';

const Channel2Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AIPageHeader />
        <AILearningSection />
        <AIActivitiesSection />
        <AICommunitySection />
        <AIExploreSection />
      </div>
    </div>
  );
};

export default Channel2Page;