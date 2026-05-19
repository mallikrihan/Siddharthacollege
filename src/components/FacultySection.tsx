"use client";
import React from 'react';
import { THEME } from '../constants';
import { motion } from 'motion/react';
import { 
  Microscope, 
  Beaker, 
  Calculator, 
  Dna, 
  Briefcase, 
  TrendingUp, 
  BarChart, 
  Globe,
  Binary
} from 'lucide-react';

const SUBJECTS = [
  { name: 'Physics', title: 'Mechanics, Electromagnetism & Quantum Studies', icon: <Microscope size={28} /> },
  { name: 'Chemistry', title: 'Organic, Inorganic & Physical Research', icon: <Beaker size={28} /> },
  { name: 'Mathematics', title: 'Advanced Calculus & Analytical Geometry', icon: <Calculator size={28} /> },
  { name: 'Biology', title: 'Genetics, Microbiology & Ecology', icon: <Dna size={28} /> },
  { name: 'Accounting', title: 'Financial Auditing & Corporate Taxation', icon: <Briefcase size={28} /> },
  { name: 'Economics', title: 'Macroeconomics & Global Fiscal Policy', icon: <TrendingUp size={28} /> },
  { name: 'Business Studies', title: 'Strategic Management & Global Marketing', icon: <Globe size={28} /> },
  { name: 'Statistics', title: 'Probability & Computational Analytics', icon: <BarChart size={28} /> }
];

export default function FacultySection() {
  return (
    <section className="py-24 bg-white" id="faculty">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-accent mb-4">Academic Departments</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Specialized Faculty <br/>Areas of Study
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Our departments are led by distinguished academics dedicated to fostering a culture of rigorous inquiry and intellectual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUBJECTS.map((sub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-accent/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                {sub.icon}
              </div>
              <h4 className="text-xl font-serif text-primary mb-3 group-hover:text-accent transition-colors">{sub.name}</h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 h-12 overflow-hidden">{sub.title}</p>
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">Department</span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
