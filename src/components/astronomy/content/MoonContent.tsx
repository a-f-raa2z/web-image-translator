
import React from 'react';
import { cn } from "@/lib/utils";
import AstronomyChallengeCard from '../../AstronomyChallengeCard';
import AstronomyPlaygroundCard from '../../AstronomyPlaygroundCard';

interface MoonContentProps {
  selectedVideoTitle: string;
  animate: boolean;
}

const MoonContent: React.FC<MoonContentProps> = ({
  selectedVideoTitle,
  animate
}) => {
  // Moon 101
  if (selectedVideoTitle === 'Moon 101') {
    return (
      <>
        <div className="col-span-12 md:col-span-3">
          <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
            <AstronomyChallengeCard 
              title={<span className="text-sm">🌕 Explore the Moon!</span>}
              description="Learn about the Moon's phases and its impact on Earth."
              descriptionClassName="text-sm"
              className="h-full"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className={cn("h-full transition-all duration-500", animate && "animate-bounce-in")}>
            <AstronomyPlaygroundCard
              title={<span className="text-xs">Hold a movie night and dive deep into the innerspace</span>}
              subtitle="Interactive Learning"
              image="/lovable-uploads/moon.png"
              className="h-full"
            />
          </div>
        </div>
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
            image="/lovable-uploads/moon.png"
          />
        </div>
      </div>
    );
  }

  return null;
};

export default MoonContent;
