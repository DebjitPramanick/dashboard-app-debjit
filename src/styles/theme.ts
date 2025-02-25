const baseTheme = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
  },
  transitions: {
    default: "all 0.2s ease",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    // Background colors
    bgPrimary: "#121212",
    bgSecondary: "#1e1e1e",
    bgTertiary: "#252525",
    bgHover: "#2a2a2a",

    // Border colors
    borderPrimary: "#333",
    borderHover: "#444",
    borderAccent: "#8a85ff",

    // Text colors
    textPrimary: "#ffffff",
    textSecondary: "#e0e0e0",
    textMuted: "#696969",
    textAccent: "#8a85ff",

    // Button colors
    buttonPrimary: "#8a85ff",
    buttonPrimaryHover: "#7a74ff",

    // Overlay colors
    overlay: "rgba(0, 0, 0, 0.75)",

    // Shadow colors
    shadowPrimary: "rgba(0, 0, 0, 0.2)",
    shadowAccent: "rgba(176, 173, 255, 0.1)",

    error: "#ff4d4d",
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    // Background colors
    bgPrimary: "#FAFAFA", // Very light grey for main background
    bgSecondary: "#FFFFFF", // Pure white for cards
    bgTertiary: "#F4F4F5", // Light grey for interactive elements
    bgHover: "#E4E4E7", // Slightly darker grey for hover states

    // Border colors
    borderPrimary: "#E4E4E7", // Light grey for borders
    borderHover: "#D4D4D8", // Medium grey for hover borders
    borderAccent: "#7C3AED", // Keep the purple accent

    // Text colors
    textPrimary: "#18181B", // Almost black for primary text
    textSecondary: "#3F3F46", // Dark grey for secondary text
    textMuted: "#71717A", // Medium grey for muted text
    textAccent: "#7C3AED", // Keep the purple accent

    // Button colors
    buttonPrimary: "#7C3AED",
    buttonPrimaryHover: "#6D28D9",

    // Overlay colors
    overlay: "rgba(24, 24, 27, 0.3)", // Using zinc-900 with opacity

    // Shadow colors
    shadowPrimary: "rgba(24, 24, 27, 0.05)",
    shadowAccent: "rgba(124, 58, 237, 0.1)",

    error: "#EF4444",
  },
};

export type Theme = typeof darkTheme;
