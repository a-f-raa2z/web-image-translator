
import React from 'react';

interface TabContentHeaderProps {
  title: string;
  description: string;
}

const TabContentHeader: React.FC<TabContentHeaderProps> = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {title}
      </h3>
      <p className="text-gray-600 text-xs">
        {description}
      </p>
    </div>
  );
};

export default TabContentHeader;
