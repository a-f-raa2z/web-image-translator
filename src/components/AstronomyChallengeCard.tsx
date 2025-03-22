
import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Award, Play, Trophy } from 'lucide-react';

interface AstronomyChallengeCardProps {
  title?: string;
  description?: string;
  descriptionClassName?: string;
  className?: string;
  videoId?: string;
  onClick?: () => void;
  hasVideos?: boolean;
  image?: string;
}

const AstronomyChallengeCard: React.FC<AstronomyChallengeCardProps> = ({
  title = "Challenge",
  description = "Explain the life cycle of a star from birth to death",
  descriptionClassName,
  className,
  videoId = "lcZTcfdZ3Ow",
  onClick,
  hasVideos,
  image
}) => {
  return (
    <div 
      className={cn(
        "bg-orange-500 rounded-xl shadow-md overflow-hidden h-full flex flex-col relative",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute top-2 left-3 z-10 bg-orange-100 px-2 py-1 rounded text-xs font-semibold text-orange-700">
        <Trophy size={14} className="inline mr-1" />
        Challenge
      </div>
      
      {image && (
        <div className="absolute top-3 right-3 z-10">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col justify-center">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white">{title}</h3>
            </div>
            <p className={cn(
              "text-white mt-2",
              descriptionClassName
            )}>
              {description}
            </p>
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2">
            {hasVideos ? (
              <>
                <Play size={16} className="text-white" />
                <span className="text-sm text-white">Watch Video Series</span>
              </>
            ) : (
              <>
                <Award size={16} className="text-white" />
                <span className="text-sm text-white">Earn Space Explorer Badge</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyChallengeCard;
