import React from 'react';
import { THEME } from '../constants';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function AboutSection() {
  const navigate = useNavigate();
  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.white,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
    padding: '0 20px',
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
  };

  const imageStyle: React.CSSProperties = {
    flex: 1,
    position: 'relative',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '14px',
    color: THEME.accent,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '10px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '42px',
    color: THEME.primary,
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    marginBottom: '25px',
    lineHeight: 1.2,
  };

  const textStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#666',
    lineHeight: 1.8,
    marginBottom: '20px',
  };

  const highlightCard: React.CSSProperties = {
    backgroundColor: THEME.lightBg,
    padding: '25px',
    borderLeft: `5px solid ${THEME.accent}`,
    fontSize: '18px',
    fontWeight: 500,
    color: THEME.primary,
    fontStyle: 'italic',
    marginBottom: '30px',
  };

  return (
    <section style={sectionStyle} id="about">
      <div style={containerStyle} className="mobile-stack">
        <div style={contentStyle}>
          <div style={headingStyle}>Welcome to Excellence</div>
          <h2 style={titleStyle}>Siddhartha Institution Bhatkal</h2>
          <div style={highlightCard}>
            "Where education meets excellence"
          </div>
          <p style={textStyle}>
            Where education meets excellence. At Siddhartha Institution, we nurture young minds, instill confidence, and foster holistic development, empowering our students to achieve their dreams."
          </p>
          <p style={textStyle}>
            With over 15 years of excellence, we have consistently provided a dynamic and student-centered learning environment that empowers students with skills to meet rapidly evolving world challenges.
          </p>
           <button 
            onClick={() => navigate('/about')}
            style={{
              backgroundColor: THEME.primary,
              color: '#fff',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Read More About Us
          </button>
        </div>

        <div style={imageStyle}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_092008-1024x473.jpg"
              alt="Institution Building"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '20px 20px 0px ' + THEME.lightBg }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
