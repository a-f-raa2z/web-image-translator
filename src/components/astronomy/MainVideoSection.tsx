
import React from 'react';
import { cn } from "@/lib/utils";
import { BookOpen, Map, Award, Star, Navigation } from 'lucide-react';
import VideoPlayer from '../VideoPlayer';
import VideoContentCards from './VideoContentCards';
import { VideoCategory, VideoData } from './types';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

interface MainVideoSectionProps {
  selectedTab: string;
  videoData: VideoData;
  selectedIndices: {
    intro: number;
    earth: number;
    moon: number;
  };
  animate: boolean;
}

const MainVideoSection: React.FC<MainVideoSectionProps> = ({
  selectedTab,
  videoData,
  selectedIndices,
  animate
}) => {
  const getSelectedVideoId = () => {
    if (selectedTab === 'intro') {
      return videoData.intro[selectedIndices.intro].id;
    } else if (selectedTab === 'earth') {
      return videoData.earth[selectedIndices.earth].id;
    } else if (selectedTab === 'moon') {
      return videoData.moon[selectedIndices.moon].id;
    }
    return '';
  };

  const getSelectedVideoTitle = () => {
    if (selectedTab === 'intro') {
      return videoData.intro[selectedIndices.intro].title;
    } else if (selectedTab === 'earth') {
      return videoData.earth[selectedIndices.earth].title;
    } else if (selectedTab === 'moon') {
      return videoData.moon[selectedIndices.moon].title;
    }
    return '';
  };

  // Course navigation and progress information
  const renderCourseNavigation = () => (
    <div className="mb-4 bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <BookOpen size={18} className="text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold">Astronomy 101: Understanding Our Universe</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 flex items-center">
            <Award size={14} className="mr-1 text-yellow-500" /> Progress: 3/8
          </span>
          <button className="flex items-center gap-1 px-3 py-1 bg-purple-100 hover:bg-purple-200 rounded-md text-purple-700 text-sm transition-colors">
            <Map size={14} /> View Map
          </button>
        </div>
      </div>

      <NavigationMenu className="max-w-full w-full">
        <NavigationMenuList className="w-full justify-start space-x-0 bg-gray-50 p-1 rounded-md">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm data-[state=open]:bg-purple-100 data-[state=open]:text-purple-700">
              <Star size={14} className="mr-1 text-yellow-500" /> Current Module: The Solar System
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 p-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-purple-900 p-6 no-underline outline-none focus:shadow-md">
                      <Navigation className="h-6 w-6 text-white" />
                      <div className="mt-4 mb-2 text-lg font-medium text-white">
                        Astronomy Learning Path
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Explore the universe through structured lessons, videos and activities
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700">
                    <div className="text-sm font-medium leading-none">Module 1: Introduction</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Basics of astronomy and celestial objects
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700">
                    <div className="text-sm font-medium leading-none">Module 2: Earth & Moon</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Our planet and its natural satellite
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700">
                    <div className="text-sm font-medium leading-none">Module 3: The Solar System</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Planets, moons, asteroids and comets
                    </p>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-purple-100/50 data-[state=open]:bg-purple-100/50">
              <span className="flex items-center">
                <BookOpen size={14} className="mr-1" /> Learning Videos
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-purple-100/50 data-[state=open]:bg-purple-100/50">
              <span className="flex items-center">
                <Award size={14} className="mr-1" /> Quizzes
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-purple-100/50 data-[state=open]:bg-purple-100/50">
              <span className="flex items-center">
                <Map size={14} className="mr-1" /> Resources
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );

  return (
    <>
      {renderCourseNavigation()}
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="col-span-1 md:col-span-6">
          <div className="h-full rounded-xl overflow-hidden shadow-md bg-black transition-all duration-300 animate-scale-in">
            <VideoPlayer videoId={getSelectedVideoId()} />
          </div>
        </div>
        
        <VideoContentCards 
          selectedTab={selectedTab}
          selectedVideoTitle={getSelectedVideoTitle()}
          animate={animate}
        />
      </div>
    </>
  );
};

export default MainVideoSection;
