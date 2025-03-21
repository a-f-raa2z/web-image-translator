
import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoThumbnailProps {
  videoId: string;
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ 
  videoId, 
  title, 
  isSelected = false,
  onClick 
}) => {
  // Generate YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <div 
      className={cn(
        "p-2 cursor-pointer transition-all duration-200",
        "hover:opacity-90"
      )}
      onClick={onClick}
    >
      <div 
        className={cn(
          "w-full overflow-hidden rounded-lg",
          isSelected ? "ring-4 ring-blue-500 ring-offset-2" : "ring-1 ring-gray-200"
        )}
      >
        <AspectRatio ratio={16/9}>
          <img 
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
      <p className="text-xs mt-2 font-medium truncate">{title}</p>
    </div>
  );
};

export default VideoThumbnail;
