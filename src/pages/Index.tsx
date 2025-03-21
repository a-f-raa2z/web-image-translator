
import React from 'react';
import Sidebar from '@/components/Sidebar';
import LearningSection from '@/components/LearningSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import CommunitySection from '@/components/CommunitySection';
import ExploreSection from '@/components/ExploreSection';
import AstronomyPageHeader from '@/components/AstronomyPageHeader';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AstronomyPageHeaderPageHeader />
        <LearningSection />
        <ActivitiesSection />
        <CommunitySection />
        <ExploreSection />
      </div>
    </div>
  );
};

export default Index;
