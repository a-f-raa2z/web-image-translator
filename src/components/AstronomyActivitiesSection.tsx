
import React from 'react';
import AstronomyActivityCard from '@/components/AstronomyActivityCard';

const AstronomyActivitiesSection: React.FC = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Activities this Week</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm">Zipcode:</span>
          <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">95061</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <AstronomyActivityCard 
          title="Global AI Office Hours - April 2025"
          date="April 15, 2025"
          location="Global AI Community"
          image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        />
        
        <AstronomyActivityCard 
          title="PIE & AI: New York - LLM Repetitive Task Automation"
          date="March 25, 2025"
          location="New York, NY"
          image="https://images.unsplash.com/photo-1677442135073-18da40bc2b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        />
        
        <AstronomyActivityCard 
          title="A Worker's Guide to AI in Public Services"
          date="March 28, 2025"
          location="London, UK"
          image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        />
      </div>
    </section>
  );
};

export default AstronomyActivitiesSection;
