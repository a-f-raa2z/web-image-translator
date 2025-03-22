
import React from 'react';
import { cn } from "@/lib/utils";
import { Trophy, PenTool, HelpCircle, Music, Images } from 'lucide-react';

export type CardType = 'challengecard' | 'playgroundcard' | 'questioncard' | 'partycard' | 'gallerycard';

interface CardTypeIndicatorProps {
  type: CardType;
  className?: string;
}

const CardTypeIndicator: React.FC<CardTypeIndicatorProps> = ({ type, className }) => {
  // Get icon and color for each card type
  const getCardDetails = (type: CardType) => {
    switch (type) {
      case 'challengecard':
        return { 
          icon: <Trophy size={16} className="text-white" />,
          bgColor: 'bg-orange-300',
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
      case 'partycard':
        return { 
          icon: <Music size={16} className="text-white" />,
          bgColor: 'bg-yellow-300',
          label: 'Party'
        };
      case 'gallerycard':
        return { 
          icon: <Images size={16} className="text-white" />,
          bgColor: 'bg-green-300',
          label: 'Gallery'
        };
      default:
        return null;
    }
  };

  const details = getCardDetails(type);
  if (!details) return null;

  return (
    <div 
      className={cn(
        "w-6 h-6 rounded-full flex items-center justify-center",
        details.bgColor,
        className
      )}
      title={details.label}
    >
      {details.icon}
    </div>
  );
};

export default CardTypeIndicator;
