
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'medium' }) => {
  // Set size based on prop
  const sizeClasses = {
    small: "h-6 w-6",
    medium: "h-8 w-8",
    large: "h-12 w-12"
  };
  
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg 
        className={`${sizeClasses[size]} mr-2`}
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M100 30 L150 60 L150 120 L100 150 L50 120 L50 60 Z" 
          fill="#FF00B8" 
          stroke="none" 
        />
        <path 
          d="M50 60 L100 30 L100 90 L50 120 Z" 
          fill="#FFB1E6" 
          stroke="none" 
        />
        <path 
          d="M100 90 L100 150 L150 120 L150 60 Z" 
          fill="white" 
          stroke="none" 
          fillOpacity="0.15"
        />
      </svg>
      <span className="font-bold text-foreground">Succinct</span>
    </div>
  );
};

export default Logo;
