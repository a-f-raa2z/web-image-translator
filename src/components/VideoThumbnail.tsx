
import React from 'react';
import { cn } from '@/lib/utils';

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
          "w-full h-24 rounded-lg overflow-hidden",
          isSelected ? "ring-4 ring-blue-500 ring-offset-2" : "ring-1 ring-gray-200"
        )}
      >
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="w-full h-full object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: 'none' }}
        />
      </div>
      <p className="text-xs mt-2 font-medium truncate">{title}</p>
    </div>
  );
};

export default VideoThumbnail;
