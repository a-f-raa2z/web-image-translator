
import React from 'react';
import { cn } from '@/lib/utils';

interface AstronomyActivityCardProps {
  title: string;
  location: string;
  date: string;
  image: string;
  className?: string;
}

const AstronomyActivityCard: React.FC<AstronomyActivityCardProps> = ({
  title,
  location,
  date,
  image,
  className
}) => {
  return (
    <div className={cn("flex bg-white rounded-xl shadow-sm p-3 gap-4 hover:shadow-md transition-all duration-300", className)}>
      <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-base font-bold line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{date}</p>
        <p className="text-xs text-gray-500">{location}</p>
        
        <div className="flex gap-2 mt-3">
          <button className="bg-gray-100 text-gray-800 text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1 hover:bg-gray-200">
            <span className="w-3 h-3">👤</span> Invite
          </button>
          <button className="bg-gray-800 text-white text-xs font-medium py-1 px-3 rounded-full hover:bg-black">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default AstronomyActivityCard;
