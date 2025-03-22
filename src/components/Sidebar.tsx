
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hash, Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

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

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-sidebar flex flex-col items-center py-4 z-50">
      <div className="w-8 h-8 mb-6">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <nav className="flex-1 w-full">
        <SidebarItem 
          icon={<Hash size={20} />} 
          label="Astronomy" 
          to="/"
          active={location.pathname === '/'}
        />
        <SidebarItem 
          icon={<Hash size={20} />} 
          label="AI" 
          to="/ai"
          active={location.pathname === '/ai'}
        />
        <SidebarItem 
          icon={<Heart size={20} />} 
          label="Favorites" 
          to="/favorites"
        />
        <SidebarItem 
          icon={<User size={20} />} 
          label="Profile" 
          to="/profile"
        />
      </nav>
    </div>
  );
};

export default Sidebar;
