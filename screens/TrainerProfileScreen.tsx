
import React from 'react';
import { Trainer } from '../types';
import { MOCK_COURSES } from '../constants';

interface Props {
  trainer: Trainer;
  onBack: () => void;
}

const TrainerProfileScreen: React.FC<Props> = ({ trainer, onBack }) => {
  const trainerCourses = MOCK_COURSES.filter(c => c.trainerId === trainer.id);

  return (
    <div className="flex flex-col h-screen bg-[#102219]">
      {/* Hero Header */}
      <header className="relative h-[45vh] w-full">
        <div className="absolute top-0 left-0 w-full z-20 flex justify-between p-6 pt-12">
          <button 
            onClick={onBack}
            className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all active:scale-90"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white flex items-center justify-center">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white flex items-center justify-center">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full">
          <img src={trainer.image} className="w-full h-full object-cover" alt={trainer.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102219] via-transparent to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 p-8 z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-black text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">Certified Pro</span>
            <div className="flex items-center gap-1 text-primary">
               <span className="material-symbols-outlined text-[16px] fill-1">verified</span>
               <span className="text-[10px] font-bold uppercase tracking-wider">Expert</span>
            </div>
          </div>
          <h1 className="text-4xl font-black text-white leading-tight">{trainer.name}</h1>
          <p className="text-slate-400 font-medium text-lg">{trainer.specialty}</p>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto px-6 pt-6 pb-32">
        {/* Stats */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-white text-xl font-black">{trainer.experience}</p>
            <p className="text-slate-500 text-[10px] font-bold uppercase">Years Exp.</p>
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-white text-xl font-black">{trainer.sessions}+</p>
            <p className="text-slate-500 text-[10px] font-bold uppercase">Sessions</p>
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1">
              <p className="text-white text-xl font-black">{trainer.rating}</p>
              <span className="material-symbols-outlined text-primary text-[16px] fill-1">star</span>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase">Rating</p>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-8">
          <h3 className="text-white font-bold text-lg mb-2">About {trainer.name.split(' ')[0]}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{trainer.bio}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {trainer.skills.map(skill => (
              <span key={skill} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs text-slate-300 font-bold">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section>
          <h3 className="text-white font-bold text-lg mb-4">Recommended Courses</h3>
          <div className="space-y-4">
            {trainerCourses.map(course => (
              <div key={course.id} className="bg-white/5 rounded-2xl p-3 border border-white/5 flex gap-4 items-center">
                <img src={course.image} className="w-20 h-20 rounded-xl object-cover" alt={course.title} />
                <div className="flex-1">
                  <h4 className="text-white font-bold text-sm mb-1">{course.title}</h4>
                  <div className="flex gap-3 text-[10px] text-slate-400 font-bold uppercase">
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-primary/20 text-primary text-[9px] px-2 py-0.5 rounded uppercase font-black">{course.category}</span>
                  </div>
                </div>
                <button className="text-primary">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 w-full max-w-md mx-auto p-6 bg-[#102219]/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-between z-50">
        <div>
          <p className="text-slate-500 text-xs font-bold uppercase">Price per session</p>
          <div className="flex items-baseline gap-1">
            <span className="text-white text-3xl font-black">${trainer.price}</span>
            <span className="text-slate-400 text-sm">/ hr</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">chat</span>
          </button>
          <button className="bg-primary hover:bg-emerald-400 text-black px-8 h-14 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(25,240,133,0.3)] transition-all active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfileScreen;
