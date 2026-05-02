import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X as CloseIcon, 
  ChevronRight, 
  ChevronDown,
  ExternalLink,
  Target,
  Workflow,
  Zap,
  TrendingUp,
  Award,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  ArrowRight,
  Mail,
  ShieldCheck,
  Rocket,
  Layers,
  MessageSquare,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import logoSymbol from './logo.png';
import logoWordmark from './LOGO WITH WORDMARK.png';
import portraitImg from './george image.jpeg';

const SOCIAL_LINKS = [
  { name: 'Orgvein LinkedIn', url: 'https://linkedin.com/company/orgvein', icon: <Linkedin size={18} /> },
  { name: 'Orgvein Quora', url: 'https://www.quora.com/profile/Orgvein', icon: <MessageSquare size={18} /> },
  { name: 'Orgvein Reddit', url: 'https://www.reddit.com/user/Kind-Host3218/', icon: <Share2 size={18} /> },
  { name: 'Orgvein YouTube', url: 'https://www.youtube.com/@OrgveinOfficial', icon: <Youtube size={18} /> },
  { name: 'Orgvein X', url: 'https://x.com/orgvein', icon: <Twitter size={18} /> },
  { name: 'Orgvein Instagram', url: 'https://www.instagram.com/orgvein_official', icon: <Instagram size={18} /> },
];

const profileLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/orgvein_official', icon: <Instagram size={14} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/george-e-george', icon: <Linkedin size={14} /> },
  { name: "Orgvein's Page", url: '#', icon: <img src={logoSymbol} alt="" className="w-3.5 h-3.5 object-contain" /> }, // URL will be updated here when completed.
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary selection:bg-brand-accent/30 font-sans custom-scrollbar overflow-x-hidden">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border"
      >
        <div className="max-w-7xl mx-auto px-6 h-32 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logoSymbol} alt="Orgvein Symbol" className="h-14 w-14 object-contain" />
            <img src={logoWordmark} alt="Orgvein Wordmark" className="h-24 object-contain" />
          </div>
          
          <div className="hidden md:flex items-center gap-6 relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="bg-brand-card border border-brand-border px-6 py-2 rounded-full text-xs font-medium hover:text-brand-accent transition-colors flex items-center gap-2"
            >
              View profile 
              <motion.div
                animate={{ rotate: isProfileOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-3 w-48 bg-brand-card border border-brand-border rounded-2xl shadow-2xl overflow-hidden z-[70] backdrop-blur-xl"
                >
                  <div className="py-2">
                    {profileLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target={link.url !== '#' ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-xs font-medium text-brand-text-secondary hover:text-brand-accent hover:bg-white/5 transition-all"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <span className="text-brand-accent/70">{link.icon}</span>
                        {link.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="md:hidden text-brand-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <Menu />}
          </button>
        </div>
      </motion.header>



      {/* Hero Section */}
      <section className="pt-60 pb-20 px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Header Block: Identity - Order 1 on mobile */}
          <div className="space-y-8 order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-brand-card border border-brand-border px-4 py-2 rounded-full text-xs text-brand-text-secondary">
              <div className="w-2 h-2 rounded-full bg-brand-accent" />
              Founder & Director · Orgvein Pvt. Ltd.
            </motion.div>
            
            <div className="space-y-2">
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
                George <br className="hidden lg:block" /> E George
              </motion.h1>
            </div>
          </div>

          {/* Portrait Block - Order 2 on mobile, Spans on desktop */}
          <motion.div 
            variants={cardVariants}
            className="relative group offset-border order-2 lg:row-span-2 lg:sticky lg:top-32"
          >
            <div className="bg-brand-card rounded-[2.5rem] overflow-hidden lg:overflow-visible border border-brand-border shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
              <div className="flex h-20">
                <div className="w-1/3 bg-brand-accent/20 flex items-center justify-center border-r border-brand-border" />
                <div className="w-1/3 bg-brand-text-secondary/10 border-r border-brand-border" />
                <div className="w-1/3 bg-[#CF5C36]/10" />
              </div>
              <div className="relative">
                <div className="overflow-hidden">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={portraitImg} 
                    alt="George Portrait" 
                    className="w-full aspect-[4/5] object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                
                {/* Core Strengths - Overlay on Desktop, Stacked on Mobile */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="relative lg:absolute lg:bottom-6 lg:left-6 lg:right-6 bg-brand-bg/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 m-4 lg:m-0"
                >
                  <div className="text-[10px] text-brand-accent uppercase font-bold tracking-widest mb-1 text-left">CORE STRENGTHS</div>
                  <div className="space-y-4">
                  {[
                    "Consulting and strategic advisory",
                    "Accounts and financial discipline",
                    "IT and digital systems integration",
                    "Training and organizational enablement"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <Zap size={16} className="text-brand-accent" />
                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Biography Block - Order 3 on mobile */}
          <div className="space-y-8 order-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.p variants={itemVariants} className="text-lg text-brand-text-primary max-w-xl leading-relaxed">
                I am George E George, a business transformation leader and systems architect specializing in finance, operations, and digital integration across FMCG, healthcare, consulting, and trading sectors. With academic foundations in psychology and commerce, I combine financial discipline with deep insight into organizational behavior to design structured, scalable business systems. Throughout my career, I have led ERP implementations, operational restructuring, and automation-driven initiatives that transform fragmented operations into performance-focused, sustainable ecosystems built on clarity, control, and measurable growth.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="https://linkedin.com/in/george-e-george" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-text-primary text-brand-bg px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:bg-brand-accent transition-colors group"
              >
                Explore profile <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:george@orgvein.in"
                className="bg-brand-card border border-brand-border px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:bg-white/5 transition-colors"
              >
                <Mail size={18} /> Contact
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 lg:pt-12 items-stretch w-full">
              {/* Company Card */}
              <div className="bg-brand-card p-6 border border-brand-border rounded-2xl hover:border-brand-accent/30 transition-colors flex flex-col h-full items-center lg:items-start text-center lg:text-left">
                <ShieldCheck size={20} className="text-brand-accent mb-4" />
                <div className="text-[10px] text-brand-text-secondary uppercase tracking-widest mb-1">Company</div>
                <div className="font-bold text-sm">Orgvein Pvt. Ltd.</div>
              </div>

              {/* Focus Card - Customized with 2x2 Grid */}
              <div className="bg-brand-card p-6 border border-brand-border rounded-2xl hover:border-brand-accent/30 transition-colors flex flex-col h-full overflow-hidden items-center lg:items-start text-center lg:text-left">
                <Workflow size={20} className="text-brand-accent mb-4" />
                <div className="text-[10px] text-brand-text-secondary uppercase tracking-widest mb-1">Focus</div>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.1
                      }
                    }
                  }}
                  className="grid grid-cols-2 gap-2 mt-auto"
                >
                  {['Consulting', 'Accounts', 'IT', 'Training'].map((pillar) => (
                    <motion.div 
                      key={pillar}
                      variants={{
                        hidden: { opacity: 0, y: -15, scale: 0.9 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          scale: 1,
                          transition: { 
                            type: "spring",
                            stiffness: 100,
                            damping: 12
                          }
                        }
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(24, 23, 21, 0.8)",
                        borderColor: "rgba(197, 160, 89, 0.4)"
                      }}
                      className="bg-brand-bg/50 border border-brand-border/50 px-2 py-1.5 rounded text-[10px] font-medium text-brand-text-primary flex items-center justify-center gap-1.5 cursor-default transition-colors duration-300"
                    >
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        className="w-1 h-1 rounded-full bg-brand-accent" 
                      />
                      {pillar}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Vision Card */}
              <div className="bg-brand-card p-6 border border-brand-border rounded-2xl hover:border-brand-accent/30 transition-colors flex flex-col h-full items-center lg:items-start text-center lg:text-left">
                <Rocket size={20} className="text-brand-accent mb-4" />
                <div className="text-[10px] text-brand-text-secondary uppercase tracking-widest mb-1">Vision</div>
                <div className="font-bold text-sm">Structured growth</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">Journey</div>
            <h2 className="text-4xl md:text-5xl font-bold">From operational insight to strategic enablement</h2>
            <p className="text-brand-text-primary text-lg max-w-2xl leading-relaxed">
              The path from field-level execution to company-building created a perspective that values both structure and momentum.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                label: 'FOUNDATION', 
                title: 'Academic & Operational Roots', 
                desc: 'Psychology and commerce background providing a unique blend of human behavior insight and financial discipline.' 
              },
              { 
                label: 'GROWTH', 
                title: 'Sector-Wide Leadership', 
                desc: 'Leading ERP implementations and operational restructuring across FMCG, healthcare, and trading sectors.' 
              },
              { 
                label: 'TODAY', 
                title: 'System Architect & Leader', 
                desc: 'Focusing on transforming fragmented operations into performance-focused, sustainable ecosystems built on clarity.' 
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-[#181715] p-10 border border-white/5 rounded-[2.5rem] space-y-6 flex flex-col hover:border-[#9B9488]/30 transition-all"
              >
                <div className="text-[10px] text-[#C5A059] font-bold uppercase tracking-[0.3em]">{item.label}</div>
                <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
                <p className="text-brand-text-primary text-md leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">Orgvein Philosophy</div>
            <h2 className="text-4xl md:text-5xl font-bold">Built for disciplined growth</h2>
            <p className="text-brand-text-primary text-lg max-w-2xl leading-relaxed">
              The company's approach is simple: make the operating system stronger, and growth becomes more predictable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Operating Systems', 
                desc: 'Structured workflows that connect people, process, and technology into one reliable system.', 
                icon: <Workflow size={20} /> 
              },
              { 
                title: 'Business Transformation', 
                desc: 'Practical change frameworks that help teams scale with clarity, consistency, and confidence.', 
                icon: <Layers size={20} /> 
              },
              { 
                title: 'Execution Discipline', 
                desc: 'Frameworks that turn ambition into measurable outcomes with predictable execution.', 
                icon: <Target size={20} /> 
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-[#181715] p-10 border border-white/5 rounded-[2.5rem] space-y-6 flex flex-col group hover:border-[#C5A059]/30 transition-colors"
              >
                <div className="bg-[#0F0E0C] w-12 h-12 rounded-xl flex items-center justify-center text-[#C5A059] border border-white/5 group-hover:bg-[#C5A059] group-hover:text-[#0F0E0C] transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-brand-text-primary text-md leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-[#C5A059] font-bold uppercase tracking-widest text-xs">Connect</div>
            <h2 className="text-4xl md:text-5xl font-bold">Follow the founder and the company</h2>
            <p className="text-brand-text-primary text-lg leading-relaxed">
              All of your key profiles and brand channels are now linked directly from the portfolio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOCIAL_LINKS.map((link, i) => (
              <motion.a 
                key={i} 
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                href={link.url} 
                target="_blank" 
                className="bg-[#181715] px-6 py-6 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-[#C5A059]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-[#C5A059] group-hover:scale-110 transition-transform">{link.icon}</div>
                  <span className="font-semibold text-sm">{link.name}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="space-y-6">
              <p className="text-white/50 text-xs">Clarity. Structure. Flow. Growth.</p>
            </div>
            
            <div className="flex gap-4">
              <a href="mailto:george@orgvein.in" className="bg-[#181715] p-3 border border-white/10 rounded-full text-[#E5DFD3] hover:text-[#C5A059] transition-colors">
                <Mail size={18} />
              </a>
              <a href="https://linkedin.com/in/george-e-george" target="_blank" rel="noreferrer" className="bg-[#181715] p-3 border border-white/10 rounded-full text-[#E5DFD3] hover:text-[#C5A059] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0F0E0C] flex flex-col items-center justify-center gap-8 text-2xl font-bold">
          <button className="absolute top-6 right-6 text-[#E5DFD3]" onClick={() => setIsMenuOpen(false)}>
            <CloseIcon size={40} />
          </button>
          <a href="#journey" onClick={() => setIsMenuOpen(false)}>Journey</a>
          <a href="#philosophy" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
          <a href="#connect" onClick={() => setIsMenuOpen(false)}>Connect</a>
        </div>
      )}
    </div>
  );
}
