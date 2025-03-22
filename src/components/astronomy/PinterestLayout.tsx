
import React from 'react';
import { ExploreContentItem } from './types';
import PinterestCard from './PinterestCard';

interface PinterestLayoutProps {
  items: ExploreContentItem[];
  onCardClick?: (item: ExploreContentItem) => void;
}

const PinterestLayout: React.FC<PinterestLayoutProps> = ({ items, onCardClick }) => {
  // Calculate the number of columns based on screen size
  const getColumnClass = () => {
    return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  };

  // Assign varied sizes to cards for more interest
  const getCardClass = (index: number) => {
    // Create some landscape cards by changing aspect ratio
    if (index % 5 === 0) {
      return "col-span-1 sm:col-span-2 row-span-1"; // landscape card
    } else if (index % 7 === 0) {
      return "col-span-1 row-span-2"; // tall card
    } else if (index % 11 === 0) {
      return "col-span-1 sm:col-span-2 row-span-2"; // large card
    }
    return "col-span-1"; // standard card
  };

  return (
    <div className={`grid ${getColumnClass()} gap-4 auto-rows-auto`}>
      {items.map((item, index) => (
        <div key={item.id} className={getCardClass(index)}>
          <PinterestCard 
            item={item} 
            onClick={onCardClick}
            className="h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default PinterestLayout;
