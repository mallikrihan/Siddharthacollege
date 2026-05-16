import React, { useState, useEffect } from 'react';
import { THEME } from '../constants';
import { motion } from 'motion/react';
import { Calendar, Tag, ChevronRight, Newspaper, Bell, ArrowRight, Share2, Loader2 } from 'lucide-react';
import { wpService, NewsItem } from '../services/wpService';

const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 1,
    date: 'May 10, 2026',
    title: 'Top Scorer in PUC Board Exams Recognized',
    category: 'Laurels',
    desc: 'Our student Medha G Hegde secured top marks in the district, bringing pride to the institution. A special felicitation ceremony was held today.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Uf_TSl_PqVeCNfMX-0_0SaFV76FgNrtiQQ&s'
  },
  {
    id: 2,
    date: 'Apr 25, 2026',
    title: 'Annual Cultural Fest "Siddhartha Taranga" 2026',
    category: 'Culture',
    desc: 'Get ready for three days of music, dance, and art. The much-awaited cultural festival will take place from June 5th to 7th.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIab0zlnpwQpdF13DIOf1FAZO0-7fSwGBhA&s'
  },
  {
    id: 3,
    date: 'Apr 15, 2026',
    title: 'Summer Coaching for Competitive Exams',
    category: 'Admissions',
    desc: 'Specialized coaching for CET, NEET, and JEE pathways will commence next month. Register now at the administrative office.',
    image: 'https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_093756-scaled.jpg'
  }
];

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const data = await wpService.getNews();
      // If WP returns data, use it. Otherwise, use fallback for development/demo.
      setNews(data.length > 0 ? data : FALLBACK_NEWS);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Magazine Header */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="News Header"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md mb-6">
              <Bell size={14} className="text-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">Live Updates</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
              News & <span className="italic text-accent">Journal</span>
            </h1>
            <p className="text-white/70 max-w-xl mx-auto font-sans text-sm md:text-base leading-relaxed tracking-wide">
              Documenting the milestones, stories, and the continuous evolution of our academic community.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 text-primary flex items-center justify-center shadow-sm">
              <Newspaper size={24} />
            </div>
            <h2 className="text-2xl font-serif text-primary">Latest Bulletins</h2>
          </div>
          {loading && <Loader2 className="animate-spin text-accent" size={24} />}
          <div className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Sorted by <span className="text-primary">Recent</span>
          </div>
        </div>

        {/* Magazine-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col h-full"
            >
              <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl shadow-slate-200/50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-primary uppercase tracking-widest shadow-sm">
                    {item.category}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col flex-1 px-4">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-accent" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-4 transition-all">
                    Full Article <ArrowRight size={14} className="text-accent" />
                  </a>
                  <button className="text-slate-300 hover:text-accent transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-50 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-accent mb-6">Stay Connected</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">Subscribe to our News</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Receive the latest academic insights, event announcements, and institutional updates directly in your inbox.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button className="bg-accent text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all shadow-xl shadow-accent/20">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

