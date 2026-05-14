import React from 'react';
import { THEME } from '../constants';

const STATS = [
  { label: 'Happy Students', value: '1710+' },
  { label: 'Expert Faculty Members', value: '45+' },
  { label: 'Years of Excellence', value: '12+' },
  { label: 'Successful Graduates', value: '5000+' },
  { label: 'Partnerships & Collaborations', value: '12+' },
  { label: 'Award Achievements', value: '35+' }
];

export default function StatsBar() {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: THEME.primary,
    padding: '40px 0',
    color: '#ffffff',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    textAlign: 'center',
    gap: '20px',
  };

  const statItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };

  const valueStyle: React.CSSProperties = {
    color: THEME.accent,
    fontSize: '36px',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: 0.9,
  };

  const dividerStyle: React.CSSProperties = {
    height: '40px',
    width: '1px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'center',
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle} className="responsive-grid-4">
        {STATS.map((stat, idx) => (
          <React.Fragment key={idx}>
            <div style={statItemStyle}>
              <div style={valueStyle}>{stat.value}</div>
              <div style={labelStyle}>{stat.label}</div>
            </div>
            {idx < STATS.length - 1 && <div style={dividerStyle} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
