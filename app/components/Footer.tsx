'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTwitter, FaTelegram, FaDiscord, FaInstagram, FaMedium, FaHeart, FaRocket, FaArrowRight } from 'react-icons/fa';
import LuckyCoinLogo from '../assets/LuckyCoinLogo';

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaTelegram, href: '#', label: 'Telegram', color: 'hover:text-cyan-400' },
    { icon: FaDiscord, href: '#', label: 'Discord', color: 'hover:text-purple-400' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaMedium, href: '#', label: 'Medium', color: 'hover:text-gray-400' },
  ];

  const footerLinks = {
    'Quick Links': [
      { href: '/#features', label: 'Features' },
      { href: '/#buy', label: 'How to Buy' },
      { href: '/#tokenomics', label: 'Tokenomics' },
      { href: '/#community', label: 'Community' },
    ],
    'Resources': [
      { href: '#', label: 'Whitepaper', external: true },
      { href: '#', label: 'Documentation', external: true },
      { href: '#', label: 'Brand Kit', external: true },
      { href: '#', label: 'Audit Report', external: true },
    ],
    'Legal': [
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Terms of Service' },
      { href: '#', label: 'Disclaimer' },
      { href: '#', label: 'Cookie Policy' },
    ],
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mt-20"
    >
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />

      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div 
                className="w-12 h-12 glow-effect"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <LuckyCoinLogo />
              </motion.div>
              <div>
                <h3 className="text-xl font-black gradient-text">Lucky Coin</h3>
                <p className="text-xs text-[#60A5FA] font-semibold">$LKC on Solana</p>
              </div>
            </Link>
            <p className="text-body mb-6 leading-relaxed max-w-sm">
              The next generation meme coin on Solana. Join our community and be part of
              the future of crypto. Good luck, great gains! 🍀
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`w-11 h-11 rounded-full glass flex items-center justify-center text-white/60 ${social.color} transition-all shadow-lg hover:shadow-blue-500/30`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="glass rounded-xl p-4">
              <p className="text-sm text-white font-semibold mb-3">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/40 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-semibold text-sm"
                >
                  <FaArrowRight />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base flex items-center gap-2">
              <span className="text-[#3B82F6]">⚡</span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks['Quick Links'].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-[#60A5FA] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#3B82F6] group-hover:w-4 transition-all duration-300"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base flex items-center gap-2">
              <span className="text-[#3B82F6]">📚</span>
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks['Resources'].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-[#60A5FA] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#3B82F6] group-hover:w-4 transition-all duration-300"
                    />
                    <span>{link.label}</span>
                    {link.external && <span className="text-xs">↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-5 text-base flex items-center gap-2">
              <span className="text-[#3B82F6]">⚖️</span>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks['Legal'].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-[#60A5FA] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#3B82F6] group-hover:w-4 transition-all duration-300"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-muted text-sm text-center lg:text-left">
              © 2026 Lucky Coin. All Rights Reserved.
            </p>

            {/* Built on Solana Badge */}
            <div className="flex items-center gap-4">
              <motion.div
                className="glass px-4 py-2 rounded-full flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs text-white font-semibold">Built on</span>
                <span className="text-xs font-bold gradient-text">Solana</span>
              </motion.div>
              
              <motion.div
                className="glass px-4 py-2 rounded-full flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                <span className="text-xs text-white font-semibold">Live</span>
              </motion.div>
            </div>

            {/* Made with Love */}
            <motion.div
              className="flex items-center gap-2 text-muted text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              <span>for the community</span>
            </motion.div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/5"
        >
          <div className="glass rounded-xl p-6">
            <div className="flex items-start gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl flex-shrink-0"
              >
                ⚠️
              </motion.div>
              <div>
                <h5 className="text-white font-bold mb-2 text-sm">Disclaimer</h5>
                <p className="text-xs text-muted leading-relaxed">
                  Cryptocurrency investments carry inherent risks. Lucky Coin ($LKC) is a meme coin 
                  created for entertainment purposes. Always do your own research (DYOR) before 
                  investing. Never invest more than you can afford to lose. This website is for 
                  informational purposes only and does not constitute financial advice.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
