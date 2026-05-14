import React from 'react';
import { THEME } from '../constants';
import VisionMission from '../components/VisionMission';
import { motion } from 'motion/react';
import {
  BookOpen,
  Library,
  Dribbble,
  Monitor,
  Home,
  Bus,
  Coffee,
  Trophy,
  Star,
  GraduationCap,
  Users,
  Target,
  Quote
} from 'lucide-react';

const FACILITIES = [
  { icon: <Library size={30} />, name: 'Library', desc: 'Our library offers a vast collection of books, journals, and digital resources to support learning and growth..' },
  { icon: <Dribbble size={30} />, name: 'Playground', desc: 'The playground offers a lively space for sports, teamwork, and recreation, keeping students active and engaged.' },
  { icon: <Monitor size={30} />, name: 'Computer Lab', desc: 'Our computer lab features the latest technology, providing students with tools and resources for academic projects.' },
  { icon: <Home size={30} />, name: 'Hostel', desc: 'Our secure hostel offers a comfortable home away from home, fostering community and support among students.' },
  { icon: <Bus size={30} />, name: 'Bus Facility', desc: 'Our bus service ensures safe and reliable transportation, offering students convenient access to campus.' },
  { icon: <Coffee size={30} />, name: 'Canteen', desc: 'Our canteen serves fresh, hygienic meals in a comfortable space, offering students a place to relax and refresh.' }
];

const ACHIEVEMENTS = [
  { type: 'Academic', title: 'Top Rank', desc: 'Consistently securing top positions in PUC Board Exams.' },
  { type: 'Athletic', title: 'Sports Excellence', desc: 'Winners of State-level Volleyball and Kabaddi tournaments.' },
  { type: 'Cultural', title: 'Cultural Achievement', desc: 'First place in District-level folk dance competition.' }
];

const ALUMNI_COLLEGES = [
  'MBBS - 20', 'BAMS - 150', 'BDS - 15', 'NITK - 9', 'IIT - 3', 'RV - 15','NIE - 20','JCE - 16'
];

export default function AboutPage() {
  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '32px',
    color: THEME.primary,
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    position: 'relative',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: THEME.white,
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    height: '100%'
  };

  return (
    <div style={{ backgroundColor: THEME.lightBg, minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: THEME.primary, color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '56px', fontFamily: 'Georgia, serif', marginBottom: '20px' }}>Our Legacy of Excellence</h1>
        <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          Empowering minds and shaping futures in Bhatkal since 2011.
        </p>
      </div>

      {/* About Story & Affiliation */}
      <section id="story" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={sectionTitleStyle}>Our Story</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#444', textAlign: 'center', marginBottom: '40px' }}>
            Siddhartha Education Trust (Reg.), Bhatkal, was established in August 2009 under the leadership of Captain K.R. Naik Bhatkal, who holds M.Sc. (Agri) and LLB degrees. Captain Naik, a disciplined soldier, served in the Indian Army and later retired as Deputy Director of the Department of Soldier Welfare and Rehabilitation. The trust began its educational initiatives with the goal of promoting quality education.
          </p>
          <div id="affiliation" style={{ textAlign: 'center', padding: '30px', backgroundColor: THEME.white, borderRadius: '8px', border: `2px dashed ${THEME.accent}` }}>
            <h3 style={{ color: THEME.accent, fontSize: '24px', fontWeight: 'bold' }}>Affiliated to NCERT!</h3>
            <p style={{ color: '#666', marginTop: '10px' }}>Siddhartha PU College proudly operates under the academic framework and guidelines of the National Council of Educational Research and Training (NCERT). This affiliation ensures that our curriculum is in line with national standards, fostering academic excellence and equipping students with the skills and knowledge needed to excel in competitive environments. By adhering to NCERT’s principles, we aim to create a balanced and forward-thinking educational experience, combining theoretical learning with practical applications. Join us to benefit from an institution where quality education meets national benchmarks.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <VisionMission />

      {/* Leadership Messages */}
      <section style={{ padding: '80px 20px', backgroundColor: THEME.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="responsive-grid-2">
          <div id="founder" style={cardStyle}>
            <Quote size={40} color={THEME.accent} style={{ marginBottom: '20px', opacity: 0.3 }} />
            <h2 style={{ fontSize: '28px', color: THEME.primary, marginBottom: '15px' }}>Founder's Message</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#555', fontStyle: 'italic' }}>
              "Our goal is to build an institution where every student feels valued and empowered. We believe in nurturing the unique talents of each individual to create leaders of tomorrow."
            </p>
            <div style={{ marginTop: '20px', fontWeight: 'bold', color: THEME.primary }}>— Mr.Captain K.R Naik Founder</div>
          </div>
          <div id="principal" style={cardStyle}>
            <Quote size={40} color={THEME.accent} style={{ marginBottom: '20px', opacity: 0.3 }} />
            <h2 style={{ fontSize: '28px', color: THEME.primary, marginBottom: '15px' }}>Principal's Message</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#555', fontStyle: 'italic' }}>
              "Education at Siddhartha is not just about textbooks; it's about life skills, character, and curiosity. We invite you to join our vibrant community of learners."
            </p>
            <div style={{ marginTop: '20px', fontWeight: 'bold', color: THEME.primary }}>— Smt. Archana U, Principal</div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={sectionTitleStyle}>World-Class Facilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }} className="responsive-grid-3">
            {FACILITIES.map((f, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} style={cardStyle}>
                <div style={{ color: THEME.accent, marginBottom: '15px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '20px', color: THEME.primary, marginBottom: '10px' }}>{f.name}</h3>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" style={{ padding: '80px 20px', backgroundColor: THEME.primary, color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ ...sectionTitleStyle, color: 'white' }}>Our Proud Achievements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }} className="responsive-grid-3">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
                <Trophy size={40} color={THEME.accent} style={{ marginBottom: '20px' }} />
                <div style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', color: THEME.accent, fontWeight: 'bold' }}>{a.type}</div>
                <h3 style={{ fontSize: '24px', margin: '10px 0' }}>{a.title}</h3>
                <p style={{ opacity: 0.8, fontSize: '15px' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section id="alumni" style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <GraduationCap size={50} color={THEME.accent} style={{ marginBottom: '20px' }} />
          <h2 style={sectionTitleStyle}>Our Alumni Network</h2>
          <p style={{ fontSize: '20px', color: '#444', marginBottom: '30px' }}>
            Our alumni have secured admissions in these prestigious colleges:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {ALUMNI_COLLEGES.map((college, i) => (
              <span key={i} style={{ backgroundColor: THEME.white, padding: '10px 25px', borderRadius: '30px', fontWeight: 'bold', color: THEME.primary, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                {college}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Team */}
      {/* <section id="team" style={{ padding: '80px 20px', backgroundColor: THEME.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={sectionTitleStyle}>Our Visionary Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'center' }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n}>
                <div style={{ width: '150px', height: '150px', backgroundColor: THEME.lightBg, borderRadius: '50%', margin: '0 auto 20px', overflow: 'hidden' }}>
                  <img src={`https://i.pravatar.cc/150?u=${n + 10}`} alt="Team Member" />
                </div>
                <h4 style={{ color: THEME.primary, fontSize: '18px', fontWeight: 'bold' }}>Member Name</h4>
                <p style={{ color: THEME.accent, fontSize: '14px' }}>Visionary Leader</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
