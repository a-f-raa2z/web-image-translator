
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
    <div className={cn("art-card overflow-hidden h-full relative", color, className)}>
      <div className="p-6 h-full flex flex-col relative z-10">
        <h3 className="text-sm font-medium text-white/90 mb-1">Playground</h3>
        
        <div className="mt-auto w-full">
          <p className="text-sm font-medium text-white/90 mb-1">{subtitle}</p>
          <p className="text-2xl font-bold text-white mb-3">{title}</p>
          <div className="w-full">
            <button className="w-full bg-white/20 backdrop-blur-sm text-white font-medium py-2 px-6 rounded-full hover:bg-white/30 transition-colors">
              Let's Go!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundCard;
