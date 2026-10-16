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
  const dimensions = {
    sm: { width: 280, height: 110 },
    md: { width: 380, height: 149 },
    lg: { width: 440, height: 172 },
  };

  const isDarkBg = variant === 'dark';
  const { width, height } = dimensions[size];

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
    >
      <div
        className={`relative flex items-center justify-center ${isDarkBg
          ? 'p-2 rounded-xl bg-white shadow-md'
          : ''
          }`}
      >
        <Image
          src="/images/connecting_cube_logo_transparent.png"
          alt="Connecting Cubes - Pan-India Logistics Coordination"
          width={width}
          height={height}
          priority
          className="block w-auto max-w-none object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          style={{
            height: size === 'sm' ? 52 : size === 'md' ? 72 : 80,
            width: 'auto',
          }}
        />
      </div>
    </div>
  );
};

