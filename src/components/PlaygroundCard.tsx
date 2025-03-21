
import React from 'react';
import { cn } from '@/lib/utils';

interface PlaygroundCardProps {
  title: string;
  subtitle: string;
  image?: string;
  color?: string;
  className?: string;
}

const PlaygroundCard: React.FC<PlaygroundCardProps> = ({
  title,
  subtitle,
  image,
  color = "bg-art-purple",
  className
}) => {
  return (
    <div className={cn("art-card h-full overflow-hidden", color, className)}>
      <div className="p-6 h-full flex flex-col">
        <div className="mb-auto">
          <p className="text-sm font-medium text-white/90 mb-1">{subtitle}</p>
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          
          <button className="bg-white/20 backdrop-blur-sm text-white font-medium py-2 px-6 rounded-full hover:bg-white/30 transition-colors">
            Let's Go!
          </button>
        </div>
        
        {image && (
          <div className="mt-4">
            <img 
              src={image} 
              alt={title} 
              className="h-32 object-contain ml-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaygroundCard;
