
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AstronomyActivitiesSection from './AstronomyActivitiesSection';
import AstronomyExploreSection from './AstronomyExploreSection';
import AstronomyCommunitySection from './AstronomyCommunitySection';
import MainVideoSection from './astronomy/MainVideoSection';
import VideoTabs from './astronomy/VideoTabs';
import { VideoCategory, VideoData } from './astronomy/types';
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Lock } from "lucide-react";

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

  // Calculate progress based on selected tab
  const getProgressValue = () => {
    switch(selectedTab) {
      case 'intro': return 33;
      case 'earth': return 66;
      case 'moon': return 100;
      default: return 33;
    }
  };

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">My Learning</h2>
        <div className="flex items-center gap-2 w-48">
          <Progress value={getProgressValue()} className="h-2" />
          <span className="text-sm text-gray-500">{getProgressValue()}%</span>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 shadow-md border border-purple-300">
        <MainVideoSection 
          selectedTab={selectedTab}
          videoData={videoData}
          selectedIndices={selectedIndices}
          animate={animate}
        />

        <Tabs defaultValue="intro" onValueChange={handleTabChange} className="w-full">
          <TabsList className="mb-4 bg-white p-1 rounded-lg border border-purple-200 shadow-sm flex flex-wrap w-full justify-start">
            <TabsTrigger 
              value="intro" 
              className="bg-transparent data-[state=active]:bg-purple-500 data-[state=active]:text-white text-gray-600 focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors mr-1 mb-1"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center mr-2 font-semibold data-[state=active]:bg-white data-[state=active]:text-purple-700">1</span>
                Intro to the Neighbors
              </span>
            </TabsTrigger>
            <span className="text-gray-300 flex items-center mr-1 mb-1">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="earth" 
              className="bg-transparent data-[state=active]:bg-purple-500 data-[state=active]:text-white text-gray-600 focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors mr-1 mb-1"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center mr-2 font-semibold data-[state=active]:bg-white data-[state=active]:text-purple-700">2</span>
                Earth
              </span>
            </TabsTrigger>
            <span className="text-gray-300 flex items-center mr-1 mb-1">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="moon" 
              className="bg-transparent data-[state=active]:bg-purple-500 data-[state=active]:text-white text-gray-600 focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors mr-1 mb-1"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center mr-2 font-semibold data-[state=active]:bg-white data-[state=active]:text-purple-700">3</span>
                Moon
              </span>
            </TabsTrigger>
            <span className="text-gray-300 flex items-center mr-1 mb-1">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="mars" 
              disabled
              className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors mr-1 mb-1 opacity-70 cursor-not-allowed"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 inline-flex items-center justify-center mr-2 font-semibold">4</span>
                Mars
                <Lock size={14} className="ml-2" />
              </span>
            </TabsTrigger>
            <span className="text-gray-200 flex items-center mr-1 mb-1">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="jupiter" 
              disabled
              className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors mr-1 mb-1 opacity-70 cursor-not-allowed"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 inline-flex items-center justify-center mr-2 font-semibold">5</span>
                Jupiter
                <Lock size={14} className="ml-2" />
              </span>
            </TabsTrigger>
            <span className="text-gray-200 flex items-center mr-1 mb-1">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="saturn" 
              disabled
              className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors mr-1 mb-1 opacity-70 cursor-not-allowed"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 inline-flex items-center justify-center mr-2 font-semibold">6</span>
                Saturn
                <Lock size={14} className="ml-2" />
              </span>
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
