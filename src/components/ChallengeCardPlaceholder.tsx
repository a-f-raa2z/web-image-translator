import React from 'react';

const ChallengeCardPlaceholder: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="h-full rounded-xl overflow-hidden shadow-md bg-gray-200 p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ChallengeCardPlaceholder; 