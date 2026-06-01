import type { Language } from "@/types/learning";

export const languages: Language[] = [
    {
        code: "th",
        name: "Thai",
        nativeName: "ภาษาไทย",
        flag: "https://flagcdn.com/w320/th.png",
        learners: "5.1M",
        totalUnits: 6,
    },
    {
        code: "ja",
        name: "Japanese",
        nativeName: "日本語",
        flag: "https://flagcdn.com/w320/jp.png",
        learners: "12.3M",
        totalUnits: 8,
    },
];

export const getLanguageByCode = (code: string): Language | undefined =>
    languages.find((l) => l.code === code);
