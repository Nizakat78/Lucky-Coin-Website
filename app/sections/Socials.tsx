'use client';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaDiscord, FaInstagram, FaTiktok, FaYoutube, FaRocket } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const socialPlatforms = [
  { icon: FaTwitter, name: 'Twitter', followers: '50K+', color: 'from-[#3B82F6] to-[#60A5FA]', href: '#' },
  { icon: FaTelegram, name: 'Telegram', followers: '30K+', color: 'from-[#60A5FA] to-[#3B82F6]', href: '#' },
  { icon: FaDiscord, name: 'Discord', followers: '25K+', color: 'from-[#3B82F6] to-[#06B6D4]', href: '#' },
  { icon: FaInstagram, name: 'Instagram', followers: '20K+', color: 'from-[#60A5FA] to-[#06B6D4]', href: '#' },
  { icon: FaTiktok, name: 'TikTok', followers: '100K+', color: 'from-[#3B82F6] to-[#2563EB]', href: '#' },
  { icon: FaYoutube, name: 'YouTube', followers: '15K+', color: 'from-[#60A5FA] to-[#2563EB]', href: '#' },
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

const Socials = () => {
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
            Join Our Community
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-heading">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Connect With
            </motion.span>
            <motion.span 
              className="gradient-text glowing-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {' '}Lucky Coin{' '}
            </motion.span>
          </h2>
          <motion.p 
            className="text-lg text-body max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Stay updated with news, announcements, and community events
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass-card p-5 text-center card-hover group"
            >
              <motion.div 
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg shadow-[#3B82F6]/30`}
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.4 }}
              >
                <platform.icon className="text-white text-2xl" />
              </motion.div>
              <motion.h3 
                className="font-bold text-white mb-1 text-sm text-heading"
                whileHover={{ scale: 1.05 }}
              >
                {platform.name}
              </motion.h3>
              <p className="text-xs text-muted">{platform.followers}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 md:p-10 inline-block w-full max-w-lg">
            <motion.div 
              className="text-5xl mb-4"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🍀
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-white mb-3 text-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Get <span className="gradient-text">Lucky</span>?
            </motion.h3>
            <motion.p 
              className="text-body mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of holders on Solana
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="/tokenomics" className="btn-primary w-full justify-center">
                <FaRocket />
                <span>Buy $LKC Now</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Socials;
