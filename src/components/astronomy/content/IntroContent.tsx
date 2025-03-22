
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AstronomyChallengeCard from '../../AstronomyChallengeCard';
import GalleryCard from '../GalleryCard';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { PlayCircle, ExternalLink, Music, PenTool } from 'lucide-react';
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
              onClick={() => setShowNasaSimulator(true)}
              className="cursor-pointer h-full"
            >
              <AstronomyPlaygroundCard 
                subtitle="NASA Interactive"
                title="Eye on the Solar System"
                image="/lovable-uploads/solar.png"
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
        <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
          <div 
            onClick={() => setShowMovieDialog(true)}
            className="cursor-pointer h-full"
          >
            <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-all relative bg-yellow-100 border-yellow-300">
              <div className="absolute top-2 left-3 z-10 bg-yellow-100 px-2 py-1 rounded text-xs font-semibold text-yellow-700 flex items-center gap-1">
                <Music size={14} />
                <span>Party</span>
              </div>
              
              <div className="h-40 overflow-hidden">
                <img 
                  src="/lovable-uploads/interstellar.jpeg" 
                  alt="Interstellar movie" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">🎬 Movie: Interstellar</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Hold a Movie Night and Dive deep into the Innerspace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Movie Dialog */}
        <Dialog open={showMovieDialog} onOpenChange={setShowMovieDialog}>
          <DialogContent className="sm:max-w-[680px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Music className="h-5 w-5 text-yellow-500" />
                <span>Movie Night: Interstellar</span>
              </DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <img 
                src="/lovable-uploads/interstellar.jpeg" 
                alt="Interstellar movie" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">About the Movie</h3>
              <p className="text-gray-600 mt-2">
                Interstellar is a 2014 epic science fiction film directed and produced by Christopher Nolan. 
                It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, and Michael Caine. Set in a 
                dystopian future where humanity is struggling to survive, the film follows a group of astronauts 
                who travel through a wormhole near Saturn in search of a new home for mankind.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Party Ideas:</h4>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                  <li>Make space-themed snacks</li>
                  <li>Create a "space" atmosphere with dim lighting and star projectors</li>
                  <li>Prepare discussion topics about space travel and relativity</li>
                  <li>Have guests bring astronomy facts to share</li>
                </ul>
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
