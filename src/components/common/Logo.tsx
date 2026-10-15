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
  // Proportions matching the 1536x1024 (1.5:1) transparent logo asset
  // const dimensions = {
  //   sm: { width: 180, height: 120, imgClass: 'h-10 sm:h-11 max-h-[46px]' },
  //   md: { width: 240, height: 160, imgClass: 'h-12 sm:h-13 lg:h-14 max-h-[58px]' },
  //   lg: { width: 300, height: 200, imgClass: 'h-16 sm:h-18 lg:h-20 max-h-[80px]' },
  // };
  const dimensions = {
    sm: { width: 180, height: 120, imgClass: 'h-10 sm:h-11 max-h-[46px]' },
    md: { width: 240, height: 160, imgClass: 'h-12 sm:h-13 lg:h-14 max-h-[58px]' },
    // If needed, you can adjust these Tailwind height values to perfectly match your eye
    lg: { width: 300, height: 200, imgClass: 'h-15 sm:h-16 lg:h-18 max-h-[72px]' },
  };

  const isDarkBg = variant === 'dark';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Authentic Connecting Cubes Brand Logo from public/images */}
      <div
        className={`relative flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02] ${isDarkBg
          ? 'p-2 sm:p-2.5 rounded-xl bg-white shadow-md'
          : ''
          }`}
      >
        <Image
          src="/images/connecting_cube_logo_transparent.png"
          alt="Connecting Cubes - Pan-India Logistics Coordination"
          width={dimensions[size].width}
          height={dimensions[size].height}
          priority
          className={`object-contain w-auto transition-opacity ${dimensions[size].imgClass}`}
        />
      </div>
    </div>
  );
};

