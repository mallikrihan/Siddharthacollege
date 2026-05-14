"use client";
import React from 'react';
import { THEME } from '../constants';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Leaf, BookOpen, GraduationCap, Microscope, BarChart3, Award } from 'lucide-react';

const PROGRAMS = [
  {
    title: 'Pre-Primary',
    desc: 'LKG & UKG, play-based learning for the early years.',
    details: 'Foundation of social and cognitive skills.',
    strength: '100+',
    icon: <Leaf size={40} />
  },
  {
    title: 'Primary School',
    desc: 'Grades 1–7, holistic child development.',
    details: 'Balanced academic and extracurricular curriculum.',
    strength: '438+',
    icon: <BookOpen size={40} />
  },
  {
    title: 'High School',
    desc: 'Grades 8–10, board exam preparation.',
    details: 'Focus on core subjects and analytical thinking.',
    strength: '235+',
    icon: <Award size={40} />
  },
  {
    title: 'PUC Science',
    desc: 'PCM & PCMB, engineering/medicine pathways.',
    details: 'Rigorous coaching for competitive exams.',
    strength: '1200+',
    icon: <Microscope size={40} />
  },
  {
    title: 'PUC Commerce',
    desc: 'Business Studies, Economics, Accountancy.',
    details: 'Preparing future business leaders and professionals.',
    strength: '140+',
    icon: <BarChart3 size={40} />
  },
  {
    title: 'Degree',
    desc: 'B.Com / B.Sc, government-affiliated programmes.',
    details: 'Comprehensive higher education for career success.',
    strength: '85',
    icon: <GraduationCap size={40} />
  }
];

export default function AdmissionsSection() {
  const navigate = useNavigate();
  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.lightBg,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '60px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: THEME.white,
    padding: '40px',
    borderRadius: '4px',
    border: `1px solid ${THEME.border}`,
    borderTop: `4px solid ${THEME.primary}`,
    transition: '0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <section style={sectionStyle} id="admissions">
      <div style={containerStyle}>
        <div style={headerStyle}>
          <div style={{ color: THEME.accent, fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Optimize your Learning Approach for Academic Success.</div>
          <h2 style={{ fontSize: '40px', color: THEME.primary, fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>Admissions 2026-27</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: THEME.accent, margin: '20px auto' }}></div>
        </div>

        <div style={gridStyle}>
          {PROGRAMS.map((prog, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              style={cardStyle}
              onClick={() => navigate('/apply')}
            >
              <div style={{ color: THEME.accent, marginBottom: '20px' }}>
                {prog.icon}
              </div>
              <h3 style={{ fontSize: '22px', color: THEME.primary, marginBottom: '15px', fontWeight: 'bold' }}>{prog.title}</h3>
              <p style={{ color: THEME.primary, fontWeight: 600, fontSize: '14px', marginBottom: '10px' }}>{prog.desc}</p>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>{prog.details}</p>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>{prog.strength}</p>
              <button
                style={{
                  marginTop: '25px',
                  backgroundColor: 'transparent',
                  border: `1px solid ${THEME.accent}`,
                  color: THEME.accent,
                  padding: '8px 20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  transition: '0.3s',
                  cursor: 'pointer'
                }}
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
