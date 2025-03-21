
import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <iframe 
      src={`https://www.youtube.com/embed/${videoId}?si=xLzBOi0P5CcoYJiY`}
      title="YouTube video player"
      className="w-full aspect-video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  );
};

export default VideoPlayer;
