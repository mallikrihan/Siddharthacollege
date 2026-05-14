"use client";
import React from 'react';
import { THEME } from '../constants';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

const TEAM = [
  {
    name: 'Captain K.R. Naik',
    role: 'Founder of Siddhartha Institution',
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095506-scaled.jpg'
  },
  {
    name: 'Ashok Kumar Shetty',
    role: 'Vice President',
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-22-at-9.25.20-AM-e1766375793258.jpeg'
  },
  {
    name: 'Smt. Archana U',
    role: 'Principal',
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_092757-2048x946.jpg'
  }
];

export default function TeamSection() {
  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.lightBg,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: THEME.white,
    padding: '0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    borderBottom: `5px solid ${THEME.accent}`,
  };

  const infoStyle: React.CSSProperties = {
    padding: '25px',
    textAlign: 'center',
  };

  return (
    <section style={sectionStyle} id="team">
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: THEME.accent, fontWeight: 'bold' }}>OUR LEADERSHIP</div>
          <h2 style={{ fontSize: '40px', color: THEME.primary, fontFamily: 'Georgia, serif', marginTop: '10px' }}>Management Team</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: THEME.accent, margin: '20px auto' }}></div>
        </div>

        <div style={gridStyle}>
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              style={cardStyle}
            >
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
              <div style={infoStyle}>
                <h3 style={{ fontSize: '22px', color: THEME.primary, fontWeight: 'bold', marginBottom: '5px' }}>{member.name}</h3>
                <p style={{ color: THEME.accent, fontWeight: 600, fontSize: '14px', marginBottom: '20px' }}>{member.role}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <a href="#" style={{ color: THEME.primary }}><Linkedin size={18} /></a>
                  <a href="#" style={{ color: THEME.primary }}><Mail size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
