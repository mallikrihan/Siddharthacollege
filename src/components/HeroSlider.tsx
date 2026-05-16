"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { THEME } from '../constants';

const SLIDES = [
  {
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095921-2048x946.jpg',
    tag: 'Future-Ready Education',
    title: 'Excellence in every <br/><span>Academic Pursuit</span>',
    subtitle: 'Nurturing young minds to build a better tomorrow through holistic development and core values.',
    cta: 'Explore Programs'
  },
  {
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095921-2048x946.jpg',
    tag: 'Good Infrastructure',
    title: 'Modern Infrastructure <br/><span>Inspiring Innovation</span>',
    subtitle: 'State-of-the-art facilities designed to provide a world-class learning environment for every student.',
    cta: 'Our Campus'
  },
  {
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_091627-1536x710.jpg',
    tag: 'Academic Excellence',
    title: 'Scientific Curiosity <br/><span>& Exploration</span>',
    subtitle: 'Encouraging innovation and exploration in our advanced science laboratories and research centers.',
    cta: 'View Labs'
  },
  {
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095921-2048x946.jpg',
    tag: 'Admissions Open 2026',
    title: 'Success & Beyond <br/><span>Start Your Journey</span>',
    subtitle: 'Preparing students for top-tier higher education and professional career paths across the globe.',
    cta: 'Apply for Admission'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-110 ken-burns"
            style={{ backgroundImage: `url(${SLIDES[current].image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-3xl mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] ">
                  {SLIDES[current].tag}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8"
                dangerouslySetInnerHTML={{ __html: SLIDES[current].title }}
              />

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl font-light"
              >
                {SLIDES[current].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-10 py-5 bg-accent hover:bg-white text-white hover:text-primary rounded-full font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 group">
                  {SLIDES[current].cta}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-full font-bold uppercase tracking-widest transition-all duration-300">
                  Our Legacy
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 flex items-center gap-6 z-10">
        <div className="flex items-center gap-4">
          <span className="text-white/40 text-sm font-bold">0{current + 1}</span>
          <div className="w-24 h-[1px] bg-white/20 relative overflow-hidden">
            <motion.div 
              key={current}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 7, ease: "linear" }}
              className="absolute inset-0 bg-accent origin-left"
            />
          </div>
          <span className="text-white/40 text-sm font-bold">0{SLIDES.length}</span>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={() => { prev(); setIsAutoPlaying(false); }}
            className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => { next(); setIsAutoPlaying(false); }}
            className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Vertical Side Indicators */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-10">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setCurrent(idx); setIsAutoPlaying(false); }}
            className="group flex items-center gap-4 text-left"
          >
            <div className={`h-10 w-[2px] transition-all duration-500 ${current === idx ? 'bg-accent h-16' : 'bg-white/20'}`} />
          </button>
        ))}
      </div>

      <style>{`
        h1 span {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.5);
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
        }
        @media (max-width: 768px) {
          h1 { font-size: 3.5rem !important; }
        }
      `}</style>
    </div>
  );
}

