import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const { isSignedIn, isLoaded, signOut } = useAuth();

    if (!isLoaded) {
        return null;
    }

    if (!isSignedIn) {
        return <Redirect href="/onboarding" />;
    }

    return (
        <View className="flex-1 items-center justify-center gap-4">
            <Text className="text-h1 font-poppins-bold text-text-primary">
                KaoJaiThai
            </Text>
            <TouchableOpacity
                onPress={() => signOut()}
                className="bg-primary px-6 py-3 rounded-xl"
            >
                <Text className="text-white font-poppins-semibold">
                    Sign Out
                </Text>
            </TouchableOpacity>
        </View>
    );
}
