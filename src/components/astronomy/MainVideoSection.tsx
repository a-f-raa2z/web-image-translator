
import React from 'react';
import { cn } from "@/lib/utils";
import VideoPlayer from '../VideoPlayer';
import VideoContentCards from './VideoContentCards';
import { VideoCategory, VideoData } from './types';

interface MainVideoSectionProps {
  selectedTab: string;
  videoData: VideoData;
  selectedIndices: {
    intro: number;
    earth: number;
    moon: number;
  };
  animate: boolean;
}

const MainVideoSection: React.FC<MainVideoSectionProps> = ({
  selectedTab,
  videoData,
  selectedIndices,
  animate
}) => {
  const getSelectedVideoId = () => {
    if (selectedTab === 'intro') {
      return videoData.intro[selectedIndices.intro].id;
    } else if (selectedTab === 'earth') {
      return videoData.earth[selectedIndices.earth].id;
    } else if (selectedTab === 'moon') {
      return videoData.moon[selectedIndices.moon].id;
    }
    return '';
  };

  const getSelectedVideoTitle = () => {
    if (selectedTab === 'intro') {
      return videoData.intro[selectedIndices.intro].title;
    } else if (selectedTab === 'earth') {
      return videoData.earth[selectedIndices.earth].title;
    } else if (selectedTab === 'moon') {
      return videoData.moon[selectedIndices.moon].title;
    }
    return '';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
      <div className="col-span-1 md:col-span-6">
        <div className="h-full rounded-xl overflow-hidden shadow-md bg-black transition-all duration-300 animate-scale-in">
          <VideoPlayer videoId={getSelectedVideoId()} />
        </div>
      </div>
      
      <VideoContentCards 
        selectedTab={selectedTab}
        selectedVideoTitle={getSelectedVideoTitle()}
        animate={animate}
      />
    </div>
  );
};

export default MainVideoSection;
