import AppleIcon from "@/assets/icons/apple.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import VerificationModal from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { useSignUp } from "@clerk/expo";
import { AntDesign, Ionicons } from "@expo/vector-icons";
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
const PASSWORD_MIN_LENGTH = 8;

export default function SignUp() {
    const { signUp } = useSignUp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSignUp = async () => {
        const trimmedEmail = email.trim();
        let valid = true;
        if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
            setEmailError("Please enter a valid email address.");
            valid = false;
        } else {
            setEmail(trimmedEmail);
            setEmailError("");
        }
        if (password.length < PASSWORD_MIN_LENGTH) {
            setPasswordError(
                `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`,
            );
            valid = false;
        } else {
            setPasswordError("");
        }
        if (!valid) return;

        const { error } = await signUp.password({
            emailAddress: trimmedEmail,
            password,
        });
        if (error) {
            setEmailError(error.message ?? "Something went wrong.");
            return;
        }
        const { error: sendError } = await signUp.verifications.sendEmailCode();
        if (sendError) {
            setEmailError(
                sendError.message ?? "Failed to send verification code.",
            );
            return;
        }
        setModalVisible(true);
    };

    const handleVerify = async (
        code: string,
    ): Promise<{ success: boolean; error?: string }> => {
        const { error } = await signUp.verifications.verifyEmailCode({ code });
        if (error) {
            return {
                success: false,
                error: error.message ?? "Invalid code. Please try again.",
            };
        }
        if (signUp.status === "complete") {
            await signUp.finalize({
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
        await signUp.verifications.sendEmailCode();
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
                        Create your account
                    </Text>
                    <Text className="text-body-md text-text-secondary mt-1">
                        Start your language journey today
                    </Text>
                </View>

                {/* Mascot */}
                <View
                    className="items-center mt-4"
                    style={{ marginBottom: -25, zIndex: 2 }}
                >
                    <Image
                        source={images.mascotAuth}
                        style={{ width: 160, height: 160 }}
                        contentFit="contain"
                    />
                </View>

                {/* Form */}
                <View className="px-6 gap-3.5" style={{ zIndex: 1 }}>
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
                            placeholder="alex@gmail.com"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
                    {emailError ? (
                        <Text className="text-xs font-poppins text-red-500 mt-1 ml-1">
                            {emailError}
                        </Text>
                    ) : null}

                    {/* Password */}
                    <View className="bg-white rounded-2xl border-[1.5px] border-border px-4 py-3">
                        <Text className="text-xs font-poppins text-gray-400 mb-0.5">
                            Password
                        </Text>
                        <View className="flex-row items-center">
                            <TextInput
                                style={{
                                    flex: 1,
                                    fontSize: 16,
                                    fontFamily: "Poppins-Regular",
                                    color: "#0D132B",
                                    padding: 0,
                                }}
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text);
                                    if (passwordError) setPasswordError("");
                                }}
                                secureTextEntry={!showPassword}
                                placeholder="••••••••••"
                                placeholderTextColor="#9CA3AF"
                            />
                            <TouchableOpacity
                                onPress={() => setShowPassword((v) => !v)}
                                className="pl-2"
                                activeOpacity={0.7}
                            >
                                <Ionicons
                                    name={showPassword ? "eye-off" : "eye"}
                                    size={20}
                                    color="#9CA3AF"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {passwordError ? (
                        <Text className="text-xs font-poppins text-red-500 mt-1 ml-1">
                            {passwordError}
                        </Text>
                    ) : null}
                </View>

                {/* Sign Up Button */}
                <View className="px-6 mt-6">
                    <TouchableOpacity
                        className="bg-primary rounded-2xl py-4.5 items-center"
                        onPress={handleSignUp}
                        activeOpacity={0.85}
                    >
                        <Text className="text-white text-[18px] font-poppins-bold">
                            Sign Up
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
                        Already have an account?{" "}
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.push("/sign-in")}
                        activeOpacity={0.7}
                    >
                        <Text className="text-body-md font-poppins-semibold text-primary">
                            Log in
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
