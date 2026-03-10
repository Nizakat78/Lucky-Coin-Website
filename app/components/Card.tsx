'use client';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  variant?: 'default' | 'glass' | 'gradient';
}

const Card = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  variant = 'glass',
}: CardProps) => {
  const variants = {
    default: 'bg-slate-800/50',
    glass: 'glass-card',
    gradient: 'bg-gradient-to-br from-[#08CB00]/10 to-[#00FF88]/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8 } : {}}
      className={`rounded-xl p-6 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
