
import React, { useState } from 'react';
import { AppView, Course, Trainer } from '../types';
import { MOCK_COURSES, MOCK_TRAINERS } from '../constants';
import { getFitnessRecommendation } from '../geminiService';

interface Props {
  onNavigate: (view: AppView) => void;
  onTrainerClick: (trainer: Trainer) => void;
}

const ExploreScreen: React.FC<Props> = ({ onNavigate, onTrainerClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [aiRec, setAiRec] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'HIIT', 'Strength', 'Yoga', 'Cardio'];

  const filteredCourses = MOCK_COURSES.filter(course => 
    (activeCategory === 'All' || course.category === activeCategory) &&
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAskAI = async () => {
    setLoadingAi(true);
    const rec = await getFitnessRecommendation(searchQuery || "What's the best workout for energy?");
    setAiRec(rec);
    setLoadingAi(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="px-6 pt-12 pb-4">
        <h1 className="text-3xl font-bold text-slate-900">Explore</h1>
        <p className="text-slate-500 text-sm">Find your perfect workout</p>
      </header>

      {/* Search Bar */}
      <div className="px-6 pb-4">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">search</span>
          <input 
            type="text" 
            placeholder="Search for courses or equipment..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto px-6 py-2 no-scrollbar">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full whitespace-nowrap font-bold text-sm transition-all ${
              activeCategory === cat ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* AI Assistant Banner */}
      <div className="px-6 py-4">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
              <h4 className="font-bold text-slate-900">FitForge AI Assistant</h4>
            </div>
            <button 
              onClick={handleAskAI}
              disabled={loadingAi}
              className="text-primary font-bold text-xs uppercase hover:underline disabled:opacity-50"
            >
              {loadingAi ? 'Thinking...' : 'Get Suggestion'}
            </button>
          </div>
          {aiRec ? (
            <p className="text-slate-700 text-sm leading-relaxed animate-fadeIn">{aiRec}</p>
          ) : (
            <p className="text-slate-500 text-xs italic">Enter a goal like "I want to lose weight" and tap 'Get Suggestion' for an AI-powered plan.</p>
          )}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-8">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl">Recommended Courses</h3>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Show All</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="group cursor-pointer">
                <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100">
                  <img src={course.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={course.title} />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                      {course.duration}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 ${
                      course.intensity === 'High' ? 'bg-red-500/80' : course.intensity === 'Medium' ? 'bg-orange-500/80' : 'bg-green-500/80'
                    }`}>
                      {course.intensity}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">{course.title}</h4>
                    <p className="text-slate-500 text-sm">{course.level} • {course.category}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Trainers */}
        <section className="pb-4">
          <h3 className="font-bold text-xl mb-4">Expert Trainers</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {MOCK_TRAINERS.map(trainer => (
              <div 
                key={trainer.id} 
                onClick={() => onTrainerClick(trainer)}
                className="min-w-[140px] flex flex-col items-center group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-4 border-white shadow-md group-hover:border-primary transition-all">
                  <img src={trainer.image} className="w-full h-full object-cover" alt={trainer.name} />
                </div>
                <h5 className="font-bold text-sm text-slate-900 text-center">{trainer.name}</h5>
                <p className="text-[10px] text-slate-400 font-bold uppercase text-center">{trainer.experience} yrs exp</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full max-w-md mx-auto p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 flex justify-around items-center z-50">
        <button onClick={() => onNavigate(AppView.DASHBOARD)} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>
        <button onClick={() => onNavigate(AppView.EXPLORE)} className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined fill-1">explore</span>
          <span className="text-[10px] font-bold uppercase">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-bold uppercase">Schedule</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default ExploreScreen;
