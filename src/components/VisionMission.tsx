import React from 'react';
import { THEME } from '../constants';

export default function VisionMission() {
  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.lightBg,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    padding: '0 20px',
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: THEME.white,
    padding: '50px',
    borderRadius: '4px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    borderTop: `4px solid ${THEME.accent}`,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '28px',
    color: THEME.primary,
    fontFamily: 'Georgia, serif',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: '20px',
    color: '#555',
    lineHeight: 1.8,
  };

  return (
    <div style={sectionStyle} id="vision-mission">
      <div style={containerStyle}>
        <div style={boxStyle}>
          <h2 style={titleStyle}>Our Vision</h2>
          <p style={{ color: '#555', lineHeight: 1.8, fontSize: '16px' }}>
            To inspire and empower young minds to excel academically, develop a strong moral compass, and contribute meaningfully to society as responsible global citizens.
          </p>
        </div>

        <div style={boxStyle}>
          <h2 style={titleStyle}>Our Mission</h2>
          <ul style={listStyle}>
            <li>To provide a dynamic and student-centered learning environment that fosters intellectual growth and creativity.</li>
            <li>To nurture well-rounded individuals by encouraging participation in academics, sports, arts, and cultural activities</li>
            <li>To empower students with the knowledge, skills, and values needed to excel in a rapidly evolving world</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
