"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, GraduationCap, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { THEME, NAVIGATION } from '../constants';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: any, idx: number) => {
    if (item.dropdown) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === idx ? null : idx);
    } else {
      setMobileMenuOpen(false);
    }
  };

  const containerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const row1Style: React.CSSProperties = {
    backgroundColor: THEME.white,
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    textDecoration: 'none',
    color: THEME.primary,
  };

  const logoTextStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: THEME.accent,
    color: THEME.white,
    padding: '10px 25px',
    borderRadius: '4px',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '14px',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const row2Style: React.CSSProperties = {
    backgroundColor: THEME.primary,
    padding: '0 40px',
  };

  const navListStyle: React.CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };

  const navItemStyle: React.CSSProperties = {
    position: 'relative',
    padding: '15px 20px',
  };

  const navLinkStyle: React.CSSProperties = {
    color: THEME.white,
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 500,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'color 0.3s',
  };

  const dropdownStyle = (isOpen: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: THEME.white,
    minWidth: '220px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    borderTop: `3px solid ${THEME.accent}`,
    listStyle: 'none',
    padding: '10px 0',
    display: isOpen ? 'block' : 'none',
    zIndex: 1001,
  });

  return (
    <div style={containerStyle}>
      {/* Inject CSS for hover dropdowns */}
      <style>{`
        .nav-link:hover {
          color: ${THEME.accent} !important;
        }
        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: ${THEME.accent} !important;
        }
        @media (max-width: 992px) {
          .mobile-toggle { display: block !important; }
          .nav-row-2 { 
            display: ${mobileMenuOpen ? 'block' : 'none'} !important; 
            background-color: ${THEME.primary};
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            max-height: calc(100vh - 100px);
            overflow-y: auto;
          }
          .nav-list { 
            flex-direction: column !important; 
            padding: 20px !important;
          }
          .nav-item { 
            padding: 10px 0 !important; 
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .nav-link {
            color: white !important;
            display: flex !important;
            justify-content: space-between;
            align-items: center;
          }
          .nav-dropdown {
            position: static !important;
            box-shadow: none !important;
            background-color: rgba(255,255,255,0.08) !important;
            border-top: none !important;
            margin-top: 10px;
            display: block !important;
          }
          .dropdown-item {
            color: rgba(255,255,255,0.8) !important;
            padding: 12px 25px !important;
            font-size: 14px !important;
          }
        }
        @media (max-width: 600px) {
          .logo-text-main { font-size: 18px !important; }
          .logo-text-sub { font-size: 10px !important; letter-spacing: 1px !important; }
          .navbar-row-1 { padding: 10px 20px !important; }
          .cta-btn-nav { padding: 6px 12px !important; font-size: 11px !important; }
        }
      `}</style>

      <div style={row1Style}>
        <Link to="/" style={logoContainerStyle} onClick={() => setMobileMenuOpen(false)}>
          <div style={{ backgroundColor: THEME.primary, padding: '8px', borderRadius: '50%' }}>
            <GraduationCap size={40} color={THEME.white} />
          </div>
          <div style={logoTextStyle}>
            <span className="logo-text-main" style={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 1.1 }}>SIDDHARTHA</span>
            <span className="logo-text-sub" style={{ fontSize: '14px', letterSpacing: '2px' }}>INSTITUTION BHATKAL</span>
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }} className="navbar-row-1">
          <Link to="/apply" style={ctaButtonStyle} className="cta-btn-nav">Apply Now</Link>
          <button
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: THEME.primary }}
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      <div style={row2Style} className="nav-row-2">
        <ul style={navListStyle} className="nav-list">
          {NAVIGATION.map((item, idx) => (
            <li key={idx} className="nav-item" style={navItemStyle}>
              {item.link.startsWith('/#') ? (
                <a
                  href={item.link}
                  className="nav-link"
                  style={navLinkStyle}
                  onClick={(e) => handleNavClick(e, item, idx)}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="nav-link"
                  style={navLinkStyle}
                  onClick={(e) => {
                    if (item.name === 'Home' && location.pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    handleNavClick(e, item, idx);
                  }}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </Link>
              )}

              {item.dropdown && (
                <ul className="nav-dropdown" style={dropdownStyle(activeDropdown === idx)}>
                  {item.dropdown.map((sub, sidx) => (
                    <li key={sidx}>
                      {sub.link.startsWith('/#') ? (
                        <a
                          href={sub.link}
                          className="dropdown-item"
                          style={{
                            display: 'block',
                            padding: '10px 20px',
                            color: THEME.primary,
                            textDecoration: 'none',
                            fontSize: '13px',
                            transition: '0.3s'
                          }}
                          onClick={() => {
                            setActiveDropdown(null);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {sub.name}
                        </a>
                      ) : (
                        <Link
                          to={sub.link}
                          className="dropdown-item"
                          style={{
                            display: 'block',
                            padding: '10px 20px',
                            color: THEME.primary,
                            textDecoration: 'none',
                            fontSize: '13px',
                            transition: '0.3s'
                          }}
                          onClick={() => {
                            setActiveDropdown(null);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {sub.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
