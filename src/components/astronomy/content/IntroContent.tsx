
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AstronomyChallengeCard from '../../AstronomyChallengeCard';
import GalleryCard from '../GalleryCard';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { PlayCircle, ExternalLink } from 'lucide-react';
import VideoList from '../VideoList';

interface IntroContentProps {
  selectedVideoTitle: string;
  animate: boolean;
}

const IntroContent: React.FC<IntroContentProps> = ({
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
  if (selectedVideoTitle === 'Solar System 101') {
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
              <GalleryCard
                subtitle="NASA Collection"
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
                    className="inline-flex items-center mt-4 text-indigo-600 hover:underline"
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
  if (selectedVideoTitle === 'The Inner Planets') {
    return (
      <div className="col-span-12 md:col-span-3">
        <AstronomyChallengeCard 
          title="🎬 Movie: Interstellar"
          description="Hold a Movie Night and Dive deep into the Innerspace."
        />
      </div>
    );
  }

  return null;
};

export default IntroContent;
