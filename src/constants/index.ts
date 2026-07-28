// App constants
export const APP_NAME = "Otavio Zanon Portfolio";
export const APP_VERSION = "1.0.0";

// Theme constants
export const THEME_KEY = "portfolio-theme";
export const DEFAULT_THEME = "dark";

// Language constants
export const LANGUAGE_KEY = "portfolio-language";
export const DEFAULT_LANGUAGE = "pt-BR";
export const SUPPORTED_LANGUAGES = ["pt-BR", "en-US"] as const;

// Social links
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/otavio-zanon-820512183",
  github: "https://github.com/otaviozanon",
  email: "otaviozanonn@icloud.com",
} as const;

// Animation durations (in seconds)
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

// Breakpoints (matches TailwindCSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
