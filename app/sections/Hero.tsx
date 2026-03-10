'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FloatingCoin, SolanaIcon } from '../assets';
import { FaArrowRight, FaRocket, FaBolt, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">
                Lucky Coin
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container-custom py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-3 glass px-5 py-3 rounded-full mb-8"
            >
              <SolanaIcon size={20} />
              <span className="text-sm font-semibold text-white">Powered by Solana</span>
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full" 
              />
            </motion.div>
            
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <motion.span 
                  className="text-white block text-heading"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Lucky Coin
                </motion.span>
                <motion.span 
                  className="gradient-text glowing-text block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Revolutionary
                </motion.span>
                <motion.span 
                  className="text-white block text-heading"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Meme Experience
                </motion.span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-body mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Experience the future of meme coins with cutting-edge technology, 
              community-driven governance, and lightning-fast Solana transactions.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/tokenomics" className="btn-primary text-base">
                  <FaRocket />
                  <span>Buy LKC</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/tokenomics" className="btn-secondary text-base">
                  <span>Explore Tokenomics</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { icon: FaBolt, value: '1B+', label: 'Total Supply' },
                { icon: FaShieldAlt, value: '$LKC', label: 'Token Symbol' },
                { icon: FaUsers, value: 'SOL', label: 'Network' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <feature.icon className="text-[#60A5FA] text-xl" />
                    <p className="text-2xl md:text-3xl font-bold gradient-text">{feature.value}</p>
                  </div>
                  <p className="text-sm text-muted">{feature.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Floating Coin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}
            className="flex justify-center items-center relative"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <FloatingCoin size={380} animated={true} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
