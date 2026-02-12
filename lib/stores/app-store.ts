import { create } from 'zustand';

interface AppState {
  activeSkill: string;
  setActiveSkill: (skill: string) => void;
  unreadMessages: number;
  setUnreadMessages: (count: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeSkill: 'React',
  setActiveSkill: (activeSkill) => set({ activeSkill }),
  unreadMessages: 3,
  setUnreadMessages: (unreadMessages) => set({ unreadMessages })
}));
