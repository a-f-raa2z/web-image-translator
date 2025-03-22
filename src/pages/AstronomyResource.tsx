
import React from 'react';
import Sidebar from '@/components/Sidebar';
import AstronomyPageHeader from '@/components/AstronomyPageHeader';
import { Book, Download, ExternalLink } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const AstronomyResource = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 p-6 animate-fade-in">
        <AstronomyPageHeader />
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Book className="text-blue-500" />
            Astronomy Resources
          </h2>
          
          <Tabs defaultValue="articles">
            <TabsList className="mb-4">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Introduction to Astronomy</h3>
                  <p className="text-sm text-gray-600 mb-4">A beginner's guide to understanding the universe and celestial objects.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">15 min read</span>
                    <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-sm">
                      Read <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Understanding Lunar Phases</h3>
                  <p className="text-sm text-gray-600 mb-4">Learn how the Moon's appearance changes throughout its orbit around Earth.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">10 min read</span>
                    <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-sm">
                      Read <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    <img 
                      src="https://img.youtube.com/vi/libKVRa01L8/maxresdefault.jpg" 
                      alt="Solar System Video" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm">Solar System 101</h3>
                    <p className="text-xs text-gray-500">12:45</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    <img 
                      src="https://img.youtube.com/vi/FqKsUgDVXGE/maxresdefault.jpg" 
                      alt="Moon Phases Video" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm">Moon Phases Explained</h3>
                    <p className="text-xs text-gray-500">8:30</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="books">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] mb-3 bg-gray-100 rounded">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Book Cover</div>
                  </div>
                  <h3 className="font-semibold text-sm">Cosmos</h3>
                  <p className="text-xs text-gray-500 mb-2">by Carl Sagan</p>
                  <button className="text-xs text-blue-500 flex items-center gap-1">
                    <Download size={12} /> Download PDF
                  </button>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] mb-3 bg-gray-100 rounded">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Book Cover</div>
                  </div>
                  <h3 className="font-semibold text-sm">Brief History of Time</h3>
                  <p className="text-xs text-gray-500 mb-2">by Stephen Hawking</p>
                  <button className="text-xs text-blue-500 flex items-center gap-1">
                    <Download size={12} /> Download PDF
                  </button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Sky Map</h3>
                  <p className="text-sm text-gray-600 mb-4">Interactive tool to explore the night sky from your location.</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-sm">
                    Launch Tool <ExternalLink size={14} />
                  </a>
                </div>
                
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Planetary Calculator</h3>
                  <p className="text-sm text-gray-600 mb-4">Calculate distances, orbits, and other metrics of planets.</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-sm">
                    Launch Tool <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AstronomyResource;
