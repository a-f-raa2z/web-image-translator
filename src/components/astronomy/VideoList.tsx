
import React from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Video {
  id: string;
  title: string;
  duration: string;
}

interface VideoListProps {
  videos: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  const playVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="space-y-3 py-4">
      {videos.map((video) => (
        <div 
          key={video.id} 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => playVideo(video.id)}
        >
          <div className="relative rounded-md overflow-hidden w-24 h-16 flex-shrink-0">
            <img 
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-8 h-8 text-white opacity-80" />
            </div>
          </div>
          
          <div className="flex-1">
            <h4 className="text-sm font-medium line-clamp-2">{video.title}</h4>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <span>{video.duration}</span>
            </div>
          </div>
          
          <Button 
            size="sm" 
            variant="ghost" 
            className="flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              playVideo(video.id);
            }}
          >
            <ExternalLink size={14} />
            <span>Open</span>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
