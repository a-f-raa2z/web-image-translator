
import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  title: string;
  className?: string;
  image?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ option1, option2, option3, option4, title, className, image }) => {
  const [selectedOptions, setSelectedOptions] = useState<boolean[]>([false, false, false, false]);

  const handleCheckboxChange = (index: number) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = !updatedOptions[index];
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-md bg-green-500 text-white ${className}`}>
      <div className="absolute top-2 left-3 z-10 bg-blue-100 px-2 py-1 rounded text-xs font-semibold text-blue-700 flex items-center gap-1">
        <HelpCircle size={14} />
        <span>Question</span>
      </div>
      
      <div className="px-8 py-6">
        <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
        <div className="text-white text-sm space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedOptions[0]}
              onChange={() => handleCheckboxChange(0)}
              className="mr-2"
            />
            {option1}
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedOptions[1]}
              onChange={() => handleCheckboxChange(1)}
              className="mr-2"
            />
            {option2}
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedOptions[2]}
              onChange={() => handleCheckboxChange(2)}
              className="mr-2"
            />
            {option3}
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedOptions[3]}
              onChange={() => handleCheckboxChange(3)}
              className="mr-2"
            />
            {option4}
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
