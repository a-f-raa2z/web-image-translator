import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import VideoPlayer from './VideoPlayer';
import AstronomyPlaygroundCard from './AstronomyPlaygroundCard';
import AstronomyChallengeCard from './AstronomyChallengeCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AstronomyActivitiesSection from './AstronomyActivitiesSection';
import AstronomyExploreSection from './AstronomyExploreSection';
import AstronomyCommunitySection from './AstronomyCommunitySection';
import QuestionCard from './QuestionCard'; //
import ChallengeCard2 from './ChallengeCard2';
import PlaygroundCard2 from './PlaygroundCard2';
import ChallengeCardPlaceholder from './ChallengeCardPlaceholder';
import PlaygroundCardPlaceholder from './PlaygroundCardPlaceholder';
import ChallengeCard3 from './ChallengeCard3';

const AstronomyLearningSection: React.FC = () => {
  const [selectedIntroVideoIndex, setSelectedIntroVideoIndex] = useState(0);
  const [selectedEarthVideoIndex, setSelectedEarthVideoIndex] = useState(0);
  const [selectedMoonVideoIndex, setSelectedMoonVideoIndex] = useState(0); 
  const [animate, setAnimate] = useState(false);
  const [selectedTab, setSelectedTab] = useState('intro'); 

  const introVideos = [
    { id: 'libKVRa01L8', title: 'Solar System 101', duration: '4:10' },
    { id: '05E1uMh15QQ', title: 'The Inner Planets', duration: '2:12' },
  ];

  const earthVideos = [
    { id: 'HCDVN7DCzYE', title: 'Earth 101', duration: '3:32' },
    { id: 'mrYjJ9Jl9dA', title: 'What Earth', duration: '19:18' }
  ];

  const moonVideos = [
    { id: '6AviDjR9mmo', title: 'Moon 101', duration: '3:05' },
    { id: 'lhKMQIRdaeo', title: 'What is a Supermoon', duration: '2:14' },
    { id: 'VW2xRR75lKE', title: 'Lunar Eclipse 101', duration: '2:14' },
    { id: 'cxrLRbkOwKs', title: 'Solar Eclipse 101', duration: '2:14' }
  ];

  const handleThumbnailClick = (index: number, tab: 'intro' | 'earth' | 'moon') => {
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
    setSelectedTab(value); 
  };

  const isPlanetsVideoSelected = introVideos[selectedIntroVideoIndex].title === 'Solar System 101';
  const isInnerPlanetsVideoSelected = introVideos[selectedIntroVideoIndex].title === 'The Inner Planets';
  const isEarthVideoSelected = earthVideos[selectedEarthVideoIndex].title === 'Earth 101';
  const isMoonVideoSelected = moonVideos[selectedMoonVideoIndex].title === 'Moon 101';
  const isWhatEarthVideoSelected = earthVideos[selectedEarthVideoIndex].title === 'What Earth';
  const isMoonTabSelected = selectedTab === 'moon';

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">My Learning</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-6">
          <div className="h-full rounded-xl overflow-hidden shadow-md bg-black transition-all duration-300 animate-scale-in">
            {/* Display the correct video based on selected tab */}
            <VideoPlayer
              videoId={
                selectedTab === 'intro'
                  ? introVideos[selectedIntroVideoIndex].id
                  : selectedTab === 'earth'
                  ? earthVideos[selectedEarthVideoIndex].id
                  : selectedTab === 'moon'
                  ? moonVideos[selectedMoonVideoIndex].id
                  : ''
              }
            />
          </div>
        </div>
        
        {/* Show relevant cards based on selected tab */}
        {selectedTab === 'intro' && isPlanetsVideoSelected && (
          <>
            <div className="col-span-12 md:col-span-3">
              <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
                <AstronomyChallengeCard 
                  title="🎬 The Planets In Our Solar System"
                  description="Watch this and tell the story of the complete life cycle of a star"
                  descriptionClassName="text-sm"
                  className="h-full"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
                <AstronomyPlaygroundCard
                  subtitle="Sneak Peak"
                  title="Solar System | NASA"
                  className="h-full"
                  image="/lovable-uploads/solar.png"
                />
              </div>
            </div>
          </>
        )}

        {selectedTab === 'intro' && isInnerPlanetsVideoSelected && (
          <>
            <div className="col-span-12 md:col-span-3">
              <AstronomyChallengeCard 
                title="🎬 Movie: Interstellar"
                description="Hold a Movie Night and Dive deep into the Innerspace."
              />
            </div>
          </>
        )}

        {/* Show relevant cards based on the Earth tab */}
        {selectedTab === 'earth' && isEarthVideoSelected && (
          <>
            <div className="col-span-12 md:col-span-3">
              <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
                <AstronomyChallengeCard 
                  title="Blue Planet Highlights"
                  description="BBC Documentary"
                  videoId="Iyq4U1k5rRc"
                  descriptionClassName="text-sm"
                  className="h-full"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
            <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
                <AstronomyPlaygroundCard
                  subtitle="Carl Sagan, Pale Blue Dot."
                  title="Look again at that dot. That's here. That's home. That's us. "
                  className="h-full"
                  image="/lovable-uploads/earth2.jpeg"
                />
              </div>
            </div>
          </>
        )}

        {selectedTab === 'earth' && isWhatEarthVideoSelected && (
          <>
                      <div className="col-span-12 md:col-span-3">
          <QuestionCard 
                  option1="A) 1.5 billion years"
                  option2 = "B) 4.5 billion years"
                  option3 = "C) 6.8 billion years"
                  option4 = "D) 10 billion years"

                  title="What is the approximate age of Earth?"
                  className="h-full"
                  image="/lovable-uploads/earth2.jpeg"
          />
          </div>

            <div className="col-span-12 md:col-span-3">
                <AstronomyPlaygroundCard
                  subtitle="World Geography Games"
                  title="🎮 Earth Structure "
                  className="h-full"
                  image="/lovable-uploads/world-game.png"
                />
            </div>

          </>
        )}

        {/* Cards for the Moon tab */}
        {selectedTab === 'moon' && isMoonVideoSelected && (
          <>
            <div className="col-span-12 md:col-span-3">
              <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
                <AstronomyChallengeCard 
                  title="🌕 Explore the Moon!"
                  description="Learn about the Moon's phases and its impact on Earth."
                  descriptionClassName="text-sm"
                  className="h-full"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
                <AstronomyPlaygroundCard
                  title="Moon Exploration"
                  subtitle="Interactive Learning"
                  image="/lovable-uploads/moon.png"
                  className="h-full"
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-6 bg-purple-100 rounded-2xl p-0 md:p-0">
        <div className="p-6">
          <Tabs defaultValue="intro" onValueChange={handleTabChange}>
            <TabsList className="mb-4 bg-transparent p-0 shadow-none space-x-4">
              <TabsTrigger 
                value="intro" 
                className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
              >
                Intro to the Neighbors
              </TabsTrigger>
              <TabsTrigger 
                value="earth" 
                className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
              >
                Earth
              </TabsTrigger>
              <TabsTrigger 
                value="moon" 
                className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
              >
                Moon
              </TabsTrigger>
            </TabsList>

            {/* Tab content for videos */}
            <TabsContent value="intro" className="mt-0">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hello, Neighbors!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Embark on a cosmic journey through the wonders of space. Learn about stars, planets, galaxies, and the mysteries of our universe.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-4">
                      {introVideos.map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => handleThumbnailClick(index, 'intro')}
                          className={cn(
                            "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                            index === selectedIntroVideoIndex && "ring-2 ring-purple-500"
                          )}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-xs font-medium truncate">{video.title}</p>
                            <p className="text-white/80 text-xs">{video.duration}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="earth" className="mt-0">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hello, Neighbors!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Embark on a cosmic journey through the wonders of space. Learn about stars, planets, galaxies, and the mysteries of our universe.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-4">
                      {earthVideos.map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => handleThumbnailClick(index, 'earth')}
                          className={cn(
                            "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                            index === selectedEarthVideoIndex && "ring-2 ring-purple-500"
                          )}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-xs font-medium truncate">{video.title}</p>
                            <p className="text-white/80 text-xs">{video.duration}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="moon" className="mt-0">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hello, Neighbors!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Embark on a cosmic journey through the wonders of space. Learn about stars, planets, galaxies, and the mysteries of our universe.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-4">
                      {moonVideos.map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => handleThumbnailClick(index, 'moon')}
                          className={cn(
                            "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                            index === selectedMoonVideoIndex && "ring-2 ring-purple-500"
                          )}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-xs font-medium truncate">{video.title}</p>
                            <p className="text-white/80 text-xs">{video.duration}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="col-span-1 md:col-span-12">
        <AstronomyActivitiesSection />
      </div>
      <div className="col-span-1 md:col-span-12">
        <AstronomyCommunitySection />
      </div>
      <div className="col-span-1 md:col-span-12">
        <AstronomyExploreSection />
      </div>
    </section>
  );
};

export default AstronomyLearningSection;
