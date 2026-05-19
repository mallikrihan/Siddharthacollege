import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { wpService, NewsItem } from '../services/wpService';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [article, setArticle] = useState<NewsItem | null>(location.state?.article || null);
  const [loading, setLoading] = useState(!article);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!article && id) {
      const fetchArticle = async () => {
        try {
          const data = await wpService.getNewsById(id);
          if (data) {
            setArticle(data);
          } else {
            setError('Article not found.');
          }
        } catch (err) {
          setError('Failed to load article.');
        } finally {
          setLoading(false);
        }
      };
      fetchArticle();
    }
  }, [id, article]);

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-accent" size={48} />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-serif text-primary mb-4">{error || 'Article not found.'}</h2>
        <Link to="/news" className="text-accent flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to all news
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Tag size={12} /> {article.category}
            </span>
            <span className="text-sm font-bold text-slate-400 flex items-center gap-2">
              <Calendar size={14} /> {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: article.title }} />

          <div className="rounded-[2rem] overflow-hidden shadow-2xl mb-12 h-[300px] sm:h-[400px] md:h-[500px]">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 
            Since we fetch `post.content.rendered` in getNewsById, `article.desc` contains HTML.
            We render it safely using dangerouslySetInnerHTML.
          */}
          <div 
            className="prose prose-lg prose-slate max-w-none 
                       prose-headings:font-serif prose-headings:text-primary 
                       prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                       prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: article.desc }}
          />
        </motion.div>
      </div>
    </div>
  );
}
