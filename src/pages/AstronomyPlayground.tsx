
import React from 'react';
import Sidebar from '@/components/Sidebar';
import AstronomyPageHeader from '@/components/AstronomyPageHeader';
import { Gamepad, Globe, Sparkles, Moon } from 'lucide-react';

const AstronomyPlayground = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AstronomyPageHeader />
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Gamepad className="text-blue-500" />
            Astronomy Interactive Playgrounds
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-5 rounded-xl border border-blue-200 hover:shadow-md transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-blue-700">Solar System Explorer</h3>
              </div>
              <p className="text-sm text-blue-600 mb-4">
                Explore our solar system in 3D. Learn about planets, moons, and other celestial bodies.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Launch Explorer
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-5 rounded-xl border border-purple-200 hover:shadow-md transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-purple-700">Constellation Finder</h3>
              </div>
              <p className="text-sm text-purple-600 mb-4">
                Identify constellations in the night sky and learn about their mythology and history.
              </p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                Start Finding
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-100 p-5 rounded-xl border border-green-200 hover:shadow-md transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Moon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-green-700">Moon Phase Simulator</h3>
              </div>
              <p className="text-sm text-green-600 mb-4">
                Visualize and understand how moon phases work through an interactive simulation.
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Simulate Phases
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyPlayground;
