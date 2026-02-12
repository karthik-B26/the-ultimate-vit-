import { EventItem, UserProfile } from "@/lib/types";

const skills = ["React", "Next.js", "Node", "Firebase", "ML", "UI/UX", "Docker", "CP", "Python"];
const interests = ["Hackathons", "Open Source", "Product", "AI", "Design", "Fintech", "Robotics"];
const branches = ["CSE", "ECE", "EEE", "Mech", "Civil", "IT"];
const goals = ["Hackathon MVP", "Research Prototype", "Startup Idea", "Placement Project"];
const availability = ["weekdays", "weekends", "night", "flexible"] as const;

export const currentUser: UserProfile = {
  id: "u-0",
  name: "Aarav Sharma",
  branch: "CSE",
  year: 3,
  bio: "Full-stack builder focused on shipping in 48h.",
  skills: ["Next.js", "React", "Firebase", "UI/UX"],
  interests: ["Hackathons", "AI", "Product"],
  availability: "night",
  goal: "Hackathon MVP"
};

export const fakeStudents: UserProfile[] = Array.from({ length: 1000 }).map((_, i) => ({
  id: `u-${i + 1}`,
  name: `Student ${i + 1}`,
  branch: branches[i % branches.length],
  year: (i % 4) + 1,
  bio: "Looking for serious collaborators.",
  skills: [skills[i % skills.length], skills[(i + 2) % skills.length], skills[(i + 5) % skills.length]],
  interests: [interests[i % interests.length], interests[(i + 3) % interests.length]],
  availability: availability[i % availability.length],
  goal: goals[i % goals.length]
}));

export const events: EventItem[] = [
  { id: "e1", title: "VIT HackStorm 2026", date: "2026-02-18", tags: ["hackathon", "ai"], summary: "36-hour campus-wide innovation sprint." },
  { id: "e2", title: "Docker for Builders", date: "2026-02-20", tags: ["workshop"], summary: "Hands-on containerization workshop." },
  { id: "e3", title: "ML Clash", date: "2026-02-24", tags: ["contest", "ml"], summary: "Model tuning challenge hosted by IEEE." }
];
