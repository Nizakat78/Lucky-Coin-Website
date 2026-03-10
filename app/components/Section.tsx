'use client';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'gradient' | 'dark' | 'white';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section = ({
  children,
  className = '',
  id,
  background = 'default',
  padding = 'xl',
}: SectionProps) => {
  const backgrounds = {
    default: 'bg-transparent',
    gradient: 'bg-gradient-to-b from-amber-50/50 to-transparent',
    dark: 'bg-gray-900 text-white',
    white: 'bg-white',
  };

  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24 md:py-32',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
