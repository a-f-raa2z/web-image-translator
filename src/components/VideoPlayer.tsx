
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-black">
      <AspectRatio ratio={16/9}>
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?si=xLzBOi0P5CcoYJiY`}
          title="YouTube video player"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ border: 'none' }}
        />
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
