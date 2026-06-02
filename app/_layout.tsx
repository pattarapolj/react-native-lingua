import "../global.css";

import { ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PostHogProvider } from "posthog-react-native";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
const postHogApiKey = process.env.EXPO_PUBLIC_POSTHOG_API_KEY!;
const postHogHost =
    process.env.EXPO_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

if (!publishableKey) {
    throw new Error("Add your Clerk Publishable Key to the .env file");
}

if (!postHogApiKey) {
    throw new Error("Add your PostHog API Key to the .env file");
}

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync().catch(() => {});
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <PostHogProvider
            apiKey={postHogApiKey}
            options={{
                host: postHogHost,
            }}
        >
            <ClerkProvider
                publishableKey={publishableKey}
                tokenCache={tokenCache}
            >
                <Stack
                    screenOptions={{
                        headerShown: false,
                        gestureEnabled: false,
                    }}
                />
            </ClerkProvider>
        </PostHogProvider>
    );
}
