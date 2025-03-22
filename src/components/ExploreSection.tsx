import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hash, Book, Gamepad, MapPin, Heart, User } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ExploreCard from '@/components/ExploreCard';

interface ExploreSectionProps {
  defaultTab?: string;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ defaultTab = "channel" }) => {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Explore More</h2>
      
      <Tabs defaultValue={defaultTab} className="w-full">
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
            value="ai" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
            onClick={() => navigate('/ai')}
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

        <TabsContent value="resource" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <ExploreCard 
              title="Art History Resources"
              image="https://images.unsplash.com/photo-1544967082-d9d25d86be57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Color Theory Guide"
              image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              badge="Resource"
            />
            
            <ExploreCard 
              title="Portrait Painting Tutorial"
              image="https://images.unsplash.com/photo-1579541591969-4aa32003c11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Museums Online Collections"
              image="https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </TabsContent>

        <TabsContent value="playground" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <ExploreCard 
              title="Virtual Painting Studio"
              image="https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Color Mixer App"
              image="https://images.unsplash.com/photo-1560263816-d704d351022a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              badge="Interactive"
            />
            
            <ExploreCard 
              title="Digital Sculpture Tool"
              image="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Perspective Drawing Simulator"
              image="https://images.unsplash.com/photo-1607934045356-8115ebe7c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <ExploreCard 
              title="Art Movements Timeline"
              image="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Artist Connections Web"
              image="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              badge="Interactive"
            />
            
            <ExploreCard 
              title="Global Art Influences"
              image="https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Technique Evolution Map"
              image="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ExploreSection;
