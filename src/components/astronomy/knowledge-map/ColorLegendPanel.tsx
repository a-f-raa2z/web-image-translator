
import React from 'react';
import { Panel } from 'reactflow';
import { KnowledgeMapNode } from '@/components/astronomy/types';

interface ColorLegendPanelProps {
  courseShapes: KnowledgeMapNode[];
}

const ColorLegendPanel = ({ courseShapes }: ColorLegendPanelProps) => {
  return (
    <Panel position="top-right" className="bg-white p-3 rounded-md shadow-md">
      <div className="text-sm text-gray-600">
        <h3 className="font-semibold mb-2">Courses by Color</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {courseShapes.map((course) => (
            <div key={course.id} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-sm mr-2" 
                style={{ backgroundColor: course.color }}
              ></div>
              <span className="text-xs">{course.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
};

export default ColorLegendPanel;
