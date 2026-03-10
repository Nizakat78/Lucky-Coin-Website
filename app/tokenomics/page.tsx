'use client';
import { motion } from 'framer-motion';
import { Card, AnimatedCounter, TokenomicsScene } from '../components';
import { FaFire, FaLock, FaGift, FaBullhorn, FaCode, FaPercentage, FaChartPie, FaRocket } from 'react-icons/fa';

const tokenDistribution = [
  { icon: FaFire, title: 'Liquidity Pool', percentage: 40, tokens: '400M', color: 'from-[#3B82F6] to-[#60A5FA]' },
  { icon: FaGift, title: 'Community Rewards', percentage: 25, tokens: '250M', color: 'from-[#60A5FA] to-[#3B82F6]' },
  { icon: FaBullhorn, title: 'Marketing', percentage: 15, tokens: '150M', color: 'from-[#3B82F6] to-[#93C5FD]' },
  { icon: FaCode, title: 'Development', percentage: 10, tokens: '100M', color: 'from-[#60A5FA] to-[#93C5FD]' },
  { icon: FaLock, title: 'Team (Vested)', percentage: 5, tokens: '50M', color: 'from-[#3B82F6] to-[#2563EB]' },
  { icon: FaPercentage, title: 'Initial Burn', percentage: 5, tokens: '50M', color: 'from-[#60A5FA] to-[#2563EB]' },
];

const PieChart = () => {
  const colors = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#06B6D4', '#EF4444'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <svg viewBox="0 0 300 300" className="w-full max-w-sm mx-auto">
        {tokenDistribution.map((item, index) => {
          const startAngle = tokenDistribution.slice(0, index).reduce((sum, seg) => sum + (seg.percentage / 100) * 360, 0);
          const angle = (item.percentage / 100) * 360;
          const startRad = (startAngle - 90) * (Math.PI / 180);
          const endRad = (startAngle + angle - 90) * (Math.PI / 180);
          const x1 = 150 + 120 * Math.cos(startRad);
          const y1 = 150 + 120 * Math.sin(startRad);
          const x2 = 150 + 120 * Math.cos(endRad);
          const y2 = 150 + 120 * Math.sin(endRad);
          const largeArc = angle > 180 ? 1 : 0;

          return (
            <motion.path
              key={item.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              d={`M 150 150 L ${x1} ${y1} A 120 120 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={colors[index]}
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
            />
          );
        })}
        <circle cx="150" cy="150" r="55" fill="rgba(11, 17, 32, 0.9)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
        <text x="150" y="145" textAnchor="middle" className="text-xs font-bold fill-white/70">Total</text>
        <text x="150" y="170" textAnchor="middle" className="text-xl font-black fill-[#3B82F6]">1B</text>
      </svg>
    </motion.div>
  );
};

const Tokenomics = () => {
  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-5 py-2.5 rounded-full glass text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Token Economics
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              $LKC <span className="gradient-text glowing-text">Tokenomics</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-10 text-center max-w-3xl mx-auto"
          >
            <p className="text-muted mb-3 font-medium">Total Supply</p>
            <AnimatedCounter end={1000000000} className="text-5xl md:text-7xl lg:text-8xl font-black gradient-text mb-3" />
            <p className="text-lg text-body">$LKC Tokens</p>
          </motion.div>
        </div>
      </section>

      {/* Distribution */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FaChartPie className="text-3xl text-[#3B82F6]" />
                Token Distribution
              </h2>
              <PieChart />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {tokenDistribution.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#3B82F6]/30`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <item.icon className="text-white text-lg" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <span className="text-lg font-bold gradient-text">{item.percentage}%</span>
                    </div>
                    <p className="text-sm text-muted">{item.tokens} $LKC</p>
                    <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Graphics Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Visual <span className="gradient-text glowing-text">Overview</span>
            </h2>
          </motion.div>
          
          <div className="glass-card p-8 md:p-12">
            <div className="h-[300px] w-full">
              <TokenomicsScene />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to Get <span className="gradient-text glowing-text">Lucky</span>?
            </h2>
            <p className="text-lg text-body mb-6 max-w-2xl mx-auto">
              Join thousands of holders on Solana
            </p>
            <a href="#" className="btn-primary inline-flex">
              <FaRocket />
              <span>Buy $LKC Now</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
