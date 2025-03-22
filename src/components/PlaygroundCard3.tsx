
import React from 'react';
import { PenTool } from 'lucide-react';

const PlaygroundCard3: React.FC<{ title: string; subtitle: string; image: string }> = ({ title, subtitle, image }) => {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md bg-white relative">
      <div className="absolute top-2 left-3 z-10 bg-purple-100 px-2 py-1 rounded text-xs font-semibold text-purple-700 flex items-center gap-1">
        <PenTool size={14} />
        <span>Playground</span>
      </div>
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
