import { currentUser } from "@/lib/mockData";
import { create } from "zustand";

type AppState = {
  unreadMessages: number;
  activeTeams: number;
  profileCompletion: number;
  markMessageRead: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  unreadMessages: 7,
  activeTeams: 19,
  profileCompletion: Math.round(((currentUser.skills.length + currentUser.interests.length) / 10) * 100),
  markMessageRead: () => set((s) => ({ unreadMessages: Math.max(0, s.unreadMessages - 1) }))
}));
