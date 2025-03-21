
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';
import React from 'react';

interface ArtLearningCardProps {
  title: string;
  image: string;
  label?: string;
  color?: string;
  isVideo?: boolean;
  className?: string;
}

const ArtLearningCard: React.FC<ArtLearningCardProps> = ({
  title,
  image,
  label = "Art History",
  color = "bg-art-green",
  isVideo = false,
  className
}) => {
  return (
    <div className={cn("art-card group relative h-full", className)}>
      <div className="relative overflow-hidden w-full h-full rounded-xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {isVideo && (
          <div className="video-overlay">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <Play size={24} className="text-art-dark ml-1" />
              </div>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          {label && (
            <div className="flex items-center mb-2">
              <div className={cn("text-xs rounded-full px-3 py-1 font-medium text-white", color)}>
                <span className="flex items-center gap-1">
                  <span className="w-5 h-5 rounded-full bg-art-orange text-white flex items-center justify-center text-[10px] font-bold">CC</span>
                  {label}
                </span>
              </div>
            </div>
          )}
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ArtLearningCard;
