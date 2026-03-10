'use client';

interface CloverIconProps {
  className?: string;
  size?: number;
}

const CloverIcon = ({ className = '', size = 48 }: CloverIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Neon Green Gradient */}
        <linearGradient id="cloverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF88" />
          <stop offset="50%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
        
        {/* Glow Filter */}
        <filter id="cloverGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#cloverGlow)">
        {/* Top Left Leaf */}
        <ellipse cx="35" cy="35" rx="24" ry="30" fill="url(#cloverGradient)" transform="rotate(-45 35 35)" />
        <ellipse cx="35" cy="35" rx="16" ry="22" fill="#166534" transform="rotate(-45 35 35)" />
        
        {/* Top Right Leaf */}
        <ellipse cx="65" cy="35" rx="24" ry="30" fill="#22C55E" transform="rotate(45 65 35)" />
        <ellipse cx="65" cy="35" rx="16" ry="22" fill="#15803D" transform="rotate(45 65 35)" />
        
        {/* Bottom Left Leaf */}
        <ellipse cx="35" cy="65" rx="24" ry="30" fill="#4ADE80" transform="rotate(-135 35 65)" />
        <ellipse cx="35" cy="65" rx="16" ry="22" fill="#16A34A" transform="rotate(-135 35 65)" />
        
        {/* Bottom Right Leaf */}
        <ellipse cx="65" cy="65" rx="24" ry="30" fill="#00D4FF" transform="rotate(135 65 65)" />
        <ellipse cx="65" cy="65" rx="16" ry="22" fill="#0E7490" transform="rotate(135 65 65)" />
        
        {/* Center */}
        <circle cx="50" cy="50" r="10" fill="#FCD34D" />
        
        {/* Stem */}
        <path d="M50,58 Q50,75 45,90" stroke="#22C55E" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="45" cy="90" rx="10" ry="6" fill="#166534" transform="rotate(-20 45 90)" />
      </g>
      
      {/* Sparkles - White */}
      <g fill="#FFFFFF" filter="url(#cloverGlow)">
        <circle cx="20" cy="25" r="2.5" opacity="0.9" />
        <circle cx="80" cy="30" r="2" opacity="0.7" />
        <circle cx="85" cy="70" r="2.5" opacity="0.8" />
        <circle cx="25" cy="75" r="2" opacity="0.6" />
      </g>
    </svg>
  );
};

export default CloverIcon;
