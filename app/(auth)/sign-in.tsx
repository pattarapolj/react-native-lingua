import AppleIcon from "@/assets/icons/apple.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSignIn } from "@clerk/expo";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignIn() {
    const { signIn } = useSignIn();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const handleSignIn = async () => {
        const trimmed = email.trim();
        if (!trimmed || !EMAIL_REGEX.test(trimmed)) {
            setEmailError("Please enter a valid email address.");
            return;
        }
        setEmail(trimmed);
        setEmailError("");

        const { error } = await signIn.emailCode.sendCode({
            emailAddress: trimmed,
        });
        if (error) {
            setEmailError(error.message ?? "Something went wrong.");
            return;
        }
        setModalVisible(true);
    };

    const handleVerify = async (
        code: string,
    ): Promise<{ success: boolean; error?: string }> => {
        const { error } = await signIn.emailCode.verifyCode({ code });
        if (error) {
            return {
                success: false,
                error: error.message ?? "Invalid code. Please try again.",
            };
        }
        if (signIn.status === "complete") {
            await signIn.finalize({
                navigate: ({ decorateUrl }) => {
                    router.replace(decorateUrl("/") as "/");
                },
            });
            return { success: true };
        }
        return {
            success: false,
            error: "Verification incomplete. Please try again.",
        };
    };

    const handleResend = async () => {
        await signIn.emailCode.sendCode({ emailAddress: email });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* Back Button */}
            <TouchableOpacity
                className="ml-5 mt-2 w-9 h-9 items-center justify-center"
                onPress={() => router.back()}
                activeOpacity={0.7}
            >
                <AntDesign name="left" size={20} color="#0D132B" />
            </TouchableOpacity>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
                keyboardShouldPersistTaps="handled"
            >
                {/* Header */}
                <View className="px-6 mt-2">
                    <Text className="text-[28px] font-poppins-bold text-text-primary leading-tight">
                        Welcome back
                    </Text>
                    <Text className="text-body-md text-text-secondary mt-1">
                        Continue your language journey today
                    </Text>
                </View>

                {/* Mascot */}
                <View className="items-center mt-4 mb-2">
                    <Image
                        source={images.mascotAuth}
                        style={{ width: 160, height: 160 }}
                        contentFit="contain"
                    />
                </View>

                {/* Form */}
                <View className="px-6">
                    {/* Email */}
                    <View className="bg-white rounded-2xl border-[1.5px] border-border px-4 py-3">
                        <Text className="text-xs font-poppins text-gray-400 mb-0.5">
                            Email
                        </Text>
                        <TextInput
                            style={{
                                fontSize: 16,
                                fontFamily: "Poppins-Regular",
                                color: "#0D132B",
                                padding: 0,
                            }}
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                                if (emailError) setEmailError("");
                            }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="john.doe@email.com"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
                    {emailError ? (
                        <Text className="text-xs font-poppins text-red-500 mt-1 ml-1">
                            {emailError}
                        </Text>
                    ) : null}
                </View>

                {/* Sign In Button */}
                <View className="px-6 mt-6">
                    <TouchableOpacity
                        className="bg-primary rounded-2xl py-4.5 items-center"
                        onPress={handleSignIn}
                        activeOpacity={0.85}
                    >
                        <Text className="text-white text-[18px] font-poppins-bold">
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Divider */}
                <View className="flex-row items-center mx-6 my-5">
                    <View className="flex-1 h-px bg-border" />
                    <Text className="mx-3 text-body-sm font-poppins text-gray-400">
                        or continue with
                    </Text>
                    <View className="flex-1 h-px bg-border" />
                </View>

                {/* Social Buttons */}
                <View className="px-6 gap-3">
                    <SocialButton
                        Icon={GoogleIcon}
                        label="Continue with Google"
                    />
                    <SocialButton
                        Icon={FacebookIcon}
                        label="Continue with Facebook"
                    />
                    <SocialButton
                        Icon={AppleIcon}
                        label="Continue with Apple"
                    />
                </View>

                {/* Footer */}
                <View className="flex-row justify-center items-center mt-7">
                    <Text className="text-body-md font-poppins text-text-secondary">
                        Don&apos;t have an account?{" "}
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.push("/sign-up")}
                        activeOpacity={0.7}
                    >
                        <Text className="text-body-md font-poppins-semibold text-primary">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <VerificationModal
                visible={modalVisible}
                email={email}
                onClose={() => setModalVisible(false)}
                onVerify={handleVerify}
                onResend={handleResend}
            />
        </SafeAreaView>
    );
}

function SocialButton({
    Icon,
    label,
}: {
    Icon: React.FC<{ width?: number; height?: number }>;
    label: string;
}) {
    return (
        <TouchableOpacity
            className="flex-row items-center border-[1.5px] border-border rounded-2xl py-3.5 px-5 gap-3.5 bg-white"
            activeOpacity={0.7}
        >
            <Icon width={22} height={22} />
            <Text className="text-[15px] font-poppins-medium text-text-primary">
                {label}
            </Text>
        </TouchableOpacity>
    );
}
