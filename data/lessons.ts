import type { Lesson, PhraseItem, VocabItem } from "@/types/learning";

// ─────────────────────────────────────────────────────────────────────────────
// SHARED VOCABULARY
// ─────────────────────────────────────────────────────────────────────────────

export const vocab: Record<string, VocabItem> = {
    // ── Unit 1: Greetings & Basics ──────────────────────────────────────────
    sawatdee: {
        id: "sawatdee",
        word: "สวัสดี",
        romanized: "sa-wat-dee",
        translation: "Hello / Goodbye",
        example: "สวัสดีครับ ผมชื่อโจ",
        exampleTranslation: "Hello, my name is Joe.",
    },
    krap: {
        id: "krap",
        word: "ครับ",
        romanized: "krap",
        translation: "Polite particle (male)",
        example: "ขอบคุณครับ",
        exampleTranslation: "Thank you (said by a male).",
    },
    ka: {
        id: "ka",
        word: "ค่ะ / คะ",
        romanized: "ka",
        translation: "Polite particle (female)",
        example: "ขอบคุณค่ะ",
        exampleTranslation: "Thank you (said by a female).",
    },
    khobkhun: {
        id: "khobkhun",
        word: "ขอบคุณ",
        romanized: "khob-khun",
        translation: "Thank you",
        example: "ขอบคุณมากค่ะ",
        exampleTranslation: "Thank you very much.",
    },
    khoThot: {
        id: "khoThot",
        word: "ขอโทษ",
        romanized: "kho-thot",
        translation: "Sorry / Excuse me",
        example: "ขอโทษครับ ไม่เข้าใจ",
        exampleTranslation: "Sorry, I don't understand.",
    },
    chai: {
        id: "chai",
        word: "ใช่",
        romanized: "chai",
        translation: "Yes / Correct",
        example: "ใช่ครับ",
        exampleTranslation: "Yes, that's correct.",
    },
    maiChai: {
        id: "maiChai",
        word: "ไม่ใช่",
        romanized: "mai chai",
        translation: "No / Not correct",
        example: "ไม่ใช่ค่ะ",
        exampleTranslation: "No, that's not right.",
    },
    sabaiDee: {
        id: "sabaiDee",
        word: "สบายดี",
        romanized: "sa-bai-dee",
        translation: "Fine / Doing well",
        example: "สบายดีไหมครับ? – สบายดีครับ",
        exampleTranslation: "How are you? – I'm fine.",
    },

    // ── Unit 2: Numbers & Counting ──────────────────────────────────────────
    nueng: {
        id: "nueng",
        word: "หนึ่ง",
        romanized: "nueng",
        translation: "One (1)",
        example: "ผมมีหนึ่งน้องสาว",
        exampleTranslation: "I have one younger sister.",
    },
    song: {
        id: "song",
        word: "สอง",
        romanized: "song",
        translation: "Two (2)",
        example: "ขอสองอัน",
        exampleTranslation: "Give me two pieces.",
    },
    sam: {
        id: "sam",
        word: "สาม",
        romanized: "sam",
        translation: "Three (3)",
        example: "สามวันที่แล้ว",
        exampleTranslation: "Three days ago.",
    },
    see: {
        id: "see",
        word: "สี่",
        romanized: "see",
        translation: "Four (4)",
        example: "นาฬิกาตีสี่",
        exampleTranslation: "It's four o'clock.",
    },
    ha: {
        id: "ha",
        word: "ห้า",
        romanized: "ha",
        translation: "Five (5)",
        example: "ห้าบาท",
        exampleTranslation: "Five baht.",
    },
    hok: {
        id: "hok",
        word: "หก",
        romanized: "hok",
        translation: "Six (6)",
        example: "หกโมงเช้า",
        exampleTranslation: "Six in the morning.",
    },
    jet: {
        id: "jet",
        word: "เจ็ด",
        romanized: "jet",
        translation: "Seven (7)",
        example: "เจ็ดวันในหนึ่งสัปดาห์",
        exampleTranslation: "Seven days in a week.",
    },
    paet: {
        id: "paet",
        word: "แปด",
        romanized: "paet",
        translation: "Eight (8)",
        example: "แปดชั่วโมง",
        exampleTranslation: "Eight hours.",
    },
    gao: {
        id: "gao",
        word: "เก้า",
        romanized: "gao",
        translation: "Nine (9)",
        example: "เก้าโมงตรง",
        exampleTranslation: "Exactly nine o'clock.",
    },
    sip: {
        id: "sip",
        word: "สิบ",
        romanized: "sip",
        translation: "Ten (10)",
        example: "สิบบาทเท่านั้น",
        exampleTranslation: "Only ten baht.",
    },

    // ── Unit 3: Food & Drinks ───────────────────────────────────────────────
    khaoPadGai: {
        id: "khaoPadGai",
        word: "ข้าวผัดไก่",
        romanized: "khao-pad-gai",
        translation: "Chicken fried rice",
        example: "ขอข้าวผัดไก่หนึ่งจานครับ",
        exampleTranslation: "One plate of chicken fried rice, please.",
    },
    padThai: {
        id: "padThai",
        word: "ผัดไทย",
        romanized: "pad-thai",
        translation: "Pad Thai",
        example: "ผัดไทยอร่อยมาก",
        exampleTranslation: "Pad Thai is very delicious.",
    },
    tomYum: {
        id: "tomYum",
        word: "ต้มยำ",
        romanized: "tom-yum",
        translation: "Tom Yum soup",
        example: "ต้มยำกุ้งเผ็ดมาก",
        exampleTranslation: "Tom Yum shrimp is very spicy.",
    },
    namPlao: {
        id: "namPlao",
        word: "น้ำเปล่า",
        romanized: "nam-plao",
        translation: "Plain water",
        example: "ขอน้ำเปล่าหนึ่งแก้วค่ะ",
        exampleTranslation: "One glass of water, please.",
    },
    oliang: {
        id: "oliang",
        word: "โอเลี้ยง",
        romanized: "o-liang",
        translation: "Thai iced black coffee",
        example: "อากาศร้อน ขอโอเลี้ยงครับ",
        exampleTranslation: "It's hot, I'll have an iced coffee.",
    },
    aroi: {
        id: "aroi",
        word: "อร่อย",
        romanized: "a-roi",
        translation: "Delicious",
        example: "อาหารไทยอร่อยมากค่ะ",
        exampleTranslation: "Thai food is very delicious.",
    },
    phet: {
        id: "phet",
        word: "เผ็ด",
        romanized: "phet",
        translation: "Spicy",
        example: "ไม่ขอเผ็ดนะครับ",
        exampleTranslation: "Not spicy for me, please.",
    },
    wan: {
        id: "wan",
        word: "หวาน",
        romanized: "wan",
        translation: "Sweet",
        example: "ขอหวานน้อยหน่อยค่ะ",
        exampleTranslation: "A little less sweet, please.",
    },

    // ── Unit 4: Family & People ─────────────────────────────────────────────
    pho: {
        id: "pho",
        word: "พ่อ",
        romanized: "pho",
        translation: "Father",
        example: "พ่อผมเป็นหมอ",
        exampleTranslation: "My father is a doctor.",
    },
    mae: {
        id: "mae",
        word: "แม่",
        romanized: "mae",
        translation: "Mother",
        example: "แม่ทำอาหารเก่งมาก",
        exampleTranslation: "My mother is a great cook.",
    },
    phiChai: {
        id: "phiChai",
        word: "พี่ชาย",
        romanized: "phi-chai",
        translation: "Older brother",
        example: "พี่ชายผมอยู่กรุงเทพฯ",
        exampleTranslation: "My older brother lives in Bangkok.",
    },
    phiSao: {
        id: "phiSao",
        word: "พี่สาว",
        romanized: "phi-sao",
        translation: "Older sister",
        example: "พี่สาวฉันสวยมาก",
        exampleTranslation: "My older sister is very beautiful.",
    },
    nongChai: {
        id: "nongChai",
        word: "น้องชาย",
        romanized: "nong-chai",
        translation: "Younger brother",
        example: "น้องชายฉันชอบเล่นฟุตบอล",
        exampleTranslation: "My younger brother likes to play football.",
    },
    nongSao: {
        id: "nongSao",
        word: "น้องสาว",
        romanized: "nong-sao",
        translation: "Younger sister",
        example: "น้องสาวฉันน่ารักมาก",
        exampleTranslation: "My younger sister is very cute.",
    },
    phuanBan: {
        id: "phuanBan",
        word: "เพื่อน",
        romanized: "phuan",
        translation: "Friend",
        example: "เพื่อนฉันพูดภาษาไทยได้",
        exampleTranslation: "My friend can speak Thai.",
    },
    luk: {
        id: "luk",
        word: "ลูก",
        romanized: "luk",
        translation: "Child / Children",
        example: "คุณมีลูกกี่คน",
        exampleTranslation: "How many children do you have?",
    },

    // ── Unit 5: Places & Directions ─────────────────────────────────────────
    rongPhayaban: {
        id: "rongPhayaban",
        word: "โรงพยาบาล",
        romanized: "rong-pha-ya-ban",
        translation: "Hospital",
        example: "โรงพยาบาลอยู่ที่ไหนครับ",
        exampleTranslation: "Where is the hospital?",
    },
    rongReem: {
        id: "rongReem",
        word: "โรงแรม",
        romanized: "rong-raem",
        translation: "Hotel",
        example: "โรงแรมใกล้ที่นี่ไหมค่ะ",
        exampleTranslation: "Is there a hotel near here?",
    },
    talat: {
        id: "talat",
        word: "ตลาด",
        romanized: "ta-lat",
        translation: "Market",
        example: "ตลาดเปิดกี่โมง",
        exampleTranslation: "What time does the market open?",
    },
    sathaniRotFai: {
        id: "sathaniRotFai",
        word: "สถานีรถไฟ",
        romanized: "sa-tha-ni-rot-fai",
        translation: "Train station",
        example: "สถานีรถไฟอยู่ทางซ้าย",
        exampleTranslation: "The train station is on the left.",
    },
    sai: {
        id: "sai",
        word: "ซ้าย",
        romanized: "sai",
        translation: "Left",
        example: "เลี้ยวซ้ายที่สี่แยก",
        exampleTranslation: "Turn left at the intersection.",
    },
    khwa: {
        id: "khwa",
        word: "ขวา",
        romanized: "khwa",
        translation: "Right",
        example: "เลี้ยวขวาแล้วตรงไป",
        exampleTranslation: "Turn right then go straight.",
    },
    trong: {
        id: "trong",
        word: "ตรง",
        romanized: "trong",
        translation: "Straight",
        example: "ไปตรงครับ",
        exampleTranslation: "Go straight.",
    },
    glai: {
        id: "glai",
        word: "ไกล",
        romanized: "glai",
        translation: "Far",
        example: "ไกลไหมครับ",
        exampleTranslation: "Is it far?",
    },

    // ── Unit 6: Daily Routines ──────────────────────────────────────────────
    tuenNon: {
        id: "tuenNon",
        word: "ตื่นนอน",
        romanized: "tuen-non",
        translation: "Wake up",
        example: "ฉันตื่นนอนตอนหกโมงเช้า",
        exampleTranslation: "I wake up at 6 in the morning.",
    },
    kinKhao: {
        id: "kinKhao",
        word: "กินข้าว",
        romanized: "gin-khao",
        translation: "Eat (a meal)",
        example: "กินข้าวเช้าก่อนนะ",
        exampleTranslation: "Eat breakfast first.",
    },
    thamNgan: {
        id: "thamNgan",
        word: "ทำงาน",
        romanized: "tham-ngan",
        translation: "Work",
        example: "ฉันทำงานทุกวัน",
        exampleTranslation: "I work every day.",
    },
    nonLap: {
        id: "nonLap",
        word: "นอนหลับ",
        romanized: "non-lap",
        translation: "Sleep",
        example: "นอนหลับฝันดีนะ",
        exampleTranslation: "Sleep well and sweet dreams.",
    },
    lenchao: {
        id: "lenchao",
        word: "เล่นกีฬา",
        romanized: "len-gee-la",
        translation: "Play sports / Exercise",
        example: "ฉันเล่นกีฬาทุกเช้า",
        exampleTranslation: "I exercise every morning.",
    },
    duuTV: {
        id: "duuTV",
        word: "ดูทีวี",
        romanized: "duu-tee-wee",
        translation: "Watch TV",
        example: "คืนนี้ดูทีวีด้วยกันไหม",
        exampleTranslation: "Want to watch TV together tonight?",
    },
    aabNam: {
        id: "aabNam",
        word: "อาบน้ำ",
        romanized: "aab-nam",
        translation: "Take a shower",
        example: "อาบน้ำก่อนไปนอนนะ",
        exampleTranslation: "Take a shower before going to bed.",
    },
    wen: {
        id: "wen",
        word: "วัน",
        romanized: "wan",
        translation: "Day",
        example: "วันนี้อากาศดีมาก",
        exampleTranslation: "The weather is great today.",
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED PHRASES
// ─────────────────────────────────────────────────────────────────────────────

export const phrases: Record<string, PhraseItem> = {
    // ── Unit 1 ────────────────────────────────────────────────────────────────
    howAreYou: {
        id: "howAreYou",
        phrase: "คุณเป็นยังไงบ้าง?",
        romanized: "khun pen yang-ngai bang?",
        translation: "How are you?",
        context: "Casual greeting to a friend or colleague.",
    },
    imFine: {
        id: "imFine",
        phrase: "ผม/ฉันสบายดีครับ/ค่ะ",
        romanized: "phom / chan sa-bai-dee krap / ka",
        translation: "I'm fine.",
        context: "Polite response to 'How are you?'",
    },
    whatsYourName: {
        id: "whatsYourName",
        phrase: "คุณชื่ออะไรครับ/ค่ะ?",
        romanized: "khun chue a-rai krap / ka?",
        translation: "What is your name?",
        context: "Used when meeting someone for the first time.",
    },
    myNameIs: {
        id: "myNameIs",
        phrase: "ผม/ฉันชื่อ...",
        romanized: "phom / chan chue...",
        translation: "My name is...",
        context: "Introduce yourself.",
    },
    niceToMeetYou: {
        id: "niceToMeetYou",
        phrase: "ยินดีที่ได้รู้จัก",
        romanized: "yin-dee thi dai ruu-jak",
        translation: "Nice to meet you.",
        context: "Polite phrase after being introduced.",
    },

    // ── Unit 2 ────────────────────────────────────────────────────────────────
    howMuch: {
        id: "howMuch",
        phrase: "เท่าไหร่ครับ/ค่ะ?",
        romanized: "thao-rai krap / ka?",
        translation: "How much does it cost?",
        context: "Used at markets, shops, or restaurants.",
    },
    tooExpensive: {
        id: "tooExpensive",
        phrase: "แพงไปครับ/ค่ะ",
        romanized: "phaeng pai krap / ka",
        translation: "Too expensive.",
        context: "Used when bargaining at a market.",
    },
    whatTimeIsIt: {
        id: "whatTimeIsIt",
        phrase: "ตอนนี้กี่โมงแล้วครับ/ค่ะ?",
        romanized: "ton-nee gee mong laew krap / ka?",
        translation: "What time is it now?",
        context: "Asking someone for the current time.",
    },

    // ── Unit 3 ────────────────────────────────────────────────────────────────
    iWantToOrder: {
        id: "iWantToOrder",
        phrase: "ขอสั่งอาหารครับ/ค่ะ",
        romanized: "kho sang a-han krap / ka",
        translation: "I'd like to order.",
        context: "Getting a waiter's attention at a restaurant.",
    },
    notSpicy: {
        id: "notSpicy",
        phrase: "ไม่เอาเผ็ดนะครับ/ค่ะ",
        romanized: "mai ao phet na krap / ka",
        translation: "Not spicy, please.",
        context: "Requesting less or no spice in Thai food.",
    },
    theBillPlease: {
        id: "theBillPlease",
        phrase: "เช็กบิลด้วยครับ/ค่ะ",
        romanized: "chek bin duai krap / ka",
        translation: "Check, please.",
        context: "Asking for the bill at a restaurant.",
    },

    // ── Unit 4 ────────────────────────────────────────────────────────────────
    doYouHaveSiblings: {
        id: "doYouHaveSiblings",
        phrase: "คุณมีพี่น้องไหมครับ/ค่ะ?",
        romanized: "khun mee phi-nong mai krap / ka?",
        translation: "Do you have any siblings?",
        context: "Getting to know someone.",
    },
    howManyPeopleInFamily: {
        id: "howManyPeopleInFamily",
        phrase: "บ้านคุณมีกี่คนครับ/ค่ะ?",
        romanized: "ban khun mee gee khon krap / ka?",
        translation: "How many people are in your family?",
        context: "A common small-talk question in Thailand.",
    },

    // ── Unit 5 ────────────────────────────────────────────────────────────────
    whereIs: {
        id: "whereIs",
        phrase: "...อยู่ที่ไหนครับ/ค่ะ?",
        romanized: "... yuu thi-nai krap / ka?",
        translation: "Where is...?",
        context: "Asking for the location of a place.",
    },
    howDoIGet: {
        id: "howDoIGet",
        phrase: "ไปถึง...ยังไงครับ/ค่ะ?",
        romanized: "pai thueng ... yang-ngai krap / ka?",
        translation: "How do I get to...?",
        context: "Asking for directions.",
    },
    isItFar: {
        id: "isItFar",
        phrase: "ไกลไหมครับ/ค่ะ?",
        romanized: "glai mai krap / ka?",
        translation: "Is it far?",
        context: "Checking distance before walking or taking a taxi.",
    },

    // ── Unit 6 ────────────────────────────────────────────────────────────────
    whatDoYouDoInMorning: {
        id: "whatDoYouDoInMorning",
        phrase: "ตอนเช้าคุณทำอะไรบ้างครับ/ค่ะ?",
        romanized: "ton-chao khun tham a-rai bang krap / ka?",
        translation: "What do you do in the morning?",
        context: "Asking about someone's morning routine.",
    },
    iWakeUpAt: {
        id: "iWakeUpAt",
        phrase: "ฉันตื่นนอนตอน...",
        romanized: "chan tuen-non ton...",
        translation: "I wake up at...",
        context: "Describing your morning schedule.",
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// LESSONS
// ─────────────────────────────────────────────────────────────────────────────

export const lessons: Lesson[] = [
    // ═══════════════════════════════════════════════════════════════════════════
    // UNIT 1 — Greetings & Basics
    // ═══════════════════════════════════════════════════════════════════════════

    {
        id: "th-u1-l1-ai",
        unitId: "th-unit-1",
        languageCode: "th",
        type: "ai_teacher",
        title: "Meet Your Thai Teacher",
        description:
            "Your AI teacher introduces Thai greetings and politeness.",
        orderIndex: 1,
        xpReward: 10,
        goal: {
            description:
                "Understand the basics of Thai greetings and polite speech.",
            xpReward: 10,
            vocabIds: ["sawatdee", "krap", "ka", "khobkhun"],
            phraseIds: ["howAreYou", "imFine", "whatsYourName", "myNameIs"],
        },
        activities: [],
        aiTeacherPrompt: {
            systemPrompt:
                "You are a friendly, encouraging Thai language teacher named Nong. Teach absolute beginners. Use simple English, introduce Thai script slowly with romanization. Be warm, patient, and use emojis sparingly to keep it engaging.",
            greeting:
                "สวัสดีครับ! (sa-wat-dee krap!) Welcome! I'm Nong, your Thai teacher. Today we learn how Thai people say hello!",
            teachingPoints: [
                "สวัสดี (sa-wat-dee) means Hello AND Goodbye — the same word.",
                "Thai men add ครับ (krap) at the end to be polite.",
                "Thai women add ค่ะ (ka) or คะ (ka) to be polite.",
                "ขอบคุณ (khob-khun) means Thank you.",
                "Demonstrate a wai (pressing palms together) as the greeting gesture.",
            ],
            closingMessage:
                "Excellent work! You just learned Thai greetings. Practice saying สวัสดีครับ/ค่ะ to someone today! See you in the next lesson.",
        },
    },

    {
        id: "th-u1-l2-vocab",
        unitId: "th-unit-1",
        languageCode: "th",
        type: "vocabulary",
        title: "Greetings Vocabulary",
        description: "Learn and practice key greeting words in Thai.",
        orderIndex: 2,
        xpReward: 10,
        goal: {
            description: "Memorize 6 essential greeting words.",
            xpReward: 10,
            vocabIds: [
                "sawatdee",
                "krap",
                "ka",
                "khobkhun",
                "khoThot",
                "sabaiDee",
            ],
            phraseIds: [],
        },
        activities: [
            {
                id: "u1-v-act-1",
                type: "multiple_choice",
                question: "What does สวัสดี mean?",
                correctAnswer: "Hello / Goodbye",
                wrongAnswers: ["Thank you", "Sorry", "Yes"],
            },
            {
                id: "u1-v-act-2",
                type: "multiple_choice",
                question: "Which polite particle do Thai men use?",
                correctAnswer: "ครับ (krap)",
                wrongAnswers: ["ค่ะ (ka)", "นะ (na)", "สิ (si)"],
            },
            {
                id: "u1-v-act-3",
                type: "translation",
                question: "Translate: ขอบคุณครับ",
                questionTranslation: "Khob-khun krap",
                correctAnswer: "Thank you (said by a male).",
                hint: "ขอบคุณ = thank you, ครับ = polite word for men",
            },
            {
                id: "u1-v-act-4",
                type: "match_pairs",
                question: "Match the Thai word to its meaning.",
                correctAnswer: "ขอโทษ = Sorry / Excuse me",
                wrongAnswers: ["ขอโทษ = Hello", "ขอโทษ = Thank you"],
            },
            {
                id: "u1-v-act-5",
                type: "fill_blank",
                question: "สบาย___ means 'Doing well / Fine'.",
                correctAnswer: "ดี",
                hint: "Together the word is สบายดี (sa-bai-dee)",
            },
        ],
    },

    {
        id: "th-u1-l3-practice",
        unitId: "th-unit-1",
        languageCode: "th",
        type: "practice",
        title: "Greetings Practice",
        description:
            "Put your greeting skills to the test with translations and listening.",
        orderIndex: 3,
        xpReward: 10,
        goal: {
            description: "Use Thai greetings in simple sentences.",
            xpReward: 10,
            vocabIds: ["sawatdee", "khobkhun", "khoThot", "chai", "maiChai"],
            phraseIds: ["niceToMeetYou", "whatsYourName", "myNameIs"],
        },
        activities: [
            {
                id: "u1-p-act-1",
                type: "translation",
                question: "How do you say 'Nice to meet you' in Thai?",
                correctAnswer: "ยินดีที่ได้รู้จัก",
                hint: "yin-dee thi dai ruu-jak",
            },
            {
                id: "u1-p-act-2",
                type: "multiple_choice",
                question:
                    "A woman wants to say 'Thank you' politely. She says:",
                correctAnswer: "ขอบคุณค่ะ",
                wrongAnswers: ["ขอบคุณครับ", "ขอโทษค่ะ", "สวัสดีค่ะ"],
            },
            {
                id: "u1-p-act-3",
                type: "multiple_choice",
                question: "ใช่ (chai) means:",
                correctAnswer: "Yes / Correct",
                wrongAnswers: ["No", "Maybe", "Please"],
            },
            {
                id: "u1-p-act-4",
                type: "translation",
                question: "Translate: My name is Nong.",
                correctAnswer: "ผม/ฉันชื่อหนอง",
                hint: "Use ผมชื่อ (male) or ฉันชื่อ (female) + name",
            },
        ],
    },

    {
        id: "th-u1-l4-quiz",
        unitId: "th-unit-1",
        languageCode: "th",
        type: "quiz",
        title: "Unit 1 Quiz",
        description: "Test everything you learned about Thai greetings.",
        orderIndex: 4,
        xpReward: 20,
        goal: {
            description: "Score 80% or higher on the Unit 1 quiz.",
            xpReward: 20,
            vocabIds: [
                "sawatdee",
                "krap",
                "ka",
                "khobkhun",
                "khoThot",
                "sabaiDee",
                "chai",
                "maiChai",
            ],
            phraseIds: ["howAreYou", "imFine", "niceToMeetYou"],
        },
        activities: [
            {
                id: "u1-q-act-1",
                type: "multiple_choice",
                question:
                    "Which word is used for BOTH hello and goodbye in Thai?",
                correctAnswer: "สวัสดี",
                wrongAnswers: ["ขอบคุณ", "ขอโทษ", "ใช่"],
            },
            {
                id: "u1-q-act-2",
                type: "translation",
                question: "Translate: How are you? (casual)",
                correctAnswer: "คุณเป็นยังไงบ้าง?",
            },
            {
                id: "u1-q-act-3",
                type: "multiple_choice",
                question: "ไม่ใช่ (mai chai) means:",
                correctAnswer: "No / Incorrect",
                wrongAnswers: ["Yes", "Maybe", "Sorry"],
            },
            {
                id: "u1-q-act-4",
                type: "fill_blank",
                question: "ขอ___ ครับ — 'I'm sorry' (male speaker)",
                correctAnswer: "โทษ",
                hint: "ขอโทษ = excuse me / sorry",
            },
            {
                id: "u1-q-act-5",
                type: "multiple_choice",
                question: "A Thai woman politely greets you. She says:",
                correctAnswer: "สวัสดีค่ะ",
                wrongAnswers: ["สวัสดีครับ", "ขอบคุณครับ", "ใช่ครับ"],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // UNIT 2 — Numbers & Counting
    // ═══════════════════════════════════════════════════════════════════════════

    {
        id: "th-u2-l1-ai",
        unitId: "th-unit-2",
        languageCode: "th",
        type: "ai_teacher",
        title: "Thai Numbers with Teacher Nong",
        description:
            "Learn to count in Thai from 1 to 10 with your AI teacher.",
        orderIndex: 1,
        xpReward: 10,
        goal: {
            description: "Learn the Thai numbers 1–10.",
            xpReward: 10,
            vocabIds: [
                "nueng",
                "song",
                "sam",
                "see",
                "ha",
                "hok",
                "jet",
                "paet",
                "gao",
                "sip",
            ],
            phraseIds: ["howMuch", "whatTimeIsIt"],
        },
        activities: [],
        aiTeacherPrompt: {
            systemPrompt:
                "You are Nong, a fun and patient Thai teacher. You are teaching numbers 1–10 to absolute beginners. Speak mostly in English with Thai words introduced slowly. Encourage repetition and give real-life contexts (prices, time, counting items).",
            greeting:
                "สวัสดีครับ! Ready to count in Thai? Numbers will help you shop, tell time, and so much more. Let's start!",
            teachingPoints: [
                "1–10 in Thai: หนึ่ง สอง สาม สี่ ห้า หก เจ็ด แปด เก้า สิบ",
                "เท่าไหร่ (thao-rai) means 'how much?' — useful for shopping.",
                "Demonstrate counting on fingers with the Thai words.",
                "Eleven = สิบเอ็ด (sip-et), Twenty = ยี่สิบ (yee-sip).",
                "Baht (บาท) is the Thai currency — practice: ห้าบาท = 5 baht.",
            ],
            closingMessage:
                "Great job counting! Practice by counting things around you in Thai today. สู้ๆ (suu-suu) — Keep it up!",
        },
    },

    {
        id: "th-u2-l2-vocab",
        unitId: "th-unit-2",
        languageCode: "th",
        type: "vocabulary",
        title: "Numbers 1–10",
        description: "Practice the Thai words for numbers one through ten.",
        orderIndex: 2,
        xpReward: 10,
        goal: {
            description: "Identify and produce Thai numbers 1–10.",
            xpReward: 10,
            vocabIds: [
                "nueng",
                "song",
                "sam",
                "see",
                "ha",
                "hok",
                "jet",
                "paet",
                "gao",
                "sip",
            ],
            phraseIds: [],
        },
        activities: [
            {
                id: "u2-v-act-1",
                type: "multiple_choice",
                question: "Which word means 'five' in Thai?",
                correctAnswer: "ห้า",
                wrongAnswers: ["สี่", "หก", "สาม"],
            },
            {
                id: "u2-v-act-2",
                type: "multiple_choice",
                question: "สิบ (sip) means:",
                correctAnswer: "Ten (10)",
                wrongAnswers: ["Six (6)", "Seven (7)", "Eight (8)"],
            },
            {
                id: "u2-v-act-3",
                type: "fill_blank",
                question: "เจ็ด, ___, เก้า — what is the missing number?",
                correctAnswer: "แปด",
                hint: "Seven, ___, Nine",
            },
            {
                id: "u2-v-act-4",
                type: "translation",
                question: "How do you write 'Three baht' in Thai?",
                correctAnswer: "สามบาท",
                hint: "สาม = three, บาท = baht",
            },
            {
                id: "u2-v-act-5",
                type: "multiple_choice",
                question: "หนึ่ง สอง ___ — what comes next?",
                correctAnswer: "สาม",
                wrongAnswers: ["สี่", "ห้า", "หก"],
            },
        ],
    },

    {
        id: "th-u2-l3-practice",
        unitId: "th-unit-2",
        languageCode: "th",
        type: "practice",
        title: "Numbers in Context",
        description: "Use Thai numbers in shopping and time expressions.",
        orderIndex: 3,
        xpReward: 10,
        goal: {
            description: "Use numbers to express prices and time.",
            xpReward: 10,
            vocabIds: ["nueng", "song", "ha", "sip"],
            phraseIds: ["howMuch", "tooExpensive", "whatTimeIsIt"],
        },
        activities: [
            {
                id: "u2-p-act-1",
                type: "translation",
                question: "How do you ask 'How much does it cost?'",
                correctAnswer: "เท่าไหร่ครับ/ค่ะ?",
                hint: "thao-rai krap / ka",
            },
            {
                id: "u2-p-act-2",
                type: "multiple_choice",
                question: "A vendor says 'สิบบาท'. How much is it?",
                correctAnswer: "10 baht",
                wrongAnswers: ["5 baht", "7 baht", "100 baht"],
            },
            {
                id: "u2-p-act-3",
                type: "fill_blank",
                question: "ตอนนี้___โมงแล้วครับ? — 'What ___ is it now?'",
                correctAnswer: "กี่",
                hint: "กี่โมง = what o'clock",
            },
            {
                id: "u2-p-act-4",
                type: "translation",
                question: "Translate: Too expensive.",
                correctAnswer: "แพงไปครับ/ค่ะ",
            },
        ],
    },

    {
        id: "th-u2-l4-quiz",
        unitId: "th-unit-2",
        languageCode: "th",
        type: "quiz",
        title: "Unit 2 Quiz",
        description: "Test your Thai number knowledge.",
        orderIndex: 4,
        xpReward: 20,
        goal: {
            description: "Score 80% or higher on the Unit 2 quiz.",
            xpReward: 20,
            vocabIds: [
                "nueng",
                "song",
                "sam",
                "see",
                "ha",
                "hok",
                "jet",
                "paet",
                "gao",
                "sip",
            ],
            phraseIds: ["howMuch", "tooExpensive"],
        },
        activities: [
            {
                id: "u2-q-act-1",
                type: "multiple_choice",
                question: "What is 'seven' in Thai?",
                correctAnswer: "เจ็ด",
                wrongAnswers: ["หก", "แปด", "เก้า"],
            },
            {
                id: "u2-q-act-2",
                type: "translation",
                question: "Translate: ห้าบาทครับ",
                correctAnswer: "Five baht.",
            },
            {
                id: "u2-q-act-3",
                type: "fill_blank",
                question: "สอง + สาม = ___",
                correctAnswer: "ห้า",
                hint: "2 + 3 = 5",
            },
            {
                id: "u2-q-act-4",
                type: "multiple_choice",
                question: "แปด (paet) means:",
                correctAnswer: "Eight",
                wrongAnswers: ["Four", "Six", "Nine"],
            },
            {
                id: "u2-q-act-5",
                type: "multiple_choice",
                question: "How do you say 'too expensive' in Thai?",
                correctAnswer: "แพงไปครับ/ค่ะ",
                wrongAnswers: [
                    "ถูกมากครับ/ค่ะ",
                    "อร่อยมากครับ/ค่ะ",
                    "ไกลไปครับ/ค่ะ",
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // UNIT 3 — Food & Drinks
    // ═══════════════════════════════════════════════════════════════════════════

    {
        id: "th-u3-l1-ai",
        unitId: "th-unit-3",
        languageCode: "th",
        type: "ai_teacher",
        title: "Thai Food with Teacher Nong",
        description:
            "Discover iconic Thai dishes and how to order food politely.",
        orderIndex: 1,
        xpReward: 10,
        goal: {
            description: "Learn popular Thai food vocabulary and how to order.",
            xpReward: 10,
            vocabIds: ["padThai", "khaoPadGai", "tomYum", "namPlao", "aroi"],
            phraseIds: ["iWantToOrder", "notSpicy", "theBillPlease"],
        },
        activities: [],
        aiTeacherPrompt: {
            systemPrompt:
                "You are Nong, a Thai teacher who loves food. Teach students how to order Thai food, describe tastes, and handle restaurant situations. Keep it fun, practical, and use real Thai restaurant scenarios.",
            greeting:
                "สวัสดีครับ! Today we talk about food — อาหาร (a-han). Thai food is delicious — อร่อย (a-roi)! Let's learn how to order like a local.",
            teachingPoints: [
                "ผัดไทย (pad-thai) — the most famous Thai dish worldwide.",
                "ข้าวผัดไก่ (khao-pad-gai) — chicken fried rice, a daily staple.",
                "ต้มยำ (tom-yum) — spicy sour soup, a Thai classic.",
                "อร่อย (a-roi) = delicious, เผ็ด (phet) = spicy, หวาน (wan) = sweet.",
                "To order: ขอ... หนึ่งจาน (kho ... nueng jan) = One plate of... please.",
                "ไม่เอาเผ็ด (mai ao phet) = No spice please — very useful!",
            ],
            closingMessage:
                "Now you can order food in Thai! Next time you visit a Thai restaurant, try using these phrases. อร่อยนะครับ — Enjoy your meal!",
        },
    },

    {
        id: "th-u3-l2-vocab",
        unitId: "th-unit-3",
        languageCode: "th",
        type: "vocabulary",
        title: "Food & Taste Vocabulary",
        description: "Learn the names of Thai dishes and taste words.",
        orderIndex: 2,
        xpReward: 10,
        goal: {
            description:
                "Identify popular Thai foods and describe their taste.",
            xpReward: 10,
            vocabIds: [
                "padThai",
                "khaoPadGai",
                "tomYum",
                "namPlao",
                "oliang",
                "aroi",
                "phet",
                "wan",
            ],
            phraseIds: [],
        },
        activities: [
            {
                id: "u3-v-act-1",
                type: "multiple_choice",
                question: "ผัดไทย means:",
                correctAnswer: "Pad Thai",
                wrongAnswers: ["Fried rice", "Tom Yum soup", "Iced coffee"],
            },
            {
                id: "u3-v-act-2",
                type: "multiple_choice",
                question: "Which word means 'delicious'?",
                correctAnswer: "อร่อย",
                wrongAnswers: ["เผ็ด", "หวาน", "เปรี้ยว"],
            },
            {
                id: "u3-v-act-3",
                type: "fill_blank",
                question: "ต้ม___ is a famous spicy Thai soup.",
                correctAnswer: "ยำ",
                hint: "tom-yum",
            },
            {
                id: "u3-v-act-4",
                type: "translation",
                question: "Translate: น้ำเปล่า",
                correctAnswer: "Plain water",
                hint: "nam = water, plao = plain",
            },
            {
                id: "u3-v-act-5",
                type: "multiple_choice",
                question: "โอเลี้ยง (o-liang) is:",
                correctAnswer: "Thai iced black coffee",
                wrongAnswers: ["Thai milk tea", "Coconut water", "Fruit juice"],
            },
        ],
    },

    {
        id: "th-u3-l3-practice",
        unitId: "th-unit-3",
        languageCode: "th",
        type: "practice",
        title: "Restaurant Phrases",
        description:
            "Practice ordering food and handling restaurant conversations.",
        orderIndex: 3,
        xpReward: 10,
        goal: {
            description: "Order food and ask for the bill in Thai.",
            xpReward: 10,
            vocabIds: ["aroi", "phet", "wan"],
            phraseIds: ["iWantToOrder", "notSpicy", "theBillPlease"],
        },
        activities: [
            {
                id: "u3-p-act-1",
                type: "translation",
                question: "How do you say 'Not spicy, please'?",
                correctAnswer: "ไม่เอาเผ็ดนะครับ/ค่ะ",
            },
            {
                id: "u3-p-act-2",
                type: "multiple_choice",
                question:
                    "You want to get the waiter's attention to order. You say:",
                correctAnswer: "ขอสั่งอาหารครับ/ค่ะ",
                wrongAnswers: [
                    "เช็กบิลด้วยครับ/ค่ะ",
                    "ขอบคุณครับ/ค่ะ",
                    "สวัสดีครับ/ค่ะ",
                ],
            },
            {
                id: "u3-p-act-3",
                type: "fill_blank",
                question: "เช็ก___ด้วยครับ means 'Check, please'.",
                correctAnswer: "บิล",
                hint: "chek bin = check the bill",
            },
            {
                id: "u3-p-act-4",
                type: "translation",
                question: "Translate: อาหารไทยอร่อยมากค่ะ",
                correctAnswer: "Thai food is very delicious.",
            },
        ],
    },

    {
        id: "th-u3-l4-quiz",
        unitId: "th-unit-3",
        languageCode: "th",
        type: "quiz",
        title: "Unit 3 Quiz",
        description: "Show what you know about Thai food and ordering.",
        orderIndex: 4,
        xpReward: 20,
        goal: {
            description: "Score 80% or higher on the Unit 3 quiz.",
            xpReward: 20,
            vocabIds: ["padThai", "khaoPadGai", "tomYum", "aroi", "phet"],
            phraseIds: ["iWantToOrder", "notSpicy", "theBillPlease"],
        },
        activities: [
            {
                id: "u3-q-act-1",
                type: "multiple_choice",
                question: "Which dish is a spicy sour soup?",
                correctAnswer: "ต้มยำ",
                wrongAnswers: ["ผัดไทย", "ข้าวผัดไก่", "โอเลี้ยง"],
            },
            {
                id: "u3-q-act-2",
                type: "translation",
                question: "Translate: Check, please.",
                correctAnswer: "เช็กบิลด้วยครับ/ค่ะ",
            },
            {
                id: "u3-q-act-3",
                type: "multiple_choice",
                question: "เผ็ด (phet) means:",
                correctAnswer: "Spicy",
                wrongAnswers: ["Sweet", "Sour", "Salty"],
            },
            {
                id: "u3-q-act-4",
                type: "fill_blank",
                question: "ข้าวผัดไก่ is ___ fried rice.",
                correctAnswer: "chicken",
                hint: "ไก่ = chicken",
            },
            {
                id: "u3-q-act-5",
                type: "multiple_choice",
                question: "You want one plate of Pad Thai. You say:",
                correctAnswer: "ขอผัดไทยหนึ่งจานครับ/ค่ะ",
                wrongAnswers: [
                    "ผัดไทยอร่อยมาก",
                    "ไม่เอาผัดไทยครับ",
                    "เช็กบิลด้วยครับ",
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // UNIT 4 — Family & People
    // ═══════════════════════════════════════════════════════════════════════════

    {
        id: "th-u4-l1-ai",
        unitId: "th-unit-4",
        languageCode: "th",
        type: "ai_teacher",
        title: "Thai Family Words",
        description: "Learn how to talk about your family in Thai.",
        orderIndex: 1,
        xpReward: 10,
        goal: {
            description: "Learn Thai words for immediate family members.",
            xpReward: 10,
            vocabIds: [
                "pho",
                "mae",
                "phiChai",
                "phiSao",
                "nongChai",
                "nongSao",
            ],
            phraseIds: ["doYouHaveSiblings", "howManyPeopleInFamily"],
        },
        activities: [],
        aiTeacherPrompt: {
            systemPrompt:
                "You are Nong, teaching Thai family vocabulary. Thai family language is interesting — older vs younger siblings have different words. Explain this clearly with warm, relatable examples.",
            greeting:
                "สวัสดีครับ! Today we learn about family — ครอบครัว (khrob-krua). Family is very important in Thai culture. Let's learn the words!",
            teachingPoints: [
                "พ่อ (pho) = Father, แม่ (mae) = Mother.",
                "Thai has different words for older and younger siblings.",
                "พี่ = older sibling — พี่ชาย (phi-chai) = older brother, พี่สาว (phi-sao) = older sister.",
                "น้อง = younger sibling — น้องชาย (nong-chai) = younger brother, น้องสาว (nong-sao) = younger sister.",
                "เพื่อน (phuan) = friend, ลูก (luk) = child/children.",
                "Common question: คุณมีพี่น้องไหม? = Do you have siblings?",
            ],
            closingMessage:
                "Excellent! Now you can talk about your family in Thai. Try introducing your family members using today's words!",
        },
    },

    {
        id: "th-u4-l2-vocab",
        unitId: "th-unit-4",
        languageCode: "th",
        type: "vocabulary",
        title: "Family Members",
        description: "Practice Thai words for family members.",
        orderIndex: 2,
        xpReward: 10,
        goal: {
            description: "Identify and use Thai words for family members.",
            xpReward: 10,
            vocabIds: [
                "pho",
                "mae",
                "phiChai",
                "phiSao",
                "nongChai",
                "nongSao",
                "phuanBan",
                "luk",
            ],
            phraseIds: [],
        },
        activities: [
            {
                id: "u4-v-act-1",
                type: "multiple_choice",
                question: "พ่อ means:",
                correctAnswer: "Father",
                wrongAnswers: ["Mother", "Older brother", "Child"],
            },
            {
                id: "u4-v-act-2",
                type: "multiple_choice",
                question: "How do you say 'older sister' in Thai?",
                correctAnswer: "พี่สาว",
                wrongAnswers: ["น้องสาว", "พี่ชาย", "น้องชาย"],
            },
            {
                id: "u4-v-act-3",
                type: "fill_blank",
                question: "น้อง___ means 'younger brother'.",
                correctAnswer: "ชาย",
                hint: "ชาย = male",
            },
            {
                id: "u4-v-act-4",
                type: "translation",
                question: "Translate: เพื่อนฉันพูดภาษาไทยได้",
                correctAnswer: "My friend can speak Thai.",
            },
            {
                id: "u4-v-act-5",
                type: "multiple_choice",
                question: "ลูก (luk) means:",
                correctAnswer: "Child / Children",
                wrongAnswers: ["Parent", "Sibling", "Friend"],
            },
        ],
    },

    {
        id: "th-u4-l3-practice",
        unitId: "th-unit-4",
        languageCode: "th",
        type: "practice",
        title: "Talking About Family",
        description: "Practice phrases for describing your family.",
        orderIndex: 3,
        xpReward: 10,
        goal: {
            description: "Use family vocabulary in real sentences.",
            xpReward: 10,
            vocabIds: ["pho", "mae", "nongSao"],
            phraseIds: ["doYouHaveSiblings", "howManyPeopleInFamily"],
        },
        activities: [
            {
                id: "u4-p-act-1",
                type: "translation",
                question: "How do you ask 'Do you have any siblings?'",
                correctAnswer: "คุณมีพี่น้องไหมครับ/ค่ะ?",
            },
            {
                id: "u4-p-act-2",
                type: "multiple_choice",
                question: "คุณมีลูกกี่คน means:",
                correctAnswer: "How many children do you have?",
                wrongAnswers: [
                    "How old are you?",
                    "Do you have siblings?",
                    "Where is your family?",
                ],
            },
            {
                id: "u4-p-act-3",
                type: "fill_blank",
                question: "พ่อผมเป็น___ — My father is a doctor.",
                correctAnswer: "หมอ",
                hint: "หมอ = doctor",
            },
            {
                id: "u4-p-act-4",
                type: "translation",
                question: "Translate: My older sister is very beautiful.",
                correctAnswer: "พี่สาวฉันสวยมาก",
            },
        ],
    },

    {
        id: "th-u4-l4-quiz",
        unitId: "th-unit-4",
        languageCode: "th",
        type: "quiz",
        title: "Unit 4 Quiz",
        description: "Test your knowledge of Thai family words.",
        orderIndex: 4,
        xpReward: 20,
        goal: {
            description: "Score 80% or higher on the Unit 4 quiz.",
            xpReward: 20,
            vocabIds: [
                "pho",
                "mae",
                "phiChai",
                "phiSao",
                "nongChai",
                "nongSao",
                "phuanBan",
                "luk",
            ],
            phraseIds: ["doYouHaveSiblings"],
        },
        activities: [
            {
                id: "u4-q-act-1",
                type: "multiple_choice",
                question: "How do you say 'younger sister' in Thai?",
                correctAnswer: "น้องสาว",
                wrongAnswers: ["พี่สาว", "น้องชาย", "พี่ชาย"],
            },
            {
                id: "u4-q-act-2",
                type: "translation",
                question: "Translate: My mother is a great cook.",
                correctAnswer: "แม่ทำอาหารเก่งมาก",
            },
            {
                id: "u4-q-act-3",
                type: "multiple_choice",
                question: "เพื่อน means:",
                correctAnswer: "Friend",
                wrongAnswers: ["Child", "Sibling", "Parent"],
            },
            {
                id: "u4-q-act-4",
                type: "fill_blank",
                question: "พี่___ = older brother",
                correctAnswer: "ชาย",
            },
            {
                id: "u4-q-act-5",
                type: "multiple_choice",
                question: "บ้านคุณมีกี่คน means:",
                correctAnswer: "How many people are in your family?",
                wrongAnswers: [
                    "Where do you live?",
                    "How old are you?",
                    "Do you have a house?",
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // UNIT 5 — Places & Directions
    // ═══════════════════════════════════════════════════════════════════════════

    {
        id: "th-u5-l1-ai",
        unitId: "th-unit-5",
        languageCode: "th",
        type: "ai_teacher",
        title: "Getting Around in Thai",
        description: "Learn how to ask for and give directions in Thai.",
        orderIndex: 1,
        xpReward: 10,
        goal: {
            description: "Learn place names and direction words in Thai.",
            xpReward: 10,
            vocabIds: [
                "rongPhayaban",
                "rongReem",
                "talat",
                "sai",
                "khwa",
                "trong",
            ],
            phraseIds: ["whereIs", "howDoIGet", "isItFar"],
        },
        activities: [],
        aiTeacherPrompt: {
            systemPrompt:
                "You are Nong, teaching Thai directions and places. Use simple map-like scenarios. Teach the student how to navigate a Thai city using polite Thai.",
            greeting:
                "สวัสดีครับ! Today we explore places and directions. Whether you're in Bangkok or Chiang Mai, these words will help you find your way!",
            teachingPoints: [
                "อยู่ที่ไหน (yuu thi-nai) = Where is it? — the most useful direction phrase.",
                "ซ้าย (sai) = left, ขวา (khwa) = right, ตรง (trong) = straight.",
                "ใกล้ (glai) = near, ไกล (glai) = far — same romanization, different tones!",
                "โรงพยาบาล = hospital, ตลาด = market, โรงแรม = hotel.",
                "Full example: โรงแรมอยู่ทางขวาครับ = The hotel is on the right.",
            ],
            closingMessage:
                "Great work! Now you can navigate in Thailand. Practice by giving yourself directions in Thai when you walk around today.",
        },
    },

    {
        id: "th-u5-l2-vocab",
        unitId: "th-unit-5",
        languageCode: "th",
        type: "vocabulary",
        title: "Places & Directions Vocab",
        description: "Learn common place names and direction words.",
        orderIndex: 2,
        xpReward: 10,
        goal: {
            description: "Identify Thai words for places and directions.",
            xpReward: 10,
            vocabIds: [
                "rongPhayaban",
                "rongReem",
                "talat",
                "sathaniRotFai",
                "sai",
                "khwa",
                "trong",
                "glai",
            ],
            phraseIds: [],
        },
        activities: [
            {
                id: "u5-v-act-1",
                type: "multiple_choice",
                question: "ซ้าย (sai) means:",
                correctAnswer: "Left",
                wrongAnswers: ["Right", "Straight", "Back"],
            },
            {
                id: "u5-v-act-2",
                type: "multiple_choice",
                question: "Which word means 'market'?",
                correctAnswer: "ตลาด",
                wrongAnswers: ["โรงแรม", "โรงพยาบาล", "สถานีรถไฟ"],
            },
            {
                id: "u5-v-act-3",
                type: "fill_blank",
                question: "โรง___ = hospital",
                correctAnswer: "พยาบาล",
                hint: "rong-pha-ya-ban",
            },
            {
                id: "u5-v-act-4",
                type: "translation",
                question: "Translate: เลี้ยวขวาแล้วตรงไป",
                correctAnswer: "Turn right then go straight.",
            },
            {
                id: "u5-v-act-5",
                type: "multiple_choice",
                question: "สถานีรถไฟ means:",
                correctAnswer: "Train station",
                wrongAnswers: ["Airport", "Bus stop", "Market"],
            },
        ],
    },

    {
        id: "th-u5-l3-practice",
        unitId: "th-unit-5",
        languageCode: "th",
        type: "practice",
        title: "Asking for Directions",
        description: "Practice real direction conversations.",
        orderIndex: 3,
        xpReward: 10,
        goal: {
            description: "Ask for and understand directions in Thai.",
            xpReward: 10,
            vocabIds: ["sai", "khwa", "trong", "glai"],
            phraseIds: ["whereIs", "howDoIGet", "isItFar"],
        },
        activities: [
            {
                id: "u5-p-act-1",
                type: "translation",
                question: "How do you ask 'Where is the hospital?'",
                correctAnswer: "โรงพยาบาลอยู่ที่ไหนครับ/ค่ะ?",
            },
            {
                id: "u5-p-act-2",
                type: "multiple_choice",
                question: "Someone says ตรงไปครับ. What do they mean?",
                correctAnswer: "Go straight.",
                wrongAnswers: ["Turn left.", "Turn right.", "It's far."],
            },
            {
                id: "u5-p-act-3",
                type: "fill_blank",
                question: "ไป___ ยังไงครับ? — 'How do I get there?'",
                correctAnswer: "ถึง",
                hint: "pai thueng = to get to",
            },
            {
                id: "u5-p-act-4",
                type: "translation",
                question: "Translate: Is it far?",
                correctAnswer: "ไกลไหมครับ/ค่ะ?",
            },
        ],
    },

    {
        id: "th-u5-l4-quiz",
        unitId: "th-unit-5",
        languageCode: "th",
        type: "quiz",
        title: "Unit 5 Quiz",
        description: "Test your knowledge of Thai places and directions.",
        orderIndex: 4,
        xpReward: 20,
        goal: {
            description: "Score 80% or higher on the Unit 5 quiz.",
            xpReward: 20,
            vocabIds: [
                "rongPhayaban",
                "rongReem",
                "talat",
                "sai",
                "khwa",
                "trong",
                "glai",
            ],
            phraseIds: ["whereIs", "isItFar"],
        },
        activities: [
            {
                id: "u5-q-act-1",
                type: "multiple_choice",
                question: "How do you say 'Turn left at the intersection'?",
                correctAnswer: "เลี้ยวซ้ายที่สี่แยก",
                wrongAnswers: ["เลี้ยวขวาที่สี่แยก", "ตรงไปครับ", "ไกลไหมครับ"],
            },
            {
                id: "u5-q-act-2",
                type: "translation",
                question: "Translate: โรงแรมใกล้ที่นี่ไหมค่ะ?",
                correctAnswer: "Is there a hotel near here?",
            },
            {
                id: "u5-q-act-3",
                type: "multiple_choice",
                question: "ขวา (khwa) means:",
                correctAnswer: "Right",
                wrongAnswers: ["Left", "Straight", "Near"],
            },
            {
                id: "u5-q-act-4",
                type: "fill_blank",
                question: "ตลาดเปิดกี่___ — 'What time does the market open?'",
                correctAnswer: "โมง",
                hint: "กี่โมง = what time",
            },
            {
                id: "u5-q-act-5",
                type: "multiple_choice",
                question: "อยู่ที่ไหน means:",
                correctAnswer: "Where is it?",
                wrongAnswers: [
                    "How far is it?",
                    "What is that?",
                    "How do I get there?",
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // UNIT 6 — Daily Routines
    // ═══════════════════════════════════════════════════════════════════════════

    {
        id: "th-u6-l1-ai",
        unitId: "th-unit-6",
        languageCode: "th",
        type: "ai_teacher",
        title: "A Day in Thai Life",
        description: "Learn to describe your daily routine in Thai.",
        orderIndex: 1,
        xpReward: 10,
        goal: {
            description: "Learn common daily activity verbs in Thai.",
            xpReward: 10,
            vocabIds: [
                "tuenNon",
                "kinKhao",
                "thamNgan",
                "nonLap",
                "lenchao",
                "aabNam",
            ],
            phraseIds: ["whatDoYouDoInMorning", "iWakeUpAt"],
        },
        activities: [],
        aiTeacherPrompt: {
            systemPrompt:
                "You are Nong, teaching Thai daily routine vocabulary. Make it relatable by walking through a typical Thai person's day. Use time expressions and sequence words to help learners build full sentences.",
            greeting:
                "สวัสดีครับ! Let's talk about your daily routine — ชีวิตประจำวัน (chee-wit pra-jam-wan). What do you do every day? Let's say it in Thai!",
            teachingPoints: [
                "ตื่นนอน (tuen-non) = wake up — ฉันตื่นนอนตอนหกโมงเช้า = I wake up at 6 AM.",
                "กินข้าว (gin-khao) = eat a meal — literally 'eat rice', used for any meal.",
                "ทำงาน (tham-ngan) = work — ฉันทำงานทุกวัน = I work every day.",
                "อาบน้ำ (aab-nam) = take a shower — essential vocab!",
                "นอนหลับ (non-lap) = sleep — นอนหลับฝันดี = Sleep well and sweet dreams.",
                "เล่นกีฬา (len-gee-la) = exercise/play sports.",
                "Time words: ตอนเช้า (morning), ตอนบ่าย (afternoon), ตอนเย็น (evening), ตอนกลางคืน (night).",
            ],
            closingMessage:
                "Wonderful! You can now describe your whole day in Thai. Try writing out your own daily routine using today's words!",
        },
    },

    {
        id: "th-u6-l2-vocab",
        unitId: "th-unit-6",
        languageCode: "th",
        type: "vocabulary",
        title: "Daily Activity Verbs",
        description: "Learn the key verbs for everyday activities.",
        orderIndex: 2,
        xpReward: 10,
        goal: {
            description: "Identify Thai verbs for daily actions.",
            xpReward: 10,
            vocabIds: [
                "tuenNon",
                "kinKhao",
                "thamNgan",
                "nonLap",
                "lenchao",
                "duuTV",
                "aabNam",
                "wen",
            ],
            phraseIds: [],
        },
        activities: [
            {
                id: "u6-v-act-1",
                type: "multiple_choice",
                question: "ตื่นนอน means:",
                correctAnswer: "Wake up",
                wrongAnswers: ["Go to sleep", "Take a shower", "Eat"],
            },
            {
                id: "u6-v-act-2",
                type: "multiple_choice",
                question: "Which phrase means 'take a shower'?",
                correctAnswer: "อาบน้ำ",
                wrongAnswers: ["กินข้าว", "ดูทีวี", "ทำงาน"],
            },
            {
                id: "u6-v-act-3",
                type: "fill_blank",
                question: "กิน___ = eat a meal (literally 'eat rice')",
                correctAnswer: "ข้าว",
                hint: "ข้าว = rice",
            },
            {
                id: "u6-v-act-4",
                type: "translation",
                question: "Translate: นอนหลับฝันดีนะ",
                correctAnswer: "Sleep well and sweet dreams.",
            },
            {
                id: "u6-v-act-5",
                type: "multiple_choice",
                question: "ดูทีวี (duu tee-wee) means:",
                correctAnswer: "Watch TV",
                wrongAnswers: ["Play sports", "Work", "Wake up"],
            },
        ],
    },

    {
        id: "th-u6-l3-practice",
        unitId: "th-unit-6",
        languageCode: "th",
        type: "practice",
        title: "Describing Your Day",
        description: "Practice building sentences about your daily routine.",
        orderIndex: 3,
        xpReward: 10,
        goal: {
            description: "Build full sentences describing a daily schedule.",
            xpReward: 10,
            vocabIds: ["tuenNon", "kinKhao", "thamNgan", "aabNam"],
            phraseIds: ["whatDoYouDoInMorning", "iWakeUpAt"],
        },
        activities: [
            {
                id: "u6-p-act-1",
                type: "translation",
                question: "How do you say 'I wake up at six in the morning'?",
                correctAnswer: "ฉันตื่นนอนตอนหกโมงเช้า",
            },
            {
                id: "u6-p-act-2",
                type: "multiple_choice",
                question: "ตอนเช้าคุณทำอะไรบ้างครับ/ค่ะ? means:",
                correctAnswer: "What do you do in the morning?",
                wrongAnswers: [
                    "What time do you wake up?",
                    "Do you work in the morning?",
                    "What do you eat for breakfast?",
                ],
            },
            {
                id: "u6-p-act-3",
                type: "fill_blank",
                question:
                    "ฉัน___น้ำก่อนไปนอน — I take a shower before going to bed.",
                correctAnswer: "อาบ",
                hint: "อาบน้ำ = take a shower",
            },
            {
                id: "u6-p-act-4",
                type: "translation",
                question: "Translate: I work every day.",
                correctAnswer: "ฉันทำงานทุกวัน",
            },
        ],
    },

    {
        id: "th-u6-l4-quiz",
        unitId: "th-unit-6",
        languageCode: "th",
        type: "quiz",
        title: "Unit 6 Quiz",
        description: "Final quiz on Thai daily routines.",
        orderIndex: 4,
        xpReward: 20,
        goal: {
            description: "Score 80% or higher on the Unit 6 quiz.",
            xpReward: 20,
            vocabIds: [
                "tuenNon",
                "kinKhao",
                "thamNgan",
                "nonLap",
                "aabNam",
                "duuTV",
            ],
            phraseIds: ["whatDoYouDoInMorning", "iWakeUpAt"],
        },
        activities: [
            {
                id: "u6-q-act-1",
                type: "multiple_choice",
                question: "ทำงาน (tham-ngan) means:",
                correctAnswer: "Work",
                wrongAnswers: ["Sleep", "Eat", "Exercise"],
            },
            {
                id: "u6-q-act-2",
                type: "translation",
                question: "Translate: I exercise every morning.",
                correctAnswer: "ฉันเล่นกีฬาทุกเช้า",
            },
            {
                id: "u6-q-act-3",
                type: "multiple_choice",
                question: "กินข้าวเช้า means:",
                correctAnswer: "Eat breakfast",
                wrongAnswers: ["Eat dinner", "Drink water", "Cook rice"],
            },
            {
                id: "u6-q-act-4",
                type: "fill_blank",
                question: "นอน___ ฝันดีนะ = Sleep well and sweet dreams.",
                correctAnswer: "หลับ",
            },
            {
                id: "u6-q-act-5",
                type: "multiple_choice",
                question: "ฉันตื่นนอนตอนหกโมงเช้า means:",
                correctAnswer: "I wake up at 6 in the morning.",
                wrongAnswers: [
                    "I sleep at 6 in the morning.",
                    "I eat at 6 in the morning.",
                    "I work at 6 in the morning.",
                ],
            },
        ],
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

export const getLessonById = (id: string): Lesson | undefined =>
    lessons.find((l) => l.id === id);

export const getLessonsByUnit = (unitId: string): Lesson[] =>
    lessons
        .filter((l) => l.unitId === unitId)
        .sort((a, b) => a.orderIndex - b.orderIndex);

export const getVocabById = (id: string): VocabItem | undefined => vocab[id];

export const getPhraseById = (id: string): PhraseItem | undefined =>
    phrases[id];

export const getVocabByIds = (ids: string[]): VocabItem[] =>
    ids.map((id) => vocab[id]).filter(Boolean) as VocabItem[];

export const getPhraseByIds = (ids: string[]): PhraseItem[] =>
    ids.map((id) => phrases[id]).filter(Boolean) as PhraseItem[];
