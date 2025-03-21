import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hash, Book, Gamepad, MapPin, Heart, User } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ExploreCard from '@/components/ExploreCard';

const AstronomyExploreSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Explore More</h2>
      
      <Tabs defaultValue="astronomy" className="w-full">
        <TabsList className="mb-4 bg-transparent h-auto p-0 w-full flex justify-start border-b">
          <TabsTrigger 
            value="channel" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
            onClick={() => navigate('/')}
          >
            <Hash size={16} />
            AI
          </TabsTrigger>
          
          <TabsTrigger 
            value="astronomy" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          >
            <Hash size={16} />
            Astronomy
          </TabsTrigger>

          <TabsTrigger 
            value="resource" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          >
            <Book size={16} />
            Resource
          </TabsTrigger>
          
          <TabsTrigger 
            value="playground" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          >
            <Gamepad size={16} />
            Playground
          </TabsTrigger>
          
          <TabsTrigger 
            value="map" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          >
            <MapPin size={16} />
            Knowledge Map
          </TabsTrigger>
        </TabsList>

        <TabsContent value="astronomy" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ExploreCard
              title="Solar System Exploration"
              description="Journey through our cosmic neighborhood"
              image="/path/to/solar-system.jpg"
            />
            <ExploreCard
              title="Stars and Galaxies"
              description="Discover the wonders of deep space"
              image="/path/to/galaxy.jpg"
            />
            <ExploreCard
              title="Space Technology"
              description="Learn about telescopes and space missions"
              image="/path/to/telescope.jpg"
            />
          </div>
        </TabsContent>

        <TabsContent value="channel" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ExploreCard
              title="Machine Learning Basics"
              description="Learn the fundamentals of Machine Learning"
              image="/path/to/ml-image.jpg"
            />
            <ExploreCard
              title="Neural Networks"
              description="Understanding Neural Networks"
              image="/path/to/nn-image.jpg"
            />
            <ExploreCard
              title="Deep Learning"
              description="Dive into Deep Learning concepts"
              image="/path/to/dl-image.jpg"
            />
          </div>
        </TabsContent>

        <TabsContent value="resource" className="mt-6">
          {/* Resource content */}
        </TabsContent>

        <TabsContent value="playground" className="mt-6">
          {/* Playground content */}
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          {/* Map content */}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AstronomyExploreSection; 