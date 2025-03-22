
import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Award, Play, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChallengeCard2Props {
  title?: string;
  description?: string;
  descriptionClassName?: string;
  className?: string;
  videoId?: string;
  image?: string;
}

const ChallengeCard2: React.FC<ChallengeCard2Props> = ({
  title = "Challenge",
  description = "Explain the life cycle of a star from birth to death",
  descriptionClassName,
  className,
  videoId = "lcZTcfdZ3Ow",
  image
}) => {
  return (
    <div className={cn(
      "bg-orange-500 rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-orange-600",
      className
    )}>
      <div className="absolute top-2 left-3 z-10 bg-orange-100 px-2 py-1 rounded text-xs font-semibold text-orange-700 flex items-center gap-1">
        <Trophy size={14} />
        <span>Challenge</span>
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
      
      <div className="p-6 flex-1 flex flex-col justify-center pt-14">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white text-xl">{title}</h3>
            </div>
            <p className={cn(
              "text-white mt-2 text-2xl leading-relaxed",
              descriptionClassName
            )}>
              {description}
            </p>
          </div>
        </div>
        
        <div className="mt-auto pt-4 w-fit">
          <Button variant="secondary" className="bg-orange-300 hover:bg-orange-400 text-black/70 text-sm px-4 py-2 h-auto">
            <Award size={16} />
            <span>Earn Space Explorer Badge</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard2;
