import React from 'react';
import { THEME, CONTACT } from '../constants';
import { motion } from 'motion/react';
import { 
  FileDown, 
  Send, 
  ClipboardCheck, 
  HelpCircle, 
  ArrowRight,
  Calendar,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function ApplyPage() {
  const images = [
    "https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_091627-1536x710.jpg",
    "https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_092008-1536x710.jpg",
    "https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095921-2048x946.jpg"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Hero Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Apply Now"
          />
        </div>
        <div className="relative z-10 text-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md mb-6">
              <ClipboardCheck size={14} className="text-accent" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">Admissions 2026-27</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight md:leading-[1.1]">
              Apply & <span className="italic text-accent underline decoration-white/10 underline-offset-8">Admissions</span>
            </h1>
            <p className="text-white/70 max-w-xl mx-auto font-sans text-xs md:text-base leading-relaxed tracking-wide">
              Your journey to academic excellence and character building begins with a single step. Join the Siddhartha community today.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <div className="max-w-[1400px] mx-auto px-6 pb-32">
        {/* Campus Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -translate-y-8 md:-translate-y-12 relative z-20">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-48 md:h-64 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 border-white"
            >
              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Campus ${i + 1}`} />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mt-8 md:mt-12">
          {/* Main Info */}
          <div className="lg:col-span-8">
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 border-l-4 border-accent pl-6">How to Apply</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white text-accent flex items-center justify-center mb-6 shadow-sm">
                    <Send size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Online Application</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    The fastest way to join us. Fill out our digital form, upload your documents, and pay the application fee securely.
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                    Start Online Process <ArrowRight size={14} />
                  </button>
                </div>

                <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white text-accent flex items-center justify-center mb-6 shadow-sm">
                    <FileDown size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Offline Application</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    Prefer the traditional way? Download our official application form, fill it manually, and visit our campus office.
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                    Download Form <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 border-l-4 border-accent pl-6">Admission Requirements</h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  "Original Transfer Certificate (TC)",
                  "Original Marks Card of the previous qualifying examination",
                  "Recent Passport size photographs (5 copies)",
                  "Aadhar Card copy of the student and parents",
                  "Caste and Income Certificate (if applicable)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="text-slate-600 text-sm md:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] rounded-full" />
              <h3 className="text-2xl font-serif mb-6 relative z-10">Admission Helpline</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Calendar size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-50">Office Hours</div>
                    <div className="font-bold">Mon - Sat, 9am - 5pm</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-accent font-black text-2xl tracking-tight leading-none">{CONTACT.phone}</span>
                  <span className="text-white/60 text-xs truncate">{CONTACT.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100">
              <HelpCircle className="text-accent mb-6" size={32} />
              <h3 className="text-xl font-bold text-primary mb-4">Have Questions?</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Not sure which program to choose? Our counselors are here to help you find the right path.
              </p>
              <button className="w-full py-4 bg-white text-primary border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all">
                Speak to a Counselor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
