
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

  return (
    <div className={`grid ${getColumnClass()} gap-4`}>
      {items.map((item) => (
        <PinterestCard 
          key={item.id} 
          item={item} 
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default PinterestLayout;
