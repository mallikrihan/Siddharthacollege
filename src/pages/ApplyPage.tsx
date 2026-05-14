import React from 'react';
import { THEME } from '../constants';
import { Download, GraduationCap, FileText, CheckCircle2 } from 'lucide-react';
import { Leaf, BookOpen, Microscope, BarChart3, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

export default function ApplyPage() {
  const navigate = useNavigate();
  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const headerBannerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  };

  const imageStyle: React.CSSProperties = {
    flex: '1 1 300px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  const btnStyle = {
    backgroundColor: THEME.primary,
    color: '#fff',
    padding: '15px 30px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const sectionTitleStyle: React.CSSProperties = {
    color: THEME.primary,
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    borderBottom: `2px solid ${THEME.accent}`,
    paddingBottom: '10px',
    display: 'inline-block'
  };

  return (
    <div style={{ backgroundColor: THEME.lightBg, minHeight: '100vh' }}>
      {/* Page Header */}
      <div style={{ backgroundColor: THEME.primary, color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', marginBottom: '10px' }}>Apply & Admissions</h1>
        <p style={{ fontSize: '18px', opacity: 0.9 }}>Join Siddhartha Institution. Your journey to excellence starts here.</p>
      </div>

      <div style={containerStyle}>
        {/* Images Header */}
        <div style={headerBannerStyle}>
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" alt="College Campus 1" style={imageStyle} />
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600" alt="College Campus 2" style={imageStyle} />
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" alt="College Campus 3" style={imageStyle} />
        </div>

        {/* Downloads & Apply details */}
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '60px' }}>
          <div style={{ flex: '2 1 400px', backgroundColor: THEME.white, padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h2 style={sectionTitleStyle}>Application Details</h2>
            <p style={{ lineHeight: 1.6, marginBottom: '20px' }}>
              We are delighted that you are considering Siddhartha Institution for your education.
              Our admissions process is designed to be straightforward and transparent.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 color={THEME.accent} size={24} />
                <span><strong>Step 1:</strong> Download the admission form and fill it out completely.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 color={THEME.accent} size={24} />
                <span><strong>Step 2:</strong> Attach required documents (Marks card, Aadhaar card, Photos).</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 color={THEME.accent} size={24} />
                <span><strong>Step 3:</strong> Submit the application at our campus office.</span>
              </li>
            </ul>
            <button style={{ ...btnStyle, marginTop: '30px' }} onClick={() => alert('Online application portal coming soon!')}>
              <FileText size={20} /> Apply Online Now
            </button>
          </div>

          <div style={{ flex: '1 1 300px', backgroundColor: THEME.white, padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
            <h3 style={{ fontSize: '22px', color: THEME.primary, fontWeight: 'bold' }}>Important Documents</h3>
            <button style={btnStyle}>
              <Download size={20} /> Download Admission Form
            </button>
            <button style={{ ...btnStyle, backgroundColor: THEME.accent }}>
              <Download size={20} /> Download Brochure
            </button>
          </div>
        </div>

        {/* Scholarships Details */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ ...sectionTitleStyle, display: 'block', textAlign: 'center', borderBottom: 'none' }}>Scholarship Details</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: THEME.accent, margin: '0 auto 30px' }}></div>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 300px', maxWidth: '500px', backgroundColor: THEME.white, padding: '30px', borderRadius: '8px', borderTop: `4px solid ${THEME.primary}`, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '24px', color: THEME.primary, marginBottom: '15px' }}>NSP Scholarship</h3>
              <p style={{ color: '#555', lineHeight: 1.6 }}>
                The <strong>National Scholarship Portal (NSP)</strong> provides financial assistance to meritorious and deserving students.
                Students from minority communities or lower-income backgrounds can apply through the central portal.
              </p>
              <button
                onClick={() => window.open('https://www.nsp.gov.in/', '_blank', 'noopener,noreferrer')}
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
            </div>
            <div style={{ flex: '1 1 300px', maxWidth: '500px', backgroundColor: THEME.white, padding: '30px', borderRadius: '8px', borderTop: `4px solid ${THEME.accent}`, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '24px', color: THEME.primary, marginBottom: '15px' }}>SSP Scholarship</h3>
              <p style={{ color: '#555', lineHeight: 1.6 }}>
                The <strong>State Scholarship Portal (SSP)</strong> is a Karnataka state initiative offering financial aid.
                It covers post-matric scholarships for students belonging to SC/ST, OBC, and other backward classes.
              </p>
              <button
                onClick={() => window.open('https://ssp.karnataka.gov.in/', '_blank', 'noopener,noreferrer')}
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
            </div>
          </div>
        </div>

        {/* Standards & Seats */}


      </div>
    </div>
  );
}
