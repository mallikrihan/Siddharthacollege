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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ fontFamily: 'Arial, sans-serif', color: THEME.text }}>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/Admissions" element={<AdmissionsPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/News" element={<NewsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const ctaSectionStyle: React.CSSProperties = {
    backgroundColor: THEME.accent,
    padding: '60px 20px',
    textAlign: 'center',
    color: '#ffffff',
  };

  const contactSectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.white,
  };

  const contactGridStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    padding: '0 20px',
  };

  const contactCardStyle: React.CSSProperties = {
    padding: '30px',
    backgroundColor: THEME.lightBg,
    borderRadius: '4px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    border: `1px solid ${THEME.border}`,
  };

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
      <section style={ctaSectionStyle}>
        <h2 style={{ fontSize: '32px', fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: '20px' }}>
          Embark on a Journey of Excellence
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9 }}>
          Admissions are now open for the academic year 2026-27. Secure your future today.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }} className="cta-buttons-container">
          <button 
            onClick={() => navigate('/apply')}
            className="cta-btn"
            style={{
              backgroundColor: THEME.primary,
              color: '#fff',
              padding: '15px 35px',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Download Prospectus
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-btn"
            style={{
              backgroundColor: '#ffffff',
              color: THEME.primary,
              padding: '15px 35px',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Visit Campus
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section style={contactSectionStyle} id="contact">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: THEME.accent, fontWeight: 'bold' }}>GET IN TOUCH</div>
          <h2 style={{ fontSize: '40px', color: THEME.primary, fontFamily: 'Georgia, serif', marginTop: '10px' }}>Contact Information</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: THEME.accent, margin: '20px auto' }}></div>
        </div>

        <div style={contactGridStyle} className="responsive-grid-4">
          <div style={contactCardStyle} className="contact-card">
            <div style={{ color: THEME.accent }}><Phone size={30} /></div>
            <h4 style={{ fontWeight: 'bold', color: THEME.primary }}>Phone</h4>
            <p style={{ color: '#666' }}>{CONTACT.phone}</p>
          </div>
          <div style={contactCardStyle} className="contact-card">
            <div style={{ color: THEME.accent }}><Mail size={30} /></div>
            <h4 style={{ fontWeight: 'bold', color: THEME.primary }}>Email</h4>
            <p style={{ color: '#666' }}>{CONTACT.email}</p>
          </div>
          <div style={contactCardStyle} className="contact-card">
            <div style={{ color: THEME.accent }}><MapPin size={30} /></div>
            <h4 style={{ fontWeight: 'bold', color: THEME.primary }}>Address</h4>
            <p style={{ color: '#666' }}>{CONTACT.address}</p>
          </div>
          <div style={contactCardStyle} className="contact-card">
            <div style={{ color: THEME.accent }}><Clock size={30} /></div>
            <h4 style={{ fontWeight: 'bold', color: THEME.primary }}>Hours</h4>
            <p style={{ color: '#666' }}>{CONTACT.hours}</p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          #contact .responsive-grid-4 { 
            grid-template-columns: 1fr 1fr !important; 
            display: grid !important;
            gap: 10px !important; 
          }
          .contact-card { padding: 12px 5px !important; gap: 5px !important; }
          .contact-card svg { width: 18px !important; height: 18px !important; }
          .contact-card h4 { font-size: 12px !important; margin: 0 !important; }
          .contact-card p { font-size: 10px !important; margin: 0 !important; line-height: 1.2 !important; }
          
          .cta-buttons-container { 
            flex-direction: row !important; 
            gap: 10px !important; 
            flex-wrap: nowrap !important;
          }
          .cta-btn { 
            padding: 8px 15px !important; 
            font-size: 10px !important; 
            white-space: nowrap !important;
            letter-spacing: 0 !important;
          }
        }
      `}</style>

    </>
  );
}
