
import React from 'react';
import { cn } from '@/lib/utils';

interface ChallengeCardProps {
  title: string;
  description: string;
  image?: string;
  color?: string;
  className?: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
  image,
  color = "bg-art-yellow",
  className
}) => {
  return (
    <div className={cn("art-card overflow-hidden h-full relative", color, className)}>
      {image && (
        <div className="absolute bottom-0 right-0 z-0 opacity-90">
          <img 
            src={image} 
            alt={title} 
            className="h-48 object-contain" // Increased from h-32 to h-48 (1.5x increase)
          />
        </div>
      )}
      
      <div className="p-6 h-full flex flex-col relative z-10">
        <h3 className="text-sm font-medium text-black/70 mb-1">{title}</h3>
        <p className="text-xl font-bold text-black mb-4">{description}</p>
        
        <div className="mt-auto">
          <div className="w-full mt-2">
            <input
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
