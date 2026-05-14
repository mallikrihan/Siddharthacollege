"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { THEME } from '../constants';

const SLIDES = [
  {
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095921-2048x946.jpg',
    title: 'Excellence in Education',
    subtitle: 'Nurturing young minds to build a better tomorrow through holistic development and values.',
    cta: 'Explore Programs'
  },
  {
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_091627-1536x710.jpg',
    title: 'Modern Infrastructure',
    subtitle: 'State-of-the-art facilities designed to provide a world-class learning environment.',
    cta: 'Our Campus'
  },
  {
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_092924-2048x946.jpg',
    title: 'Scientific Curiosity',
    subtitle: 'Encouraging innovation and exploration in our advanced science laboratories.',
    cta: 'View Labs'
  },
  {
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_093259-2048x946.jpg',
    title: 'Success & Beyond',
    subtitle: 'Preparing students for top-tier higher education and professional career paths.',
    cta: 'Admission 2026-27'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: '600px',
    width: '100%',
    overflow: 'hidden',
  };

  const slideStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0,51,102,0.6), rgba(0,34,68,0.4))',
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '800px',
    padding: '0 20px',
    color: '#ffffff',
  };

  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    background: 'rgba(0,51,102,0.4)',
    border: 'none',
    color: '#ffffff',
    padding: '15px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.3s',
  };

  const dotContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 10,
  };

  return (
    <div style={containerStyle}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ ...slideStyle, backgroundImage: `url(${SLIDES[current].image})` }}
        >
          <div style={overlayStyle} />
          <div style={contentStyle}>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontSize: '64px', margin: '0 0 20px 0', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}
            >
              {SLIDES[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ fontSize: '20px', marginBottom: '40px', lineHeight: 1.5 }}
            >
              {SLIDES[current].subtitle}
            </motion.p>
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                backgroundColor: THEME.accent,
                color: '#fff',
                padding: '15px 40px',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {SLIDES[current].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      <button style={{ ...arrowStyle, left: '30px' }} onClick={prev} className="hover-arrow">
        <ChevronLeft size={30} />
      </button>
      <button style={{ ...arrowStyle, right: '30px' }} onClick={next} className="hover-arrow">
        <ChevronRight size={30} />
      </button>

      <div style={dotContainerStyle}>
        {SLIDES.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: current === idx ? THEME.accent : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}
