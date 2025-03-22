
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AstronomyActivitiesSection from './AstronomyActivitiesSection';
import AstronomyExploreSection from './AstronomyExploreSection';
import AstronomyCommunitySection from './AstronomyCommunitySection';
import MainVideoSection from './astronomy/MainVideoSection';
import VideoTabs from './astronomy/VideoTabs';
import { VideoCategory, VideoData } from './astronomy/types';
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Lock, ArrowRightLeft } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

const AstronomyLearningSection: React.FC = () => {
  const [selectedIntroVideoIndex, setSelectedIntroVideoIndex] = useState(0);
  const [selectedEarthVideoIndex, setSelectedEarthVideoIndex] = useState(0);
  const [selectedMoonVideoIndex, setSelectedMoonVideoIndex] = useState(0); 
  const [animate, setAnimate] = useState(false);
  const [selectedTab, setSelectedTab] = useState<VideoCategory>('intro'); 

  const astronomyCourses = [
    { id: 1, title: "The Neighbor Worlds", progress: 66, active: true },
    { id: 2, title: "Deep Space Objects", progress: 10, active: false },
    { id: 3, title: "Stars & Stellar Evolution", progress: 0, active: false },
    { id: 4, title: "The Life of Galaxies", progress: 0, active: false },
    { id: 5, title: "Space Exploration History", progress: 30, active: false },
  ];

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
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Current Course:</h2>
          
          <div className="flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <button 
                  className="flex items-center gap-2 px-4 py-1.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  <span>The Neighbor Worlds</span>
                  <ArrowRightLeft size={16} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-3">
                <div className="space-y-4">
                  <h3 className="font-medium text-md">Astronomy Courses</h3>
                  <div className="space-y-2.5">
                    {astronomyCourses.map(course => (
                      <div 
                        key={course.id} 
                        className={`flex items-center justify-between p-2.5 rounded-lg transition-colors ${course.active ? 'bg-purple-100' : 'hover:bg-gray-100'}`}
                      >
                        <div className="flex flex-col">
                          <span className={`font-medium ${course.active ? 'text-purple-700' : ''}`}>{course.title}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress value={course.progress} className="h-1.5 w-24" />
                            <span className="text-xs text-gray-500">{course.progress}%</span>
                          </div>
                        </div>
                        {course.active && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-purple-200 text-purple-700">Active</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <div className="flex items-center gap-2 w-48">
              <Progress value={getProgressValue()} className="h-2" />
              <span className="text-sm text-gray-500">{getProgressValue()}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
        <div className="relative">
          <MainVideoSection 
            selectedTab={selectedTab}
            videoData={videoData}
            selectedIndices={selectedIndices}
            animate={animate}
          />
          <Badge 
            variant="default" 
            className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded-full"
          >
            Learning
          </Badge>
        </div>

        <Tabs defaultValue="intro" onValueChange={handleTabChange} className="w-full">
          <TabsList className="mb-4 bg-transparent p-0 border-b border-gray-200 flex flex-wrap w-full justify-start">
            <TabsTrigger 
              value="intro" 
              className="bg-transparent data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-purple-700 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:rounded-none text-gray-600 focus:outline-none focus:ring-0 rounded-none px-3 py-2 transition-colors mr-1 mb-0"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center mr-2 font-semibold">1</span>
                Intro to the Neighbors
              </span>
            </TabsTrigger>
            <span className="text-gray-300 flex items-center mr-1 mb-0">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="earth" 
              className="bg-transparent data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-purple-700 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:rounded-none text-gray-600 focus:outline-none focus:ring-0 rounded-none px-3 py-2 transition-colors mr-1 mb-0"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center mr-2 font-semibold">2</span>
                Earth
              </span>
            </TabsTrigger>
            <span className="text-gray-300 flex items-center mr-1 mb-0">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="moon" 
              className="bg-transparent data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-purple-700 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:rounded-none text-gray-600 focus:outline-none focus:ring-0 rounded-none px-3 py-2 transition-colors mr-1 mb-0"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center mr-2 font-semibold">3</span>
                Moon
              </span>
            </TabsTrigger>
            <span className="text-gray-300 flex items-center mr-1 mb-0">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="mars" 
              disabled
              className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 rounded-none px-3 py-2 transition-colors mr-1 mb-0 opacity-70 cursor-not-allowed"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 inline-flex items-center justify-center mr-2 font-semibold">4</span>
                Mars
                <Lock size={14} className="ml-2" />
              </span>
            </TabsTrigger>
            <span className="text-gray-200 flex items-center mr-1 mb-0">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="jupiter" 
              disabled
              className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 rounded-none px-3 py-2 transition-colors mr-1 mb-0 opacity-70 cursor-not-allowed"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 inline-flex items-center justify-center mr-2 font-semibold">5</span>
                Jupiter
                <Lock size={14} className="ml-2" />
              </span>
            </TabsTrigger>
            <span className="text-gray-200 flex items-center mr-1 mb-0">
              <ArrowRight size={16} />
            </span>
            <TabsTrigger 
              value="saturn" 
              disabled
              className="bg-transparent text-gray-400 focus:outline-none focus:ring-0 rounded-none px-3 py-2 transition-colors mr-1 mb-0 opacity-70 cursor-not-allowed"
            >
              <span className="flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 inline-flex items-center justify-center mr-2 font-semibold">6</span>
                Saturn
                <Lock size={14} className="ml-2" />
              </span>
            </TabsTrigger>
          </TabsList>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
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
