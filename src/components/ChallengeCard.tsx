
import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface ChallengeCardProps {
  title: string;
  description: string;
  image?: string;
  color?: string;
  className?: string;
  descriptionClassName?: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
  image,
  color = "bg-art-yellow",
  className,
  descriptionClassName
}) => {
  return (
    <div className={cn(
      "art-card overflow-hidden h-full relative",
      color,
      className
    )}>
      <div className="absolute top-2 left-3 z-10 bg-yellow-100 px-2 py-1 rounded text-xs font-semibold text-yellow-700">
        Challenge
      </div>
      
      {image && (
        <div className="absolute bottom-0 right-0 z-0 opacity-100">
          <img 
            src={image} 
            alt={title} 
            className="h-60 object-contain" 
          />
        </div>
      )}
      
      <div className="p-6 h-full flex flex-col relative z-10">
        <h3 className="text-lg font-medium text-black/70 mb-1">{title}</h3>

        <div className="flex-grow flex flex-col justify-between w-full">
          <div>
            <br></br>
            <p 
              className={cn("text-4xl font-semibold text-black mb-3 text-left leading-normal", descriptionClassName)} 
              style={{ fontSize: '1.5rem', lineHeight: '1.5' }}
            >
              {description}
            </p>
          </div>

          <div className="w-4/5 self-start">
            <Input
              type="text"
              placeholder="Answer..."
              className="w-full py-3 px-4 bg-white/80 backdrop-blur-sm rounded-full border-none focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
