
import React from 'react';

interface Props {
  onStart: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-end p-8 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 space-y-6 mb-12 animate-fadeIn">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-8 bg-primary rounded-full"></span>
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Transform Your Life</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Forge Your <br />
            <span className="text-primary">Best Self</span>
          </h1>
          <p className="text-slate-300 text-lg">
            Expert trainers, world-class equipment, and a community that pushes you further.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span className="material-symbols-outlined text-primary mb-2">fitness_center</span>
            <h3 className="font-bold text-sm uppercase">Smart Gear</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span className="material-symbols-outlined text-primary mb-2">groups</span>
            <h3 className="font-bold text-sm uppercase">Elite Coaching</h3>
          </div>
        </div>

        <button 
          onClick={onStart}
          className="w-full bg-primary hover:bg-emerald-400 text-black py-5 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(25,240,133,0.3)]"
        >
          Get Started
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
