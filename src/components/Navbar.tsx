"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, GraduationCap, Menu, X, ArrowRight, Globe, Search, Plus, Minus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { THEME, NAVIGATION } from '../constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileItem(null);
  }, [location]);

  const toggleMobileItem = (idx: number) => {
    setExpandedMobileItem(expandedMobileItem === idx ? null : idx);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ${scrolled
          ? 'bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
        }`}
    >
      {/* Top Accent Line */}
      <div className={`h-1 w-full transition-all duration-700 ${scrolled ? 'bg-primary' : 'bg-accent/30 backdrop-blur-sm'}`} />

      <div className={`max-w-[1500px] mx-auto transition-all duration-700 ${scrolled ? 'px-6 py-3' : 'px-6 py-5'}`}>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className={`absolute -inset-2 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity ${scrolled ? 'bg-primary' : 'bg-white'}`} />
                <div className={`relative p-2 rounded-xl md:p-2.5 md:rounded-2xl transition-all duration-700 shadow-sm ${scrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                  <GraduationCap size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg md:text-2xl font-black tracking-tighter transition-colors duration-700 whitespace-nowrap leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  SIDDHARTHA
                </span>
                <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-700 whitespace-nowrap mt-1 ${scrolled ? 'text-slate-400' : 'text-white/60'}`}>
                  Institution Bhatkal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center ml-4">
              <ul className="flex items-center gap-1 list-none m-0 p-0 flex-nowrap">
                {NAVIGATION.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative px-3 py-2 whitespace-nowrap"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.link}
                      className={`text-[11px] font-extrabold uppercase tracking-[0.15em] flex items-center gap-1.5 transition-all duration-300 ${scrolled ? 'text-slate-600' : 'text-white/90'} hover:text-accent`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-500 ${activeDropdown === idx ? 'rotate-180 text-accent' : ''}`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute top-full left-0 pt-6 min-w-[320px]"
                        >
                          <div className="bg-white rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-50 p-2">
                            {item.dropdown.map((sub, sidx) => (
                              <Link
                                key={sidx}
                                to={sub.link}
                                className="flex items-center justify-between px-6 py-4 rounded-2xl text-[14px] font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-all duration-300 group/item"
                              >
                                {sub.name}
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity">
                                  <ArrowRight size={14} className="text-primary" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            <Link
              to="/apply"
              className={`hidden sm:flex px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden group shadow-xl ${scrolled
                  ? 'bg-primary text-white shadow-primary/20'
                  : 'bg-white text-primary hover:text-white'
                }`}
            >
              <span className="relative z-10">Enrol Now</span>
              <div className={`absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0`} />
            </Link>

            {/* Modern Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative z-[1100] w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${mobileMenuOpen ? 'bg-primary text-white' : scrolled ? 'bg-slate-100 text-primary' : 'bg-white/10 text-white backdrop-blur-md'}`}
            >
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className={`w-6 h-0.5 ${mobileMenuOpen ? 'bg-white' : scrolled ? 'bg-primary' : 'bg-white'}`}
                />
                <motion.span 
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`w-6 h-0.5 ${mobileMenuOpen ? 'bg-white' : scrolled ? 'bg-primary' : 'bg-white'}`}
                />
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className={`w-6 h-0.5 ${mobileMenuOpen ? 'bg-white' : scrolled ? 'bg-primary' : 'bg-white'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[999] bg-white lg:hidden overflow-y-auto"
          >
            <div className="p-6 pt-24 h-full flex flex-col">
              {/* Mobile Menu Header/Logo */}
              <div className="flex items-center gap-3 mb-12 pb-8 border-b border-slate-50">
                <div className="p-2 bg-primary rounded-xl text-white">
                  <GraduationCap size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-primary tracking-tighter">SIDDHARTHA</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-slate-400">Institution Bhatkal</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {NAVIGATION.map((item, idx) => (
                  <div key={idx} className="border-b border-slate-50/50 pb-2 last:border-0">
                    <div 
                      className="flex items-center justify-between py-4 cursor-pointer group"
                      onClick={() => item.dropdown ? toggleMobileItem(idx) : (window.location.href = item.link)}
                    >
                      <Link
                        to={item.dropdown ? '#' : item.link}
                        className={`text-2xl font-bold tracking-tight transition-colors ${expandedMobileItem === idx ? 'text-accent' : 'text-primary'}`}
                        onClick={(e) => {
                          if (item.dropdown) {
                            e.preventDefault();
                            toggleMobileItem(idx);
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className={`p-1.5 rounded-lg transition-all duration-300 ${expandedMobileItem === idx ? 'bg-accent text-white rotate-180' : 'bg-slate-50 text-slate-300'}`}>
                          <ChevronDown size={20} />
                        </div>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {item.dropdown && expandedMobileItem === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pb-6 pl-4 border-l-2 border-slate-50 mt-2">
                            {item.dropdown.map((sub, sidx) => (
                              <Link
                                key={sidx}
                                to={sub.link}
                                className="py-3 text-base font-semibold text-slate-400 hover:text-accent flex items-center gap-3"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="w-1 h-1 rounded-full bg-slate-200" />
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-12 pb-8">
                <Link
                  to="/apply"
                  className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] text-center block text-sm shadow-xl shadow-primary/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Online
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .bg-primary { background-color: ${THEME.primary}; }
        .text-primary { color: ${THEME.primary}; }
        .text-accent { color: ${THEME.accent}; }
        .bg-accent { background-color: ${THEME.accent}; }
      `}</style>
    </nav>
  );
}




