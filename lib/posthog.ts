import { usePostHog } from "posthog-react-native";

/**
 * Custom hook to access PostHog analytics
 * Use this throughout the app to track events and user behavior
 *
 * @example
 * const posthog = useAnalytics();
 * posthog.capture('lesson_completed', { lessonId: '123' });
 * posthog.screen('Home Screen', { language: 'thai' });
 * posthog.identify('user123', { email: 'user@example.com' });
 */
export function useAnalytics() {
    return usePostHog();
}
