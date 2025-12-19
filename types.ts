
export enum AppView {
  WELCOME = 'welcome',
  AUTH = 'auth',
  DASHBOARD = 'dashboard',
  EXPLORE = 'explore',
  TRAINER_PROFILE = 'trainer_profile'
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  sessions: number;
  rating: number;
  bio: string;
  image: string;
  skills: string[];
  price: number;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category: 'HIIT' | 'Strength' | 'Yoga' | 'Cardio';
  image: string;
  trainerId: string;
  intensity: 'Low' | 'Medium' | 'High';
}

export interface User {
  name: string;
  membershipStatus: 'Active' | 'Expired' | 'Pending';
  membershipTier: 'Pro' | 'Basic' | 'Elite';
  expiryDate: string;
  avatar: string;
}
