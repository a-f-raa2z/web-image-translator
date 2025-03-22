
import React from 'react';
import { KnowledgeMapNode } from '@/components/astronomy/types';

const TopicNode = ({ data }: { data: KnowledgeMapNode }) => {
  const IconComponent = data.icon;
  return (
    <div className="bg-blue-50 px-3 py-2 rounded-lg text-center font-medium border border-blue-200 min-w-32">
      {IconComponent && <IconComponent className="inline mr-1.5 text-blue-500" size={16} />}
      <span>{data.label}</span>
    </div>
  );
};

export default TopicNode;
