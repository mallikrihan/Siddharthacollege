import React, { useState } from 'react';
import { THEME } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Camera, Filter } from 'lucide-react';

const CATEGORIES = ['All', 'Campus', 'Events', 'Sports', 'Academic'];

const GALLERY_IMAGES = [
  { id: 1, category: 'Campus', url: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095921-2048x946.jpg', title: 'Main Building' },
  { id: 2, category: 'Academic', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFFLJdE3ER6iMXEiBWlHSgx5pbHJpr6QKaQ&s', title: 'Modern Library' },
  { id: 3, category: 'Events', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIab0zlnpwQpdF13DIOf1FAZO0-7fSwGBhA&s', title: 'Cultural Fest 2025' },
  { id: 4, category: 'Sports', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7eLcMglmguaN6d9BuQgV5m3HSfc0vEbDVA&s', title: 'Basketball Court' },
  { id: 5, category: 'Academic', url: 'https://siddharthaglobalschool.in/wp-content/uploads/2023/03/bio4-1024x576.jpg', title: 'Science Lab' },
  { id: 6, category: 'Campus', url: 'https://www.siddharthadegree.in/wp-content/uploads/2022/03/Computer-Lab-768x514-1-300x201.jpg', title: 'Computer Center' },
  { id: 7, category: 'Events', url: 'https://siddhartha.edu.in/wp-content/uploads/2026/04/Annualday-2026-siddhartha-5.jpg', title: 'Annual Day' },
  { id: 8, category: 'Sports', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-CQDFuTP9sRnVLzqo0P9y8IUceqacvPSDA&s', title: 'Football Ground' },
  { id: 9, category: 'Campus', url: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_092008-1024x473.jpg', title: 'Student Lounge' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div style={{ backgroundColor: THEME.lightBg, minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: THEME.primary, color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <Camera size={40} color={THEME.accent} />
        </div>
        <h1 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', marginBottom: '10px' }}>Institutional Gallery</h1>
        <p style={{ fontSize: '18px', opacity: 0.9 }}>Capturing moments of learning, growth, and excellence.</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }} className="gallery-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="filter-btn"
              style={{
                padding: '8px 20px',
                borderRadius: '30px',
                border: `2px solid ${filter === cat ? THEME.accent : THEME.border}`,
                backgroundColor: filter === cat ? THEME.accent : THEME.white,
                color: filter === cat ? THEME.white : THEME.primary,
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: '0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px'
              }}
            >
              {cat === 'All' && <Filter size={14} />}
              {cat}
            </button>
          ))}
        </div>
        <style>{`
          @media (max-width: 600px) {
            .gallery-filters { gap: 8px !important; }
            .filter-btn { padding: 6px 15px !important; font-size: 12px !important; }
          }
        `}</style>

        {/* Gallery Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}
          className="responsive-grid-3"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map(img => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '300px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  backgroundColor: THEME.white
                }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '20px',
                  color: 'white'
                }}>
                  <div style={{ fontSize: '12px', color: THEME.accent, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px' }}>
                    {img.category}
                  </div>
                  <h4 style={{ margin: 0, fontSize: '18px' }}>{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div style={{ textAlign: 'center', padding: '100px 0', color: '#888' }}>
            <ImageIcon size={60} style={{ marginBottom: '20px', opacity: 0.5 }} />
            <p style={{ fontSize: '20px' }}>No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Stats/CTA Section at bottom of Gallery */}
      <div style={{ backgroundColor: THEME.primary, color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontFamily: 'Georgia, serif', marginBottom: '20px' }}>Experience Our Vibrant Campus</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 40px', opacity: 0.8, lineHeight: 1.6 }}>
          Our campus is more than just buildings; it's a living environment where students create lifelong memories and achieve their full potential.
        </p>
        <a
          href="/#contact"
          style={{
            backgroundColor: THEME.accent,
            color: 'white',
            padding: '15px 40px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Book a Campus Tour
        </a>
      </div>
    </div>
  );
}