
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface AstronomyPlaygroundCardProps {
  subtitle: string;
  title: string;
  className?: string;
  image: string;
  onClick?: () => void;
  isExpandable?: boolean;
}

const AstronomyPlaygroundCard: React.FC<AstronomyPlaygroundCardProps> = ({ 
  subtitle, 
  title, 
  className, 
  image,
  onClick,
  isExpandable
}) => {
  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden shadow-md cursor-pointer h-full",
        className
      )}
      onClick={onClick}
    >
      <div className="h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-white text-sm">{subtitle}</p>
        </div>
        
        {isExpandable && (
          <div className="absolute bottom-3 right-3 bg-white/80 text-purple-600 rounded-full p-1.5">
            <ExternalLink className="h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AstronomyPlaygroundCard;
