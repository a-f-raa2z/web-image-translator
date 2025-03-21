import React from 'react';

interface PlaygroundCard2Props {
  subtitle: string;
  title: string;
  className?: string;
  image: string;
}

const PlaygroundCard2: React.FC<PlaygroundCard2Props> = ({ subtitle, title, className, image }) => {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-md ${className}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-white text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default PlaygroundCard2;
