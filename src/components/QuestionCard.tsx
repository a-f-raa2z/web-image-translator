import React, { useState } from 'react';

interface QuestionCardProps {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  title: string;
  className?: string;
  image: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ option1, option2, option3, option4, title, className, image }) => {
  const [selectedOptions, setSelectedOptions] = useState<boolean[]>([false, false, false, false]);

  const handleCheckboxChange = (index: number) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = !updatedOptions[index];
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-md ${className}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 px-8 py-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <br></br>
        <div className="text-white text-sm space-y-2">
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
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
