
import { Trainer, Course } from './types';

export const MOCK_TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Alex Johnson',
    specialty: 'HIIT & Strength Specialist',
    experience: 5,
    sessions: 342,
    rating: 4.9,
    bio: 'Specializing in functional strength and rehabilitation. My goal is to help you unlock your body\'s full potential through scientifically backed training methods.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?w=800&auto=format&fit=crop&q=60',
    skills: ['Functional Training', 'Rehab', 'Nutrition'],
    price: 60
  },
  {
    id: 't2',
    name: 'Sarah Chen',
    specialty: 'Yoga & Mindfulness',
    experience: 8,
    sessions: 1200,
    rating: 5.0,
    bio: 'Finding balance through movement. I help professionals manage stress while building core stability and flexibility.',
    image: 'https://images.unsplash.com/photo-1518611012118-2960c8badce4?w=800&auto=format&fit=crop&q=60',
    skills: ['Vinyasa', 'Meditation', 'Pilates'],
    price: 75
  }
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Morning HIIT Blast',
    duration: '45 min',
    level: 'Advanced',
    category: 'HIIT',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831da60a?w=800&auto=format&fit=crop&q=60',
    trainerId: 't1',
    intensity: 'High'
  },
  {
    id: 'c2',
    title: 'Core & Stability',
    duration: '30 min',
    level: 'All Levels',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60',
    trainerId: 't1',
    intensity: 'Medium'
  },
  {
    id: 'c3',
    title: 'Sunrise Flow',
    duration: '60 min',
    level: 'Beginner',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60',
    trainerId: 't2',
    intensity: 'Low'
  }
];
