
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AstronomyChallengeCard from '../../AstronomyChallengeCard';
import GalleryCard from '../GalleryCard';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { PlayCircle, ExternalLink, Music, PenTool, Image } from 'lucide-react';
import VideoList from '../VideoList';
import { Card, CardContent } from "@/components/ui/card";
import AstronomyPlaygroundCard from '../../AstronomyPlaygroundCard';

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
  const [showMovieDialog, setShowMovieDialog] = useState(false);
  const [showNasaSimulator, setShowNasaSimulator] = useState(false);
  const [showMoonGallery, setShowMoonGallery] = useState(false);
  
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
        <div className="col-span-12 md:col-span-3 h-full">
          <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
            <div 
              onClick={() => setShowNasaSimulator(true)}
              className="cursor-pointer h-full"
            >
              <AstronomyPlaygroundCard 
                subtitle="NASA Interactive"
                title="Eye on the Solar System"
                image="/lovable-uploads/ef87e2b6-d302-4d57-98ca-304b3afffe52.png"
                isExpandable={true}
                className="h-full"
              />
            </div>
          </div>
          
          {/* NASA Simulator Dialog */}
          <Dialog open={showNasaSimulator} onOpenChange={setShowNasaSimulator}>
            <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] p-0">
              <DialogHeader className="p-4">
                <DialogTitle className="flex items-center gap-2">
                  <PenTool className="h-5 w-5 text-purple-500" />
                  <span>NASA's Eye on the Solar System</span>
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  An interactive 3D visualization of the solar system from NASA
                </DialogDescription>
              </DialogHeader>
              <div className="w-full h-[80vh]">
                <iframe 
                  src="https://eyes.nasa.gov/apps/solar-system/#/earth/moons/moon" 
                  title="NASA's Eye on the Solar System"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="col-span-12 md:col-span-3 h-full">
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
                <DialogDescription>
                  Images and information about our solar system from NASA
                </DialogDescription>
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
      <div className="col-span-12 md:col-span-3 h-full">
        <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
          <div 
            onClick={() => setShowMoonGallery(true)}
            className="cursor-pointer h-full"
          >
            <GalleryCard
              subtitle="Earth's Natural Satellite"
              title="Moon Gallery"
              className="h-full"
              image="/lovable-uploads/earth2.jpeg"
              isExpandable={true}
            />
          </div>
        </div>
        
        {/* Moon Gallery Dialog */}
        <Dialog open={showMoonGallery} onOpenChange={setShowMoonGallery}>
          <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Image className="h-5 w-5 text-indigo-500" />
                <span>Moon Gallery</span>
              </DialogTitle>
              <DialogDescription>
                Explore fascinating images and facts about Earth's moon
              </DialogDescription>
            </DialogHeader>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/earth2.jpeg" 
                alt="Moon" 
                className="w-full h-auto object-contain max-h-[70vh]"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">Earth's Moon</h3>
                <p className="text-gray-600 mt-2">
                  The Moon is Earth's only natural satellite and the fifth largest moon in the solar system. 
                  Its presence helps stabilize our planet's wobble and moderate our climate. The Moon's distance 
                  from Earth is about 240,000 miles (385,000km). The Moon has a very thin atmosphere called an exosphere.
                </p>
                <p className="text-gray-600 mt-2">
                  The Moon's surface is cratered and pitted from comet and asteroid impacts. The Moon has no active 
                  tectonic plates, and no active volcanoes. It has a solid, iron-rich inner core, and a somewhat fluid 
                  outer core, which is primarily liquid iron.
                </p>
                <a 
                  href="https://moon.nasa.gov/" 
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
    );
  }

  return null;
};

export default IntroContent;
