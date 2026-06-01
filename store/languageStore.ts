import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { LanguageCode } from "@/types/learning";

const LANGUAGE_STORAGE_KEY = "language-store";

interface LanguageState {
    selectedLanguage: LanguageCode | null;
    setSelectedLanguage: (code: LanguageCode) => void;
    clearSelectedLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            selectedLanguage: null,
            setSelectedLanguage: (code) => set({ selectedLanguage: code }),
            clearSelectedLanguage: () => set({ selectedLanguage: null }),
        }),
        {
            name: LANGUAGE_STORAGE_KEY,
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
