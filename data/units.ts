import type { Unit } from "@/types/learning";

// Units for Thai (th)
// Each unit groups a set of related lessons by topic.
// orderIndex determines display order in the learning path.

export const units: Unit[] = [
    {
        id: "th-unit-1",
        languageCode: "th",
        title: "Greetings & Basics",
        description: "Learn how to say hello, goodbye, and polite words.",
        orderIndex: 1,
        color: "#58CC02",
        totalLessons: 4,
        lessonIds: [
            "th-u1-l1-ai",
            "th-u1-l2-vocab",
            "th-u1-l3-practice",
            "th-u1-l4-quiz",
        ],
    },
    {
        id: "th-unit-2",
        languageCode: "th",
        title: "Numbers & Counting",
        description: "Count from 1 to 100 and use numbers in daily life.",
        orderIndex: 2,
        color: "#FF9600",
        totalLessons: 4,
        lessonIds: [
            "th-u2-l1-ai",
            "th-u2-l2-vocab",
            "th-u2-l3-practice",
            "th-u2-l4-quiz",
        ],
    },
    {
        id: "th-unit-3",
        languageCode: "th",
        title: "Food & Drinks",
        description:
            "Order food, name popular Thai dishes, and talk about meals.",
        orderIndex: 3,
        color: "#CE82FF",
        totalLessons: 4,
        lessonIds: [
            "th-u3-l1-ai",
            "th-u3-l2-vocab",
            "th-u3-l3-practice",
            "th-u3-l4-quiz",
        ],
    },
    {
        id: "th-unit-4",
        languageCode: "th",
        title: "Family & People",
        description:
            "Talk about your family, describe people, and relationships.",
        orderIndex: 4,
        color: "#FF4B4B",
        totalLessons: 4,
        lessonIds: [
            "th-u4-l1-ai",
            "th-u4-l2-vocab",
            "th-u4-l3-practice",
            "th-u4-l4-quiz",
        ],
    },
    {
        id: "th-unit-5",
        languageCode: "th",
        title: "Places & Directions",
        description: "Ask for directions and name common places around town.",
        orderIndex: 5,
        color: "#1CB0F6",
        totalLessons: 4,
        lessonIds: [
            "th-u5-l1-ai",
            "th-u5-l2-vocab",
            "th-u5-l3-practice",
            "th-u5-l4-quiz",
        ],
    },
    {
        id: "th-unit-6",
        languageCode: "th",
        title: "Daily Routines",
        description:
            "Describe your day, time expressions, and common activities.",
        orderIndex: 6,
        color: "#FF86D0",
        totalLessons: 4,
        lessonIds: [
            "th-u6-l1-ai",
            "th-u6-l2-vocab",
            "th-u6-l3-practice",
            "th-u6-l4-quiz",
        ],
    },
];

export const getUnitById = (id: string): Unit | undefined =>
    units.find((u) => u.id === id);

export const getUnitsByLanguage = (languageCode: string): Unit[] =>
    units
        .filter((u) => u.languageCode === languageCode)
        .sort((a, b) => a.orderIndex - b.orderIndex);
