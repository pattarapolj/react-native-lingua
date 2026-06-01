/**
 * Lingua Design Tokens
 * Single source of truth for all design values.
 * These mirror the CSS custom properties defined in global.css @theme.
 */

export const colors = {
    // Primary palette
    primary: "#6C4EF5",
    primaryDeep: "#5B3BF6",
    blue: "#4D8BFF",
    green: "#21C16B",

    // Semantic colors
    success: "#21C16B",
    warning: "#FFC800",
    streak: "#FF8A00",
    error: "#FF4D4F",
    info: "#4D8BFF",

    // Neutrals
    textPrimary: "#0D132B",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    surface: "#F6F7FB",
    background: "#FFFFFF",
} as const;

export const fontFamily = {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    semiBold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
} as const;

export const fontSize = {
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 16,
    bodyLg: 16,
    bodyMd: 14,
    bodySm: 13,
    caption: 11,
} as const;

export const lineHeight = {
    h1: 1.2,
    h2: 1.3,
    h3: 1.3,
    h4: 1.4,
    bodyLg: 1.6,
    bodyMd: 1.6,
    bodySm: 1.6,
    caption: 1.4,
} as const;

export const borderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
} as const;

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
    "3xl": 40,
    "4xl": 48,
} as const;
