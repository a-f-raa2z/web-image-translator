import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import VideoPlayer from './VideoPlayer';
import ChallengeCard from './ChallengeCard';
import PlaygroundCard from './PlaygroundCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AIActivitiesSection from './AIActivitiesSection';
import AICommunitiesSection from './AICommunitiesSection';
import AIExploreSection;

const AILearningSection: React.FC = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  
  const introVideos = [
    {
      id: 'JO9MgO1Zp3E',
      title: 'Input & Pre-training',
      duration: '2:51'
    },
    {
      id: 's1fhxAVpYx8',
      title: 'Storage and Embeddings',
      duration: '2:54'
    },
    {
      id: 'Z7Mes_Ej69Y',
      title: 'Process & Neural Networks',
      duration: '2:47'
    },
    {
      id: '2RdK6k45koY',
      title: 'Attention',
      duration: '3:10'
    },
    {
      id: 'gGK7b7j4BiQ',
      title: 'Output and Probabilities',
      duration: '2:55'
    }
  ];

  const neighboringVideos = [
    {
      id: 'pX6zqaEHAdw',
      title: 'What are Chatbots',
      duration: '1:30'
    },
    {
      id: 'aircAruvnKk',
      title: 'Reinforcement Learning',
      duration: '2:20'
    }
  ];

  const extraVideos = [
    {
      id: 'GwIo3gDZCVQ',
      title: 'Transformers',
      duration: '2:45'
    },
    {
      id: 'ftMq5ps503w',
      title: 'GANs',
      duration: '3:10'
    }
  ];

  const handleThumbnailClick = (index: number, videos: typeof introVideos) => {
    const newIndex = videos[index].id === videos[selectedVideoIndex]?.id ? selectedVideoIndex : index;
    setAnimate(true);
    setSelectedVideoIndex(newIndex);
    
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = (videos: typeof introVideos) => {
    setStartIndex(Math.min(startIndex + 1, videos.length - 4));
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">My Learning</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-6">
          <div className="h-full rounded-xl overflow-hidden shadow-md bg-black transition-all duration-300 animate-scale-in">
            <VideoPlayer videoId={introVideos[selectedVideoIndex].id} />
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <div className={cn(
            "h-full transition-all duration-500",
            animate && "animate-bounce-in"
          )}>
            <ChallengeCard 
              title="Challenge"
              description="Explain Generative in your own words."
              descriptionClassName="text-sm"
              className="h-full"
            />
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <div className={cn(
            "h-full transition-all duration-500",
            animate && "animate-bounce-in"
          )}>
            <PlaygroundCard
              subtitle="You've unlocked"
              title="AI Playground"
              className="h-full"
              image="/lovable-uploads/ai-playground.jpg"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-purple-100 rounded-2xl p-0 md:p-0 border border-purple-300">
        <div className="p-6">
          <Tabs defaultValue="intro">
          <TabsList className="mb-4 bg-transparent p-0 shadow-none space-x-4">
            <TabsTrigger 
              value="intro" 
              className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
            >
              Intro to Gen AI
            </TabsTrigger>
            <TabsTrigger 
              value="chatbots" 
              className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
            >
              Chatbots
            </TabsTrigger>
            <TabsTrigger 
              value="chatbots-ai" 
              className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
            >
              Do Chatbots Need AI?
            </TabsTrigger>
            <TabsTrigger 
              value="Chatbot in the World LLM" 
              className="bg-transparent hover:bg-purple-50 text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white focus:outline-none focus:ring-0 rounded-md px-3 py-2 transition-colors"
            >
              Chatbot in LLM
            </TabsTrigger>
          </TabsList>

            <TabsContent value="intro" className="mt-0">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Welcome to GenAI
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Begin your journey into artificial intelligence. Learn about neural networks, machine learning, and how AI is shaping our future.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-4">
                      {introVideos.slice(startIndex, startIndex + 4).map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => handleThumbnailClick(index + startIndex, introVideos)}
                          className={cn(
                            "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                            video.id === introVideos[selectedVideoIndex].id && "ring-2 ring-purple-500"
                          )}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-xs font-medium truncate">{video.title}</p>
                            <p className="text-white/80 text-xs">{video.duration}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {startIndex > 0 && (
                      <button 
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50"
                      >
                        <ChevronLeft size={20} className="text-gray-600" />
                      </button>
                    )}
                    
                    {startIndex < introVideos.length - 4 && (
                      <button 
                        onClick={() => handleNext(introVideos)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50"
                      >
                        <ChevronRight size={20} className="text-gray-600" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chatbots" className="mt-0">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Chatbots
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dive into fundamental AI concepts. Explore computer vision, reinforcement learning, and how AI systems make decisions.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="grid grid-cols-4 gap-4">
                    {neighboringVideos.map((video, index) => (
                      <button
                        key={video.id}
                        onClick={() => handleThumbnailClick(index, neighboringVideos)}
                        className={cn(
                          "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                          video.id === neighboringVideos[selectedVideoIndex].id && "ring-2 ring-purple-500"
                        )}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white text-xs font-medium truncate">{video.title}</p>
                          <p className="text-white/80 text-xs">{video.duration}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chatbots-ai" className="mt-0">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    Advanced AI
                  </h3>
                  <p className="text-purple-600 text-sm">
                    Explore cutting-edge AI technologies. Learn about transformers, GANs, and the latest developments in artificial intelligence.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="grid grid-cols-4 gap-4">
                    {extraVideos.map((video, index) => (
                      <button
                        key={video.id}
                        onClick={() => handleThumbnailClick(index, extraVideos)}
                        className={cn(
                          "relative rounded-lg overflow-hidden aspect-video bg-gray-100 hover:ring-2 hover:ring-purple-400 transition-all",
                          video.id === extraVideos[selectedVideoIndex].id && "ring-2 ring-purple-500"
                        )}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white text-xs font-medium truncate">{video.title}</p>
                          <p className="text-white/80 text-xs">{video.duration}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <br></br>
      <div className="col-span-1 md:col-span-12">
        <AIActivitiesSection />
      </div>
      <div className="col-span-1 md:col-span-12">
        <AICommunitiesSection />
      </div>
      <div className="col-span-1 md:col-span-12">
        <AIExploreSection />
      </div>
    </section>
  );
};

export default AILearningSection;
