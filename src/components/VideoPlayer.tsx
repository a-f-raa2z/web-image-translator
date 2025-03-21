
import React, { useEffect, useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  // Use a key to force iframe to reload when videoId changes
  const [embedUrl, setEmbedUrl] = useState(`https://www.youtube.com/embed/${videoId}?si=xLzBOi0P5CcoYJiY`);
  
  useEffect(() => {
    setEmbedUrl(`https://www.youtube.com/embed/${videoId}?si=xLzBOi0P5CcoYJiY`);
  }, [videoId]);

  return (
    <div className="w-full overflow-hidden rounded-xl bg-black">
      <AspectRatio ratio={16/9}>
        <iframe 
          src={embedUrl}
          title="YouTube video player"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ border: 'none' }}
          key={videoId} // This forces the iframe to reload when videoId changes
        />
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
