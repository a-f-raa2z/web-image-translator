
import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Award, Play } from 'lucide-react';

interface AstronomyChallengeCardProps {
  title?: string;
  description?: string;
  descriptionClassName?: string;
  className?: string;
  videoId?: string;
  onClick?: () => void;
  hasVideos?: boolean;
}

const AstronomyChallengeCard: React.FC<AstronomyChallengeCardProps> = ({
  title = "Challenge",
  description = "Explain the life cycle of a star from birth to death",
  descriptionClassName,
  className,
  videoId = "lcZTcfdZ3Ow",
  onClick,
  hasVideos
}) => {
  return (
    <div 
      className={cn(
        "bg-orange-500 rounded-xl shadow-md overflow-hidden h-full flex flex-col relative", // Changed from bg-purple-50 to bg-orange-500
        className
      )}
      onClick={onClick}
    >
      <div className="absolute top-2 left-3 z-10 bg-orange-100 px-2 py-1 rounded text-xs font-semibold text-orange-700">
        Challenge
      </div>
      
      <div className="w-full aspect-video relative group cursor-pointer">
        <img 
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play size={24} className="text-gray-600 ml-1" />
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white">{title}</h3> {/* Changed from text-gray-900 to text-white */}
            </div>
            <p className={cn(
              "text-white mt-2", // Changed from text-gray-600 to text-white
              descriptionClassName
            )}>
              {description}
            </p>
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2">
            {hasVideos ? (
              <>
                <Play size={16} className="text-white" /> {/* Changed from text-orange-600 to text-white */}
                <span className="text-sm text-white">Watch Video Series</span> {/* Changed from text-orange-600 to text-white */}
              </>
            ) : (
              <>
                <Award size={16} className="text-white" /> {/* Changed from text-orange-600 to text-white */}
                <span className="text-sm text-white">Earn Space Explorer Badge</span> {/* Changed from text-orange-600 to text-white */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyChallengeCard;
