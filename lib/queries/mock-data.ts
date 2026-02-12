import { UserProfile, EventItem } from '@/lib/types';

export const currentUser: UserProfile = {
  id: 'u1',
  name: 'You',
  email: 'you@vit.ac.in',
  branch: 'CSE',
  year: 3,
  skills: ['Backend', 'Firebase', 'TypeScript'],
  interests: ['Hackathons', 'AI', 'Product'],
  availability: 'weekend',
  bio: 'Building full-stack campus tools',
  goal: 'Smart India Hackathon'
};

export const peers: UserProfile[] = Array.from({ length: 20 }).map((_, idx) => ({
  id: `p${idx}`,
  name: `Student ${idx + 1}`,
  email: `student${idx + 1}@vit.ac.in`,
  branch: idx % 2 ? 'ECE' : 'CSE',
  year: (idx % 4) + 1,
  skills: idx % 2 ? ['Frontend', 'UIUX', 'React'] : ['Backend', 'Node', 'Firebase'],
  interests: idx % 3 ? ['Hackathons', 'Web'] : ['AI', 'Product'],
  availability: idx % 2 ? 'weekend' : 'weekday-evening',
  bio: 'Ready to build and ship quickly',
  goal: idx % 3 ? 'Smart India Hackathon' : 'IEEE Xtreme'
}));

export const events: EventItem[] = [
  { id: 'e1', title: 'VIT Buildathon', type: 'hackathon', date: '2026-02-20', tags: ['AI', 'Web'], summary: '48h flagship event.' },
  { id: 'e2', title: 'Docker for Students', type: 'workshop', date: '2026-02-21', tags: ['DevOps'], summary: 'Hands-on workshop.' }
];
