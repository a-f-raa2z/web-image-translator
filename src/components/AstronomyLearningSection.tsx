
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AstronomyActivitiesSection from './AstronomyActivitiesSection';
import AstronomyExploreSection from './AstronomyExploreSection';
import AstronomyCommunitySection from './AstronomyCommunitySection';
import MainVideoSection from './astronomy/MainVideoSection';
import VideoTabs from './astronomy/VideoTabs';
import { VideoCategory, VideoData } from './astronomy/types';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { BookOpen, Compass, Users, Lightbulb } from 'lucide-react';

const AstronomyLearningSection: React.FC = () => {
  const [selectedIntroVideoIndex, setSelectedIntroVideoIndex] = useState(0);
  const [selectedEarthVideoIndex, setSelectedEarthVideoIndex] = useState(0);
  const [selectedMoonVideoIndex, setSelectedMoonVideoIndex] = useState(0); 
  const [animate, setAnimate] = useState(false);
  const [selectedTab, setSelectedTab] = useState<VideoCategory>('intro'); 

  const videoData: VideoData = {
    intro: [
      { id: 'libKVRa01L8', title: 'Solar System 101', duration: '4:10' },
      { id: '05E1uMh15QQ', title: 'The Inner Planets', duration: '2:12' },
    ],
    earth: [
      { id: 'HCDVN7DCzYE', title: 'Earth 101', duration: '3:32' },
      { id: 'mrYjJ9Jl9dA', title: 'What Earth', duration: '19:18' }
    ],
    moon: [
      { id: '6AviDjR9mmo', title: 'Moon 101', duration: '3:05' },
      { id: 'lhKMQIRdaeo', title: 'What is a Supermoon', duration: '2:14' },
      { id: 'VW2xRR75lKE', title: 'Lunar Eclipse 101', duration: '2:14' },
      { id: 'cxrLRbkOwKs', title: 'Solar Eclipse 101', duration: '2:14' }
    ]
  };

  const selectedIndices = {
    intro: selectedIntroVideoIndex,
    earth: selectedEarthVideoIndex,
    moon: selectedMoonVideoIndex
  };

  const handleThumbnailClick = (index: number, tab: VideoCategory) => {
    setAnimate(true);
    if (tab === 'intro') {
      setSelectedIntroVideoIndex(index);
    } else if (tab === 'earth') {
      setSelectedEarthVideoIndex(index);
    } else if (tab === 'moon') {
      setSelectedMoonVideoIndex(index);
    }
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  const handleTabChange = (value: string) => {
    setSelectedTab(value as VideoCategory); 
  };

  // Tabs for the different sections of the learning page
  const renderCourseSectionTabs = () => (
    <div className="mb-8 border-b">
      <div className="flex space-x-8">
        <a href="#learning" className="flex items-center pb-4 border-b-2 border-purple-600 font-medium text-purple-600">
          <BookOpen size={16} className="mr-2" />
          Learning
        </a>
        <a href="#activities" className="flex items-center pb-4 text-gray-500 hover:text-gray-900">
          <Compass size={16} className="mr-2" />
          Activities
        </a>
        <a href="#community" className="flex items-center pb-4 text-gray-500 hover:text-gray-900">
          <Users size={16} className="mr-2" />
          Community
        </a>
        <a href="#explore" className="flex items-center pb-4 text-gray-500 hover:text-gray-900">
          <Lightbulb size={16} className="mr-2" />
          Explore
        </a>
      </div>
    </div>
  );

  return (
    <section className="mb-10">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/courses">My Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium">Astronomy 101</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      {renderCourseSectionTabs()}
      
      <div id="learning">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen size={20} className="mr-2 text-purple-600" />
          My Learning Path
        </h2>
        
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-md">
          <MainVideoSection 
            selectedTab={selectedTab}
            videoData={videoData}
            selectedIndices={selectedIndices}
            animate={animate}
          />

          <Tabs defaultValue="intro" onValueChange={handleTabChange} className="w-full">
            <TabsList className="mb-4 bg-white p-1 shadow-sm space-x-2 rounded-md">
              <TabsTrigger 
                value="intro" 
                className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-4 py-2 transition-colors"
              >
                Intro to the Neighbors
              </TabsTrigger>
              <TabsTrigger 
                value="earth" 
                className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-4 py-2 transition-colors"
              >
                Earth
              </TabsTrigger>
              <TabsTrigger 
                value="moon" 
                className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-4 py-2 transition-colors"
              >
                Moon
              </TabsTrigger>
            </TabsList>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <VideoTabs 
                selectedTab={selectedTab}
                videos={videoData[selectedTab]}
                selectedVideoIndex={selectedIndices[selectedTab]}
                onThumbnailClick={handleThumbnailClick}
              />
            </div>
          </Tabs>
        </div>
      </div>

      <div id="activities" className="mt-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Compass size={20} className="mr-2 text-purple-600" />
          Learning Activities
        </h2>
        <AstronomyActivitiesSection />
      </div>
      
      <div id="community" className="mt-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Users size={20} className="mr-2 text-purple-600" />
          Connect with the Community
        </h2>
        <AstronomyCommunitySection />
      </div>
      
      <div id="explore" className="mt-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Lightbulb size={20} className="mr-2 text-purple-600" />
          Explore More
        </h2>
        <AstronomyExploreSection />
      </div>
    </section>
  );
};

export default AstronomyLearningSection;
