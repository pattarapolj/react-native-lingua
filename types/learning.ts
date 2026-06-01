// ─── Language ────────────────────────────────────────────────────────────────

export type LanguageCode = "th" | "ja";

export interface Language {
    code: LanguageCode;
    name: string;
    nativeName: string;
    flag: string; // URL to flag image
    learners: string; // e.g. "28.4M"
    totalUnits: number;
}

// ─── Activity Types ───────────────────────────────────────────────────────────

export type ActivityType =
    | "vocabulary" // tap the matching word/translation
    | "translation" // translate a sentence
    | "listening" // hear audio and pick answer
    | "speaking" // say the phrase aloud (future)
    | "fill_blank" // fill in the missing word
    | "match_pairs" // match word to translation
    | "multiple_choice" // choose the correct answer
    | "ai_teacher"; // video/audio AI teacher intro

// ─── Vocabulary Item ─────────────────────────────────────────────────────────

export interface VocabItem {
    id: string;
    word: string; // Thai word
    romanized: string; // Romanization (e.g. "sa-wat-dee")
    translation: string; // English meaning
    example: string; // Thai example sentence
    exampleTranslation: string;
    audioKey?: string; // future: key to audio file in assets
}

// ─── Phrase Item ─────────────────────────────────────────────────────────────

export interface PhraseItem {
    id: string;
    phrase: string;
    romanized: string;
    translation: string;
    context: string; // e.g. "Used when greeting someone in the morning"
    audioKey?: string;
}

// ─── Activity ────────────────────────────────────────────────────────────────

export interface Activity {
    id: string;
    type: ActivityType;
    question: string; // prompt shown to the user
    questionTranslation?: string;
    correctAnswer: string;
    wrongAnswers?: string[]; // for multiple_choice / match_pairs
    hint?: string;
    audioKey?: string;
}

// ─── Lesson Goal ─────────────────────────────────────────────────────────────

export interface LessonGoal {
    description: string; // "Learn to greet people in Thai"
    xpReward: number;
    vocabIds: string[]; // vocab introduced in this lesson
    phraseIds: string[]; // phrases introduced in this lesson
}

// ─── AI Teacher Prompt ───────────────────────────────────────────────────────

export interface AITeacherPrompt {
    systemPrompt: string; // system-level instruction for the Vision Agent
    greeting: string; // what the AI teacher says first
    teachingPoints: string[]; // key things the teacher should cover
    closingMessage: string;
}

// ─── Lesson ───────────────────────────────────────────────────────────────────

export type LessonType = "ai_teacher" | "vocabulary" | "practice" | "quiz";

export interface Lesson {
    id: string;
    unitId: string;
    languageCode: LanguageCode;
    type: LessonType;
    title: string;
    description: string;
    orderIndex: number; // position within the unit
    xpReward: number;
    goal: LessonGoal;
    activities: Activity[];
    aiTeacherPrompt?: AITeacherPrompt; // only for ai_teacher lessons
}

// ─── Unit ─────────────────────────────────────────────────────────────────────

export interface Unit {
    id: string;
    languageCode: LanguageCode;
    title: string;
    description: string;
    orderIndex: number;
    color: string; // hex color used in UI
    totalLessons: number;
    lessonIds: string[];
}

// ─── Progress (used by Zustand store later) ───────────────────────────────────

export interface LessonProgress {
    lessonId: string;
    completed: boolean;
    xpEarned: number;
    completedAt?: string; // ISO date string
}

export interface UnitProgress {
    unitId: string;
    lessonsCompleted: number;
    totalLessons: number;
}
