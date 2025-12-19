
import React, { useState } from 'react';
import { User } from '../types';

interface Props {
  onLogin: (user: User) => void;
  onBack: () => void;
}

const AuthScreen: React.FC<Props> = ({ onLogin, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      name: email.split('@')[0] || 'Member',
      membershipStatus: 'Active',
      membershipTier: 'Pro',
      expiryDate: '2025-12-31',
      avatar: `https://i.pravatar.cc/150?u=${email}`
    });
  };

  return (
    <div className="flex flex-col min-h-screen p-8 bg-slate-50">
      <button onClick={onBack} className="self-start mb-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-900">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          {isLogin ? 'Welcome Back!' : 'Join the Forge'}
        </h2>
        <p className="text-slate-500 mb-8">
          {isLogin ? 'Log in to continue your journey' : 'Create an account to start training'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Password</label>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 rounded-2xl font-bold mt-6 shadow-xl transition-all"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <p className="text-slate-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-primary font-bold hover:underline"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
          
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-50 px-2 text-slate-400">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
               <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
               <span className="font-bold text-sm">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
               <span className="material-symbols-outlined text-[18px]">apple</span>
               <span className="font-bold text-sm">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
