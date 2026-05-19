"use client";
import React from 'react';
import { THEME } from '../constants';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Leaf, BookOpen, GraduationCap, Microscope, BarChart3, Award, ArrowRight } from 'lucide-react';

const PROGRAMS = [
  {
    title: 'Pre-Primary',
    desc: 'LKG & UKG foundation',
    details: 'Play-based learning focusing on social and cognitive development for early years.',
    strength: '100+ Students',
    icon: <Leaf size={32} />
  },
  {
    title: 'Primary School',
    desc: 'Grades 1–7 holistic',
    details: 'A balanced academic and extracurricular curriculum for all-round growth.',
    strength: '430+ Students',
    icon: <BookOpen size={32} />
  },
  {
    title: 'High School',
    desc: 'Grades 8–10 boards',
    details: 'Focused preparation for board exams with emphasis on analytical thinking.',
    strength: '230+ Students',
    icon: <Award size={32} />
  },
  {
    title: 'PUC Science',
    desc: 'PCM & PCMB pathways',
    details: 'Rigorous coaching for CET, NEET, and JEE with state-of-the-art laboratory access.',
    strength: '1200+ Students',
    icon: <Microscope size={32} />
  },
  {
    title: 'PUC Commerce',
    desc: 'Business & Finance',
    details: 'Preparing future business leaders through expert faculty and practical insights.',
    strength: '140+ Students',
    icon: <BarChart3 size={32} />
  },
  {
    title: 'Degree',
    desc: 'Higher Education',
    details: 'Comprehensive B.Com and B.Sc programs affiliated with leading universities.',
    strength: '100+ Students',
    icon: <GraduationCap size={32} />
  }
];

export default function AdmissionsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="admissions">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-accent mb-4">Admissions 2026-27</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">Explore Our Programs</h3>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Unlock your potential with our diverse range of academic pathways, designed to foster innovation, character, and academic excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-start text-left group transition-all duration-500"
              onClick={() => navigate('/apply')}
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-black flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                {prog.icon}
              </div>
              
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-accent mb-3">{prog.desc}</div>
                <h4 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors leading-tight">{prog.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{prog.details}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {prog.strength}
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                Learn More <ArrowRight size={14} className="text-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button 
            onClick={() => navigate('/apply')}
            className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-primary/30 hover:bg-accent transition-all duration-500 hover:scale-105"
          >
            Start Your Application
          </button>
        </motion.div>
      </div>
    </section>
  );
}
