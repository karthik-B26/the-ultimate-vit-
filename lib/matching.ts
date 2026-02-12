import { MatchResult, UserProfile } from "@/lib/types";

const overlap = (a: string[], b: string[]) => {
  if (!a.length || !b.length) return 0;
  const sa = new Set(a.map((x) => x.toLowerCase()));
  const sb = new Set(b.map((x) => x.toLowerCase()));
  const hit = [...sa].filter((x) => sb.has(x)).length;
  const denom = Math.max(sa.size, sb.size);
  return hit / denom;
};

export function computeMatches(current: UserProfile, pool: UserProfile[]): MatchResult[] {
  return pool
    .filter((u) => u.id !== current.id)
    .map((candidate) => {
      const skills = overlap(current.skills, candidate.skills) * 40;
      const interests = overlap(current.interests, candidate.interests) * 25;
      const availability = current.availability === candidate.availability ? 20 : 6;
      const goal = current.goal === candidate.goal ? 10 : 2;
      const diversity = current.branch !== candidate.branch ? 5 : 0;
      const score = skills + interests + availability + goal + diversity;
      const strongest =
        skills >= interests
          ? `Strong skill complement in ${candidate.skills.slice(0, 2).join(" & ")}`
          : `Shared interests in ${candidate.interests.slice(0, 2).join(" + ")}`;
      return {
        user: candidate,
        score,
        breakdown: { skills, interests, availability, goal, diversity },
        explanation: `${strongest}. Great for ${candidate.goal.toLowerCase()} builds.`
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}
