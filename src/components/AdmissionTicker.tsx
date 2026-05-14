"use client";
import React from 'react';
import { THEME } from '../constants';

export default function AdmissionTicker() {
  const containerStyle: React.CSSProperties = {
    backgroundColor: THEME.accent,
    color: '#ffffff',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'uppercase',
  };

  const tickerStyle: React.CSSProperties = {
    display: 'flex',
    whiteSpace: 'nowrap',
    animation: 'ticker 30s linear infinite',
    gap: '50px',
  };

  const labelStyle: React.CSSProperties = {
    backgroundColor: THEME.primaryDark,
    padding: '0 20px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    zIndex: 2,
    boxShadow: '5px 0 10px rgba(0,0,0,0.2)',
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      
      <div style={labelStyle}>ANNUNCIATIONS</div>
      
      <div style={tickerStyle}>
        <span>Admissions Open for Year 2026-27: Pre-Primary (LKG & UKG)</span>
        <span>•</span>
        <span>Primary School Grades 1-7 (Holistic Child Development)</span>
        <span>•</span>
        <span>High School Grades 8-10 (Board Exam Preparation)</span>
        <span>•</span>
        <span>PUC Science (PCM & PCMB Pathways)</span>
        <span>•</span>
        <span>PUC Commerce (Business, Economics, Accountancy)</span>
        <span>•</span>
        <span>Degree Programmes: B.Com & B.Sc (Government Affiliated)</span>
        <span>•</span>
        <span>Contact: 8073799243 for more details.</span>
      </div>
    </div>
  );
}
