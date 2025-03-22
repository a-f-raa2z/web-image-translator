
import React from 'react';
import { Star, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { KnowledgeMapNode } from '@/components/astronomy/types';

const CourseNode = ({ data }: { data: KnowledgeMapNode }) => {
  return (
    <div 
      className="p-4 rounded-lg shadow-md border border-gray-100 w-64"
      style={{ 
        backgroundColor: data.backgroundColor || '#ffffff',
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{data.label}</h3>
        {data.isCurrent && <Star className="text-blue-500 fill-blue-500" size={18} />}
      </div>
      
      <div className="text-sm text-gray-600 mb-3">{data.description}</div>
      
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-gray-500">Progress</span>
        <span className="text-xs font-medium">{data.progress}%</span>
      </div>
      <Progress value={data.progress} className="h-1.5" />
      
      {data.isCurrent && (
        <div className="mt-3">
          <Button variant="outline" size="sm" className="w-full">
            <Award size={14} className="mr-1.5" />
            Continue Learning
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseNode;
