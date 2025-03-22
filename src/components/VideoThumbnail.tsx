
import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Trophy, PenTool, HelpCircle, Music } from 'lucide-react';

interface VideoThumbnailProps {
  videoId: string;
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
  cardTypes?: ('challengecard' | 'playgroundcard' | 'questioncard' | 'partycard')[];
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
          icon: <Trophy size={16} className="text-white" />,
          bgColor: 'bg-orange-300',
          label: 'Challenge'
        };
      case 'questioncard':
        return { 
          icon: <HelpCircle size={16} className="text-white" />,
          bgColor: 'bg-blue-300',
          label: 'Question'
        };
      case 'playgroundcard':
        return { 
          icon: <PenTool size={16} className="text-white" />,
          bgColor: 'bg-purple-300',
          label: 'Playground'
        };
      case 'partycard':
        return { 
          icon: <Music size={16} className="text-white" />,
          bgColor: 'bg-yellow-300',
          label: 'Party'
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
        
        {/* Card type indicators - styled as solid circles with lighter colors */}
        <div className="absolute top-1 right-1 flex space-x-1">
          {cardTypes.map((type, index) => {
            const details = getCardDetails(type);
            if (!details) return null;
            
            return (
              <div 
                key={`${type}-${index}`} 
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center transition-transform hover:scale-110",
                  details.bgColor
                )}
                title={details.label}
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
