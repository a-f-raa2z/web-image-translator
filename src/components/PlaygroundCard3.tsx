import React from 'react';

const PlaygroundCard3: React.FC<{ title: string; subtitle: string; image: string }> = ({ title, subtitle, image }) => {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md bg-white">
      <a href="https://www.youtube.com/watch?v=uaSYEUugnzE" target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="w-full h-32 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{subtitle}</p>
        </div>
      </a>
    </div>
  );
};

export default PlaygroundCard3; 