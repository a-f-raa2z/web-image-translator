
import React from 'react';
import { cn } from "@/lib/utils";
import AstronomyChallengeCard from '../../AstronomyChallengeCard';
import AstronomyPlaygroundCard from '../../AstronomyPlaygroundCard';
import QuestionCard from '../../QuestionCard';

interface EarthContentProps {
  selectedVideoTitle: string;
  animate: boolean;
}

const EarthContent: React.FC<EarthContentProps> = ({
  selectedVideoTitle,
  animate
}) => {
  // Earth 101
  if (selectedVideoTitle === 'Earth 101') {
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
  if (selectedVideoTitle === 'What Earth') {
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

  return null;
};

export default EarthContent;
