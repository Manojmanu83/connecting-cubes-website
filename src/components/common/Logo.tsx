import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  // Dimensions preserving authentic 3:1 aspect ratio of the 2172x724 logo asset
  const dimensions = {
    sm: { width: 132, height: 44 },
    md: { width: 165, height: 55 },
    lg: { width: 198, height: 66 },
  };

  const isDarkBg = variant === 'dark';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Authentic Connecting Cubes Brand Logo from public/images */}
      <div
        className={`relative flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02] ${
          isDarkBg
            ? 'p-1.5 rounded-lg bg-white/95 shadow-sm'
            : ''
        }`}
      >
        <Image
          src="/images/connecting_cube_logo_transparent.png"
          alt="Connecting Cubes Logistics Coordination"
          width={dimensions[size].width}
          height={dimensions[size].height}
          priority
          className="object-contain w-auto h-auto max-h-[50px] transition-opacity"
        />
      </div>
    </div>
  );
};

