"use client";
import React, { useState } from 'react';
import { THEME } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'What programs does Siddhartha PU College offer?',
    a: 'Siddhartha PU College offers education from LKG to degree courses, including PUC Science, PUC Commerce, B.Com, and B.Sc, ensuring holistic development and academic excellence.'
  },
  {
    q: 'Are scholarships available for students.',
    a: 'Yes, Siddhartha PU College provides access to government scholarships like the National Scholarship Portal (NSP) and State Scholarship Portal (SSP), supporting students based on merit and financial need.'
  },
  {
    q: 'How can i apply to siddingrtha college?',
    a: 'Fill the online form, submit documents. Contact: 8073799243 | siddhartha.puc.bhatkal@gmail.com'
  },
  {
    q: 'What is the student-to-faculty ratio?',
    a: 'We maintain a favorable student-to-faculty ratio, ensuring personalized attention, collaborative learning, and a commitment to academic excellence.'
  },
  {
    q: 'Are there extracurricular activities?',
    a: 'Yes! We offer sports, cultural events, student clubs, and leadership roles to support holistic growth and life skill development.'
  }
];
``
export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.lightBg,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const faqItemStyle = (isOpen: boolean): React.CSSProperties => ({
    backgroundColor: THEME.white,
    marginBottom: '15px',
    borderRadius: '4px',
    overflow: 'hidden',
    border: isOpen ? `2px solid ${THEME.accent}` : '2px solid transparent',
    transition: '0.3s'
  });

  const questionStyle: React.CSSProperties = {
    padding: '20px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: THEME.primary,
    fontSize: '18px',
  };

  const answerStyle = (isOpen: boolean): React.CSSProperties => ({
    padding: isOpen ? '0 25px 20px 25px' : '0 25px',
    maxHeight: isOpen ? '200px' : '0',
    overflow: 'hidden',
    color: '#666',
    lineHeight: 1.6,
    transition: '0.3s',
  });

  return (
    <section style={sectionStyle} id="faq">
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ color: THEME.accent, fontWeight: 'bold' }}>HAVE QUESTIONS?</div>
          <h2 style={{ fontSize: '36px', color: THEME.primary, fontFamily: 'Georgia, serif', marginTop: '10px' }}>Frequently Asked Questions</h2>
        </div>

        <div>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} style={faqItemStyle(isOpen)}>
                <div style={questionStyle} onClick={() => setOpenIdx(isOpen ? null : idx)}>
                  {faq.q}
                  {isOpen ? <Minus size={20} color={THEME.accent} /> : <Plus size={20} color={THEME.accent} />}
                </div>
                <div style={answerStyle(isOpen)}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
