'use client';
import { motion } from 'framer-motion';
import { Card, HeroScene } from '../components';
import { LuckyCoinLogo } from '../assets';
import { FaRocket, FaHeart, FaLightbulb, FaUsers, FaAward, FaChartLine, FaArrowRight } from 'react-icons/fa';

const values = [
  { icon: FaRocket, title: 'Innovation', color: 'from-[#3B82F6] to-[#60A5FA]' },
  { icon: FaHeart, title: 'Community', color: 'from-[#60A5FA] to-[#3B82F6]' },
  { icon: FaLightbulb, title: 'Creativity', color: 'from-[#3B82F6] to-[#93C5FD]' },
  { icon: FaUsers, title: 'Inclusivity', color: 'from-[#60A5FA] to-[#93C5FD]' },
  { icon: FaAward, title: 'Excellence', color: 'from-[#3B82F6] to-[#2563EB]' },
  { icon: FaChartLine, title: 'Growth', color: 'from-[#60A5FA] to-[#2563EB]' },
];

const About = () => {
  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-5 py-2.5 rounded-full glass text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-white block">The Story of</span>
                <span className="gradient-text glowing-text block">Lucky Coin</span>
              </h1>
              <p className="text-lg text-body mb-8">
                Lucky Coin ($LKC) brings genuine value with viral meme culture on Solana.
              </p>

              <motion.div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2024', label: 'Founded' },
                  { value: 'Solana', label: 'Blockchain' },
                  { value: 'Global', label: 'Community' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card p-4 text-center"
                  >
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-muted mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="flex justify-center"
            >
              <div className="h-[400px] w-full">
                <HeroScene />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Our <span className="gradient-text glowing-text">Mission</span>
            </h2>
            <p className="text-lg text-body max-w-3xl mx-auto">
              Create the most engaging meme coin experience where luck meets opportunity.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Empower', description: 'Real ownership', icon: FaUsers, color: 'from-[#3B82F6] to-[#60A5FA]' },
              { title: 'Drive', description: 'Mass adoption', icon: FaRocket, color: 'from-[#60A5FA] to-[#3B82F6]' },
              { title: 'Build', description: 'Lasting legacy', icon: FaAward, color: 'from-[#3B82F6] to-[#93C5FD]' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-[#3B82F6]/30`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    <item.icon className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-body">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Our <span className="gradient-text glowing-text">Values</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#3B82F6]/30`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <value.icon className="text-white text-xl" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white">{value.title}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Join the <span className="gradient-text glowing-text">Lucky</span> Journey
            </h2>
            <p className="text-lg text-body mb-8 max-w-2xl mx-auto">
              Be part of something special on Solana.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a href="/tokenomics" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>View Tokenomics</span>
                <FaArrowRight />
              </motion.a>
              <motion.a href="/contact" className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Get in Touch</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
