
import React from 'react';
import { ExploreContentItem } from './types';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageViewerProps {
  item: ExploreContentItem;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ item }) => {
  // For the solar system image, we'll use a high-resolution image
  const getFullsizeImage = (item: ExploreContentItem) => {
    if (item.id === '12') {
      return '/lovable-uploads/solar.png';
    }
    return item.imageUrl;
  };

  return (
    <div className="w-full max-h-[80vh] overflow-hidden">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        {item.description && (
          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        )}
      </div>
      
      <div className="rounded-lg overflow-hidden">
        <img
          src={getFullsizeImage(item)}
          alt={item.title}
          className="w-full h-auto object-contain"
        />
      </div>
      
      <div className="mt-4 text-sm flex items-center justify-between">
        <span className="text-gray-500">Source: {item.author}</span>
        <a 
          href={item.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Source
        </a>
      </div>
    </div>
  );
};

export default ImageViewer;
