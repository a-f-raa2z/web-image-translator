
import React from 'react';
import { VideoCategory, VideoData, VideoItem } from './types';
import { cn } from "@/lib/utils";
import VideoContentCards from './VideoContentCards';

interface MainVideoSectionProps {
  selectedTab: VideoCategory;
  videoData: VideoData;
  selectedIndices: Record<VideoCategory, number>;
  animate: boolean;
}

const MainVideoSection: React.FC<MainVideoSectionProps> = ({
  selectedTab,
  videoData,
  selectedIndices,
  animate
}) => {
  const selectedVideoIndex = selectedIndices[selectedTab];
  const selectedVideo = videoData[selectedTab][selectedVideoIndex];
  
  const renderVideo = (video: VideoItem) => {
    if (video.source === 'tiktok' && video.tiktokUrl) {
      return (
        <div className="relative h-0 pb-[177.77%] overflow-hidden bg-black">
          <iframe 
            src={`https://www.tiktok.com/embed/v2/${video.tiktokUrl.split('/t/')[1]}`}
            allowFullScreen 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      );
    }
    
    // Handle YouTube shorts format
    const videoUrl = video.id.startsWith('http') 
      ? video.id 
      : `https://www.youtube.com/embed/${video.id}?autoplay=0`;
      
    return (
      <iframe 
        src={videoUrl}
        title={video.title} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    );
  };

  return (
    <div className="grid grid-cols-12 gap-4 mb-6">
      <div className="col-span-12 md:col-span-6">
        <div className={cn(
          "bg-black rounded-xl overflow-hidden transition-all duration-500",
          animate && "transform scale-95"
        )}>
          <div className="relative pb-[56.25%] h-0">
            {renderVideo(selectedVideo)}
          </div>
        </div>
        {/* Removed the h3 tag that displayed the video title */}
      </div>
      
      <VideoContentCards 
        selectedTab={selectedTab}
        selectedVideoTitle={selectedVideo.title}
        animate={animate}
      />
    </div>
  );
};

export default MainVideoSection;
