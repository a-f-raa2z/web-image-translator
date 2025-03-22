
import React from 'react';
import CardTypeIndicator, { CardType } from './CardTypeIndicator';

interface TabContentHeaderProps {
  title: string;
  description: string;
  cardTypes?: CardType[];
}

const TabContentHeader: React.FC<TabContentHeaderProps> = ({ 
  title, 
  description,
  cardTypes = [] 
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        {cardTypes.map((type, index) => (
          <CardTypeIndicator key={`${type}-${index}`} type={type} />
        ))}
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-xs">
        {description}
      </p>
    </div>
  );
};

export default TabContentHeader;
