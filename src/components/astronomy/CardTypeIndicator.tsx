
import React from 'react';
import { Trophy, PenTool, HelpCircle, Image, Music } from 'lucide-react';
import { cn } from "@/lib/utils";

export type CardType = 'challengecard' | 'questioncard' | 'playgroundcard' | 'gallerycard' | 'partycard';

interface CardTypeIndicatorProps {
  type: CardType;
}

export const getCardDetails = (type: CardType) => {
  switch(type) {
    case 'challengecard':
      return { 
        icon: <Trophy size={16} className="text-white" />,
        bgColor: 'bg-orange-500',
        label: 'Challenge'
      };
    case 'questioncard':
      return { 
        icon: <HelpCircle size={16} className="text-white" />,
        bgColor: 'bg-blue-300',
        label: 'Question'
      };
    case 'playgroundcard':
      return { 
        icon: <PenTool size={16} className="text-white" />,
        bgColor: 'bg-purple-300',
        label: 'Playground'
      };
    case 'gallerycard':
      return { 
        icon: <Image size={16} className="text-white" />,
        bgColor: 'bg-indigo-400',
        label: 'Gallery'
      };
    case 'partycard':
      return { 
        icon: <Music size={16} className="text-white" />,
        bgColor: 'bg-yellow-400',
        label: 'Party'
      };
    default:
      return null;
  }
};

const CardTypeIndicator: React.FC<CardTypeIndicatorProps> = ({ type }) => {
  const details = getCardDetails(type);
  
  if (!details) return null;
  
  return (
    <div 
      className={cn(
        "p-1 rounded-full w-6 h-6 flex items-center justify-center",
        details.bgColor
      )}
      title={details.label}
    >
      {details.icon}
    </div>
  );
};

export default CardTypeIndicator;
