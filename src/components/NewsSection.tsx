import React, { useState, useEffect } from 'react';
import { THEME } from '../constants';
import { ExternalLink, Calendar, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { wpService, NewsItem } from '../services/wpService';

const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 1,
    date: 'May 10, 2026',
    title: 'Top Scorer in PUC Board Exams Recognized',
    category: 'Laurels',
    desc: 'Our student Medha G Hegde secured top marks in the district, bringing pride to the institution.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Uf_TSl_PqVeCNfMX-0_0SaFV76FgNrtiQQ&s'
  },
  {
    id: 2,
    date: 'Apr 25, 2026',
    title: 'Annual Cultural Fest "Siddhartha Taranga" 2026',
    category: 'Culture',
    desc: 'Get ready for three days of music, dance, and art.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIab0zlnpwQpdF13DIOf1FAZO0-7fSwGBhA&s'
  },
  {
    id: 3,
    date: 'Apr 15, 2026',
    title: 'Summer Coaching for Competitive Exams',
    category: 'Admissions',
    desc: 'Specialized coaching for CET, NEET, and JEE pathways will commence next month.',
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_093756-scaled.jpg'
  },
  {
    id: 4,
    date: 'Mar 30, 2026',
    title: 'New Science Laboratory Wing Inaugurated',
    category: 'Facilities',
    desc: 'State of the art laboratory wing was inaugurated to enhance practical experiments.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80'
  }
];

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const data = await wpService.getNews();
      setNews(data.length > 0 ? data : FALLBACK_NEWS);
      setLoading(false);
    };
    fetchNews();
  }, []);

  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    backgroundColor: THEME.white,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const itemStyle: React.CSSProperties = {
    padding: '20px 0',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '0.3s'
  };

  return (
    <section style={sectionStyle} id="news">
      <div style={containerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <div style={{ color: THEME.accent, fontWeight: 'bold' }}>UPDATES</div>
            <h2 style={{ fontSize: '36px', color: THEME.primary, fontFamily: 'Georgia, serif', marginTop: '5px' }}>News & Events</h2>
          </div>
          <Link to="/news" style={{ color: THEME.accent, textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
            VIEW ALL NEWS <ExternalLink size={16} />
          </Link>
        </div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
            <Loader2 className="animate-spin text-accent" size={32} />
          </div>
        ) : (
          <div>
            {news.slice(0, 4).map((item) => (
              <div key={item.id} style={itemStyle} className="news-item">
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="news-item-content">
                  <div style={{ color: '#888', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', width: '120px' }} className="news-date">
                    <Calendar size={16} /> {item.date}
                  </div>
                  <div style={{
                    backgroundColor: THEME.lightBg,
                    color: THEME.primary,
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    {item.category}
                  </div>
                  <h4 style={{ color: THEME.primary, fontSize: '18px', fontWeight: 600 }}>{item.title}</h4>
                </div>
                <Link to="/news" style={{ color: THEME.primary }} className="hide-mobile">
                  <ExternalLink size={20} />
                </Link>
              </div>
            ))}
          </div>
        )}
        <style>{`
          @media (max-width: 768px) {
            .news-item-content { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
            .news-date { width: auto !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
