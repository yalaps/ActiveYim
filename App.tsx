
import React, { useState } from 'react';
import { AppView, User, Trainer } from './types';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import DashboardScreen from './screens/DashboardScreen';
import ExploreScreen from './screens/ExploreScreen';
import TrainerProfileScreen from './screens/TrainerProfileScreen';
import { MOCK_TRAINERS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.WELCOME);
  const [user, setUser] = useState<User | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(MOCK_TRAINERS[0]);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentView(AppView.DASHBOARD);
  };

  const navigateToTrainer = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setCurrentView(AppView.TRAINER_PROFILE);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.WELCOME:
        return <WelcomeScreen onStart={() => setCurrentView(AppView.AUTH)} />;
      case AppView.AUTH:
        return <AuthScreen onLogin={handleLogin} onBack={() => setCurrentView(AppView.WELCOME)} />;
      case AppView.DASHBOARD:
        return <DashboardScreen user={user} onNavigate={setCurrentView} />;
      case AppView.EXPLORE:
        return <ExploreScreen onNavigate={setCurrentView} onTrainerClick={navigateToTrainer} />;
      case AppView.TRAINER_PROFILE:
        return (
          <TrainerProfileScreen 
            trainer={selectedTrainer || MOCK_TRAINERS[0]} 
            onBack={() => setCurrentView(AppView.EXPLORE)} 
          />
        );
      default:
        return <WelcomeScreen onStart={() => setCurrentView(AppView.AUTH)} />;
    }
  };

  return (
    <div className="flex justify-center bg-slate-900 min-h-screen">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
