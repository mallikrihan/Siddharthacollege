import React from 'react';
import { THEME } from '../constants';
import VisionMission from '../components/VisionMission';
import { motion } from 'motion/react';
import {
  Library,
  Dribbble,
  Monitor,
  Home,
  Bus,
  Coffee,
  Trophy,
  GraduationCap,
  Quote,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const FACILITIES = [
  { icon: <Library size={32} />, name: 'Central Library', desc: 'A vast collection of academic journals and digital resources for comprehensive research.' },
  { icon: <Dribbble size={32} />, name: 'Sports Complex', desc: 'Professional-grade facilities for athletic development and competitive sports training.' },
  { icon: <Monitor size={32} />, name: 'Advanced Tech Lab', desc: 'Equipped with the latest computing systems to foster technical innovation and digital literacy.' },
  { icon: <Home size={32} />, name: 'Premium Hostel', desc: 'Safe, comfortable living spaces designed to create a sense of belonging and focused study.' },
  { icon: <Bus size={32} />, name: 'Secure Transport', desc: 'A reliable fleet of modern buses ensuring safe and timely transit for all students.' },
  { icon: <Coffee size={32} />, name: 'Modern Cafeteria', desc: 'Hygienic and nutritious meal options served in a clean, contemporary social setting.' }
];

const ACHIEVEMENTS = [
  { type: 'Academic Excellence', title: 'PUC Board Distinction', desc: 'Consistency in producing state-level toppers and 100% distinction rates.' },
  { type: 'Athletic Mastery', title: 'State Championships', desc: 'Dominance in volleyball and kabaddi at the state-wide institutional games.' },
  { type: 'Cultural Impact', title: 'Artistic Laurels', desc: 'First-place honors in district-level folk arts and theatrical competitions.' }
];

const ALUMNI_COLLEGES = [
  'MBBS - 20', 'BAMS - 150', 'BDS - 15', 'NITK - 9', 'IIT - 3', 'RV - 15', 'NIE - 20', 'JCE - 16'
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-12 pt-28 pb-8 bg-white">
        <section className="relative h-[60vh] rounded-[2rem] md:rounded-[3rem] flex items-center justify-center overflow-hidden bg-primary shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover ken-burns"
              alt="Campus"
            />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                A Legacy of <span className="italic text-accent">Excellence</span>
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-white/80 font-sans tracking-wide max-w-2xl mx-auto leading-relaxed">
                Pioneering educational standards in Bhatkal since 2011, fostering innovation and character.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/0 to-primary/40" />
        </section>
      </div>

      {/* Story Section */}
      <section id="story" className="py-20 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <h2 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-accent mb-4">Our History</h2>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
                Shaping Minds <br className="hidden md:block" />Since 2009
              </h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                Siddhartha Education Trust (Reg.), Bhatkal, was established in August 2009 under the visionary leadership of Captain K.R. Naik. A decorated veteran of the Indian Army, Captain Naik brought military discipline and academic rigor to the heart of Karnataka's education landscape.
              </p>
              <div className="flex items-center gap-4 p-5 md:p-8 bg-slate-50 rounded-2xl border-l-4 border-accent text-left">
                <ShieldCheck className="text-accent shrink-0" size={28} />
                <p className="text-primary font-black text-[10px] md:text-xs tracking-widest leading-relaxed uppercase">
                  NCERT AFFILIATED INSTITUTION COMMITTED TO NATIONAL STANDARDS
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative mx-4 sm:mx-8 lg:mx-0 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl h-[220px] sm:h-[350px] md:h-[500px]"
            >
              <img
                src="https://siddhartha-edu.in/wp-content/uploads/2025/12/20241218_095921-2048x946.jpg"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                alt="Founder"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Integration */}
      <VisionMission />

      {/* Leadership Messages */}
      <section className="py-20 md:py-32 bg-slate-50 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-accent mb-4">Leadership</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-primary">Voices of Vision</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-5 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-slate-200/50 relative overflow-hidden group"
            >
              <Quote className="absolute top-4 right-4 sm:top-10 sm:right-10 text-slate-100 group-hover:text-accent/10 transition-colors" size={80} />
              <div className="relative z-10">
                <h4 className="text-2xl font-serif text-primary mb-6">Founder's Message</h4>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 italic leading-relaxed mb-6 sm:mb-10">
                  "Our goal is to build an institution where every student feels valued and empowered. We believe in nurturing the unique talents of each individual to create leaders of tomorrow."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-accent" />
                  <span className="font-bold text-primary uppercase tracking-widest text-xs">Captain K.R Naik</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-5 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-slate-200/50 relative overflow-hidden group"
            >
              <Quote className="absolute top-4 right-4 sm:top-10 sm:right-10 text-slate-100 group-hover:text-accent/10 transition-colors" size={80} />
              <div className="relative z-10">
                <h4 className="text-2xl font-serif text-primary mb-6">Principal's Message</h4>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 italic leading-relaxed mb-6 sm:mb-10">
                  "Education at Siddhartha is not just about textbooks; it's about life skills, character, and curiosity. We invite you to join our vibrant community of learners."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-accent" />
                  <span className="font-bold text-primary uppercase tracking-widest text-xs">Smt. Archana U</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section id="facilities" className="py-20 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-accent mb-4">Infrastructure</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-primary">World-Class Facilities</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-[1400px] mx-auto">
          {FACILITIES.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 sm:p-8 lg:p-10 mx-2 sm:mx-0 rounded-[2rem] sm:rounded-3xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-black flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                {f.icon}
              </div>
              <h4 className="text-xl sm:text-xl font-serif text-primary mb-4">{f.name}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section - RE-DESIGNED FOR MOBILE */}
      <section id="achievements" className="py-20 md:py-32 bg-primary px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-accent/80 mb-4">Laurels</h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">Our Proud Achievements</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 lg:p-12 mx-2 sm:mx-0 rounded-[2rem] sm:rounded-[2.5rem] text-center group hover:bg-white/10 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/20 text-accent mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Trophy size={32} className="md:w-10 md:h-10" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-accent mb-3">{a.type}</div>
                <h4 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-accent transition-colors">{a.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed max-w-[280px] mx-auto">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section - RE-DESIGNED FOR MOBILE */}
      <section id="alumni" className="py-20 md:py-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 text-accent mb-10"
          >
            <GraduationCap size={56} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 tracking-tight">Our Alumni Network</h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-16 max-w-2xl mx-auto">
            The foundation for success. Our graduates have secured admissions in premier medical and technical institutions across the country.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {ALUMNI_COLLEGES.map((college, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-4 sm:px-8 py-3 sm:py-4 rounded-2xl border border-slate-100 shadow-sm text-primary font-black uppercase tracking-widest text-[10px] sm:text-[11px] md:text-xs flex items-center gap-2"
              >
                <ChevronRight size={14} className="text-accent" />
                {college}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Team Placeholder */}
      <section id="team" className="py-20 bg-slate-50 px-6 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
            © {new Date().getFullYear()} Siddhartha Institution Bhatkal • Excellence in Education
          </p>
        </div>
      </section>
    </div>
  );
}
