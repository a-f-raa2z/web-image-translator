
import React from 'react';
import { Edit, Diamond, Award } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const PageHeader: React.FC = () => {
  return (
    <header className="mb-8">
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="text-gray-500 hover:text-gray-700">AI</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="font-medium">Intro to Artificial Intelligence</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <span className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#FF8A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h1 className="text-2xl font-bold flex items-center">
              Intro to Artificial Intelligence
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <Edit size={14} />
              </button>
            </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-1 bg-white py-1 px-3 rounded-full shadow-sm">
            <Diamond size={16} className="text-blue-400" />
            <span className="font-semibold">123</span>
          </div>
          
          <div className="flex items-center gap-1 bg-white py-1 px-3 rounded-full shadow-sm">
            <Award size={16} className="text-yellow-400" />
            <span className="font-semibold">6</span>
          </div>
          
          <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
