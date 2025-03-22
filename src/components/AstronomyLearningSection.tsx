
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AstronomyActivitiesSection from './AstronomyActivitiesSection';
import AstronomyExploreSection from './AstronomyExploreSection';
import AstronomyCommunitySection from './AstronomyCommunitySection';
import MainVideoSection from './astronomy/MainVideoSection';
import VideoTabs from './astronomy/VideoTabs';
import { VideoCategory, VideoData } from './astronomy/types';

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

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">My Learning</h2>
      
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 shadow-md border border-purple-300">
        <MainVideoSection 
          selectedTab={selectedTab}
          videoData={videoData}
          selectedIndices={selectedIndices}
          animate={animate}
        />

        <Tabs defaultValue="intro" onValueChange={handleTabChange} className="w-full">
          <TabsList className="mb-4 bg-transparent p-0 shadow-none space-x-4">
            <TabsTrigger 
              value="intro" 
              className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
            >
              Intro to the Neighbors
            </TabsTrigger>
            <TabsTrigger 
              value="earth" 
              className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
            >
              Earth
            </TabsTrigger>
            <TabsTrigger 
              value="moon" 
              className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
            >
              Moon
            </TabsTrigger>
          </TabsList>

          <div className="bg-white rounded-xl p-4 border border-purple-200">
            <VideoTabs 
              selectedTab={selectedTab}
              videos={videoData[selectedTab]}
              selectedVideoIndex={selectedIndices[selectedTab]}
              onThumbnailClick={handleThumbnailClick}
            />
          </div>
        </Tabs>
      </div>

      <div className="mt-6">
        <AstronomyActivitiesSection />
      </div>
      <div className="mt-6">
        <AstronomyCommunitySection />
      </div>
      <div className="mt-6">
        <AstronomyExploreSection />
      </div>
    </section>
  );
};

export default AstronomyLearningSection;
