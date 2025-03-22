
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Book, Gamepad, MapPin } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabNavigationProps {
  defaultValue?: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ defaultValue = "course" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set the active tab based on the current location
  const getActiveTab = () => {
    if (location.pathname === '/resource') return 'resource';
    if (location.pathname === '/playground') return 'playground';
    if (location.pathname === '/knowledge-map') return 'map';
    return 'course';
  };

  return (
    <Tabs defaultValue={getActiveTab()} className="w-full mb-6">
      <TabsList className="bg-transparent h-auto p-0 w-full flex justify-start border-b">
        <TabsTrigger 
          value="course" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          onClick={() => navigate('/')}
        >
          {/* "Current Course" text removed */}
        </TabsTrigger>
        
        <TabsTrigger 
          value="resource" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          onClick={() => navigate('/resource')}
        >
          <Book size={16} />
          Resource
        </TabsTrigger>
        
        <TabsTrigger 
          value="playground" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          onClick={() => navigate('/playground')}
        >
          <Gamepad size={16} />
          Playground
        </TabsTrigger>
        
        <TabsTrigger 
          value="map" 
          className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent h-auto"
          onClick={() => navigate('/knowledge-map')}
        >
          <MapPin size={16} />
          Knowledge Map
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabNavigation;
