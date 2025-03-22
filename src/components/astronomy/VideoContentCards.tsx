
import React from 'react';
import IntroContent from './content/IntroContent';
import EarthContent from './content/EarthContent';
import MoonContent from './content/MoonContent';

interface VideoContentCardsProps {
  selectedTab: string;
  selectedVideoTitle: string;
  animate: boolean;
}

const VideoContentCards: React.FC<VideoContentCardsProps> = ({
  selectedTab,
  selectedVideoTitle,
  animate
}) => {
  // Render appropriate content based on the selected tab
  if (selectedTab === 'intro') {
    return (
      <IntroContent
        selectedVideoTitle={selectedVideoTitle}
        animate={animate}
      />
    );
  }
  
  if (selectedTab === 'earth') {
    return (
      <EarthContent
        selectedVideoTitle={selectedVideoTitle}
        animate={animate}
      />
    );
  }
  
  if (selectedTab === 'moon') {
    return (
      <MoonContent
        selectedVideoTitle={selectedVideoTitle}
        animate={animate}
      />
    );
  }

  return null;
};

export default VideoContentCards;
