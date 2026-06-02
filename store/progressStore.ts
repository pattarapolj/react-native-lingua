import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const PROGRESS_STORAGE_KEY = "progress-store";

interface ProgressState {
    // Daily progress
    dailyXP: number;
    dailyGoal: number;
    streak: number;

    // Completed lessons
    completedLessons: Set<string>;

    // Actions
    addXP: (amount: number) => void;
    completeLesson: (lessonId: string) => void;
    resetDailyProgress: () => void;
    incrementStreak: () => void;
}

export const useProgressStore = create<ProgressState>()(
    persist(
        (set) => ({
            dailyXP: 15,
            dailyGoal: 20,
            streak: 12,
            completedLessons: new Set(["th-u1-l1-ai"]),

            addXP: (amount) =>
                set((state) => ({
                    dailyXP: Math.min(state.dailyXP + amount, state.dailyGoal),
                })),

            completeLesson: (lessonId) =>
                set((state) => ({
                    completedLessons: new Set([
                        ...state.completedLessons,
                        lessonId,
                    ]),
                })),

            resetDailyProgress: () =>
                set(() => ({
                    dailyXP: 0,
                })),

            incrementStreak: () =>
                set((state) => ({
                    streak: state.streak + 1,
                })),
        }),
        {
            name: PROGRESS_STORAGE_KEY,
            storage: createJSONStorage(() => AsyncStorage),
            // Convert Set to Array for storage
            partialize: (state) => ({
                ...state,
                completedLessons: Array.from(state.completedLessons),
            }),
            merge: (persistedState: any, currentState) => ({
                ...currentState,
                ...persistedState,
                completedLessons: new Set(
                    persistedState?.completedLessons || [],
                ),
            }),
        },
    ),
);
