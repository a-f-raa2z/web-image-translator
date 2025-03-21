
import React, { useState } from 'react';
import { Map } from 'lucide-react';
import ChallengeCard from '@/components/ChallengeCard';
import PlaygroundCard from '@/components/PlaygroundCard';
import VideoPlayer from '@/components/VideoPlayer';
import VideoThumbnail from '@/components/VideoThumbnail';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Video {
  id: string;
  title: string;
  duration: string;
}

const LearningSection: React.FC = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  
  const videos: Video[] = [
    {
      id: 'J4RqCSD--Dg',
      title: 'What is AI?',
      duration: '2:04'
    },
    {
      id: '5yeJ03crTrI',
      title: 'Unsupervised Learning',
      duration: '1:45'
    },
    {
      id: 'g9oESGzcA84',
      title: 'Supervised Learning',
      duration: '2:30'
    },
    {
      id: 'l_kGsoV52Kw',
      title: 'What is Reinforcement Learning',
      duration: '3:15'
    },
    {
      id: 'l_kGsoV52Kw',
      title: 'What is Machine Learning',
      duration: '2:20'
    }
  ];

  // Handle thumbnail click to update the main video
  const handleThumbnailClick = (index: number) => {
    setSelectedVideoIndex(index);
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">My Learning</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-6">
          <div className="h-full rounded-xl overflow-hidden shadow-md bg-black">
            <VideoPlayer videoId={videos[selectedVideoIndex].id} />
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <ChallengeCard 
            title="Challenge" 
            description="Explain AI in your own words"
            image="/lovable-uploads/476601ed-362d-4cd8-8c62-4b8047535094.png"
            descriptionClassName="text-sm" // Keeping the smaller text class
          />
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <PlaygroundCard
            subtitle="You've unlocked"
            title="Whisk"
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">Intro to Fine Art</span>
          <span className="text-sm text-gray-500">5 Sections | 12 Points</span>
          <span className="px-3 py-1 bg-white border border-gray-200 text-xs rounded-full">Mysteries of Art</span>
          <span className="px-3 py-1 bg-white border border-gray-200 text-xs rounded-full">Advancing with The Masters</span>
        </div>
        
        <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
          <Map size={14} /> Map
        </button>
      </div>
      
      <div className="mt-6">
        <Carousel className="w-full">
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <VideoThumbnail
                  videoId={video.id}
                  title={video.title}
                  isSelected={selectedVideoIndex === index}
                  onClick={() => handleThumbnailClick(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-white" />
          <CarouselNext className="right-0 bg-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default LearningSection;
