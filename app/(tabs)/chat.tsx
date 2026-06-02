import { useAnalytics } from "@/lib/posthog";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function ChatScreen() {
    const posthog = useAnalytics();

    useEffect(() => {
        posthog.screen("Chat");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-h3 font-poppins-bold text-text-primary">
                Chat
            </Text>
        </View>
    );
}
