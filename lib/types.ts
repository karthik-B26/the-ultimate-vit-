export type Availability = "weekdays" | "weekends" | "night" | "flexible";

export type UserProfile = {
  id: string;
  name: string;
  branch: string;
  year: number;
  bio: string;
  skills: string[];
  interests: string[];
  availability: Availability;
  goal: string;
};

export type MatchResult = {
  user: UserProfile;
  score: number;
  breakdown: {
    skills: number;
    interests: number;
    availability: number;
    goal: number;
    diversity: number;
  };
  explanation: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
};
