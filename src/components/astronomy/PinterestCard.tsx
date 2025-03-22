
import React from 'react';
import { ExternalLink, Heart, Bookmark } from 'lucide-react';
import { cn } from "@/lib/utils";
import { ExploreContentItem } from './types';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PinterestCardProps {
  item: ExploreContentItem;
  className?: string;
}

const PinterestCard: React.FC<PinterestCardProps> = ({ item, className }) => {
  const handleCardClick = () => {
    window.open(item.sourceUrl, '_blank');
  };

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <div className="aspect-auto overflow-hidden cursor-pointer" onClick={handleCardClick}>
        <AspectRatio ratio={1/1} className="bg-gray-100">
          <img 
            src={item.imageUrl} 
            alt={item.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to a default image if the website image fails to load
              const target = e.target as HTMLImageElement;
              target.src = `/lovable-uploads/sunrise-on-mars-detlev-van-ravenswaay.jpg`;
            }}
          />
        </AspectRatio>
      </div>
      
      <div className="p-3 bg-white">
        <h3 className="font-medium text-sm line-clamp-2 mb-1">{item.title}</h3>
        {item.description && (
          <p className="text-xs text-gray-600 line-clamp-2 mb-2">{item.description}</p>
        )}
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            {item.author && (
              <span className="text-xs text-gray-500">{item.author}</span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="text-gray-500 hover:text-red-500 transition-colors">
              <Heart size={16} />
            </button>
            <button className="text-gray-500 hover:text-blue-500 transition-colors">
              <Bookmark size={16} />
            </button>
            <a 
              href={item.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-purple-500 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          {item.source}
        </div>
      </div>
    </div>
  );
};

export default PinterestCard;
