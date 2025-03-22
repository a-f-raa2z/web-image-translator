
import React from 'react';
import { cn } from "@/lib/utils";
import { VideoItem, VideoCategory } from './types';
import CardTypeIndicator, { CardType } from './CardTypeIndicator';
import { Images } from 'lucide-react';

interface VideoTabThumbnailProps {
  video: VideoItem;
  index: number;
  tabName: VideoCategory;
  selectedVideoIndex: number;
  onThumbnailClick: (index: number, tab: VideoCategory) => void;
}

const VideoTabThumbnail: React.FC<VideoTabThumbnailProps> = ({
  video,
  index,
  tabName,
  selectedVideoIndex,
  onThumbnailClick
}) => {
  const getThumbnail = (video: VideoItem) => {
    if (video.source === 'tiktok') {
      return '/lovable-uploads/earth.gif'; // Placeholder for TikTok videos
    }
    return `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
  };
  
  // Check if video has gallery content
  const hasGallery = video.cardTypes?.includes('gallerycard');
  
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
      
      {/* Card type indicators */}
      <div className="absolute top-1 right-1 flex space-x-1">
        {video.cardTypes && video.cardTypes.map((type, i) => (
          <CardTypeIndicator 
            key={`${type}-${i}`} 
            type={type as CardType} 
          />
        ))}
      </div>
      
      {/* Gallery icon indicator */}
      {hasGallery && (
        <div className="absolute top-1 left-1 bg-black/60 rounded-md p-1">
          <Images size={16} className="text-white" />
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-1 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-xs font-medium truncate">{video.title}</p>
        <p className="text-white/80 text-[10px]">{video.duration}</p>
      </div>
    </button>
  );
};

export default VideoTabThumbnail;
