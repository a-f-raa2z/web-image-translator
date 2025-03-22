
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
    
    // Special case for YouTube Shorts (vertical videos)
    if (video.isShort) {
      return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black">
          <div className="h-full w-auto aspect-[9/16]">
            <iframe 
              src={`https://www.youtube.com/embed/${video.id}?autoplay=0`}
              title={video.title} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      );
    }
    
    // Regular YouTube videos
    return (
      <iframe 
        src={`https://www.youtube.com/embed/${video.id}?autoplay=0`}
        title={video.title} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    );
  };

  // Create VideoCard component specifically for the highlighted YouTube Short
  const ShortVideoCard = () => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
      <div className="relative aspect-[9/16] max-h-48 bg-black flex items-center justify-center">
        <img 
          src={`https://img.youtube.com/vi/0GZTVDM3b3M/mqdefault.jpg`}
          alt="Amazing Night Sky Short" 
          className="h-full w-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm">Amazing Night Sky Short</h3>
        <p className="text-xs text-gray-500 mt-1">YouTube Short • 0:15</p>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-12 gap-4 mb-6">
      <div className="col-span-12 md:col-span-5">
        <div className={cn(
          "bg-black rounded-xl overflow-hidden transition-all duration-500",
          animate && "transform scale-95"
        )}>
          <div className="relative pb-[56.25%] h-0">
            {renderVideo(selectedVideo)}
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold">{selectedVideo.title}</h3>
      </div>
      
      <div className="col-span-12 md:col-span-1">
        {selectedTab === 'moon' && (
          <ShortVideoCard />
        )}
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
