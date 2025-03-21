
import React from 'react';
import Sidebar from '@/components/Sidebar';
import ArtLearningCard from '@/components/ArtLearningCard';
import ChallengeCard from '@/components/ChallengeCard';
import PlaygroundCard from '@/components/PlaygroundCard';
import ActivityCard from '@/components/ActivityCard';
import CommunityCard from '@/components/CommunityCard';
import ExploreCard from '@/components/ExploreCard';
import { Edit, Map, Award, Diamond } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <header className="flex justify-between items-center mb-8">
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
          
          <div className="flex items-center gap-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-1">
              <ArtLearningCard 
                title="How to look at art" 
                image="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                isVideo={true}
              />
            </div>
            
            <div>
              <ChallengeCard 
                title="Challenge" 
                description="Try to Name 1 painting mentioned in the video."
                image="https://cdn.pixabay.com/photo/2020/01/10/19/46/beaver-4756339_1280.png"
              />
            </div>
            
            <div>
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
          
          <div className="flex space-x-5 mb-5 border-b">
            <button className="px-4 py-2 text-sm font-medium border-b-2 border-black">All</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-black">News</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-black">Community</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-black">Artists</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
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
        </section>
      </div>
    </div>
  );
};

export default Index;
