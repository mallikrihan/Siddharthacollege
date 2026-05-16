import React, { useState, useEffect } from 'react';
import { THEME } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Camera, Filter, X, Maximize2, ChevronRight, Loader2 } from 'lucide-react';
import { wpService, GalleryItem } from '../services/wpService';

const CATEGORIES = ['All', 'Campus', 'Events', 'Sports', 'Academic'];

const FALLBACK_GALLERY: GalleryItem[] = [
  { id: 1, category: 'Campus', url: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095921-2048x946.jpg', title: 'Main Institutional Wing' },
  { id: 2, category: 'Academic', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFFLJdE3ER6iMXEiBWlHSgx5pbHJpr6QKaQ&s', title: 'Modern Resource Center' },
  { id: 3, category: 'Events', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIab0zlnpwQpdF13DIOf1FAZO0-7fSwGBhA&s', title: 'Cultural Festival 2025' }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      const data = await wpService.getGallery();
      setGallery(data.length > 0 ? data : FALLBACK_GALLERY);
      setLoading(false);
    };
    fetchGallery();
  }, []);

  const filteredImages = filter === 'All'
    ? gallery
    : gallery.filter(img => img.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1523050853063-bd80e29247f3?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover ken-burns" 
            alt="Gallery Hero"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md mb-6">
              <Camera size={14} className="text-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">Visual Legacy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
              Institutional <span className="italic text-accent">Gallery</span>
            </h1>
            <p className="text-white/70 max-w-xl mx-auto font-sans text-sm md:text-base leading-relaxed tracking-wide">
              A curated collection of moments capturing the essence of academic rigor, athletic spirit, and cultural vibrancy.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        {/* Modern Filter System */}
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="flex flex-wrap justify-center gap-3 p-2 bg-slate-50 rounded-[2rem] border border-slate-100">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  filter === cat 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                  : 'text-slate-400 hover:text-primary hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {loading && <Loader2 className="animate-spin text-accent" size={24} />}
        </div>

        {/* Premium Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map(img => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl shadow-slate-200/50 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-2">{img.category}</div>
                    <h4 className="text-2xl font-serif text-white mb-6 leading-tight">{img.title}</h4>
                    <div className="flex items-center gap-3 text-white/60 font-black text-[10px] uppercase tracking-[0.2em]">
                      View Details <Maximize2 size={14} className="text-accent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {!loading && filteredImages.length === 0 && (
          <div className="text-center py-40">
            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="text-slate-200" size={40} />
            </div>
            <p className="text-slate-400 font-serif text-2xl">No captures found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-accent transition-colors"
            >
              <X size={28} />
            </button>
            
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="lg:col-span-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-[40vh] md:h-[70vh]"
              >
                <img 
                  src={selectedImage.url} 
                  className="w-full h-full object-cover" 
                  alt={selectedImage.title} 
                />
              </motion.div>
              
              <div className="text-left">
                <div className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4">{selectedImage.category}</div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">{selectedImage.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-12">
                  Part of our commitment to documenting the journey of our students through various phases of growth and achievement.
                </p>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="px-10 py-4 bg-white text-primary rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-white transition-all"
                >
                  Close View
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Footer */}
      <section className="py-24 bg-primary px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Experience Excellence in Person</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            While photos capture the moment, our campus offers an atmosphere of learning that must be experienced firsthand.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-4 px-12 py-5 bg-accent text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all shadow-2xl shadow-accent/20"
          >
            Book a Campus Tour <ChevronRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}