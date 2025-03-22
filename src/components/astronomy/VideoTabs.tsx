import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { VideoCategory, VideoItem } from './types';

interface VideoTabsProps {
  selectedTab: string;
  videos: VideoItem[];
  selectedVideoIndex: number;
  onThumbnailClick: (index: number, tab: VideoCategory) => void;
}

const VideoTabs: React.FC<VideoTabsProps> = ({
  selectedTab,
  videos,
  selectedVideoIndex,
  onThumbnailClick
}) => {
  const tabName = selectedTab as VideoCategory;
  
  const getTabContent = () => {
    switch(selectedTab) {
      case 'intro':
        return {
          title: "Hello, Neighbors!",
          description: "Embark on a cosmic journey through the wonders of space. Learn about stars, planets, galaxies, and the mysteries of our universe."
        };
      case 'earth':
        return {
          title: "Our Home Planet",
          description: "Explore Earth, the blue marble in space. Discover its unique atmosphere, diverse ecosystems, and the only known world to harbor life in our solar system."
        };
      case 'moon':
        return {
          title: "Earth's Natural Satellite",
          description: "Discover the Moon, Earth's faithful companion. Learn about its phases, craters, and the incredible impact it has on our planet's tides and rhythms."
        };
      default:
        return {
          title: "Hello, Neighbors!",
          description: "Embark on a cosmic journey through the wonders of space. Learn about stars, planets, galaxies, and the mysteries of our universe."
        };
    }
  };

  const content = getTabContent();
  
  const getThumbnail = (video: VideoItem) => {
    if (video.source === 'tiktok') {
      return '/lovable-uploads/earth.gif'; // Placeholder for TikTok videos
    }
    return `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
  };
  
  return (
    <TabsContent value={selectedTab} className="mt-0">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {content.title}
          </h3>
          <p className="text-gray-600 text-xs">
            {content.description}
          </p>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="relative">
            <div className="grid grid-cols-4 gap-2">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => onThumbnailClick(index, tabName)}
                  className={cn(
                    "relative rounded-lg overflow-hidden aspect-video bg-gray-100 transition-all",
                    video.isShort && "mx-auto w-[calc(100%-25px)]",
                    index === selectedVideoIndex 
                      ? "ring-2 ring-purple-500" 
                      : "hover:ring-2 hover:ring-purple-300"
                  )}
                >
                  <img
                    src={getThumbnail(video)}
                    alt={video.title}
                    className={cn(
                      "w-full h-full object-cover",
                      video.isShort && "object-center"
                    )}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-1 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-xs font-medium truncate">{video.title}</p>
                    <p className="text-white/80 text-[10px]">{video.duration}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default VideoTabs;
