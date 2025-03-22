
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { VideoCategory, VideoItem } from './types';
import { Trophy, PenTool, HelpCircle } from 'lucide-react';

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
  
  // Generate card types and icons for videos
  const getCardIcons = (video: VideoItem, tabName: VideoCategory) => {
    const icons = [];
    
    // Return the cardTypes if already defined
    if (video.cardTypes && video.cardTypes.length > 0) {
      return video.cardTypes.map(type => {
        switch(type) {
          case 'challengecard':
            return { 
              type: 'challengecard', 
              icon: <Trophy size={16} className="text-orange-500" />,
              bgColor: 'bg-orange-500',
              label: 'Challenge'
            };
          case 'questioncard':
            return { 
              type: 'questioncard', 
              icon: <HelpCircle size={16} className="text-blue-500" />,
              bgColor: 'bg-blue-500',
              label: 'Question'
            };
          case 'playgroundcard':
            return { 
              type: 'playgroundcard', 
              icon: <PenTool size={16} className="text-purple-500" />,
              bgColor: 'bg-purple-500',
              label: 'Playground'
            };
          default:
            return null;
        }
      }).filter(Boolean);
    }
    
    // Legacy code for backward compatibility
    // For intro tab
    if (tabName === 'intro') {
      if (video.title === 'Solar System 101' || video.title === 'The Inner Planets') {
        icons.push({ 
          type: 'challengecard', 
          icon: <Trophy size={16} className="text-white" />,
          bgColor: 'bg-orange-500',
          label: 'Challenge'
        });
      }
    }
    
    // For earth tab
    if (tabName === 'earth') {
      if (video.title === 'Earth 101') {
        icons.push({ 
          type: 'challengecard', 
          icon: <Trophy size={16} className="text-white" />,
          bgColor: 'bg-orange-500',
          label: 'Challenge'
        });
      }
      if (video.title === 'What Earth') {
        icons.push({ 
          type: 'questioncard', 
          icon: <HelpCircle size={16} className="text-white" />,
          bgColor: 'bg-blue-500',
          label: 'Question'
        });
      }
    }
    
    // For moon tab
    if (tabName === 'moon') {
      if (video.title === 'Moon 101' || video.title === 'Amazing Timelapse Supermoon') {
        icons.push({ 
          type: 'challengecard', 
          icon: <Trophy size={16} className="text-white" />,
          bgColor: 'bg-orange-500',
          label: 'Challenge'
        });
      }
      if (video.title === 'Lunar Eclipse 101' || video.title === 'Solar Eclipse 101') {
        icons.push({ 
          type: 'playgroundcard', 
          icon: <PenTool size={16} className="text-white" />,
          bgColor: 'bg-purple-500',
          label: 'Playground'
        });
      }
    }
    
    return icons;
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
              {videos.map((video, index) => {
                const cardIcons = getCardIcons(video, tabName);
                
                return (
                  <button
                    key={video.id}
                    onClick={() => onThumbnailClick(index, tabName)}
                    className={cn(
                      "relative rounded-lg overflow-hidden aspect-video bg-gray-100 transition-all",
                      index === selectedVideoIndex 
                        ? "ring-2 ring-purple-500" 
                        : "hover:ring-2 hover:ring-purple-300"
                    )}
                  >
                    <img
                      src={getThumbnail(video)}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Card type indicators - styled as solid circles */}
                    <div className="absolute top-1 right-1 flex space-x-1">
                      {cardIcons.map((card, i) => (
                        <div 
                          key={`${card.type}-${i}`}
                          className={cn(
                            "p-1 rounded-full w-6 h-6 flex items-center justify-center",
                            card.bgColor
                          )}
                          title={card.label}
                        >
                          {card.icon}
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-1 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-xs font-medium truncate">{video.title}</p>
                      <p className="text-white/80 text-[10px]">{video.duration}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default VideoTabs;
