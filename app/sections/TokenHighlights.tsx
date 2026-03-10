'use client';
import { motion } from 'framer-motion';
import { Card } from '../components';
import { FaFire, FaLock, FaGift, FaBullhorn, FaCode, FaPercentage } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const tokenData = [
  { icon: FaFire, title: 'Liquidity Pool', percentage: 40, description: 'Locked for 2 years to ensure stability and build trust', color: 'from-[#3B82F6] to-[#60A5FA]' },
  { icon: FaGift, title: 'Community Rewards', percentage: 25, description: 'Airdrops, staking rewards, and community incentives', color: 'from-[#60A5FA] to-[#3B82F6]' },
  { icon: FaBullhorn, title: 'Marketing', percentage: 15, description: 'Influencer partnerships and promotional campaigns', color: 'from-[#3B82F6] to-[#06B6D4]' },
  { icon: FaCode, title: 'Development', percentage: 10, description: 'Platform development and new features', color: 'from-[#60A5FA] to-[#06B6D4]' },
  { icon: FaLock, title: 'Team (Vested)', percentage: 5, description: '12-month cliff with 24-month vesting', color: 'from-[#3B82F6] to-[#2563EB]' },
  { icon: FaPercentage, title: 'Initial Burn', percentage: 5, description: 'Permanently burned at launch', color: 'from-[#60A5FA] to-[#2563EB]' },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const TokenHighlights = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 rounded-full glass text-white font-semibold mb-5 text-sm uppercase tracking-wider"
          >
            Token Distribution
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-heading">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Token
            </motion.span>
            <motion.span 
              className="gradient-text glowing-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {' '}Allocation{' '}
            </motion.span>
          </h2>
          <motion.p 
            className="text-lg text-body max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Transparent distribution with locked liquidity
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tokenData.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
            >
              <Card variant="glass" className="h-full card-hover group">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#3B82F6]/30`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="text-white text-lg" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-lg font-bold text-white mb-1 text-heading"
                      whileHover={{ x: 5 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-3xl font-bold gradient-text mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {item.percentage}%
                    </motion.p>
                  </div>
                </div>
                <motion.p 
                  className="text-body text-sm mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {item.description}
                </motion.p>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Total Supply */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="glass-card p-8 md:p-10 text-center">
            <motion.h3 
              className="text-xl font-bold text-white mb-3 text-heading"
              whileHover={{ scale: 1.05 }}
            >
              Total Supply
            </motion.h3>
            <motion.p 
              className="text-5xl md:text-6xl font-black gradient-text mb-3"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              1,000,000,000
            </motion.p>
            <p className="text-body">$LKC Tokens</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenHighlights;
