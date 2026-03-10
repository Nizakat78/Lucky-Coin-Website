'use client';

interface LuckyCoinLogoProps {
  className?: string;
  size?: number;
}

const LuckyCoinLogo = ({ className = '', size = 100 }: LuckyCoinLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Neon Green Gradient */}
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF88" />
          <stop offset="50%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#7B2CBF" />
        </linearGradient>

        {/* Gold Gradient for Coin */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Glow Effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Ring - Neon Green */}
      <circle cx="100" cy="100" r="95" fill="url(#greenGradient)" filter="url(#glow)" />
      
      {/* Inner Circle - Dark */}
      <circle cx="100" cy="100" r="80" fill="#000000" />
      
      {/* Ring Border - Neon */}
      <circle cx="100" cy="100" r="80" fill="none" stroke="url(#greenGradient)" strokeWidth="3" opacity="0.8" />

      {/* Four Leaf Clover - Bright Green */}
      <g transform="translate(100, 100)">
        {/* Top Left Leaf */}
        <ellipse cx="-25" cy="-25" rx="22" ry="30" fill="#00FF88" transform="rotate(-45)" />
        <ellipse cx="-25" cy="-25" rx="14" ry="20" fill="#14532D" transform="rotate(-45)" />
        
        {/* Top Right Leaf */}
        <ellipse cx="25" cy="-25" rx="22" ry="30" fill="#22C55E" transform="rotate(45)" />
        <ellipse cx="25" cy="-25" rx="14" ry="20" fill="#166534" transform="rotate(45)" />
        
        {/* Bottom Left Leaf */}
        <ellipse cx="-25" cy="25" rx="22" ry="30" fill="#4ADE80" transform="rotate(-135)" />
        <ellipse cx="-25" cy="25" rx="14" ry="20" fill="#15803D" transform="rotate(-135)" />
        
        {/* Bottom Right Leaf */}
        <ellipse cx="25" cy="25" rx="22" ry="30" fill="#00D4FF" transform="rotate(135)" />
        <ellipse cx="25" cy="25" rx="14" ry="20" fill="#0E7490" transform="rotate(135)" />
        
        {/* Center */}
        <circle cx="0" cy="0" r="8" fill="#FCD34D" />
        
        {/* Stem */}
        <path d="M0,0 Q0,20 0,35" stroke="#22C55E" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>

      {/* LKC Text - White with Glow */}
      <text x="100" y="175" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#FFFFFF" fontFamily="Arial, sans-serif" letterSpacing="4" filter="url(#glow)">LKC</text>

      {/* Sparkle Effects - White */}
      <g filter="url(#glow)">
        <circle cx="50" cy="40" r="3" fill="#FFFFFF" opacity="0.9" />
        <circle cx="150" cy="50" r="2.5" fill="#FFFFFF" opacity="0.7" />
        <circle cx="160" cy="120" r="3" fill="#FFFFFF" opacity="0.8" />
        <circle cx="40" cy="140" r="2" fill="#FFFFFF" opacity="0.6" />
        <circle cx="130" cy="150" r="2.5" fill="#FFFFFF" opacity="0.7" />
      </g>
    </svg>
  );
};

export default LuckyCoinLogo;
