
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
    <div className={cn("art-card overflow-hidden h-full relative", color, className)}>
      {image && (
        <div className="absolute bottom-0 right-0 z-0 opacity-90">
          <img 
            src={image} 
            alt={title} 
            className="h-40 object-contain" 
          />
        </div>
      )}
      
      <div className="p-6 h-full flex flex-col relative z-10">
        <h3 className="text-lg font-medium text-black/70 mb-1">{title}</h3>
        
        <div className="mt-auto w-full">
          <p className={cn("text-4xl font-bold text-black mb-3 text-left", descriptionClassName)}>{description}</p>
          <div className="w-4/5">
            <Input
              type="text"
              placeholder="Answer..."
              className="w-full py-3 px-4 bg-white/80 backdrop-blur-sm rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
