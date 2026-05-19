"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Calendar, Trophy, Handshake, Award } from 'lucide-react';
import { THEME } from '../constants';

const STATS = [
  { label: 'Happy Students', value: '1710+', icon: Users },
  { label: 'Expert Faculty', value: '45+', icon: GraduationCap },
  { label: 'Years of Excellence', value: '12+', icon: Calendar },
  { label: 'Successful Graduates', value: '5000+', icon: Trophy },
  { label: 'Partnerships', value: '12+', icon: Handshake },
  { label: 'Awards Won', value: '35+', icon: Award }
];

export default function StatsBar() {
  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 text-black group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-slate-900 tracking-tight font-serif">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-accent transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .font-serif { font-family: var(--font-serif); }
      `}</style>
    </section>
  );
}

