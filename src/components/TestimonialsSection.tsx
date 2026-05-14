import React from 'react';
import { THEME } from '../constants';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Medha G Hegde',
    text: 'Attending Siddhartha PU College has been a truly transformative experience. The dedicated faculty and enriching curriculum have ignited my passion for learning.',
    role: 'Student'
  },
  {
    name: 'Pratik S',
    text: 'My journey at Siddhartha PU College was pivotal in preparing me for the world of engineering. Rigorous academics and strong mentorship gave me the confidence to pursue my dreams.',
    role: 'Alumni (Engineering)'
  },
  {
    name: 'Sushmita V Naik',
    text: 'The rigorous academic curriculum, combined with the focus on practical skills, has shaped me into a confident future professional.',
    role: 'Graduate'
  }
];

export default function TestimonialsSection() {
  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.white,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: THEME.lightBg,
    padding: '40px',
    borderRadius: '8px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const quoteIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: THEME.accent,
    opacity: 0.2,
  };

  return (
    <section style={sectionStyle} id="testimonials">
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ color: THEME.accent, fontWeight: 'bold' }}>SUCCESS STORIES</div>
          <h2 style={{ fontSize: '36px', color: THEME.primary, fontFamily: 'Georgia, serif', marginTop: '10px' }}>What Our Students Say</h2>
        </div>

        <div style={gridStyle}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} style={cardStyle}>
              <div style={quoteIconStyle}><Quote size={40} /></div>
              <p style={{ fontStyle: 'italic', color: '#555', lineHeight: 1.8, fontSize: '15px', marginBottom: '30px' }}>
                "{t.text}"
              </p>
              <div>
                <h4 style={{ color: THEME.primary, fontWeight: 'bold', fontSize: '18px', margin: 0 }}>{t.name}</h4>
                <div style={{ color: THEME.accent, fontSize: '13px', fontWeight: 600 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
