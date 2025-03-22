
import React from 'react';
import { ExploreContentItem } from './types';
import PinterestCard from './PinterestCard';

interface PinterestLayoutProps {
  items: ExploreContentItem[];
}

const PinterestLayout: React.FC<PinterestLayoutProps> = ({ items }) => {
  // Divide items into 4 columns for masonry effect
  const getColumnItems = (colIndex: number, numCols: number = 4) => {
    return items.filter((_, i) => i % numCols === colIndex);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-4">
          {getColumnItems(0).map(item => (
            <PinterestCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {getColumnItems(1).map(item => (
            <PinterestCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {getColumnItems(2).map(item => (
            <PinterestCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {getColumnItems(3).map(item => (
            <PinterestCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinterestLayout;
