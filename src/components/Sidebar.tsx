
import React from 'react';
import { Home, BookOpen, Video, PenTool, Users, Star, Grid, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  return (
    <div className="w-16 bg-art-dark fixed left-0 top-0 h-full flex flex-col items-center py-5 z-50 border-r border-gray-800 animate-slide-in">
      <div className="mb-8">
        <div className="w-8 h-8 flex items-center justify-center">
          <img 
            src="/lovable-uploads/3dc8af34-b172-4695-9e52-39b72b959ce2.png" 
            alt="Logo" 
            className="w-7 h-7 object-contain opacity-85"
          />
        </div>
      </div>
      
      <nav className="flex-1 w-full">
        <SidebarItem icon={<Home size={20} />} label="Home" active />
        <SidebarItem icon={<PenTool size={20} />} label="Art" />
        <SidebarItem icon={<Video size={20} />} label="Videos" />
        <SidebarItem icon={<BookOpen size={20} />} label="Learn" />
        <SidebarItem icon={<Users size={20} />} label="Community" />
        <SidebarItem icon={<Compass size={20} />} label="Playground" />
        <SidebarItem icon={<Grid size={20} />} label="Gallery" />
      </nav>
      
      <div className="mt-auto pt-5">
        <SidebarItem icon={<Star size={20} />} label="Premium" />
        <div className="w-8 h-8 rounded-full bg-gray-200 mt-5 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

const SidebarItem = ({ icon, label, active = false }: SidebarItemProps) => {
  return (
    <div 
      className={cn(
        "w-full flex flex-col items-center py-3 text-gray-400 hover:text-white cursor-pointer relative",
        active && "text-white"
      )}
    >
      {active && (
        <div className="absolute left-0 w-1 h-6 bg-white rounded-r-full"></div>
      )}
      {icon}
      <span className="text-[9px] mt-1">{label}</span>
    </div>
  );
};

export default Sidebar;
