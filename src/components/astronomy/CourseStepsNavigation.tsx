
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Lock } from "lucide-react";
import { VideoCategory } from './types';

interface CourseStepsNavigationProps {
  selectedTab: VideoCategory;
  onTabChange: (value: string) => void;
}

const CourseStepsNavigation: React.FC<CourseStepsNavigationProps> = ({ 
  selectedTab, 
  onTabChange 
}) => {
  return (
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
  );
};

export default CourseStepsNavigation;
