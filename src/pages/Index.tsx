import React from 'react';
import Sidebar from '@/components/Sidebar';
import ArtLearningCard from '@/components/ArtLearningCard';
import ChallengeCard from '@/components/ChallengeCard';
import PlaygroundCard from '@/components/PlaygroundCard';
import ActivityCard from '@/components/ActivityCard';
import CommunityCard from '@/components/CommunityCard';
import ExploreCard from '@/components/ExploreCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Edit, Map, Award, Diamond, Hash, Book, Gamepad, MapPin, Heart, User } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <header className="mb-8">
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-gray-500 hover:text-gray-700">Art</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="font-medium">Fine Art</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#FF8A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <h1 className="text-2xl font-bold flex items-center">
                  Fine Art
                  <button className="ml-2 text-gray-400 hover:text-gray-600">
                    <Edit size={14} />
                  </button>
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-1 bg-white py-1 px-3 rounded-full shadow-sm">
              <Diamond size={16} className="text-blue-400" />
              <span className="font-semibold">123</span>
            </div>
            
            <div className="flex items-center gap-1 bg-white py-1 px-3 rounded-full shadow-sm">
              <Award size={16} className="text-yellow-400" />
              <span className="font-semibold">6</span>
            </div>
            
            <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>
        
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">My Learning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-6">
              <ArtLearningCard 
                title="How to look at art" 
                image="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                isVideo={true}
                className="h-full"
              />
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <ChallengeCard 
                title="Challenge" 
                description="Try to Name 1 painting mentioned in the video."
                image="https://cdn.pixabay.com/photo/2020/01/10/19/46/beaver-4756339_1280.png"
              />
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <PlaygroundCard
                subtitle="You've unlocked"
                title="Paint 'n' Play"
                image="https://cdn.pixabay.com/photo/2024/01/19/16/47/ai-generated-8518797_1280.png"
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">Intro to Fine Art</span>
              <span className="text-sm text-gray-500">5 Sections | 12 Points</span>
              <span className="px-3 py-1 bg-white border border-gray-200 text-xs rounded-full">Mysteries of Art</span>
              <span className="px-3 py-1 bg-white border border-gray-200 text-xs rounded-full">Advancing with The Masters</span>
            </div>
            
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
              <Map size={14} /> Map
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
            <div className="art-card p-2">
              <img 
                src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="How to look at art" 
                className="w-full h-24 object-cover rounded-lg"
              />
              <p className="text-xs mt-2 font-medium">How to look at art</p>
            </div>
            
            <div className="art-card p-2">
              <img 
                src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="How to look at art" 
                className="w-full h-24 object-cover rounded-lg"
              />
              <p className="text-xs mt-2 font-medium">How to look at art</p>
            </div>
            
            <div className="art-card p-2">
              <img 
                src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="How to look at art" 
                className="w-full h-24 object-cover rounded-lg"
              />
              <p className="text-xs mt-2 font-medium">How to look at art</p>
            </div>
            
            <div className="art-card p-2">
              <img 
                src="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="How to look at art" 
                className="w-full h-24 object-cover rounded-lg"
              />
              <p className="text-xs mt-2 font-medium">How to look at art</p>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Activities this Week</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm">Zipcode:</span>
              <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">95061</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ActivityCard 
              title="Mobile Makeart: Lighthouse for the Blind"
              date="Tuesday, March 18"
              location="Museum of Craft and Design"
              image="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ActivityCard 
              title="Mobile Makeart: Lighthouse for the Blind"
              date="Tuesday, March 18"
              location="Museum of Craft and Design"
              image="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <ActivityCard 
              title="Mobile Makeart: Lighthouse for the Blind"
              date="Tuesday, March 18"
              location="Museum of Craft and Design"
              image="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">In the Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <CommunityCard 
              title="The Teens in AI IWD Global Techathon"
              description="In celebration of International Women's Day, Teens in AI run annual, distributed Global Techathons inspiring teens aged 12-18"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <CommunityCard 
              title="The Teens in AI IWD Global Techathon"
              description="In celebration of International Women's Day, Teens in AI run annual, distributed Global Techathons inspiring teens aged 12-18"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <CommunityCard 
              title="The Teens in AI IWD Global Techathon"
              description="In celebration of International Women's Day, Teens in AI run annual, distributed Global Techathons inspiring teens aged 12-18"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            
            <CommunityCard 
              title="Hubble's Cosmic Adventure"
              description="Experience the wonders of deep space through the lens of the Hubble telescope"
              image="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </section>
        
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
                  image="https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
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
      </div>
    </div>
  );
};

export default Index;

