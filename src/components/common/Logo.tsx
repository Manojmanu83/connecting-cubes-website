import React from 'react';

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
  // Dimensions based on size
  const iconSizes = {
    sm: { w: 32, h: 32 },
    md: { w: 40, h: 40 },
    lg: { w: 48, h: 48 },
  };

  const textSizes = {
    sm: { main: 'text-base font-extrabold tracking-tight', sub: 'text-[9px] tracking-wider' },
    md: { main: 'text-xl font-extrabold tracking-tight', sub: 'text-[10px] tracking-widest' },
    lg: { main: 'text-2xl font-black tracking-tight', sub: 'text-[11px] tracking-widest' },
  };

  const isDarkBg = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric SVG Icon: Interlocking Connected Cubes */}
      <svg
        width={iconSizes[size].w}
        height={iconSizes[size].h}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cubeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E88E5" />
            <stop offset="100%" stopColor="#1261A0" />
          </linearGradient>
          <linearGradient id="cubeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1261A0" />
            <stop offset="100%" stopColor="#0B2A4A" />
          </linearGradient>
          <linearGradient id="cubeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64B5F6" />
            <stop offset="100%" stopColor="#1E88E5" />
          </linearGradient>
        </defs>

        {/* Primary Cube (Top-Center) */}
        <path d="M24 4L38 12L24 20L10 12L24 4Z" fill="url(#cubeGradient3)" />
        <path d="M10 12L24 20V34L10 26V12Z" fill="url(#cubeGradient2)" />
        <path d="M24 20L38 12V26L24 34V20Z" fill="url(#cubeGradient1)" />

        {/* Connected Node Accent Cube (Lower-Right) */}
        <path d="M34 26L44 31.7L34 37.5L24 31.7L34 26Z" fill="#64B5F6" opacity="0.9" />
        <path d="M24 31.7L34 37.5V45L24 39.2V31.7Z" fill="#1261A0" />
        <path d="M34 37.5L44 31.7V39.2L34 45V37.5Z" fill="#0B2A4A" />

        {/* Dynamic Connected Flow Line / Highway Track */}
        <circle cx="24" cy="20" r="2.5" fill="#FFFFFF" />
        <circle cx="34" cy="26" r="2" fill="#EAF4FC" />
        <line
          x1="24"
          y1="20"
          x2="34"
          y2="26"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
      </svg>

      {/* Typography Wordmark */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5 font-heading">
          <span
            className={`${textSizes[size].main} ${
              isDarkBg ? 'text-white' : 'text-[#0B2A4A]'
            }`}
          >
            CONNECTING
          </span>
          <span
            className={`${textSizes[size].main} ${
              isDarkBg ? 'text-[#64B5F6]' : 'text-[#1261A0]'
            }`}
          >
            CUBES
          </span>
        </div>
        <span
          className={`${textSizes[size].sub} font-semibold uppercase ${
            isDarkBg ? 'text-slate-300' : 'text-[#526478]'
          }`}
        >
          Logistics Coordination
        </span>
      </div>
    </div>
  );
};
