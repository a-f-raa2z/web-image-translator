
import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChallengeCard3Props {
  title: string; 
  description: string;
  image?: string;
  className?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ChallengeCard3: React.FC<ChallengeCard3Props> = ({ 
  title, 
  description, 
  image,
  className,
  descriptionClassName,
  children,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "bg-orange-500 rounded-xl shadow-md overflow-hidden h-full flex flex-col relative",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute top-2 left-3 z-10 bg-orange-100 px-2 py-1 rounded text-xs font-semibold text-orange-700 flex items-center gap-1">
        <Trophy size={14} className="mr-1" />
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
      
      <div className="p-6 flex-1 flex flex-col justify-between pt-14">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className={cn(
            "text-2xl text-white leading-relaxed",
            descriptionClassName
          )}>
            {description}
          </p>
        </div>
        
        {children}
        
        {!children && (
          <div className="mt-auto pt-4 w-fit">
            <Button variant="secondary" className="bg-orange-300 hover:bg-orange-400 text-black/70 text-sm px-4 py-2 h-auto">
              <Award size={16} className="mr-2" />
              <span>Earn Badge</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard3;
