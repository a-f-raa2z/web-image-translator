
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AstronomyChallengeCard from '../AstronomyChallengeCard';
import AstronomyPlaygroundCard from '../AstronomyPlaygroundCard';
import QuestionCard from '../QuestionCard';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { PlayCircle, ExternalLink } from 'lucide-react';
import VideoList from './VideoList';

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
  const [showVideosDialog, setShowVideosDialog] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  
  // Videos for the Solar System challenge card
  const solarSystemVideos = [
    { id: 'libKVRa01L8', title: 'The Complete Solar System', duration: '4:10' },
    { id: '05E1uMh15QQ', title: 'The Inner Planets', duration: '2:12' },
    { id: 'kfS5VfL-MV8', title: 'Outer Planets Overview', duration: '3:21' },
    { id: 'HSMuF-rYxeQ', title: 'Scale of Our Solar System', duration: '5:43' }
  ];

  // Solar System 101
  if (selectedTab === 'intro' && selectedVideoTitle === 'Solar System 101') {
    return (
      <>
        <div className="col-span-12 md:col-span-3">
          <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
            <div 
              onClick={() => setShowVideosDialog(true)}
              className="cursor-pointer h-full"
            >
              <AstronomyChallengeCard 
                title="🎬 The Planets In Our Solar System"
                description="Watch this playlist to learn about all planets in our solar system"
                descriptionClassName="text-sm"
                className="h-full"
                hasVideos={true}
              />
            </div>
          </div>
          
          {/* Videos Dialog */}
          <Dialog open={showVideosDialog} onOpenChange={setShowVideosDialog}>
            <DialogContent className="sm:max-w-[680px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-purple-500" />
                  <span>Planets In Our Solar System</span>
                </DialogTitle>
              </DialogHeader>
              <VideoList videos={solarSystemVideos} />
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="col-span-12 md:col-span-3">
          <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
            <div 
              onClick={() => setShowImageDialog(true)}
              className="cursor-pointer h-full"
            >
              <AstronomyPlaygroundCard
                subtitle="Sneak Peak"
                title="Solar System | NASA"
                className="h-full"
                image="/lovable-uploads/solar.png"
                isExpandable={true}
              />
            </div>
          </div>
          
          {/* Expanded Image Dialog */}
          <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
            <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh]">
              <DialogHeader>
                <DialogTitle>Solar System | NASA</DialogTitle>
              </DialogHeader>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/solar.png" 
                  alt="Solar System" 
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold">Our Solar System</h3>
                  <p className="text-gray-600 mt-2">
                    Our solar system consists of our star, the Sun, and everything bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids.
                  </p>
                  <a 
                    href="https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center mt-4 text-purple-600 hover:underline"
                  >
                    Learn more at NASA <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </>
    );
  }

  // The Inner Planets
  if (selectedTab === 'intro' && selectedVideoTitle === 'The Inner Planets') {
    return (
      <div className="col-span-12 md:col-span-3">
        <AstronomyChallengeCard 
          title="🎬 Movie: Interstellar"
          description="Hold a Movie Night and Dive deep into the Innerspace."
        />
      </div>
    );
  }

  // Earth 101
  if (selectedTab === 'earth' && selectedVideoTitle === 'Earth 101') {
    return (
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
    );
  }

  // What Earth
  if (selectedTab === 'earth' && selectedVideoTitle === 'What Earth') {
    return (
      <>
        <div className="col-span-12 md:col-span-3">
          <QuestionCard 
            option1="A) 1.5 billion years"
            option2="B) 4.5 billion years"
            option3="C) 6.8 billion years"
            option4="D) 10 billion years"
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
    );
  }

  // Moon 101
  if (selectedTab === 'moon' && selectedVideoTitle === 'Moon 101') {
    return (
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
    );
  }

  return null;
};

export default VideoContentCards;
