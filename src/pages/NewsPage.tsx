import React from 'react';
import { THEME } from '../constants';
import { motion } from 'motion/react';
import { Calendar, Tag, ChevronRight, Newspaper, Bell } from 'lucide-react';

const EXTENDED_NEWS = [
  {
    id: 1,
    date: 'May 10, 2026',
    title: 'Top Scorer in PUC Board Exams 2025 Recognized',
    category: 'Award',
    desc: 'Our student Medha G Hegde secured top marks in the district, bringing pride to the institution. A special felicitation ceremony was held today.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Uf_TSl_PqVeCNfMX-0_0SaFV76FgNrtiQQ&s'
  },
  {
    id: 2,
    date: 'Apr 25, 2026',
    title: 'Annual Cultural Fest "Siddhartha Taranga" Dates Announced',
    category: 'Event',
    desc: 'Get ready for three days of music, dance, and art. The much-awaited cultural festival will take place from June 5th to 7th.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIab0zlnpwQpdF13DIOf1FAZO0-7fSwGBhA&s'
  },
  {
    id: 3,
    date: 'Apr 15, 2026',
    title: 'Summer Coaching Camp for Competitive Exams Starts Soon',
    category: 'Admission',
    desc: 'Specialized coaching for CET, NEET, and JEE pathways will commence next month. Register now at the administrative office.',
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_093756-scaled.jpg'
  },
  {
    id: 4,
    date: 'Mar 30, 2026',
    title: 'New Science Laboratory Wing Inaugurated',
    category: 'Infrastructure',
    desc: 'Equipped with state-of-the-art facilities for Physics, Chemistry, and Biology. This new wing will enhance practical learning for all students.',
    image: 'https://content.jdmagicbox.com/comp/karwar/z4/9999p8385.8385.180414230435.q4z4/catalogue/siddhartha-pre-university-college-karwar-colleges-sllxziieqx-250.jpg'
  },
  {
    id: 5,
    date: 'Mar 12, 2026',
    title: 'Inter-College Sports Tournament Results',
    category: 'Sports',
    desc: 'Siddhartha Institution teams triumphed in Volleyball and Badminton. Congratulations to all our athletes for their stellar performance.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7eLcMglmguaN6d9BuQgV5m3HSfc0vEbDVA&s'
  },
  {
    id: 6,
    date: 'Feb 20, 2026',
    title: 'Workshop on Career Guidance for Final Year Students',
    category: 'Seminar',
    desc: 'Experts from various industries shared insights on emerging career paths and essential skills for the modern professional world.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFFLJdE3ER6iMXEiBWlHSgx5pbHJpr6QKaQ&s'
  }
];

export default function NewsPage() {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
  };

  const newsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
  };

  return (
    <div style={{ backgroundColor: THEME.lightBg, minHeight: '100vh' }}>
      {/* Header Section */}
      <div style={{ backgroundColor: THEME.primary, color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Newspaper size={48} color={THEME.accent} />
        </div>
        <h1 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', marginBottom: '15px' }}>News & Updates</h1>
        <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
          Stay informed about the latest achievements, events, and announcements from Siddhartha Institution.
        </p>
      </div>

      <div style={containerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <Bell size={24} color={THEME.accent} />
          <h2 style={{ fontSize: '28px', color: THEME.primary, margin: 0 }}>Latest Bulletins</h2>
        </div>

        <div style={newsGridStyle} className="responsive-grid-3">
          {EXTENDED_NEWS.map((news) => (
            <motion.div
              key={news.id}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: THEME.white,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s'
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={news.image}
                  alt={news.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'center' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '12px',
                    color: '#888'
                  }}>
                    <Calendar size={14} /> {news.date}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: THEME.accent,
                    textTransform: 'uppercase',
                    backgroundColor: THEME.lightBg,
                    padding: '4px 12px',
                    borderRadius: '20px'
                  }}>
                    <Tag size={12} /> {news.category}
                  </div>
                </div>
                <h3 style={{ fontSize: '20px', color: THEME.primary, marginBottom: '15px', fontWeight: 'bold', lineHeight: 1.4 }}>
                  {news.title}
                </h3>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  {news.desc}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <a href="#" style={{
                    color: THEME.primary,
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    READ FULL STORY <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subscription/Banner Section */}
      <div style={{ backgroundColor: THEME.white, padding: '80px 20px', textAlign: 'center', borderTop: `1px solid ${THEME.border}` }}>
        <h2 style={{ fontSize: '32px', color: THEME.primary, marginBottom: '20px' }}>Subscribe to our Newsletter</h2>
        <p style={{ color: '#666', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Never miss an update. Receive the latest news and announcements directly in your inbox.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }} className="mobile-stack">
          <input
            type="email"
            placeholder="Your Email Address"
            style={{
              flex: 1,
              padding: '12px 20px',
              borderRadius: '4px',
              border: `1px solid ${THEME.border}`,
              fontSize: '14px'
            }}
          />
          <button style={{
            backgroundColor: THEME.primary,
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
