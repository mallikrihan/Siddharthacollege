import React from 'react';
import AdmissionsSection from '../components/AdmissionsSection';
import { THEME } from '../constants';
import { motion } from 'motion/react';
import { GraduationCap, ChevronRight, BookOpen, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdmissionsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523050853063-bd80e29247f3?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Admissions"
          />
        </div>
        <div className="relative z-10 text-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md mb-6">
              <GraduationCap size={14} className="text-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">Open 2026-27</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
              Begin Your <span className="italic text-accent">Journey</span>
            </h1>
            <p className="text-white/70 max-w-xl mx-auto font-sans text-sm md:text-base leading-relaxed tracking-wide">
              Secure your place in an institution dedicated to academic rigor and character building.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto">
        {/* Quick Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 -translate-y-12 relative z-20">
          {[
            { icon: BookOpen, title: 'Academic Rigor', desc: 'World-class curriculum' },
            { icon: ShieldCheck, title: 'Safe Campus', desc: 'Secure & nurturing' },
            { icon: GraduationCap, title: 'Expert Faculty', desc: 'Mentorship focused' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 flex items-center gap-6 border border-slate-50">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-accent flex items-center justify-center shrink-0">
                <item.icon size={28} />
              </div>
              <div>
                <h4 className="text-lg font-serif text-primary">{item.title}</h4>
                <p className="text-slate-400 text-xs uppercase tracking-widest mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <AdmissionsSection />
      </div>

      {/* Call to Action */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to Shape Your Future?</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Our application process is simple and transparent. Start your online application today and join the Siddhartha community.
            </p>
            
            <button 
              onClick={() => navigate('/apply')}
              className="bg-accent text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-all shadow-xl shadow-accent/20 flex items-center gap-4 mx-auto"
            >
              Apply Online Now <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
