
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
          title="Partial Solar Eclipse"
          location="A partial solar eclipse takes place across Europe and the northeastern corner of North America."
          date="March 19, 2025"
          image="https://c.tadst.com/gfx/190x126/partial-solar-eclipse-sunrise.jpg?1"
        />
        
        <AstronomyActivityCard 
          title="Super New Moon"
          date="March 29, 2025"
          location="Dark nights a few days before and after the Moon reaches its New Moon phase at 10:57 UTC UTC on March 29"
          image="https://c.tadst.com/gfx/190x126/starry-night-sky.jpg?1"
        />
        
        <AstronomyActivityCard 
          title="NASA’s Office of STEM Engagement (OSTEM) is Open"
          date="March 28, 2025"
          location="London, UK"
          image="https://www.nasa.gov/wp-content/uploads/2023/01/nasa-interns-hs-worm.jpg"
        />
      </div>
    </section>
  );
};

export default AstronomyActivitiesSection;
