
import React from 'react';
import Sidebar from '@/components/Sidebar';
import AstronomyPageHeader from '@/components/AstronomyPageHeader';
import { MapPin, Star, Rocket, Globe, Moon, Sun } from 'lucide-react';

const AstronomyKnowledgeMap = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AstronomyPageHeader />
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="text-blue-500" />
            Astronomy Knowledge Map
          </h2>
          
          <div className="relative">
            <div className="absolute w-full h-full pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                {/* Connecting lines */}
                <path d="M400,100 L250,200" stroke="#ddd" strokeWidth="2" fill="none" />
                <path d="M400,100 L550,200" stroke="#ddd" strokeWidth="2" fill="none" />
                <path d="M400,100 L400,200" stroke="#ddd" strokeWidth="2" fill="none" />
                <path d="M250,200 L150,300" stroke="#ddd" strokeWidth="2" fill="none" />
                <path d="M250,200 L350,300" stroke="#ddd" strokeWidth="2" fill="none" />
                <path d="M550,200 L450,300" stroke="#ddd" strokeWidth="2" fill="none" />
                <path d="M550,200 L650,300" stroke="#ddd" strokeWidth="2" fill="none" />
                <path d="M400,200 L450,300" stroke="#ddd" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 min-h-[600px]">
              {/* Solar System - Center */}
              <div className="col-start-2 col-span-1 flex justify-center">
                <div className="w-full max-w-xs bg-blue-50 p-4 rounded-xl border border-blue-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <Sun className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-blue-800">Solar System</h3>
                  </div>
                  <p className="text-sm text-blue-700">The Sun and the objects that orbit it, including planets, dwarf planets, and small Solar System bodies.</p>
                </div>
              </div>
              
              {/* Empty top row space fillers */}
              <div></div>
              <div></div>
              
              {/* Planets */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs bg-indigo-50 p-4 rounded-xl border border-indigo-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                      <Globe className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-indigo-800">Planets</h3>
                  </div>
                  <p className="text-sm text-indigo-700">The eight planets of our Solar System: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.</p>
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs bg-purple-50 p-4 rounded-xl border border-purple-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                      <Star className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-purple-800">Stars</h3>
                  </div>
                  <p className="text-sm text-purple-700">Massive luminous spheres of plasma held together by gravity, including our Sun and other stellar objects.</p>
                </div>
              </div>
              
              {/* Space Exploration */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs bg-pink-50 p-4 rounded-xl border border-pink-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                      <Rocket className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-pink-800">Space Exploration</h3>
                  </div>
                  <p className="text-sm text-pink-700">Human endeavors to explore outer space with both manned and unmanned spacecraft.</p>
                </div>
              </div>
              
              {/* Inner Planets and Moons */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs bg-green-50 p-4 rounded-xl border border-green-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <Moon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-green-800">Earth's Moon</h3>
                  </div>
                  <p className="text-sm text-green-700">Earth's only natural satellite, the fifth largest moon in the Solar System.</p>
                </div>
              </div>
              
              {/* Galaxies */}
              <div className="flex justify-center">
                <div className="w-full max-w-xs bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-amber-800">Galaxies</h3>
                  </div>
                  <p className="text-sm text-amber-700">Vast systems of stars, stellar remnants, gas, dust, and dark matter bound together by gravity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyKnowledgeMap;
