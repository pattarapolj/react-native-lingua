import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/theme";

const CIRCLE_SIZE = 52;
const TAB_BAR_HEIGHT = 64;

const SPRING_CONFIG = {
    damping: 18,
    stiffness: 130,
    mass: 0.8,
};

type TabConfig = {
    name: string;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    iconActive: keyof typeof Ionicons.glyphMap;
};

const TAB_CONFIG: TabConfig[] = [
    {
        name: "index",
        label: "Home",
        icon: "home-outline",
        iconActive: "home",
    },
    {
        name: "learn",
        label: "Learn",
        icon: "book-outline",
        iconActive: "book",
    },
    {
        name: "ai-teacher",
        label: "AI Teacher",
        icon: "sparkles-outline",
        iconActive: "sparkles",
    },
    {
        name: "chat",
        label: "Chat",
        icon: "chatbubble-outline",
        iconActive: "chatbubble",
    },
    {
        name: "profile",
        label: "Profile",
        icon: "person-outline",
        iconActive: "person",
    },
];

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets();
    const tabCount = state.routes.length;

    const tabBarWidth = useSharedValue(0);
    const circleX = useSharedValue(0);

    useEffect(() => {
        circleX.value = withSpring(state.index, SPRING_CONFIG);
    }, [state.index, circleX]);

    const circleAnimatedStyle = useAnimatedStyle(() => {
        const tabWidth = tabBarWidth.value / tabCount;
        const x = tabWidth * circleX.value + tabWidth / 2 - CIRCLE_SIZE / 2;
        return { transform: [{ translateX: x }] };
    });

    return (
        <View className="bg-background border-t border-border">
            {/* Content row — fixed height so the circle top calculation stays correct */}
            <View
                className="flex-row items-center relative"
                style={{ height: TAB_BAR_HEIGHT }}
                onLayout={(e) => {
                    tabBarWidth.value = e.nativeEvent.layout.width;
                }}
            >
                {/* Animated active circle — keeps StyleSheet because it's an Animated.View */}
                <Animated.View
                    style={[styles.activeCircle, circleAnimatedStyle]}
                    pointerEvents="none"
                />

                {/* Tab items */}
                {state.routes.map((route, index) => {
                    const isActive = state.index === index;
                    const tab = TAB_CONFIG.find((t) => t.name === route.name);

                    if (!tab) return null;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!isActive && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route.key}
                            className="flex-1 items-center justify-center gap-0.5"
                            style={{ height: TAB_BAR_HEIGHT }}
                            onPress={onPress}
                            activeOpacity={0.7}
                        >
                            <Ionicons
                                name={isActive ? tab.iconActive : tab.icon}
                                size={22}
                                color={
                                    isActive
                                        ? colors.background
                                        : colors.textSecondary
                                }
                            />
                            {!isActive && (
                                <Text className="text-caption font-poppins-medium text-text-secondary">
                                    {tab.label}
                                </Text>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Safe area spacer — dynamic value requires inline style */}
            <View style={{ height: insets.bottom }} />
        </View>
    );
}

const styles = StyleSheet.create({
    activeCircle: {
        position: "absolute",
        top: (TAB_BAR_HEIGHT - CIRCLE_SIZE) / 2,
        left: 0,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: colors.primary,
    },
});
