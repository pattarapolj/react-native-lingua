import { useAnalytics } from "@/lib/posthog";
import { useAuth, useUser } from "@clerk/expo";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
    const { signOut } = useAuth();
    const { user } = useUser();
    const router = useRouter();
    const posthog = useAnalytics();

    useEffect(() => {
        posthog.screen("Profile", {
            userId: user?.id || null,
            email: user?.primaryEmailAddress?.emailAddress || null,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSignOut = async () => {
        posthog.capture("sign_out", {
            userId: user?.id || null,
        });
        posthog.reset();
        await signOut();
        router.replace("/onboarding");
    };

    return (
        <View className="flex-1 bg-background">
            <View className="px-6 pt-16 pb-8">
                <Text className="text-h2 font-poppins-bold text-text-primary">
                    Profile
                </Text>
            </View>

            <View className="px-6 gap-6">
                {/* User info */}
                <View className="bg-surface rounded-2xl p-6 gap-3">
                    <View>
                        <Text className="text-body-sm font-poppins-medium text-text-secondary">
                            Email
                        </Text>
                        <Text className="text-body-lg font-poppins-semibold text-text-primary mt-1">
                            {user?.primaryEmailAddress?.emailAddress ||
                                "Not available"}
                        </Text>
                    </View>
                    {user?.firstName && (
                        <View>
                            <Text className="text-body-sm font-poppins-medium text-text-secondary">
                                Name
                            </Text>
                            <Text className="text-body-lg font-poppins-semibold text-text-primary mt-1">
                                {user.firstName} {user.lastName || ""}
                            </Text>
                        </View>
                    )}
                </View>

                {/* Sign out button */}
                <TouchableOpacity
                    onPress={handleSignOut}
                    className="bg-error rounded-2xl py-4 items-center"
                    activeOpacity={0.8}
                >
                    <Text className="text-body-lg font-poppins-bold text-white">
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
