"use client";
import React from 'react';
import { THEME, CONTACT } from '../constants';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#002244',
    color: '#ffffff',
    padding: '80px 0 0 0',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
    padding: '0 20px 60px 20px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '25px',
    position: 'relative',
    paddingBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const underlineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '2px',
    backgroundColor: THEME.accent,
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: '0.3s'
  };

  const contactItemStyle: React.CSSProperties = {
    display: 'flex',
    gap: '15px',
    marginBottom: '15px',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.5
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Column 1 */}
        <div>
          <h3 style={titleStyle}>
            Siddhartha Institution
            <div style={underlineStyle}></div>
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '25px' }}>
            To inspire and empower young minds to excel academically, develop a strong moral compass, and contribute meaningfully to society.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: THEME.accent }}><Facebook size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: THEME.accent }}><Twitter size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: THEME.accent }}><Instagram size={20} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: THEME.accent }}><Youtube size={20} /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 style={titleStyle}>
            Quick Links
            <div style={underlineStyle}></div>
          </h3>
          <ul style={listStyle}>
            <li><a href="/#about" style={linkStyle}><ChevronRight size={14} /> About Us</a></li>
            <li><a href="/Admissions" style={linkStyle}><ChevronRight size={14} /> Admissions 2026</a></li>
            <li><a href="/#admissions" style={linkStyle}><ChevronRight size={14} /> Courses Offered</a></li>
            <li><a href="/Gallery" style={linkStyle}><ChevronRight size={14} /> Gallery</a></li>
            <li><a href="/#contact" style={linkStyle}><ChevronRight size={14} /> Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 style={titleStyle}>
            Academics
            <div style={underlineStyle}></div>
          </h3>
          <ul style={listStyle}>
            <li><a href="/apply" style={linkStyle}><ChevronRight size={14} /> Pre-Primary</a></li>
            <li><a href="/apply" style={linkStyle}><ChevronRight size={14} /> Primary School</a></li>
            <li><a href="/apply" style={linkStyle}><ChevronRight size={14} /> High School</a></li>
            <li><a href="/apply" style={linkStyle}><ChevronRight size={14} /> PUC Science/Commerce</a></li>
            <li><a href="/apply" style={linkStyle}><ChevronRight size={14} /> Degree College</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 style={titleStyle}>
            Contact Us
            <div style={underlineStyle}></div>
          </h3>
          <div style={contactItemStyle}>
            <MapPin size={24} color={THEME.accent} />
            {CONTACT.address}
          </div>
          <div style={contactItemStyle}>
            <Phone size={20} color={THEME.accent} />
            {CONTACT.phone}
          </div>
          <div style={contactItemStyle}>
            <Mail size={20} color={THEME.accent} />
            {CONTACT.email}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#000000', padding: '20px', textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
        © {new Date().getFullYear()} Siddhartha Institution Bhatkal. All Rights Reserved. | Build by MRTS
      </div>
    </footer>
  );
}
