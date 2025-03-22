
import React from 'react';
import { Trophy } from 'lucide-react';

const ChallengeCard3: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md bg-orange-500 p-4 hover:shadow-lg transition-all duration-300 relative"> {/* Changed from bg-white to bg-orange-500 */}
      <div className="absolute top-2 left-3 z-10 bg-orange-100 px-2 py-1 rounded text-xs font-semibold text-orange-700 flex items-center gap-1">
        <Trophy size={14} />
        <span>Challenge</span>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white">{title}</h3> {/* Changed to text-white */}
        <p className="text-sm text-white">{description}</p> {/* Changed to text-white */}
      </div>
    </div>
  );
};

export default ChallengeCard3;
