import { IconType } from "react-icons";

// Theme types
export type Theme = "light" | "dark";

// Language types
export type Language = "pt-BR" | "en-US";

// Tech item interface
export interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

// Project interface
export interface Project {
  name: string;
  description: string;
  tech: TechItem[];
  liveUrl?: string;
  githubUrl?: string;
}

// Project category interface
export interface ProjectCategory {
  category: string;
  projects: Project[];
}

// Tech category interface
export interface TechCategory {
  category: string;
  techs: TechItem[];
}

// Component props interfaces
export interface ThemeProps {
  isDark: boolean;
}

export interface ThemeToggleProps extends ThemeProps {
  toggleTheme: () => void;
}
