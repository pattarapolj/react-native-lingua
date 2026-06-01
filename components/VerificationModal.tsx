import { useEffect, useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

interface Props {
    visible: boolean;
    email: string;
    onClose: () => void;
    onVerify: (code: string) => Promise<{ success: boolean; error?: string }>;
    onResend: () => Promise<void>;
}

export default function VerificationModal({
    visible,
    email,
    onClose,
    onVerify,
    onResend,
}: Props) {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [isVerifying, setIsVerifying] = useState(false);
    const [verifyError, setVerifyError] = useState("");
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const focusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (visible) {
            setCode(["", "", "", "", "", ""]);
            setIsVerifying(false);
            setVerifyError("");
            focusTimerRef.current = setTimeout(
                () => inputRefs.current[0]?.focus(),
                350,
            );
        }
        return () => {
            if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
        };
    }, [visible]);

    const handleResendCode = async () => {
        setCode(["", "", "", "", "", ""]);
        setVerifyError("");
        await onResend();
        setTimeout(() => inputRefs.current[0]?.focus(), 50);
    };

    const handleChange = async (text: string, index: number) => {
        if (isVerifying) return;
        const digits = text.replace(/[^0-9]/g, "");
        const newCode = [...code];

        if (!digits) {
            newCode[index] = "";
            setCode(newCode);
            return;
        }

        if (digits.length > 1) {
            for (let i = 0; i < digits.length && index + i < newCode.length; i++) {
                newCode[index + i] = digits[i];
            }
        } else {
            newCode[index] = digits;
        }
        setCode(newCode);

        if (index < 5) {
            const nextIndex = Math.min(index + digits.length, 5);
            if (!newCode.every((d) => d !== "")) {
                inputRefs.current[nextIndex]?.focus();
            }
        }

        if (newCode.every((d) => d !== "")) {
            setIsVerifying(true);
            setVerifyError("");
            const result = await onVerify(newCode.join(""));
            if (result.success) {
                onClose();
            } else {
                setIsVerifying(false);
                setVerifyError(
                    result.error ?? "Invalid code. Please try again.",
                );
                setCode(["", "", "", "", "", ""]);
                setTimeout(() => inputRefs.current[0]?.focus(), 50);
            }
        }
    };

    const handleKeyPress = (
        e: { nativeEvent: { key: string } },
        index: number,
    ) => {
        if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
            const newCode = [...code];
            newCode[index - 1] = "";
            setCode(newCode);
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            {/* Dim backdrop */}
            <TouchableWithoutFeedback onPress={onClose}>
                <View className="flex-1 bg-black/45" />
            </TouchableWithoutFeedback>

            {/* Sheet rises above keyboard */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "position" : "height"}
                style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
            >
                <View className="bg-white rounded-tl-[28px] rounded-tr-[28px] px-6 pt-4 pb-11 items-center">
                    {/* Handle bar */}
                    <View className="w-10 h-1 bg-border rounded-xs mb-7" />

                    <Text className="text-[22px] font-poppins-bold text-text-primary mb-2.5">
                        Check your email
                    </Text>
                    <Text className="text-body-md font-poppins text-text-secondary text-center leading-5.5 mb-8">
                        We sent a 6-digit verification code to{"\n"}
                        <Text className="font-poppins-semibold text-text-primary">
                            {email || "your email"}
                        </Text>
                    </Text>

                    {/* Code boxes */}
                    <View className="flex-row gap-2.5 mb-7">
                        {code.map((digit, i) => (
                            <TextInput
                                key={i}
                                ref={(ref) => {
                                    inputRefs.current[i] = ref;
                                }}
                                style={[
                                    {
                                        width: 48,
                                        height: 58,
                                        borderRadius: 14,
                                        borderWidth: 1.5,
                                        borderColor: "#E5E7EB",
                                        fontSize: 24,
                                        fontFamily: "Poppins-Bold",
                                        color: "#0D132B",
                                        textAlign: "center",
                                        backgroundColor: "#F6F7FB",
                                    },
                                    digit
                                        ? {
                                              borderColor: "#6C4EF5",
                                              backgroundColor: "#fff",
                                          }
                                        : null,
                                ]}
                                value={digit}
                                onChangeText={(text) => handleChange(text, i)}
                                onKeyPress={(e) => handleKeyPress(e, i)}
                                keyboardType="number-pad"
                                maxLength={1}
                                textContentType="oneTimeCode"
                                selectTextOnFocus
                                editable={!isVerifying}
                                accessibilityLabel={`Digit ${i + 1} of ${code.length}`}
                                accessibilityRole="none"
                            />
                        ))}
                    </View>

                    {verifyError ? (
                        <Text className="text-body-sm font-poppins text-red-500 mb-3 text-center">
                            {verifyError}
                        </Text>
                    ) : null}

                    <View className="flex-row items-center mt-2">
                        <Text className="text-body-sm font-poppins text-text-secondary">
                            Didn&apos;t receive it?{" "}
                        </Text>
                        <TouchableOpacity
                            onPress={handleResendCode}
                            activeOpacity={0.7}
                            accessibilityRole="button"
                            accessibilityLabel="Resend verification code"
                        >
                            <Text className="text-body-sm font-poppins-semibold text-primary">
                                Resend code
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={onClose}
                        style={{ paddingVertical: 8, paddingHorizontal: 32 }}
                    >
                        <Text className="text-body-md font-poppins-medium text-gray-400">
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}
