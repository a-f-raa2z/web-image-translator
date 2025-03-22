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

  // Assign varied heights to cards but keep the same width
  const getCardClass = (index: number) => {
    // Create varied heights based on item index
    if (index % 5 === 0) {
      return "h-[250px]"; // shorter card
    } else if (index % 3 === 0) {
      return "h-[350px]"; // medium card
    } else if (index % 7 === 0) {
      return "h-[400px]"; // taller card
    }
    return "h-[300px]"; // standard card
  };

  return (
    <div className={`grid ${getColumnClass()} gap-4`}>
      {items.map((item, index) => (
        <div key={item.id} className="col-span-1">
          <PinterestCard 
            item={item} 
            onClick={onCardClick}
            className={`${getCardClass(index)} w-full`}
          />
        </div>
      ))}
    </div>
  );
};

export default PinterestLayout;
