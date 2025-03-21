
import React from 'react';
import { Hash, Book, Gamepad, MapPin, Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
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
        <SidebarItem 
          icon={<Hash size={20} />} 
          label="Channel" 
          to="/" 
          active={location.pathname === '/'} 
        />
        <SidebarItem 
          icon={<Book size={20} />} 
          label="Resource" 
          to="/resources"
          active={location.pathname === '/resources'} 
        />
        <SidebarItem 
          icon={<Gamepad size={20} />} 
          label="Playground" 
          to="/playground"
          active={location.pathname === '/playground'} 
        />
        <SidebarItem 
          icon={<MapPin size={20} />} 
          label="Knowledge Map" 
          to="/knowledge-map"
          active={location.pathname === '/knowledge-map'} 
        />
        <SidebarItem 
          icon={<Heart size={20} />} 
          label="Favorites" 
          to="/favorites"
          active={location.pathname === '/favorites'} 
        />
        <SidebarItem 
          icon={<User size={20} />} 
          label="Profile" 
          to="/profile"
          active={location.pathname === '/profile'} 
        />
      </nav>
      
      <div className="mt-auto pt-5">
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
  to: string;
  active?: boolean;
};

const SidebarItem = ({ icon, label, to, active = false }: SidebarItemProps) => {
  return (
    <Link 
      to={to}
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
    </Link>
  );
};

export default Sidebar;
