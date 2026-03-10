'use client';
import { motion } from 'framer-motion';
import { Card, RoadmapScene } from '../components';
import { FaRocket, FaUsers, FaExchangeAlt, FaGlobe, FaStar, FaBullhorn, FaChartLine, FaHandshake, FaArrowRight } from 'react-icons/fa';

const roadmapPhases = [
  { phase: 'Phase 1', title: 'Launch', status: 'completed', icon: FaRocket, items: ['Website', 'Smart Contract', 'Audit', 'Token Launch'] },
  { phase: 'Phase 2', title: 'Growth', status: 'in-progress', icon: FaUsers, items: ['Social Media', 'Influencers', 'Contests', 'Telegram'] },
  { phase: 'Phase 3', title: 'Exchanges', status: 'upcoming', icon: FaExchangeAlt, items: ['CoinGecko', 'CoinMarketCap', 'DEX', 'CEX'] },
  { phase: 'Phase 4', title: 'Global', status: 'upcoming', icon: FaGlobe, items: ['Marketing', 'Partnerships', 'NFT', 'Staking'] },
  { phase: 'Phase 5', title: 'Utility', status: 'upcoming', icon: FaStar, items: ['DApp', 'Gaming', 'Bridge', 'DAO'] },
];

const Roadmap = () => {
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
              Our Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Lucky Coin <span className="gradient-text glowing-text">Roadmap</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto">
              Strategic plan from launch to global recognition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#93C5FD] md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {roadmapPhases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] shadow-lg shadow-[#3B82F6]/50" />
                  </div>

                  <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="relative">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${
                          phase.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          phase.status === 'in-progress' ? 'bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/30' :
                          'bg-white/10 text-white/60 border border-white/20'
                        }`}>
                          {phase.status === 'completed' && <span>✓</span>}
                          {phase.status === 'in-progress' && <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />}
                          <span>{phase.status === 'completed' ? 'Completed' : phase.status === 'in-progress' ? 'In Progress' : 'Upcoming'}</span>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center flex-shrink-0">
                            <phase.icon className="text-white text-sm" />
                          </div>
                          <div>
                            <p className="text-xs text-[#60A5FA] font-bold">{phase.phase}</p>
                            <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {phase.items.map((item, i) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2 text-sm"
                            >
                              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                phase.status === 'completed' ? 'bg-green-400' :
                                phase.status === 'in-progress' && i < 2 ? 'bg-[#3B82F6]' :
                                'bg-white/20'
                              }`} />
                              <span className="text-body">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  Our <span className="gradient-text glowing-text">Vision</span>
                </h2>
                <p className="text-body mb-5 leading-relaxed">
                  Lucky Coin combines viral meme culture with real utility and sustainable growth.
                </p>
                <p className="text-body mb-6 leading-relaxed">
                  Our roadmap builds long-term value while creating an engaging ecosystem.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/tokenomics" className="btn-primary">
                    <span>View Tokenomics</span>
                    <FaArrowRight />
                  </a>
                  <a href="/contact" className="btn-secondary">
                    <span>Join Community</span>
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [-20, 20, -20] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="glass-card p-8 text-center"
                >
                  <div className="text-6xl mb-4">🍀</div>
                  <p className="text-2xl font-bold gradient-text mb-1">Good Luck</p>
                  <p className="text-muted text-sm">Great Gains</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Be Part of Our <span className="gradient-text glowing-text">Journey</span>
            </h2>
            <p className="text-lg text-body mb-6 max-w-2xl mx-auto">
              Join the Lucky Coin community
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

export default Roadmap;
