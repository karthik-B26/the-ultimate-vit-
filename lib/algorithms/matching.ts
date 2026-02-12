import { TeamMatch, UserProfile } from '@/lib/types';

const overlap = (a: string[], b: string[]) => {
  if (!a.length || !b.length) return 0;
  const set = new Set(a.map((v) => v.toLowerCase()));
  const common = b.filter((v) => set.has(v.toLowerCase())).length;
  return common / Math.max(a.length, b.length);
};

export function getTopMatches(current: UserProfile, pool: UserProfile[], limit = 10): TeamMatch[] {
  return pool
    .filter((p) => p.id !== current.id)
    .map((candidate) => {
      const skillScore = overlap(current.skills, candidate.skills) * 40;
      const interestScore = overlap(current.interests, candidate.interests) * 25;
      const availabilityScore = current.availability === candidate.availability ? 20 : 8;
      const goalScore =
        current.goal.toLowerCase() === candidate.goal.toLowerCase() ? 10 : current.goal && candidate.goal ? 4 : 0;
      const diversityBonus = current.branch !== candidate.branch ? 5 : 0;

      const score = Math.round(skillScore + interestScore + availabilityScore + goalScore + diversityBonus);

      const explanation =
        candidate.skills.length > 0
          ? `Strong ${candidate.skills[0]} + your ${current.skills[0] ?? 'core'} can ship fast.`
          : 'Balanced collaborator fit for your project goals.';

      return { ...candidate, score: Math.min(score, 100), explanation };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
