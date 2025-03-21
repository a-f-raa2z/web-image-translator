import React from 'react';
import { cn } from '@/lib/utils';
import { Star, Award, Play } from 'lucide-react';

interface AstronomyChallengeCardProps {
  title?: string;
  description?: string;
  descriptionClassName?: string;
  className?: string;
  videoId?: string;
}

const AstronomyChallengeCard: React.FC<AstronomyChallengeCardProps> = ({
  title = "Challenge",
  description = "Explain the life cycle of a star from birth to death",
  descriptionClassName,
  className,
  videoId = "lcZTcfdZ3Ow"
}) => {
  return (
    <div className={cn(
      "bg-purple-50 rounded-xl shadow-md overflow-hidden h-full flex flex-col",
      className
    )}>
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
              <h3 className="font-semibold text-gray-900">{title}</h3>

            </div>
            <p className={cn(
              "text-gray-600 mt-2",
              descriptionClassName
            )}>
              {description}
            </p>
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-purple-600" />
            <span className="text-sm text-purple-600">Earn Space Explorer Badge</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronomyChallengeCard; 