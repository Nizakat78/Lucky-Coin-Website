'use client';
import { motion } from 'framer-motion';
import { Card, ContactScene } from '../components';
import { LuckyCoinLogo } from '../assets';
import { FaTwitter, FaTelegram, FaDiscord, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaComment, FaRocket } from 'react-icons/fa';

const contactInfo = [
  { icon: FaEnvelope, title: 'Email', value: 'hello@luckycoin.io', href: 'mailto:hello@luckycoin.io', color: 'from-[#3B82F6] to-[#60A5FA]' },
  { icon: FaTwitter, title: 'Twitter', value: '@LuckyCoinLKC', href: '#', color: 'from-[#60A5FA] to-[#3B82F6]' },
  { icon: FaTelegram, title: 'Telegram', value: 't.me/LuckyCoin', href: '#', color: 'from-[#3B82F6] to-[#93C5FD]' },
  { icon: FaDiscord, title: 'Discord', value: 'discord.gg/luckycoin', href: '#', color: 'from-[#60A5FA] to-[#93C5FD]' },
];

const faqs = [
  { question: 'How do I buy $LKC?', answer: 'Buy on Raydium or Orca on Solana. Connect wallet and swap SOL for $LKC.' },
  { question: 'Is Lucky Coin audited?', answer: 'Yes! Our smart contract has been audited by leading security firms.' },
  { question: 'What is the token supply?', answer: '1 billion tokens total, with 5% burned at launch.' },
  { question: 'How can I join?', answer: 'Join our Telegram and Discord servers!' },
];

const Contact = () => {
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Contact <span className="gradient-text glowing-text">Lucky Coin</span>
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto">
              Have questions? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        <FaUser className="inline mr-2 text-[#3B82F6]" />
                        Your Name
                      </label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        <FaEnvelope className="inline mr-2 text-[#3B82F6]" />
                        Email
                      </label>
                      <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <FaComment className="inline mr-2 text-[#3B82F6]" />
                      Subject
                    </label>
                    <input type="text" placeholder="What's this about?" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                    <textarea rows={5} placeholder="Your message here..." className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <Card className="text-center">
                <motion.div className="w-24 h-24 mx-auto mb-4" animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}>
                  <LuckyCoinLogo />
                </motion.div>
                <h3 className="text-2xl font-bold gradient-text mb-2">Lucky Coin</h3>
                <p className="text-body mb-5">The Luckiest Meme Coin on Solana</p>
                <div className="flex justify-center gap-3">
                  {[FaTwitter, FaTelegram, FaDiscord, FaInstagram].map((Icon, i) => (
                    <motion.a key={i} href="#" whileHover={{ scale: 1.2, y: -3 }} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#60A5FA] transition-colors">
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </Card>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="glass-card p-4 flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#3B82F6]/30`}>
                      <item.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">{item.title}</p>
                      <p className="font-bold text-white">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <FaMapMarkerAlt className="w-8 h-8 text-[#3B82F6] mb-3" />
                  <p className="font-bold text-white">Location</p>
                  <p className="text-sm text-muted">Decentralized</p>
                </Card>
                <Card>
                  <FaClock className="w-8 h-8 text-[#3B82F6] mb-3" />
                  <p className="font-bold text-white">Response Time</p>
                  <p className="text-sm text-muted">24-48 Hours</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              FAQ
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <Card>
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start">
                    <span className="text-[#3B82F6] mr-3 text-xl">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-body leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <div className="text-6xl mb-5">🍀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Join Our <span className="gradient-text glowing-text">Community</span>
            </h2>
            <p className="text-lg text-body mb-8 max-w-2xl mx-auto">
              Connect with thousands of Lucky Coin holders
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-primary">
                <FaTelegram />
                <span>Join Telegram</span>
              </a>
              <a href="#" className="btn-secondary">
                <FaDiscord />
                <span>Join Discord</span>
              </a>
              <a href="#" className="btn-secondary">
                <FaTwitter />
                <span>Follow Twitter</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
