
import React, { useRef, useEffect, useState } from 'react';
import { ExploreContentItem } from './types';
import PinterestCard from './PinterestCard';

interface PinterestLayoutProps {
  items: ExploreContentItem[];
  onCardClick?: (item: ExploreContentItem) => void;
}

const PinterestLayout: React.FC<PinterestLayoutProps> = ({ items, onCardClick }) => {
  const [columns, setColumns] = useState(5); // Default to 5 columns for web
  const containerRef = useRef<HTMLDivElement>(null);

  // Update columns based on container width
  useEffect(() => {
    const updateColumns = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width < 640) {
          setColumns(1);
        } else if (width < 768) {
          setColumns(2);
        } else if (width < 1024) {
          setColumns(3);
        } else if (width < 1280) {
          setColumns(4);
        } else {
          setColumns(5); // 5 columns for larger screens
        }
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Create column arrays
  const createColumnArrays = () => {
    const columnArrays: ExploreContentItem[][] = Array.from({ length: columns }, () => []);
    
    // Distribute items across columns
    items.forEach((item, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(item);
    });
    
    return columnArrays;
  };

  // Assign varied heights to cards
  const getCardHeight = (index: number) => {
    if (index % 5 === 0) {
      return "h-[250px]"; // shorter card
    } else if (index % 3 === 0) {
      return "h-[350px]"; // medium card
    } else if (index % 7 === 0) {
      return "h-[400px]"; // taller card
    }
    return "h-[300px]"; // standard card
  };

  const columnArrays = createColumnArrays();

  return (
    <div 
      ref={containerRef} 
      className="w-full flex gap-3" // Reduced gap for more space efficiency
    >
      {columnArrays.map((column, columnIndex) => (
        <div key={columnIndex} className="flex-1 flex flex-col gap-3">
          {column.map((item, itemIndex) => (
            <div key={item.id} className="w-full">
              <PinterestCard 
                item={item} 
                onClick={onCardClick}
                className={`${getCardHeight(columnIndex * items.length / columns + itemIndex)} w-full`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PinterestLayout;
