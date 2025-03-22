
import React from 'react';

const ChallengeCard3: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md bg-white p-4 hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ChallengeCard3;
