
import React, { useEffect, useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  // Use a key to force iframe to reload when videoId changes
  const [embedUrl, setEmbedUrl] = useState(`https://www.youtube.com/embed/${videoId}?si=xLzBOi0P5CcoYJiY`);
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    // Start fade-out animation
    setIsChanging(true);
    
    // Change the video after a short delay
    const timer = setTimeout(() => {
      setEmbedUrl(`https://www.youtube.com/embed/${videoId}?si=xLzBOi0P5CcoYJiY`);
      setIsChanging(false);
    }, 300); // This should match the CSS transition duration
    
    return () => clearTimeout(timer);
  }, [videoId]);

  return (
    <div className={cn(
      "w-full h-full overflow-hidden rounded-xl bg-black transition-all duration-500",
      isChanging ? "scale-95 opacity-80" : "scale-100 opacity-100"
    )}>
      <AspectRatio ratio={16/9} className="h-full">
        <div className={`w-full h-full transition-opacity duration-300 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
          <iframe 
            src={embedUrl}
            title="YouTube video player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ border: 'none' }}
            key={videoId} // This forces the iframe to reload when videoId changes
          />
        </div>
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
