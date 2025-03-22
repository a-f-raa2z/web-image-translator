
import React, { useState } from 'react';
import AstronomyActivitiesSection from './AstronomyActivitiesSection';
import AstronomyExploreSection from './AstronomyExploreSection';
import AstronomyCommunitySection from './AstronomyCommunitySection';
import { VideoCategory } from './astronomy/types';
import CourseSelector from './astronomy/CourseSelector';
import LearningContentContainer from './astronomy/LearningContentContainer';
import { useCourseVideoData } from './astronomy/CourseVideoData';

const AstronomyLearningSection: React.FC = () => {
  const [selectedIntroVideoIndex, setSelectedIntroVideoIndex] = useState(0);
  const [selectedEarthVideoIndex, setSelectedEarthVideoIndex] = useState(0);
  const [selectedMoonVideoIndex, setSelectedMoonVideoIndex] = useState(0); 
  const [animate, setAnimate] = useState(false);
  const [selectedTab, setSelectedTab] = useState<VideoCategory>('intro'); 

  const videoData = useCourseVideoData();

  const selectedIndices = {
    intro: selectedIntroVideoIndex,
    earth: selectedEarthVideoIndex,
    moon: selectedMoonVideoIndex
  };

  const handleThumbnailClick = (index: number, tab: VideoCategory) => {
    setAnimate(true);
    if (tab === 'intro') {
      setSelectedIntroVideoIndex(index);
    } else if (tab === 'earth') {
      setSelectedEarthVideoIndex(index);
    } else if (tab === 'moon') {
      setSelectedMoonVideoIndex(index);
    }
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  const handleTabChange = (value: string) => {
    setSelectedTab(value as VideoCategory); 
  };

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Current Course:</h2>
          <CourseSelector selectedTab={selectedTab} />
        </div>
      </div>
      
      <LearningContentContainer 
        selectedTab={selectedTab}
        videoData={videoData}
        selectedIndices={selectedIndices}
        animate={animate}
        onTabChange={handleTabChange}
        onThumbnailClick={handleThumbnailClick}
      />

      <div className="mt-6">
        <AstronomyActivitiesSection />
      </div>
      <div className="mt-6">
        <AstronomyCommunitySection />
      </div>
      <div className="mt-6">
        <AstronomyExploreSection />
      </div>
    </section>
  );
};

export default AstronomyLearningSection;
