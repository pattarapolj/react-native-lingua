import { images } from "@/constants/images";
import { useAnalytics } from "@/lib/posthog";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const bubbleShadow = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
};

export default function Onboarding() {
    const posthog = useAnalytics();

    useEffect(() => {
        // Track screen view when onboarding loads
        posthog.screen("Onboarding");
    }, []);

    const handleGetStarted = () => {
        // Track button click
        posthog.capture("onboarding_get_started_clicked");
        router.push("/sign-up");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            {/* Logo */}
            <View className="items-center justify-center mt-4">
                <Image
                    source={images.mascotHeaderLogo}
                    className="w-50 h-15"
                    contentFit="contain"
                />
            </View>

            {/* Hero Text */}
            <View className="px-8 mt-8">
                <Text className="text-[36px] font-poppins-bold text-text-primary leading-tight">
                    Your AI Thai{"\n"}
                    <Text className="text-primary">teacher</Text>
                    <Text className="text-text-primary">.</Text>
                </Text>
                <Text className="text-body-lg text-text-secondary mt-3 leading-relaxed">
                    Real conversations, personalized{"\n"}Thai lessons, anytime,
                    anywhere.
                </Text>
            </View>

            {/* Mascot + Speech Bubbles */}
            <View className="flex-1 items-center justify-center mt-4">
                {/* สวัสดี bubble - left */}
                <View
                    className="absolute bg-[#EEF2FF] rounded-2xl px-4 py-2.5 left-5 top-[28%]"
                    style={bubbleShadow}
                >
                    <Text className="text-[15px] font-poppins-semibold text-text-primary">
                        สวัสดี!
                    </Text>
                </View>

                {/* Hello bubble - top right */}
                <View
                    className="absolute bg-[#EEF2FF] rounded-2xl px-4 py-2.5 right-5 top-[10%]"
                    style={bubbleShadow}
                >
                    <Text className="text-[15px] font-poppins-semibold text-primary">
                        Hello!
                    </Text>
                </View>

                {/* Mascot */}
                <Image
                    source={images.mascotWelcome}
                    className="w-70 h-70"
                    contentFit="contain"
                />

                {/* ขอบคุณ bubble - bottom right */}
                <View
                    className="absolute rounded-2xl px-4 py-2.5 right-6 bottom-[18%] bg-[#FFF0F0]"
                    style={bubbleShadow}
                >
                    <Text className="text-[15px] font-poppins-semibold text-[#E53935]">
                        ขอบคุณ!
                    </Text>
                </View>
            </View>

            {/* Get Started Button */}
            <View className="px-6 pb-8">
                <TouchableOpacity
                    className="bg-primary rounded-2xl py-5 flex-row items-center justify-center"
                    activeOpacity={0.85}
                    onPress={handleGetStarted}
                >
                    <Text className="text-white text-[18px] font-poppins-bold mr-2">
                        Get Started
                    </Text>
                    <Text className="text-white text-[18px] font-poppins-bold">
                        ›
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
