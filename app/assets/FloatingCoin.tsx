'use client';

interface FloatingCoinProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

const FloatingCoin = ({ className = '', size = 200, animated = true }: FloatingCoinProps) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 300 300" className={animated ? 'floating' : ''} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Neon Green Gradient */}
          <linearGradient id="coinGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF88" />
            <stop offset="50%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#7B2CBF" />
          </linearGradient>
          
          {/* Face Gradient */}
          <radialGradient id="faceGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#BBF7D0" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#14532D" />
          </radialGradient>
          
          {/* Glow Filter */}
          <filter id="coinGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Shadow Filter */}
          <filter id="coinShadow">
            <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.3" />
          </filter>
        </defs>
        
        {/* Outer Glow Ring */}
        <circle cx="150" cy="150" r="140" fill="url(#coinGradient3D)" opacity="0.2" filter="url(#coinGlow)" />
        
        {/* Main Coin Body */}
        <ellipse cx="150" cy="155" rx="130" ry="125" fill="url(#coinGradient3D)" />
        
        {/* Coin Face */}
        <circle cx="150" cy="150" r="125" fill="url(#faceGradient)" filter="url(#coinShadow)" />
        
        {/* Inner Ring */}
        <circle cx="150" cy="150" r="105" fill="none" stroke="#00FF88" strokeWidth="3" opacity="0.6" />
        
        {/* Decorative Dots */}
        <g opacity="0.5">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const x = 150 + Math.cos(angle) * 90;
            const y = 150 + Math.sin(angle) * 90;
            return <circle key={i} cx={x} cy={y} r="2" fill="#00FF88" />;
          })}
        </g>
        
        {/* LKC Text - White */}
        <text x="150" y="165" textAnchor="middle" fontSize="72" fontWeight="bold" fill="#FFFFFF" fontFamily="Arial, sans-serif" letterSpacing="8">LKC</text>
        
        {/* Four Leaf Clover */}
        <g transform="translate(150, 85)">
          <ellipse cx="-12" cy="-12" rx="10" ry="14" fill="#00FF88" transform="rotate(-45)" />
          <ellipse cx="12" cy="-12" rx="10" ry="14" fill="#22C55E" transform="rotate(45)" />
          <ellipse cx="-12" cy="12" rx="10" ry="14" fill="#4ADE80" transform="rotate(-135)" />
          <ellipse cx="12" cy="12" rx="10" ry="14" fill="#00D4FF" transform="rotate(135)" />
          <circle cx="0" cy="0" r="5" fill="#FCD34D" />
        </g>
        
        {/* Sparkles - White */}
        <g fill="#FFFFFF">
          <polygon points="150,35 153,43 162,43 155,48 157,57 150,52 143,57 145,48 138,43 147,43" />
          <polygon points="55,150 57,155 62,155 58,158 60,163 55,160 50,163 52,158 48,155 53,155" />
          <polygon points="245,150 247,155 252,155 248,158 250,163 245,160 240,163 242,158 238,155 243,155" />
          <polygon points="150,255 152,260 157,260 153,263 155,268 150,265 145,268 147,263 143,260 148,260" />
        </g>
        
        {/* Shine Effect */}
        <ellipse cx="110" cy="110" rx="40" ry="30" fill="#FFFFFF" opacity="0.3" transform="rotate(-30 110 110)" />
      </svg>
    </div>
  );
};

export default FloatingCoin;
