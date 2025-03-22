
import React from 'react';
import { Tabs } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { VideoCategory, VideoData } from './types';
import MainVideoSection from './MainVideoSection';
import VideoTabs from './VideoTabs';
import CourseStepsNavigation from './CourseStepsNavigation';

interface LearningContentContainerProps {
  selectedTab: VideoCategory;
  videoData: VideoData;
  selectedIndices: Record<VideoCategory, number>;
  animate: boolean;
  onTabChange: (value: string) => void;
  onThumbnailClick: (index: number, tab: VideoCategory) => void;
}

const LearningContentContainer: React.FC<LearningContentContainerProps> = ({
  selectedTab,
  videoData,
  selectedIndices,
  animate,
  onTabChange,
  onThumbnailClick
}) => {
  return (
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

      <Tabs defaultValue="intro" onValueChange={onTabChange} className="w-full">
        <CourseStepsNavigation 
          selectedTab={selectedTab}
          onTabChange={onTabChange}
        />

        <div className="bg-white rounded-xl p-4 border border-gray-200 mt-4">
          <VideoTabs 
            selectedTab={selectedTab}
            videos={videoData[selectedTab]}
            selectedVideoIndex={selectedIndices[selectedTab]}
            onThumbnailClick={onThumbnailClick}
          />
        </div>
      </Tabs>
    </div>
  );
};

export default LearningContentContainer;
