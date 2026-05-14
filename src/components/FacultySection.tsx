"use client";
import React from 'react';
import { THEME } from '../constants';
import { motion } from 'motion/react';

const SUBJECTS = [
  { name: 'Physics', title: 'Mechanics, Electricity, Magnetism, Thermodynamics, Optics, Waves.', icon: '🔬' },
  { name: 'Chemistry', title: 'Organic, Inorganic, Physical, Environmental, Analytical, Industrial.', icon: '🧪' },
  { name: 'Mathematics', title: 'Calculus, Algebra, Geometry, Statistics, Trigonometry, Differential Equations', icon: '📐' },
  { name: 'Biology', title: 'Botany, Zoology, Microbiology, Biotechnology, Genetics, Ecology', icon: '🧬' },
  { name: 'Accounting', title: 'Financial Accounting, Cost Accounting, Auditing, Corporate Finance, Taxation', icon: '📑' },
  { name: 'Economics', title: 'Microeconomics, Macroeconomics, Statistics, International Economics, Public Finance', icon: '📈' },
  { name: 'Business Studies', title: 'Introduction to Business, Business Environment, Business Finance, Business Management, Marketing Management', icon: '💼' },
  { name: 'Statistics', title: 'Descriptive Statistics, Inferential Statistics, Probability, Correlation and Regression, Sampling Methods', icon: '📊' }
];

export default function FacultySection() {
  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.white,
    position: 'relative'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: THEME.lightBg,
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    border: '1px solid #eee',
    cursor: 'pointer'
  };

  return (
    <section style={sectionStyle} id="faculty">
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ color: THEME.accent, fontWeight: 'bold' }}>ACADEMIC DEPARTMENTS</div>
          <h2 style={{ fontSize: '36px', color: THEME.primary, fontFamily: 'Georgia, serif', marginTop: '10px' }}>Popular Faculty Areas of Study</h2>
        </div>

        <div style={gridStyle} className="responsive-grid-4">
          {SUBJECTS.map((sub, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, backgroundColor: THEME.white, boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
              style={cardStyle}
            >
              <div style={{ fontSize: '40px' }}>{sub.icon}</div>
              <h4 style={{ color: THEME.primary, fontWeight: 'bold', fontSize: '18px' }}>{sub.name}</h4>
              <p style={{ color: THEME.text, fontSize: '12px' }}>{sub.title}</p>
              <div style={{ color: THEME.accent, fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Department</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
