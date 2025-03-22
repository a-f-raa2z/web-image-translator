
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { ArrowRightLeft } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { VideoCategory } from './types';

interface CourseSelectorProps {
  selectedTab: VideoCategory;
}

const CourseSelector: React.FC<CourseSelectorProps> = ({ selectedTab }) => {
  const astronomyCourses = [
    { id: 1, title: "The Neighbor Worlds", progress: 66, active: true },
    { id: 2, title: "Deep Space Objects", progress: 10, active: false },
    { id: 3, title: "Stars & Stellar Evolution", progress: 0, active: false },
    { id: 4, title: "The Life of Galaxies", progress: 0, active: false },
    { id: 5, title: "Space Exploration History", progress: 30, active: false },
  ];

  const getProgressValue = () => {
    switch(selectedTab) {
      case 'intro': return 33;
      case 'earth': return 66;
      case 'moon': return 100;
      default: return 33;
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <button 
            className="flex items-center gap-2 px-4 py-1.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            <span>The Neighbor Worlds</span>
            <Progress value={66} className="h-1.5 w-16" />
            <ArrowRightLeft size={16} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-3">
          <div className="space-y-4">
            <h3 className="font-medium text-md">Astronomy Courses</h3>
            <div className="space-y-2.5">
              {astronomyCourses.map(course => (
                <div 
                  key={course.id} 
                  className={`flex items-center justify-between p-2.5 rounded-lg transition-colors ${course.active ? 'bg-purple-100' : 'hover:bg-gray-100'}`}
                >
                  <div className="flex flex-col">
                    <span className={`font-medium ${course.active ? 'text-purple-700' : ''}`}>{course.title}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={course.progress} className="h-1.5 w-24" />
                      <span className="text-xs text-gray-500">{course.progress}%</span>
                    </div>
                  </div>
                  {course.active && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-purple-200 text-purple-700">Active</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      
      <div className="flex items-center gap-2 w-48">
        <Progress value={getProgressValue()} className="h-2" />
        <span className="text-sm text-gray-500">{getProgressValue()}%</span>
      </div>
    </div>
  );
};

export default CourseSelector;
