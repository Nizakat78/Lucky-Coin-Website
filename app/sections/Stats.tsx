'use client';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '../components';
import { FaUsers, FaCoins, FaChartLine, FaGlobe } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const stats = [
  { icon: FaCoins, end: 1000000000, suffix: '+', label: 'Total Supply', color: 'from-[#3B82F6] to-[#60A5FA]' },
  { icon: FaUsers, end: 50000, suffix: '+', label: 'Active Holders', color: 'from-[#60A5FA] to-[#3B82F6]' },
  { icon: FaChartLine, end: 100, suffix: 'M+', label: 'Market Cap Goal', color: 'from-[#3B82F6] to-[#06B6D4]' },
  { icon: FaGlobe, end: 10000, suffix: '+', label: 'Community Members', color: 'from-[#60A5FA] to-[#06B6D4]' },
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
    transition: { staggerChildren: 0.15 }
  }
};

const Stats = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Stats Loading...
            </h2>
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
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 rounded-full glass text-white font-semibold mb-5 text-sm uppercase tracking-wider"
          >
            Join the Revolution
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-heading">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Be Part of Something
            </motion.span>
            <br />
            <motion.span 
              className="gradient-text glowing-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Legendary
            </motion.span>
          </h2>
          <motion.p 
            className="text-lg text-body max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            The fastest-growing meme coin ecosystem on Solana
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glass-card p-6 md:p-8 text-center card-hover"
            >
              <motion.div 
                className={`w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg shadow-[#3B82F6]/30`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="text-white text-2xl" />
              </motion.div>
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                className="text-3xl md:text-4xl font-bold gradient-text"
              />
              <motion.p 
                className="text-muted mt-2 font-medium text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
