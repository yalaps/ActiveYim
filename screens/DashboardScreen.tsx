
import React from 'react';
import { User, AppView } from '../types';

interface Props {
  user: User | null;
  onNavigate: (view: AppView) => void;
}

const DashboardScreen: React.FC<Props> = ({ user, onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-[#f6f8f7]">
      {/* Header */}
      <header className="p-6 pb-2 pt-12 flex justify-between items-start">
        <div className="flex gap-4 items-center">
          <img src={user?.avatar} alt="Avatar" className="w-14 h-14 rounded-full border-4 border-white shadow-lg" />
          <div>
            <h2 className="text-xl font-bold text-slate-900">Hello, {user?.name}!</h2>
            <p className="text-slate-500 text-sm">Ready to crush it today?</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100">
          <span className="material-symbols-outlined text-slate-500">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      {/* Membership Card */}
      <section className="px-6 py-4">
        <div className="bg-slate-900 rounded-[2rem] p-6 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-8xl">verified_user</span>
          </div>
          <div className="flex justify-between items-start mb-8">
            <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">
              {user?.membershipTier} Member
            </div>
            <span className="material-symbols-outlined text-primary">sensors</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <p className="text-lg font-bold">{user?.membershipStatus}</p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase mb-1">Expires On</p>
                <p className="text-sm font-medium">{user?.expiryDate}</p>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <span className="material-symbols-outlined text-slate-900 text-4xl">qr_code_2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="px-6 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary mb-2">local_fire_department</span>
            <span className="text-lg font-bold">1.2k</span>
            <span className="text-[10px] uppercase text-slate-400 font-bold">Kcal</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-blue-500 mb-2">schedule</span>
            <span className="text-lg font-bold">4.5h</span>
            <span className="text-[10px] uppercase text-slate-400 font-bold">Time</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-orange-500 mb-2">step</span>
            <span className="text-lg font-bold">8.4k</span>
            <span className="text-[10px] uppercase text-slate-400 font-bold">Steps</span>
          </div>
        </div>
      </section>

      {/* Quick Actions / Schedule */}
      <section className="px-6 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-slate-900">Upcoming Session</h3>
          <button className="text-primary text-sm font-bold">View Calendar</button>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-50 rounded-xl flex flex-col items-center justify-center border border-slate-100">
            <span className="text-primary font-bold">14</span>
            <span className="text-[10px] uppercase text-slate-400 font-bold">May</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900">Power Lifting 101</h4>
            <div className="flex items-center gap-2 text-slate-500 text-xs mt-1">
              <span className="material-symbols-outlined text-[14px]">person</span>
              <span>with Alex Johnson</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs mt-1">
              <span className="material-symbols-outlined text-[14px]">nest_clock_farsight_analog</span>
              <span>08:30 AM (60 min)</span>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Bottom Nav */}
      <nav className="p-4 bg-white border-t border-slate-100 flex justify-around items-center">
        <button onClick={() => onNavigate(AppView.DASHBOARD)} className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined fill-1">grid_view</span>
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>
        <button onClick={() => onNavigate(AppView.EXPLORE)} className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">explore</span>
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

export default DashboardScreen;
