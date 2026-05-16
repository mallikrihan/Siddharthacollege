/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ApplyPage from './pages/ApplyPage';
import AdmissionsPage from './pages/AdmissionsPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import HeroSlider from './components/HeroSlider';
import AdmissionTicker from './components/AdmissionTicker';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import AdmissionsSection from './components/AdmissionsSection';
import FacultySection from './components/FacultySection';
import VisionMission from './components/VisionMission';
import NewsSection from './components/NewsSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { THEME, CONTACT } from './constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ color: THEME.text }}>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeroSlider />
      <AdmissionTicker />
      <StatsBar />
      <AboutSection />
      <AdmissionsSection />
      <FacultySection />
      <VisionMission />
      <NewsSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif italic"
          >
            Embark on a Journey <br/>of Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Admissions are now open for the academic year 2026-27. <br/>
            Join a community dedicated to shaping the leaders of tomorrow.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button 
              onClick={() => navigate('/apply')}
              className="px-12 py-5 bg-accent hover:bg-white text-white hover:text-primary rounded-full font-bold uppercase tracking-widest transition-all duration-300 soft-shadow"
            >
              Download Prospectus
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-5 bg-white/10 hover:bg-white text-white hover:text-primary backdrop-blur-md border border-white/20 rounded-full font-bold uppercase tracking-widest transition-all duration-300"
            >
              Visit Campus
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-slate-50" id="contact">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
              <h2 className="text-5xl md:text-6xl font-bold text-primary font-serif">Contact Information</h2>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-slate-300 mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: 'Phone', value: CONTACT.phone, color: 'bg-blue-50 text-blue-600' },
              { icon: Mail, title: 'Email', value: CONTACT.email, color: 'bg-amber-50 text-amber-600' },
              { icon: MapPin, title: 'Address', value: CONTACT.address, color: 'bg-emerald-50 text-emerald-600' },
              { icon: Clock, title: 'Hours', value: CONTACT.hours, color: 'bg-purple-50 text-purple-600' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-10 bg-white rounded-[2.5rem] soft-shadow group hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color.split(' ')[0]} ${item.color.split(' ')[1]} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-4">{item.title}</h4>
                <p className="text-base md:text-lg font-bold text-primary leading-relaxed break-words">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .bg-primary { background-color: ${THEME.primary}; }
        .text-primary { color: ${THEME.primary}; }
        .text-accent { color: ${THEME.accent}; }
        .bg-accent { background-color: ${THEME.accent}; }
        .font-serif { font-family: var(--font-serif); }
        
        @media (max-width: 600px) {
          .contact-grid { 
            grid-template-columns: 1fr !important; 
          }
        }
      `}</style>
    </>
  );
}

