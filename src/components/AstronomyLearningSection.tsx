import React, { useState, useEffect } from 'react';
import { Map, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from "@/lib/utils";
import VideoPlayer from './VideoPlayer';
import AstronomyPlaygroundCard from './AstronomyPlaygroundCard';
import AstronomyChallengeCard from './AstronomyChallengeCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AstronomyActivitiesSection from './AstronomyActivitiesSection';
import AstronomyExploreSection from './AstronomyExploreSection';
import AstronomyCommunitySection from './AstronomyCommunitySection';

const AstronomyLearningSection: React.FC = () => {
  const [selectedIntroVideoIndex, setSelectedIntroVideoIndex] = useState(0);
  const [selectedNeighboringVideoIndex, setSelectedNeighboringVideoIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  
  const introVideos = [
    {
      id: 'libKVRa01L8',
      title: 'Solar System 101',
      duration: '4:10'
    },
    {
      id: '05E1uMh15QQ',
      title: 'The Inner Planets',
      duration: '2:12'
    },

  ];

  const neighboringVideos = [
    {
      id: 'HCDVN7DCzYE',
      title: 'Earth 101',
      duration: '3:32'
    },
    {
      id: 'mrYjJ9Jl9dA',
      title: 'What They Didnt Teach You',
      duration: '19:18'
    }
  ];

  const extraVideos = [
    {
      id: 'ZW3aV7U-aik',
      title: 'Black Holes',
      duration: '2:45'
    },
    {
      id: 'N7d_RWyOv20',
      title: 'Dark Matter',
      duration: '3:10'
    }
  ];

  const marsVideos = [
    {
      id: 'ZW3aV7U-aik',
      title: 'Black Holes',
      duration: '2:45'
    },
    {
      id: 'N7d_RWyOv20',
      title: 'Dark Matter',
      duration: '3:10'
    }
  ];

  const handleThumbnailClick = (index: number, tab: 'intro' | 'neighboring') => {
    setAnimate(true);
    if (tab === 'intro') {
      setSelectedIntroVideoIndex(index);
    } else {
      setSelectedNeighboringVideoIndex(index);
    }
    
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = (videos: typeof introVideos) => {
    setStartIndex(Math.min(startIndex + 1, videos.length - 4));
  };

  useEffect(() => {
    console.log("LearningSection component mounted");
  }, []);

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">My Learning</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-6">
          <div className="h-full rounded-xl overflow-hidden shadow-md bg-black transition-all duration-300 animate-scale-in">
            <VideoPlayer videoId={introVideos[selectedIntroVideoIndex].id} />
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <div className={cn(
            "h-full transition-all duration-500",
            animate && "animate-bounce-in"
          )}>
            <AstronomyChallengeCard 
              title="Star Life Cycle"
              description="Watch this video and explain the complete life cycle of a star"
              descriptionClassName="text-sm"
              className="h-full"
            />
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <div className={cn(
            "h-full transition-all duration-500",
            animate && "animate-bounce-in"
          )}>
            <AstronomyPlaygroundCard
              subtitle="You've unlocked"
              title="Sunrise on Mars"
              className="h-full"
              image="/lovable-uploads/sunrise-on-mars-detlev-van-ravenswaay.jpg"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-purple-100 rounded-2xl p-0 md:p-0">
        <div className="p-6">
          <Tabs defaultValue="intro">
          <TabsList className="mb-4 bg-transparent p-0 shadow-none space-x-4">
  <TabsTrigger 
    value="intro" 
    className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
  >
    Intro to the Neighbors
  </TabsTrigger>
  <TabsTrigger 
    value="neighboring" 
    className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
  >
    Earch
  </TabsTrigger>
  <TabsTrigger 
    value="moon" 
    className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
  >
    Moon
  </TabsTrigger>
  <TabsTrigger 
    value="mars" 
    className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
  >
    Mars
  </TabsTrigger>
</TabsList>






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
                      {introVideos.slice(startIndex, startIndex + 4).map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => handleThumbnailClick(index + startIndex, 'intro')}
                          className={cn(
                            "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                            index + startIndex === selectedIntroVideoIndex && "ring-2 ring-purple-500"
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
                    
                    {startIndex > 0 && (
                      <button 
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50"
                      >
                        <ChevronLeft size={20} className="text-gray-600" />
                      </button>
                    )}
                    
                    {startIndex < introVideos.length - 4 && (
                      <button 
                        onClick={() => handleNext(introVideos)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50"
                      >
                        <ChevronRight size={20} className="text-gray-600" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="neighboring" className="mt-0">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    Explore Our Neighbors
                  </h3>
                  <p className="text-purple-600 text-sm">
                    Discover the fascinating worlds in our solar system. From the rings of Saturn to the storms of Jupiter, each planet has its own unique story.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="grid grid-cols-4 gap-4">
                    {neighboringVideos.map((video, index) => (
                      <button
                        key={video.id}
                        onClick={() => handleThumbnailClick(index, 'neighboring')}
                        className={cn(
                          "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                          index === selectedNeighboringVideoIndex && "ring-2 ring-purple-500"
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
            </TabsContent>

            <TabsContent value="moon" className="mt-0">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    Advanced Concepts
                  </h3>
                  <p className="text-purple-600 text-sm">
                    Dive deep into the most mysterious phenomena of our universe. Explore black holes, dark matter, and the fabric of spacetime itself.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="grid grid-cols-4 gap-4">
                    {extraVideos.map((video, index) => (
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
            </TabsContent>
            <TabsContent value="mars" className="mt-0">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    Advanced Concepts
                  </h3>
                  <p className="text-purple-600 text-sm">
                    Dive deep into the most mysterious phenomena of our universe. Explore black holes, dark matter, and the fabric of spacetime itself.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="grid grid-cols-4 gap-4">
                    {extraVideos.map((video, index) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
<br></br>
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