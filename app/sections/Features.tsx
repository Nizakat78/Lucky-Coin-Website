'use client';
import { motion } from 'framer-motion';
import { Card, FeaturesScene } from '../components';
import { 
  FaBolt, FaShieldAlt, FaUsers, FaChartBar, FaRocket, FaSmile,
  FaFire, FaLock, FaGift, FaGlobe, FaHandHoldingUsd, FaTrophy
} from 'react-icons/fa';

const features = [
  { 
    icon: FaBolt, 
    title: 'Lightning Fast', 
    description: 'Built on Solana for instant transactions with minimal fees',
    scene: 'bolt' as const,
    color: 'from-yellow-400 to-orange-500',
    stats: '< 1s Finality'
  },
  { 
    icon: FaShieldAlt, 
    title: '100% Secure', 
    description: 'Audited smart contract with renounced ownership for maximum safety',
    scene: 'shield' as const,
    color: 'from-purple-500 to-pink-500',
    stats: 'Audited & Safe'
  },
  { 
    icon: FaUsers, 
    title: 'Community First', 
    description: 'Driven by our amazing community of Lucky Coin believers',
    scene: 'users' as const,
    color: 'from-green-400 to-emerald-500',
    stats: '50K+ Members'
  },
  { 
    icon: FaFire, 
    title: 'Deflationary', 
    description: 'Regular token burns to increase scarcity and value over time',
    scene: 'fire' as const,
    color: 'from-red-500 to-orange-500',
    stats: '5% Burned'
  },
  { 
    icon: FaRocket, 
    title: 'Viral Marketing', 
    description: 'Strategic partnerships and campaigns to spread the luck',
    scene: 'bullhorn' as const,
    color: 'from-purple-500 to-pink-500',
    stats: 'Global Reach'
  },
  { 
    icon: FaTrophy, 
    title: 'Built to Last', 
    description: 'Long-term vision with continuous development and utility',
    scene: 'coin' as const,
    color: 'from-cyan-400 to-blue-500',
    stats: 'Roadmap Active'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] border border-purple-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-[600px] h-[600px] border border-pink-500/10 rounded-full"
        />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block text-6xl mb-6"
          >
            ✨
          </motion.div>
          <span className="inline-block px-6 py-3 rounded-full badge mb-6">
            Why Choose Lucky Coin?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            The <span className="gradient-text glowing-text">Future</span> of Meme Coins
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto leading-relaxed">
            Lucky Coin combines the fun of meme culture with real utility and 
            cutting-edge technology on the Solana blockchain.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group"
            >
              <Card variant="glass" className="h-full p-0 overflow-hidden card-hover border border-white/10">
                {/* 3D Graphics Header */}
                <div className="h-48 relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 overflow-hidden">
                  <FeaturesScene type={feature.scene} />
                  
                  {/* Stats Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                    className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold shadow-lg`}
                  >
                    {feature.stats}
                  </motion.div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="text-white text-2xl" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-body text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="mt-4 flex items-center gap-2 text-purple-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="glass-card p-8 lg:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FaGlobe, title: 'Global Community', value: 'Worldwide' },
                { icon: FaLock, title: 'Liquidity Locked', value: '100% Secure' },
                { icon: FaHandHoldingUsd, title: 'Zero Taxes', value: 'No Buy/Sell Tax' },
                { icon: FaGift, title: 'Holder Rewards', value: 'Coming Soon' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className="text-center p-4 rounded-xl hover:bg-white/5 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                  >
                    <item.icon className="text-white text-lg" />
                  </motion.div>
                  <p className="text-white font-bold mb-1">{item.title}</p>
                  <p className="text-xs text-muted">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
