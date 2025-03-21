import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { cn } from "@/lib/utils";

const AstronomyCommunitySection: React.FC = () => {
  const posts = [
    {
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80",
      name: "Sarah Connor",
      content: "Just captured my first photo of Saturn's rings! Check it out!",
      likes: 24,
      comments: 8,
      timeAgo: "2h"
    },
    {
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      name: "Mike Ross",
      content: "Tonight's meteor shower was incredible! Here are some tips for viewing.",
      likes: 45,
      comments: 12,
      timeAgo: "4h"
    },
    {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      name: "Emily Chen",
      content: "Found a great dark sky location for telescope viewing. DM for details!",
      likes: 32,
      comments: 15,
      timeAgo: "6h"
    }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Community</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div 
            key={index}
            className={cn(
              "bg-white rounded-xl p-4 shadow-sm",
              "border border-gray-100"
            )}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src={post.avatar} 
                  alt={post.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{post.name}</h3>
                <p className="text-sm text-gray-500">{post.timeAgo}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">
              {post.content}
            </p>
            
            <div className="flex items-center gap-4 text-gray-500">
              <button className="flex items-center gap-1 hover:text-gray-700">
                <Heart size={18} />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-700">
                <MessageCircle size={18} />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-700 ml-auto">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AstronomyCommunitySection; 