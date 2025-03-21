
import React from 'react';
import { cn } from '@/lib/utils';

interface CommunityCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  description,
  image,
  className
}) => {
  return (
    <div className={cn("art-card overflow-hidden", className)}>
      <div className="p-5">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-36 object-cover rounded-lg"
        />
        
        <h3 className="text-sm font-bold mt-4">{title}</h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-3">{description}</p>
        
        <button className="bg-gray-800 text-white text-xs font-medium py-2 px-4 rounded-lg mt-3 hover:bg-black w-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
