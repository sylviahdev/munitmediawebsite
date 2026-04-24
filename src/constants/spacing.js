/**
 * Spacing and design system constants
 * Ensures consistent visual hierarchy and spacing across sections
 */

export const SPACING = {
  // Section vertical spacing
  sectionSpacing: "space-y-40 md:space-y-64",
  containerPadding: "px-6",
  containerMaxWidth: "max-w-7xl",

  // Common padding values
  small: "p-4 md:p-6",
  medium: "p-6 md:p-10",
  large: "p-8 md:p-14 lg:p-20",
  xlarge: "p-14 md:p-28",

  // Gap values for grids
  gapSmall: "gap-4",
  gapMedium: "gap-6 md:gap-8",
  gapLarge: "gap-8 md:gap-12",

  // Specific section padding
  sectionPadding: "py-16 md:py-24 lg:py-32",
};

export const COLORS = {
  // Primary colors
  primary: {
    50: "#f0f7ff",
    100: "#e0f0fe",
    500: "#0066ff",
    600: "#0052cc",
    700: "#003d99",
    900: "#001a4d",
  },

  // Secondary colors
  accent: {
    emerald: "#10b981",
    cyan: "#06b6d4",
    blue: "#3b82f6",
  },

  // Neutral
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },

  // Dark backgrounds (cinematic)
  dark: {
    bg: "#020617",
    surface: "#0f172a",
    border: "#1e293b",
  },
};

export const SHADOWS = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
};

export const BORDER_RADIUS = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  full: "rounded-full",
  huge: "rounded-[4rem]",
};

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const TRANSITIONS = {
  fast: "transition-all duration-200",
  normal: "transition-all duration-300",
  slow: "transition-all duration-500",
};
