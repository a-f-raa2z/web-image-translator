
import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-xl bg-black">
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}?si=xLzBOi0P5CcoYJiY`}
        title="YouTube video player"
        className="w-full h-full aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default VideoPlayer;
