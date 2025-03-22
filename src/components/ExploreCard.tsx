
import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ExploreCardProps {
  title?: string;
  image: string;
  badge?: string;
  description?: string;
  className?: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  image,
  badge,
  description,
  className
}) => {
  return (
    <div className={cn("art-card overflow-hidden", className)}>
      <div className="relative">
        <AspectRatio ratio={4/3}>
          <img 
            src={image} 
            alt={title || "Explore image"} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        {badge && (
          <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs py-1 px-3 rounded-sm">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-3">
        {title && <h3 className="text-sm font-medium">{title}</h3>}
        {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default ExploreCard;
