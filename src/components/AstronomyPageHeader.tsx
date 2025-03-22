
import React from 'react';
import { Edit, Diamond, Award } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface AstronomyPageHeaderProps {
  title?: string;
  courseName?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const AstronomyPageHeader: React.FC<AstronomyPageHeaderProps> = ({ 
  title = "The Neighbor Worlds",
  courseName = "Astronomy",
  breadcrumbs = []
}) => {
  return (
    <header className="mb-8">
      {breadcrumbs.length > 0 && (
        <Breadcrumb className="mb-3">
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    href={item.href} 
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {item.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <span className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Telescope icon */}
                <path d="M21.9 8.9L20.2 9.9L16.2 3L17.9 2C18.2 1.8 18.6 1.9 18.8 2.2L22.2 7.9C22.4 8.2 22.2 8.7 21.9 8.9Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.2 3L14.5 4L18.5 10.9L20.2 9.9L16.2 3Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 4L12.8 5L16.8 11.9L18.5 10.9L14.5 4Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.8 5L11.1 6L15.1 12.9L16.8 11.9L12.8 5Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.1 6L9.4 7L13.4 13.9L15.1 12.9L11.1 6Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.4 7L7.7 8L11.7 14.9L13.4 13.9L9.4 7Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.7 8L6 9L10 15.9L11.7 14.9L7.7 8Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9L4.3 10L8.3 16.9L10 15.9L6 9Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.3 10L2.6 11L6.6 17.9L8.3 16.9L4.3 10Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.6 11L1 12L5 18.9L6.6 17.9L2.6 11Z" stroke="#4299E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h1 className="text-2xl font-bold flex items-center">
              <span className="text-gray-600 text-lg mr-2">{courseName}:</span> {title}
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <Edit size={14} />
              </button>
            </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-1 bg-white py-1 px-3 rounded-full shadow-sm">
            <Diamond size={16} className="text-blue-400" />
            <span className="font-semibold">87</span>
          </div>
          
          <div className="flex items-center gap-1 bg-white py-1 px-3 rounded-full shadow-sm">
            <Award size={16} className="text-yellow-400" />
            <span className="font-semibold">4</span>
          </div>
          
          <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AstronomyPageHeader; 
