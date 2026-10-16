import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const selectedSize = (className.includes('w-') || className.includes('h-')) ? '' : sizeClasses[size];

  return (
    <img 
      src="/nexivd-logo.jpeg"
      alt="NexIVD Laboratories Logo"
      className={`${selectedSize} ${className} shrink-0 object-contain`}
    />
  );
}