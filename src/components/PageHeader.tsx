
import React from 'react';
import { Edit, Diamond, Award, Globe } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title?: string;
  courseName?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title = "Astronomy",
  courseName = "Current Course",
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
              <Globe className="text-blue-500" />
            </span>
            <h1 className="text-2xl font-bold flex items-center">
              {title}
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
