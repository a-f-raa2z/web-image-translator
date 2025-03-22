
import React from 'react';
import { Trophy } from 'lucide-react';

interface ChallengeCard3Props {
  title: string; 
  description: string;
  image?: string;
}

const ChallengeCard3: React.FC<ChallengeCard3Props> = ({ title, description, image }) => {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md bg-orange-500 p-4 hover:shadow-lg transition-all duration-300 relative">
      <div className="absolute top-2 left-3 z-10 bg-orange-100 px-2 py-1 rounded text-xs font-semibold text-orange-700 flex items-center gap-1">
        <Trophy size={14} />
        <span>Challenge</span>
      </div>
      
      {image && (
        <div className="absolute top-3 right-3 z-10">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      )}
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

export default ChallengeCard3;
