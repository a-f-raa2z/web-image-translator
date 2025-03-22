
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AstronomyChallengeCard from '../../AstronomyChallengeCard';
import AstronomyPlaygroundCard from '../../AstronomyPlaygroundCard';
import GalleryCard from '../GalleryCard';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink } from 'lucide-react';

interface MoonContentProps {
  selectedVideoTitle: string;
  animate: boolean;
}

const MoonContent: React.FC<MoonContentProps> = ({
  selectedVideoTitle,
  animate
}) => {
  const [showMoonGalleryDialog, setShowMoonGalleryDialog] = useState(false);

  // Moon 101
  if (selectedVideoTitle === 'Moon 101') {
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
            <div 
              onClick={() => setShowMoonGalleryDialog(true)}
              className="cursor-pointer h-full"
            >
              <GalleryCard
                subtitle="NASA Collection"
                title="Moon Gallery"
                image="/lovable-uploads/c7dd59b9-9959-4b74-9033-d5a95dc665d8.png"
                className="h-full"
                isExpandable={true}
              />
            </div>
          </div>
        </div>

        {/* Moon Gallery Dialog */}
        <Dialog open={showMoonGalleryDialog} onOpenChange={setShowMoonGalleryDialog}>
          <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh]">
            <DialogHeader>
              <DialogTitle>Moon Gallery | NASA</DialogTitle>
              <DialogDescription>
                Beautiful images of Earth's natural satellite
              </DialogDescription>
            </DialogHeader>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/c7dd59b9-9959-4b74-9033-d5a95dc665d8.png" 
                alt="Moon" 
                className="w-full h-auto object-contain max-h-[70vh]"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">Our Moon</h3>
                <p className="text-gray-600 mt-2">
                  The Moon is Earth's only natural satellite and the fifth largest moon in the solar system. Its presence helps stabilize our planet's wobble and moderate our climate. The Moon's distance from Earth is about 238,855 miles (384,400 kilometers).
                </p>
                <a 
                  href="https://moon.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center mt-4 text-indigo-600 hover:underline"
                >
                  Learn more at NASA Moon <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Amazing Timelapse Supermoon
  if (selectedVideoTitle === 'Amazing Timelapse Supermoon') {
    return (
      <div className="col-span-12 md:col-span-3">
        <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
          <AstronomyChallengeCard 
            title="🌓 Moon Phases"
            description="Learn about the different phases of the moon and how they affect Earth"
            descriptionClassName="text-sm"
            className="h-full"
            videoId="0GZTVDM3b3M"
          />
        </div>
      </div>
    );
  }
  
  // Lunar Eclipse 101 and Solar Eclipse 101
  if (selectedVideoTitle === 'Lunar Eclipse 101' || selectedVideoTitle === 'Solar Eclipse 101') {
    return (
      <div className="col-span-12 md:col-span-3">
        <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
          <AstronomyPlaygroundCard
            subtitle="Interactive Eclipse Viewer"
            title={selectedVideoTitle === 'Lunar Eclipse 101' ? 
              "🌘 Lunar Eclipse Simulator" : 
              "🌞 Solar Eclipse Simulator"}
            className="h-full"
            image="/lovable-uploads/c7dd59b9-9959-4b74-9033-d5a95dc665d8.png"
          />
        </div>
      </div>
    );
  }

  return null;
};

export default MoonContent;
