
import React from 'react';
import { cn } from '@/lib/utils';

interface ExploreCardProps {
  title?: string;
  image: string;
  badge?: string;
  className?: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  image,
  badge,
  className
}) => {
  return (
    <div className={cn("art-card overflow-hidden", className)}>
      <div className="relative">
        <img 
          src={image} 
          alt={title || "Explore image"} 
          className="w-full h-40 object-cover"
        />
        {badge && (
          <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs py-1 px-3 rounded-sm">
            {badge}
          </div>
        )}
      </div>
      
      {title && (
        <div className="p-3">
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
