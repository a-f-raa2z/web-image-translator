
import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  color = "bg-orange-500",
  className,
  descriptionClassName
}) => {
  return (
    <div className={cn(
      "art-card overflow-hidden h-full relative",
      color,
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
      
      <div className="p-6 h-full flex flex-col justify-center relative z-10 pt-16">
        <h3 className="text-lg font-medium text-black/70 mb-1">{title}</h3>

        <div className="flex-grow flex flex-col justify-center w-full">
          <p 
            className={cn("text-4xl font-semibold text-black mb-3 text-left leading-normal", descriptionClassName)} 
            style={{ fontSize: '1.5rem', lineHeight: '1.5' }}
          >
            {description}
          </p>

          <div className="w-4/5 self-start mt-4">
            <Input
              type="text"
              placeholder="Answer..."
              className="w-full py-3 px-4 bg-white/80 backdrop-blur-sm rounded-full border-none focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="mt-6">
            <Button variant="secondary" className="bg-orange-300 hover:bg-orange-400 text-black/70">
              <Award size={16} />
              <span>Earn Challenge Badge</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
