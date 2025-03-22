
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { VideoCategory, VideoItem } from './types';
import TabContentHeader from './TabContentHeader';
import VideoTabThumbnail from './VideoTabThumbnail';

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
  
  return (
    <TabsContent value={selectedTab} className="mt-0">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3">
          <TabContentHeader 
            title={content.title} 
            description={content.description} 
          />
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="relative">
            <div className="grid grid-cols-4 gap-2">
              {videos.map((video, index) => (
                <VideoTabThumbnail
                  key={video.id}
                  video={video}
                  index={index}
                  tabName={tabName}
                  selectedVideoIndex={selectedVideoIndex}
                  onThumbnailClick={onThumbnailClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default VideoTabs;
