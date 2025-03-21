
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
    <div className={cn("art-card h-full overflow-hidden relative", color, className)}>
      {image && (
        <div className="absolute top-0 right-0 z-0 opacity-90">
          <img 
            src={image} 
            alt={title} 
            className="h-86 object-contain"
          />
        </div>
      )}
      
      <div className="p-6 h-full flex flex-col relative z-10">
        <h3 className="text-3xl font-bold text-white mb-4">Playground</h3>
        
        <div className="flex flex-col items-center justify-center flex-grow my-4">
          <p className="text-sm font-medium text-white/90 mb-1">{subtitle}</p>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        
        <div className="mt-auto">
          <button className="w-full bg-white/20 backdrop-blur-sm text-white font-medium py-2 px-6 rounded-full hover:bg-white/30 transition-colors">
            Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundCard;
