export type Availability = 'weekday-evening' | 'weekend' | 'flexible';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  branch: string;
  year: number;
  skills: string[];
  interests: string[];
  availability: Availability;
  bio: string;
  goal: string;
}

export interface TeamMatch extends UserProfile {
  score: number;
  explanation: string;
}

export interface EventItem {
  id: string;
  title: string;
  type: 'hackathon' | 'workshop' | 'contest' | 'news';
  date: string;
  tags: string[];
  summary: string;
}
