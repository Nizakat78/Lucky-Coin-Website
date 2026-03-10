'use client';

interface SolanaIconProps {
  className?: string;
  size?: number;
}

const SolanaIcon = ({ className = '', size = 40 }: SolanaIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="solanaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
        <linearGradient id="solanaGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="20" cy="20" r="18" fill="#1a1a2e" />
      
      {/* Solana Waves */}
      <g transform="translate(5, 10)">
        {/* Top Wave */}
        <path d="M4.5 3.5 L25.5 3.5 L28.5 6.5 L7.5 6.5 L4.5 3.5 Z" fill="url(#solanaGradient1)" />
        
        {/* Middle Wave */}
        <path d="M4.5 13.5 L25.5 13.5 L28.5 16.5 L7.5 16.5 L4.5 13.5 Z" fill="url(#solanaGradient2)" />
        
        {/* Bottom Wave */}
        <path d="M4.5 23.5 L25.5 23.5 L28.5 26.5 L7.5 26.5 L4.5 23.5 Z" fill="url(#solanaGradient1)" />
      </g>
    </svg>
  );
};

export default SolanaIcon;
