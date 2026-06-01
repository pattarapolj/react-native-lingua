import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import type { Language, LanguageCode } from "@/types/learning";

export default function LanguageSelect() {
    const router = useRouter();
    const { setSelectedLanguage } = useLanguageStore();
    const [selectedCode, setSelectedCode] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    const filtered = languages.filter((lang) =>
        lang.name.toLowerCase().includes(search.toLowerCase()),
    );

    const selectedLanguage = languages.find((l) => l.code === selectedCode);

    function handleConfirm() {
        if (!selectedCode) return;
        setSelectedLanguage(selectedCode as LanguageCode);
        router.replace("/");
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            {/* Header */}
            <View className="flex-row items-center px-5 pt-2 pb-4">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-9 h-9 items-center justify-center"
                >
                    <Ionicons name="chevron-back" size={24} color="#0d132b" />
                </TouchableOpacity>
                <Text className="flex-1 text-center font-semibold text-[18px] text-text-primary">
                    Choose a language
                </Text>
                <View className="w-9" />
            </View>

            {/* Search bar */}
            <View className="px-5 mb-5">
                <View className="flex-row items-center bg-surface rounded-full px-4 py-3 gap-3">
                    <Ionicons name="search-outline" size={18} color="#6b7280" />
                    <TextInput
                        placeholder="Search languages"
                        placeholderTextColor="#6b7280"
                        value={search}
                        onChangeText={setSearch}
                        className="flex-1 font-regular text-body-md text-text-primary"
                        style={{ padding: 0 }}
                    />
                </View>
            </View>

            {/* Language list */}
            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
            >
                <Text className="font-bold text-[16px] text-text-primary mb-3">
                    Popular
                </Text>

                {filtered.map((lang, index) => {
                    const isSelected = selectedCode === lang.code;
                    const isLast = index === filtered.length - 1;

                    return (
                        <LanguageItem
                            key={lang.code}
                            lang={lang}
                            isSelected={isSelected}
                            isLast={isLast}
                            onPress={() => setSelectedCode(lang.code)}
                        />
                    );
                })}

                {filtered.length === 0 && (
                    <Text className="text-center text-body-md text-text-secondary mt-8">
                        No languages found
                    </Text>
                )}

                <View className="h-4" />
            </ScrollView>

            {/* Bottom: Confirm button + Earth image */}
            <View>
                <View className="px-5 pb-6 pt-3">
                    <TouchableOpacity
                        className={`bg-primary rounded-2xl py-[18px] items-center justify-center ${!selectedCode ? "opacity-50" : ""}`}
                        disabled={!selectedCode}
                        onPress={handleConfirm}
                        activeOpacity={0.85}
                    >
                        <Text className="text-white text-[18px] font-bold font-poppins-bold">
                            {selectedLanguage
                                ? `Start learning ${selectedLanguage.name}`
                                : "Select a language"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={images.thai}
                    className="w-full h-44"
                    resizeMode="cover"
                />
            </View>
        </SafeAreaView>
    );
}

function LanguageItem({
    lang,
    isSelected,
    isLast,
    onPress,
}: {
    lang: Language;
    isSelected: boolean;
    isLast: boolean;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className={`flex-row items-center px-4 py-3.5 rounded-2xl ${
                isSelected
                    ? "bg-primary/10 border-[1.5px] border-primary"
                    : !isLast
                      ? "border-b border-border"
                      : ""
            }`}
        >
            {/* Flag */}
            <Image
                source={{ uri: lang.flag }}
                className="w-11 h-11 rounded-full"
            />

            {/* Text */}
            <View className="flex-1 ml-4">
                <Text className="font-semibold text-[16px] text-text-primary">
                    {lang.name}
                </Text>
                <Text className="text-body-sm text-text-secondary">
                    {lang.learners} learners
                </Text>
            </View>

            {/* Indicator */}
            {isSelected ? (
                <View className="w-7 h-7 rounded-full bg-primary items-center justify-center">
                    <Ionicons name="checkmark" size={16} color="#fff" />
                </View>
            ) : (
                <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            )}
        </TouchableOpacity>
    );
}
