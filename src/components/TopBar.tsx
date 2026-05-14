"use client";
import React from 'react';
import { Mail, Phone, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { THEME, CONTACT } from '../constants';

export default function TopBar() {
  const barStyle: React.CSSProperties = {
    backgroundColor: THEME.primaryDark,
    color: '#ffffff',
    fontSize: '13px',
    padding: '8px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const itemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const iconTextStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    color: '#ffffff',
  };

  const socialStyle: React.CSSProperties = {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  };

  return (
    <div style={barStyle} className="top-bar-root">
      <div style={itemStyle}>
        <a href={`tel:${CONTACT.phone}`} style={iconTextStyle}>
          <Phone size={14} color={THEME.accent} /> {CONTACT.phone}
        </a>
        <a href={`mailto:${CONTACT.email}`} style={iconTextStyle}>
          <Mail size={14} color={THEME.accent} /> {CONTACT.email}
        </a>
        <div style={iconTextStyle}>
          <Clock size={14} color={THEME.accent} /> {CONTACT.hours}
        </div>
      </div>
      <div style={socialStyle}>
        <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', transition: '0.3s' }} className="social-icon"><Facebook size={14} /></a>
        <a href={CONTACT.social.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', transition: '0.3s' }} className="social-icon"><Twitter size={14} /></a>
        <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', transition: '0.3s' }} className="social-icon"><Instagram size={14} /></a>
        <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', transition: '0.3s' }} className="social-icon"><Youtube size={14} /></a>
      </div>
      <style>{`
        .social-icon:hover {
          color: ${THEME.accent} !important;
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .top-bar-root { display: none !important; }
        }
      `}</style>
    </div>
  );
}
