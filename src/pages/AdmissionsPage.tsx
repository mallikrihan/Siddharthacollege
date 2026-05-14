import React from 'react';
import AdmissionsSection from '../components/AdmissionsSection';
import { THEME } from '../constants';

export default function AdmissionsPage() {
  return (
    <div style={{ backgroundColor: THEME.lightBg, minHeight: '100vh', paddingTop: '40px' }}>
      {/* Page Header */}
      <div style={{ backgroundColor: THEME.primary, color: 'white', padding: '60px 20px', textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', marginBottom: '10px' }}>Admissions</h1>
        <p style={{ fontSize: '18px', opacity: 0.9 }}>Choose your path to success at Siddhartha Institution.</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <AdmissionsSection />
      </div>

      <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: THEME.white }}>
        <h2 style={{ color: THEME.primary, fontSize: '32px', marginBottom: '20px' }}>Ready to take the next step?</h2>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '18px' }}>Join our community of achievers and shape your future.</p>
        <a 
          href="/apply" 
          style={{ 
            backgroundColor: THEME.accent, 
            color: 'white', 
            padding: '15px 40px', 
            borderRadius: '4px', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: '18px',
            display: 'inline-block'
          }}
        >
          Apply Online Now
        </a>
      </div>
    </div>
  );
}
