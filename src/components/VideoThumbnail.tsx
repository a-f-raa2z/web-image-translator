
import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Trophy, PenTool, HelpCircle } from 'lucide-react';

interface VideoThumbnailProps {
  videoId: string;
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
  cardTypes?: ('challengecard' | 'playgroundcard' | 'questioncard')[];
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ 
  videoId, 
  title, 
  isSelected = false,
  onClick,
  cardTypes = []
}) => {
  // Generate YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  // Get icon and color for each card type
  const getCardDetails = (type: string) => {
    switch (type) {
      case 'challengecard':
        return { 
          icon: <Trophy size={16} className="text-orange-500" />,
          bgColor: 'bg-orange-500/10'
        };
      case 'questioncard':
        return { 
          icon: <HelpCircle size={16} className="text-blue-500" />,
          bgColor: 'bg-blue-500/10'
        };
      case 'playgroundcard':
        return { 
          icon: <PenTool size={16} className="text-purple-500" />,
          bgColor: 'bg-purple-500/10'
        };
      default:
        return null;
    }
  };

  return (
    <div 
      className={cn(
        "p-1 cursor-pointer transition-all duration-200",
        "hover:opacity-90"
      )}
      onClick={onClick}
    >
      <div 
        className={cn(
          "w-full overflow-hidden rounded-lg transition-all duration-300 relative",
          isSelected 
            ? "ring-4 ring-blue-500 ring-offset-2 scale-105 shadow-lg" 
            : "ring-1 ring-gray-200 hover:ring-2 hover:ring-blue-300"
        )}
      >
        <AspectRatio ratio={16/9}>
          <img 
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        
        {/* Card type indicators */}
        <div className="absolute top-1 right-1 flex space-x-1">
          {cardTypes.map((type, index) => {
            const details = getCardDetails(type);
            if (!details) return null;
            
            return (
              <div 
                key={`${type}-${index}`} 
                className={cn(
                  "p-1 rounded-md",
                  details.bgColor
                )}
              >
                {details.icon}
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-xs mt-1 font-medium truncate">{title}</p>
    </div>
  );
};

export default VideoThumbnail;
