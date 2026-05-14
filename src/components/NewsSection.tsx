"use client";
import React from 'react';
import { THEME } from '../constants';
import { ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const NEWS = [
  { date: 'May 10, 2026', title: 'Top Scorer in PUC Board Exams 2025 Recognized', category: 'Award' },
  { date: 'Apr 25, 2026', title: 'Annual Cultural Fest "Siddhartha Taranga" Dates Announced', category: 'Event' },
  { date: 'Apr 15, 2026', title: 'Summer Coaching Camp for Competitive Exams Starts Soon', category: 'Admission' },
  { date: 'Mar 30, 2026', title: 'New Science Laboratory Wing Inaugurated', category: 'Infrastructure' }
];

export default function NewsSection() {
  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.white,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const itemStyle: React.CSSProperties = {
    padding: '20px 0',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '0.3s'
  };

  return (
    <section style={sectionStyle} id="news">
      <div style={containerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <div style={{ color: THEME.accent, fontWeight: 'bold' }}>UPDATES</div>
            <h2 style={{ fontSize: '36px', color: THEME.primary, fontFamily: 'Georgia, serif', marginTop: '5px' }}>News & Events</h2>
          </div>
          <Link to="/News" style={{ color: THEME.accent, textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
            VIEW ALL NEWS <ExternalLink size={16} />
          </Link>
        </div>

        <div>
          {NEWS.map((item, idx) => (
            <div key={idx} style={itemStyle} className="news-item">
              <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <div style={{ color: '#888', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', width: '120px' }}>
                  <Calendar size={16} /> {item.date}
                </div>
                <div style={{
                  backgroundColor: THEME.lightBg,
                  color: THEME.primary,
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}>
                  {item.category}
                </div>
                <h4 style={{ color: THEME.primary, fontSize: '18px', fontWeight: 600 }}>{item.title}</h4>
              </div>
              <a href="#" style={{ color: THEME.primary }}><ExternalLink size={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
