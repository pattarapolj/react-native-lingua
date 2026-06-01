---
name: clerk
description:
    Clerk authentication router. Use when user asks about adding authentication,
    setting up Clerk, custom sign-in flows, Swift or native iOS auth, native Android
    auth, Next.js patterns, React patterns, Vue patterns, Nuxt patterns, Astro patterns,
    TanStack Start patterns, Expo patterns, React Router patterns, Chrome Extension patterns,
    organizations, billing, subscriptions, payments, pricing, plans, seat-based pricing,
    feature entitlements, syncing users, or testing. Automatically routes to the specific
    skill based on their task.
license: MIT
metadata:
    version: 2.0.0
---

# Clerk Skills Router

## Version Detection

Check `package.json` to determine the Clerk SDK version. This determines which patterns to use:

| Package                                | Core 2 (LTS until Jan 2027) | Current  |
| -------------------------------------- | --------------------------- | -------- |
| `@clerk/nextjs`                        | v5–v6                       | v7+      |
| `@clerk/react` or `@clerk/clerk-react` | v5–v6                       | v7+      |
| `@clerk/expo` or `@clerk/clerk-expo`   | v1–v2                       | v3+      |
| `@clerk/react-router`                  | v1–v2                       | v3+      |
| `@clerk/tanstack-react-start`          | < v0.26.0                   | v0.26.0+ |

**Default to current** if the version is unclear or the project is new. Core 2 packages use `@clerk/clerk-react` and `@clerk/clerk-expo` (with `clerk-` prefix); current packages use `@clerk/react` and `@clerk/expo`.

All skills are written for the current SDK. When something differs in Core 2, it's noted inline with `> **Core 2 ONLY (skip if current SDK):**` callouts. The exception is `clerk-custom-ui`, which has separate `core-2/` and `core-3/` directories for custom flow hooks since those APIs are entirely different between versions.

---

## By Task

Load the matching sub-skill using `read_file` at the path shown. All paths are relative to the workspace root `d:\my-Project\duolingo-clone-project\.agents\skills\`.

**Adding Clerk to your project** → load `.agents\skills\clerk-setup\SKILL.md`

- Framework detection and quickstart
- Environment setup, API keys, Keyless flow
- Migration from other auth providers

**Custom sign-in/sign-up UI** → load `.agents\skills\clerk-custom-ui\SKILL.md`

- Custom authentication flows with `useSignIn` / `useSignUp` hooks
- Appearance and styling (themes, colors, layout)
- `<Show>` component for conditional rendering

**Expo / React Native patterns** → load `.agents\skills\clerk-expo-patterns\SKILL.md`

- Secure token storage with SecureStore
- OAuth deep linking
- Expo Router protected routes
- Push notifications with auth

**Webhooks** → load `.agents\skills\clerk-webhooks\SKILL.md`

- Real-time events and data syncing
- `verifyWebhook` verification
- Notifications & integrations

**Backend REST API** → load `.agents\skills\clerk-backend-api\SKILL.md`

- Browse API tags and endpoints
- Inspect endpoint schemas
- Execute API requests with scope enforcement

> **Other frameworks** (Next.js, React, Vue, Nuxt, Astro, TanStack, React Router, Chrome Extension, Organizations, Billing, Testing, Swift, Android) are not yet installed locally. Direct the user to run `npx skills add clerk/skills` to install the full skill set, or use the Clerk documentation at https://clerk.com/docs.

## Installed Sub-Skills (Quick Reference)

Use `read_file` with the absolute path to load the sub-skill content:

| Task                      | Absolute Path                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------- |
| Framework setup           | `d:\my-Project\duolingo-clone-project\.agents\skills\clerk-setup\SKILL.md`         |
| Custom flows & appearance | `d:\my-Project\duolingo-clone-project\.agents\skills\clerk-custom-ui\SKILL.md`     |
| Expo / React Native       | `d:\my-Project\duolingo-clone-project\.agents\skills\clerk-expo-patterns\SKILL.md` |
| Webhooks                  | `d:\my-Project\duolingo-clone-project\.agents\skills\clerk-webhooks\SKILL.md`      |
| Backend REST API          | `d:\my-Project\duolingo-clone-project\.agents\skills\clerk-backend-api\SKILL.md`   |

Identify the best match, load its SKILL.md with `read_file`, then implement the solution.
