
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
  
  return (
    <TabsContent value={selectedTab} className="mt-0">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Hello, Neighbors!
          </h3>
          <p className="text-gray-600 text-xs">
            Embark on a cosmic journey through the wonders of space. Learn about stars, planets, galaxies, and the mysteries of our universe.
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
                    "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                    index === selectedVideoIndex && "ring-2 ring-purple-500"
                  )}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
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
