import React, { useState } from 'react';
import { THEME } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Camera, Filter } from 'lucide-react';

const CATEGORIES = ['All', 'Campus', 'Events', 'Sports', 'Academic'];

const GALLERY_IMAGES = [
  { id: 1, category: 'Campus', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800', title: 'Main Building' },
  { id: 2, category: 'Academic', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', title: 'Modern Library' },
  { id: 3, category: 'Events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800', title: 'Cultural Fest 2025' },
  { id: 4, category: 'Sports', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800', title: 'Basketball Court' },
  { id: 5, category: 'Academic', url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800', title: 'Science Lab' },
  { id: 6, category: 'Campus', url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800', title: 'Computer Center' },
  { id: 7, category: 'Events', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800', title: 'Annual Day' },
  { id: 8, category: 'Sports', url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800', title: 'Football Ground' },
  { id: 9, category: 'Campus', url: 'https://images.unsplash.com/photo-1525921429624-479b6a29d84c?auto=format&fit=crop&q=80&w=800', title: 'Student Lounge' },
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
        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 25px',
                borderRadius: '30px',
                border: `2px solid ${filter === cat ? THEME.accent : THEME.border}`,
                backgroundColor: filter === cat ? THEME.accent : THEME.white,
                color: filter === cat ? THEME.white : THEME.primary,
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: '0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {cat === 'All' && <Filter size={16} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '30px' 
          }}
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