# PostHog Event Tracking Documentation

This document lists all PostHog events and screen views tracked throughout the app.

## Screen Views

Screen views are automatically tracked when users navigate to different screens. Each includes contextual properties.

| Screen Name       | Properties                                                                                                  | Location                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------- |
| `Onboarding`      | -                                                                                                           | `app/onboarding.tsx`        |
| `Sign Up`         | -                                                                                                           | `app/(auth)/sign-up.tsx`    |
| `Sign In`         | -                                                                                                           | `app/(auth)/sign-in.tsx`    |
| `Language Select` | -                                                                                                           | `app/language-select.tsx`   |
| `Home`            | `language`, `languageName`, `dailyXP`, `dailyGoal`, `streak`, `progressPercentage`, `completedLessonsCount` | `app/(tabs)/index.tsx`      |
| `Learn`           | -                                                                                                           | `app/(tabs)/learn.tsx`      |
| `AI Teacher`      | -                                                                                                           | `app/(tabs)/ai-teacher.tsx` |
| `Chat`            | -                                                                                                           | `app/(tabs)/chat.tsx`       |
| `Profile`         | `userId`, `email`                                                                                           | `app/(tabs)/profile.tsx`    |

## User Events

### Authentication Events

#### Sign Up Flow

| Event Name                       | Properties | Triggered When                          | Location                 |
| -------------------------------- | ---------- | --------------------------------------- | ------------------------ |
| `sign_up_submitted`              | `email`    | User submits email/password             | `app/(auth)/sign-up.tsx` |
| `sign_up_error`                  | `error`    | Sign up fails (validation or API error) | `app/(auth)/sign-up.tsx` |
| `sign_up_verification_code_sent` | -          | Verification code sent successfully     | `app/(auth)/sign-up.tsx` |
| `sign_up_verification_failed`    | `error`    | Email verification fails                | `app/(auth)/sign-up.tsx` |
| `sign_up_success`                | `email`    | Sign up completes successfully          | `app/(auth)/sign-up.tsx` |

#### Sign In Flow

| Event Name                       | Properties | Triggered When                          | Location                 |
| -------------------------------- | ---------- | --------------------------------------- | ------------------------ |
| `sign_in_email_submitted`        | `email`    | User submits email for sign in          | `app/(auth)/sign-in.tsx` |
| `sign_in_error`                  | `error`    | Sign in fails (validation or API error) | `app/(auth)/sign-in.tsx` |
| `sign_in_verification_code_sent` | -          | Verification code sent successfully     | `app/(auth)/sign-in.tsx` |
| `sign_in_verification_failed`    | `error`    | Email verification fails                | `app/(auth)/sign-in.tsx` |
| `sign_in_success`                | `email`    | Sign in completes successfully          | `app/(auth)/sign-in.tsx` |

#### Social Authentication

| Event Name            | Properties                                                     | Triggered When                 | Location                                           |
| --------------------- | -------------------------------------------------------------- | ------------------------------ | -------------------------------------------------- |
| `social_auth_clicked` | `provider` (google/facebook/apple), `screen` (sign_in/sign_up) | User clicks social auth button | `app/(auth)/sign-in.tsx`, `app/(auth)/sign-up.tsx` |

#### Sign Out

| Event Name | Properties | Triggered When | Location                 |
| ---------- | ---------- | -------------- | ------------------------ |
| `sign_out` | `userId`   | User signs out | `app/(tabs)/profile.tsx` |

### Language Selection Events

| Event Name           | Properties                     | Triggered When                    | Location                  |
| -------------------- | ------------------------------ | --------------------------------- | ------------------------- |
| `language_searched`  | `searchTerm`                   | User searches for a language      | `app/language-select.tsx` |
| `language_selected`  | `languageCode`, `languageName` | User selects a language from list | `app/language-select.tsx` |
| `language_confirmed` | `languageCode`, `languageName` | User confirms language selection  | `app/language-select.tsx` |

### Navigation Events

| Event Name                       | Properties                     | Triggered When                          | Location                      |
| -------------------------------- | ------------------------------ | --------------------------------------- | ----------------------------- |
| `onboarding_get_started_clicked` | -                              | User clicks "Get Started" on onboarding | `app/onboarding.tsx`          |
| `continue_learning_clicked`      | `language`, `currentUnit`      | User clicks "Continue Learning" on home | `app/(tabs)/index.tsx`        |
| `tab_switched`                   | `fromTab`, `toTab`, `tabLabel` | User switches between bottom tabs       | `components/CustomTabBar.tsx` |

## User Identification

User identification happens at two key points:

1. **After Sign Up** - User is identified with:
    - User ID
    - Email
    - Sign up method

2. **After Sign In** - User is identified with:
    - Session ID
    - Email
    - Sign in method

**Reset on Sign Out** - User identity is reset when they sign out.

## Implementation Details

### Using PostHog in Components

```typescript
import { useAnalytics } from '@/lib/posthog';

function MyComponent() {
    const posthog = useAnalytics();

    useEffect(() => {
        // Track screen view
        posthog.screen('My Screen', { property: 'value' });
    }, []);

    const handleAction = () => {
        // Track custom event
        posthog.capture('action_performed', {
            actionType: 'button_click',
            value: 123
        });
    };

    return (
        <TouchableOpacity onPress={handleAction}>
            <Text>Click Me</Text>
        </TouchableOpacity>
    );
}
```

### User Identification

```typescript
// Identify user after sign up/sign in
posthog.identify(userId, {
    email: user.email,
    name: user.name,
    // ... other user properties
});

// Reset identity on sign out
posthog.reset();
```

## Best Practices

1. **Screen Views**: Always track when a screen is mounted using `useEffect` with an empty dependency array
2. **Event Properties**: Include relevant context to make events actionable
3. **Error Tracking**: Always capture error details for debugging
4. **User Identification**: Identify users after successful authentication
5. **Privacy**: Avoid tracking sensitive information (passwords, payment details, etc.)

## PostHog Dashboard

All events can be viewed at: https://eu.i.posthog.com

### Recommended Insights

1. **Sign Up Funnel**:
    - `Onboarding` screen view → `sign_up_submitted` → `sign_up_verification_code_sent` → `sign_up_success`

2. **User Engagement**:
    - Track daily active users by `Home` screen views
    - Monitor `tab_switched` events to see most popular features

3. **Language Selection**:
    - Analyze which languages are most frequently selected
    - Track search behavior to optimize language discovery

4. **Authentication Success Rate**:
    - Compare `sign_in_email_submitted` vs `sign_in_success`
    - Identify common error patterns from `sign_in_error` events

## Adding New Events

When adding new events:

1. Update this documentation
2. Use descriptive event names (verb_noun_action format)
3. Include relevant properties for context
4. Test events in PostHog dashboard before deploying
