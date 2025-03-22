
import React from 'react';
import { ExternalLink, Heart, Bookmark, Film, Maximize } from 'lucide-react';
import { cn } from "@/lib/utils";
import { ExploreContentItem } from './types';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PinterestCardProps {
  item: ExploreContentItem;
  className?: string;
  onClick?: (item: ExploreContentItem) => void;
}

// Astronomy placeholder images
const placeholderImages = [
  "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Starry night
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Mountain summit
  "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Mountain alps
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Green mountains
  "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Building under stars
  "/lovable-uploads/sunrise-on-mars-detlev-van-ravenswaay.jpg", // Mars sunrise (from your uploads)
  "/lovable-uploads/interstellar.jpeg", // Interstellar (from your uploads)
  "/lovable-uploads/earth2.jpeg", // Earth (from your uploads)
  "/lovable-uploads/solar.png" // Solar system (from your uploads)
];

const PinterestCard: React.FC<PinterestCardProps> = ({ item, className, onClick }) => {
  // Get a deterministic but seemingly random placeholder image based on the item id
  const getPlaceholderImage = (id: string) => {
    // Simple hash function to convert id string to a number
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % placeholderImages.length;
    return placeholderImages[index];
  };

  const handleCardClick = () => {
    if (onClick && (item.hasVideos || item.isExpandable)) {
      onClick(item);
    } else {
      window.open(item.sourceUrl, '_blank');
    }
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
            src={getPlaceholderImage(item.id)} 
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to a default image if the image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "/lovable-uploads/sunrise-on-mars-detlev-van-ravenswaay.jpg";
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
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          {item.source}
        </div>

        {item.hasVideos && (
          <div className="absolute top-2 left-2 bg-blue-500 bg-opacity-75 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Film size={12} />
            <span>Videos</span>
          </div>
        )}

        {item.isExpandable && (
          <div className="absolute top-2 left-2 bg-purple-500 bg-opacity-75 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Maximize size={12} />
            <span>Expand</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinterestCard;
