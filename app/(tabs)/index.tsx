import { useUser } from "@clerk/expo";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { getLanguageByCode } from "@/data/languages";
import { units } from "@/data/units";
import { useAnalytics } from "@/lib/posthog";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";

// Language-specific greetings
const greetings: Record<string, string> = {
    th: "สวัสดี",
    ja: "こんにちは",
    es: "Hola",
};

export default function HomeScreen() {
    const { user } = useUser();
    const { selectedLanguage } = useLanguageStore();
    const { dailyXP, dailyGoal, streak, completedLessons } = useProgressStore();
    const posthog = useAnalytics();

    // Get current language info
    const language = selectedLanguage
        ? getLanguageByCode(selectedLanguage)
        : null;

    // Get current unit based on progress
    // Find the first unit that has incomplete lessons
    const currentUnit =
        units
            .filter((u) => u.languageCode === selectedLanguage)
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .find((unit) => {
                // Check if all lessons in this unit are completed
                const allLessonsCompleted = unit.lessonIds.every((lessonId) =>
                    completedLessons.has(lessonId),
                );
                return !allLessonsCompleted;
            }) ||
        units.find(
            (u) => u.languageCode === selectedLanguage && u.orderIndex === 1,
        );

    // Calculate progress percentage
    const progressPercentage = (dailyXP / dailyGoal) * 100;

    // Get user's first name
    const firstName = user?.firstName || "User";

    // Get greeting based on selected language
    const greeting = selectedLanguage
        ? greetings[selectedLanguage] || "Hello"
        : "Hello";

    // Track screen view and user progress
    useEffect(() => {
        posthog.screen("Home", {
            language: selectedLanguage,
            languageName: language?.name || null,
            dailyXP,
            dailyGoal,
            streak,
            progressPercentage: Math.round(progressPercentage),
            completedLessonsCount: completedLessons.size,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handle continue learning click
    const handleContinueLearning = () => {
        posthog.capture("continue_learning_clicked", {
            language: selectedLanguage,
            currentUnit: currentUnit?.orderIndex || null,
        });
        router.push("/(tabs)/learn");
    };

    // Today's plan items
    const todaysPlan = [
        {
            id: "1",
            icon: "book",
            title: "Lesson",
            subtitle: "At the café",
            completed: true,
        },
        {
            id: "2",
            icon: "headphones",
            title: "AI Conversation",
            subtitle: "Talk about your day",
            completed: false,
        },
        {
            id: "3",
            icon: "message-square",
            title: "New words",
            subtitle: "10 words",
            completed: false,
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 24 }}
            >
                {/* Header */}
                <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
                    <View className="flex-row items-center gap-3">
                        {language?.flag && (
                            <Image
                                source={{ uri: language.flag }}
                                className="w-10 h-10 rounded-full"
                            />
                        )}
                        <Text className="text-h3 font-poppins-semibold">
                            {greeting}, {firstName}! 👋
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-4">
                        <View className="flex-row items-center gap-1">
                            <Image
                                source={images.streakFire}
                                className="w-6 h-6"
                            />
                            <Text className="text-h4 font-poppins-bold text-streak">
                                {streak}
                            </Text>
                        </View>
                        <Pressable>
                            <Feather name="bell" size={24} color="#0D132B" />
                        </Pressable>
                    </View>
                </View>

                {/* Daily Goal Card */}
                <View className="mx-5 mb-5 p-5 bg-surface rounded-2xl">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-1">
                            <Text className="text-body-md font-poppins-medium text-text-secondary mb-2">
                                Daily goal
                            </Text>
                            <Text className="text-h1 font-poppins-bold text-text-primary">
                                {dailyXP}{" "}
                                <Text className="text-h3 text-text-secondary">
                                    / {dailyGoal} XP
                                </Text>
                            </Text>
                            {/* Progress Bar */}
                            <View className="mt-4 h-3 bg-border rounded-full overflow-hidden">
                                <View
                                    style={{
                                        width: `${progressPercentage}%`,
                                    }}
                                    className="h-full bg-streak rounded-full"
                                />
                            </View>
                        </View>
                        <Image
                            source={images.treasure}
                            className="w-24 h-24 ml-4"
                            resizeMode="contain"
                        />
                    </View>
                </View>

                {/* Continue Learning Card */}
                <Pressable
                    className="mx-5 mb-5 p-5 bg-primary rounded-2xl overflow-hidden"
                    onPress={handleContinueLearning}
                >
                    <View className="flex-row items-center justify-between">
                        <View className="flex-1 z-10">
                            <Text className="text-body-md font-poppins-medium text-white/80 mb-1">
                                Continue learning
                            </Text>
                            <Text className="text-h2 font-poppins-bold text-white mb-2">
                                {language?.name || "Thai"}
                            </Text>
                            <Text className="text-body-md font-poppins-medium text-white/90 mb-4">
                                A1 · Unit {currentUnit?.orderIndex || 3}
                            </Text>
                            <View className="bg-white self-start px-6 py-3 rounded-2xl">
                                <Text className="text-body-md font-poppins-semibold text-primary">
                                    Continue
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={images.palace}
                            className="w-36 h-36 absolute -right-4 bottom-0"
                            resizeMode="contain"
                        />
                    </View>
                </Pressable>

                {/* Today's Plan */}
                <View className="px-5 mb-5">
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-h3 font-poppins-semibold text-text-primary">
                            Today&apos;s plan
                        </Text>
                        <Pressable>
                            <Text className="text-body-md font-poppins-semibold text-primary">
                                View all
                            </Text>
                        </Pressable>
                    </View>

                    {/* Lesson Items */}
                    {todaysPlan.map((item, index) => (
                        <Pressable
                            key={item.id}
                            className={`flex-row items-center justify-between py-4 ${
                                index < todaysPlan.length - 1
                                    ? "border-b border-border"
                                    : ""
                            }`}
                        >
                            <View className="flex-row items-center gap-4">
                                <View
                                    style={{
                                        backgroundColor:
                                            item.icon === "book"
                                                ? "#6C4EF5"
                                                : item.icon === "headphones"
                                                  ? "#6C4EF5"
                                                  : "#FF4D4F",
                                    }}
                                    className="w-14 h-14 rounded-2xl items-center justify-center"
                                >
                                    <Feather
                                        name={
                                            item.icon as
                                                | "book"
                                                | "headphones"
                                                | "message-square"
                                        }
                                        size={24}
                                        color="white"
                                    />
                                </View>
                                <View>
                                    <Text className="text-body-lg font-poppins-semibold text-text-primary mb-1">
                                        {item.title}
                                    </Text>
                                    <Text className="text-body-sm font-poppins-regular text-text-secondary">
                                        {item.subtitle}
                                    </Text>
                                </View>
                            </View>
                            {item.completed ? (
                                <View className="w-6 h-6 rounded-full bg-success items-center justify-center">
                                    <Feather
                                        name="check"
                                        size={16}
                                        color="white"
                                    />
                                </View>
                            ) : (
                                <View className="w-6 h-6 rounded-full border-2 border-border" />
                            )}
                        </Pressable>
                    ))}
                </View>

                {/* Next Up Card */}
                <View className="mx-5 p-5 bg-surface rounded-2xl">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-1">
                            <Text className="text-body-sm font-poppins-medium text-text-secondary mb-1">
                                Next up
                            </Text>
                            <Text className="text-h3 font-poppins-semibold text-text-primary mb-1">
                                AI Video Call
                            </Text>
                            <Text className="text-body-md font-poppins-regular text-text-secondary">
                                Practice speaking
                            </Text>
                        </View>
                        <View className="flex-row items-center gap-3">
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
                                }}
                                className="w-16 h-16 rounded-full"
                            />
                            <View className="w-12 h-12 rounded-full bg-success items-center justify-center">
                                <Feather name="video" size={20} color="white" />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
