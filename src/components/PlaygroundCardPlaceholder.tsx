import React from 'react';

const PlaygroundCardPlaceholder: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md bg-gray-200">
      <div className="h-32 bg-gray-300" /> {/* Placeholder for image */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default PlaygroundCardPlaceholder; 