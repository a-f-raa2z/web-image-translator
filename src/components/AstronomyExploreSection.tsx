
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PinterestLayout from './astronomy/PinterestLayout';
import { ExploreContentItem } from './astronomy/types';

const AstronomyExploreSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data based on the provided links
  const exploreItems: ExploreContentItem[] = [
    {
      id: '1',
      title: 'The Sky This Week from March 21 to 28, 2025',
      description: 'Discover what celestial events will be visible in the coming week',
      imageUrl: '/lovable-uploads/sunrise-on-mars-detlev-van-ravenswaay.jpg',
      source: 'astronomy',
      sourceUrl: 'https://www.astronomy.com/observing/the-sky-this-week-from-march-21-to-28-2025/',
      author: 'Astronomy.com'
    },
    {
      id: '2',
      title: 'Our Near-Galactic Neighbor Might Have a Supermassive Black Hole',
      description: 'New research suggests the presence of a supermassive black hole in our galactic neighborhood',
      imageUrl: '/lovable-uploads/interstellar.jpeg',
      source: 'astronomy',
      sourceUrl: 'https://www.astronomy.com/science/our-near-galactic-neighbor-might-have-a-supermassive-black-hole/',
      author: 'Astronomy.com'
    },
    {
      id: '3',
      title: 'NASA Launches James Webb Space Telescope',
      description: 'The most powerful telescope ever built to study the early universe',
      imageUrl: '/lovable-uploads/solar.png',
      source: 'nasa',
      sourceUrl: 'https://plus.nasa.gov/playlist/nasa-chill/',
      author: 'NASA'
    },
    {
      id: '4',
      title: 'Stunning Timelapse of Earth from Space',
      description: 'Watch our beautiful planet from the International Space Station',
      imageUrl: '/lovable-uploads/earth.gif',
      source: 'nasa',
      sourceUrl: 'https://plus.nasa.gov/playlist/nasa-chill/',
      author: 'NASA'
    },
    {
      id: '5',
      title: 'Astronomers Discover New Exoplanet in Habitable Zone',
      description: 'This rocky planet could potentially support life',
      imageUrl: '/lovable-uploads/earth2.jpeg',
      source: 'tiktok',
      sourceUrl: 'https://www.tiktok.com/@cbsmornings/video/7421637215782112558',
      author: 'CBS Mornings'
    },
    {
      id: '6',
      title: 'Meteor Shower Peaks This Weekend',
      description: 'Don\'t miss this spectacular celestial show',
      imageUrl: '/lovable-uploads/world-game.png',
      source: 'xiaohongshu',
      sourceUrl: 'https://www.xiaohongshu.com/user/profile/6789c9a6000000000a03d857',
      author: 'AstroEnthusiast'
    },
    {
      id: '7',
      title: 'Solar Eclipse 2025: Everything You Need to Know',
      description: 'Prepare for the upcoming total solar eclipse',
      imageUrl: '/lovable-uploads/3dc8af34-b172-4695-9e52-39b72b959ce2.png',
      source: 'tiktok',
      sourceUrl: 'https://www.tiktok.com/@cbsmornings/video/7411542419512053022',
      author: 'CBS Mornings'
    },
    {
      id: '8',
      title: 'Astronomy Photography Tips for Beginners',
      description: 'Capture stunning night sky photos with basic equipment',
      imageUrl: '/lovable-uploads/5af8b6f3-9d9a-421c-b233-3c4dee64857d.png',
      source: 'xiaohongshu',
      sourceUrl: 'https://www.xiaohongshu.com/user/profile/6784edf4000000000803fba4',
      author: 'StarGazer'
    },
    {
      id: '9',
      title: 'The Mysteries of Saturn\'s Rings',
      description: 'New discoveries about the iconic planetary feature',
      imageUrl: '/lovable-uploads/c4500211-2818-4d37-bb9c-aee9fd4c7e9c.png',
      source: 'xiaohongshu',
      sourceUrl: 'https://www.xiaohongshu.com/user/profile/67857599000000000803e1c5',
      author: 'CosmicWanderer'
    }
  ];

  // Filter items based on search query
  const filteredItems = searchQuery 
    ? exploreItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.author?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : exploreItems;

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Explore More</h2>
      
      <div className="mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search astronomy content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          {searchQuery && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 px-2" 
              onClick={() => setSearchQuery('')}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
      
      <PinterestLayout items={filteredItems} />
    </section>
  );
};

export default AstronomyExploreSection;
