'use client';
import { motion } from 'framer-motion';
import { FaWallet, FaExchangeAlt, FaCoins, FaCheckCircle, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const steps = [
  {
    icon: FaWallet,
    step: '01',
    title: 'Create a Wallet',
    description: 'Download Phantom or Solflare wallet from their official website or app store. Set up your wallet and securely store your seed phrase.',
    color: 'from-[#3B82F6] to-[#60A5FA]',
    emoji: '👛'
  },
  {
    icon: FaExchangeAlt,
    step: '02',
    title: 'Get Some SOL',
    description: 'Buy Solana (SOL) from any major exchange like Binance, Coinbase, or Kraken. Transfer it to your wallet for trading.',
    color: 'from-[#60A5FA] to-[#93C5FD]',
    emoji: '💰'
  },
  {
    icon: FaCoins,
    step: '03',
    title: 'Connect to DEX',
    description: 'Visit Raydium, Orca, or Jupiter DEX. Connect your wallet and search for $LKC token using the contract address.',
    color: 'from-[#93C5FD] to-[#BFDBFE]',
    emoji: '🔄'
  },
  {
    icon: FaCheckCircle,
    step: '04',
    title: 'Swap for $LKC',
    description: 'Enter the amount of SOL you want to swap, confirm the transaction, and voilà! You\'re now a Lucky Coin holder!',
    color: 'from-[#3B82F6] to-[#2563EB]',
    emoji: '🎉'
  },
];

const HowToBuy = () => {
  return (
    <section id="buy" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-[#60A5FA] rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block text-6xl mb-4"
          >
            🛒
          </motion.div>
          <span className="inline-block px-6 py-3 rounded-full glass text-white font-bold mb-4 text-sm uppercase tracking-wider shadow-lg shadow-blue-500/20">
            Start Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            How to Buy <span className="gradient-text glowing-text">$LKC</span>
          </h2>
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto leading-relaxed">
            Get your Lucky Coins in just 4 simple steps. Join thousands of holders 
            and be part of the fastest-growing meme coin community on Solana!
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] origin-left"
                  />
                </div>
              )}

              <div className="glass-card p-8 h-full text-center relative z-10 card-hover">
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#3B82F6]/20 to-[#60A5FA]/20 border border-[#3B82F6]/30 text-[#60A5FA] font-black text-sm mb-6"
                >
                  STEP {item.step}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-blue-500/30`}
                >
                  <span className="text-4xl">{item.emoji}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                
                {/* Description */}
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>

                {/* Arrow Indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] items-center justify-center"
                >
                  <FaArrowRight className="text-white text-xs" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-8 inline-block">
            <p className="text-white font-bold mb-4 text-lg">🔗 Quick Access to DEXs</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Raydium', url: 'https://raydium.io' },
                { name: 'Orca', url: 'https://orca.so' },
                { name: 'Jupiter', url: 'https://jup.ag' },
              ].map((dex) => (
                <motion.a
                  key={dex.name}
                  href={dex.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#3B82F6]/20 to-[#60A5FA]/20 border border-[#3B82F6]/30 text-white font-semibold hover:border-[#60A5FA] transition-all"
                >
                  <span>{dex.name}</span>
                  <FaExternalLinkAlt className="text-xs" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <div className="glass-card p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl flex-shrink-0"
              >
                ⚠️
              </motion.div>
              <div>
                <h4 className="text-white font-bold mb-2">Important Reminder</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Always verify the contract address before making any transaction. 
                  Never share your seed phrase with anyone. Lucky Coin will never DM you first. 
                  Stay safe and DYOR!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;
