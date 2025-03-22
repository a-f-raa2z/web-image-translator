
import React from 'react';
import { cn } from '@/lib/utils';

interface PlaygroundCardProps {
  subtitle: string;
  title: string;
  className?: string;
  image?: string;
}

const PlaygroundCard: React.FC<PlaygroundCardProps> = ({
  subtitle,
  title,
  className,
  image
}) => {
  return (
    <div className={cn(
      "bg-purple-100 rounded-xl shadow-md overflow-hidden",
      className
    )}>
      <div className="absolute top-2 left-3 z-10 bg-purple-100 px-2 py-1 rounded text-xs font-semibold text-purple-700">
        Playground
      </div>
      
      {image && (
        <div className="w-full h-48">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <p className="text-purple-600 text-sm">{subtitle}</p>
        <h3 className="font-semibold text-purple-900 mt-1">{title}</h3>
      </div>
    </div>
  );
};

export default PlaygroundCard;
