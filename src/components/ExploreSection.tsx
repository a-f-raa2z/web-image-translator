
import React from 'react';
import { Hash, Book, Gamepad, MapPin, Heart, User } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ExploreCard from '@/components/ExploreCard';

const ExploreSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Explore More</h2>
      
      <Tabs defaultValue="channel" className="w-full">
        <TabsList className="mb-4 bg-transparent h-auto p-0 w-full flex justify-start border-b">
          <TabsTrigger 
            value="channel" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          >
            <Hash size={16} />
            Channel
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
          <TabsTrigger 
            value="favorites" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          >
            <Heart size={16} />
            Favorites
          </TabsTrigger>
          <TabsTrigger 
            value="profile" 
            className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          >
            <User size={16} />
            Profile
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="channel" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <ExploreCard 
              image="https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              image="https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              badge="ARTnews"
            />
            
            <ExploreCard 
              title="New Gallery Opened in Your Area"
              image="https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="New Gallery Opened in Your Area"
              image="https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="resource" className="mt-4">
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
        
        <TabsContent value="playground" className="mt-4">
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
        
        <TabsContent value="map" className="mt-4">
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
        
        <TabsContent value="favorites" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <ExploreCard 
              title="Your Saved Resources"
              image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Bookmarked Tutorials"
              image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              badge="Favorites"
            />
            
            <ExploreCard 
              title="Liked Articles"
              image="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Favorite Artists"
              image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="profile" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <ExploreCard 
              title="Your Art Portfolio"
              image="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Learning Progress"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              badge="Stats"
            />
            
            <ExploreCard 
              title="Achievements & Badges"
              image="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ExploreCard 
              title="Account Settings"
              image="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ExploreSection;
