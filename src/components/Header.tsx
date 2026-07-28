/**
 * Header Component
 *
 * Main navigation header with theme toggle, language selector, and social links.
 *
 * Features:
 * - Responsive navigation with React Router
 * - Dark/Light theme toggle with smooth transitions
 * - Language toggle (PT-BR/EN-US) with 3D flip animation
 * - Social media links (GitHub, LinkedIn, Email)
 * - Fixed position with backdrop blur effect
 * - Active route highlighting
 *
 * @component
 * @example
 * ```tsx
 * <Header isDark={true} toggleTheme={handleToggle} />
 * ```
 */

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  /** Whether dark mode is currently active */
  isDark: boolean;
  /** Callback function to toggle theme */
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const language = i18n.language as "pt-BR" | "en-US";

  const toggleLanguage = () => {
    const newLang = language === "pt-BR" ? "en-US" : "pt-BR";
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: t("nav.home"), section: "about" },
    { path: "/projects", label: t("nav.projects"), section: null },
    { path: "/contact", label: t("nav.contact"), section: null },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/otaviozanon/", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/otavio-zanon-820512183",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:otaviozanonn@icloud.com", label: "Email" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isDark ? "bg-black/80" : "bg-white/80"
      } backdrop-blur-sm`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation - Left */}
          <nav className="flex items-center gap-4">
            {navItems.map((item, index) =>
              item.path === "/" && item.section ? (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => {
                    if (location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => scrollToSection(item.section!), 100);
                    } else {
                      scrollToSection(item.section!);
                    }
                  }}
                  className={`text-xs transition-opacity duration-200 ${
                    location.pathname === "/" && item.label === "/home"
                      ? isDark
                        ? "opacity-100"
                        : "opacity-100"
                      : isDark
                        ? "opacity-50 hover:opacity-100"
                        : "opacity-50 hover:opacity-100"
                  } ${isDark ? "text-white" : "text-black"}`}
                >
                  {item.label}
                </motion.button>
              ) : (
                <Link key={item.label} to={item.path}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`text-xs transition-opacity duration-200 ${
                      isActive(item.path)
                        ? isDark
                          ? "opacity-100"
                          : "opacity-100"
                        : isDark
                          ? "opacity-50 hover:opacity-100"
                          : "opacity-50 hover:opacity-100"
                    } ${isDark ? "text-white" : "text-black"}`}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              )
            )}
          </nav>

          {/* Social Links + Theme Toggle - Right */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                whileHover={{ y: -2 }}
                className={`transition-opacity duration-200 ${
                  isDark
                    ? "text-white/50 hover:text-white"
                    : "text-black/50 hover:text-black"
                }`}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`relative transition-opacity duration-200 ${
                isDark
                  ? "text-white/50 hover:text-white"
                  : "text-black/50 hover:text-black"
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                key={isDark ? "sun" : "moon"}
                initial={{
                  scale: 0,
                  rotate: -180,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  scale: 0,
                  rotate: 180,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  duration: 1.2,
                }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 transition-opacity duration-200 ${
                isDark
                  ? "text-white/50 hover:text-white"
                  : "text-black/50 hover:text-black"
              }`}
              aria-label="Toggle language"
            >
              <motion.div
                key={language}
                initial={{
                  rotateY: 90,
                  opacity: 0,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateY: -90,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-1.5"
                style={{ transformStyle: "preserve-3d" }}
              >
                {language === "pt-BR" ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Retângulo externo */}
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      {/* Losango */}
                      <path
                        d="M 12 7 L 20 12 L 12 17 L 4 12 Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      {/* Círculo central */}
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      {/* Faixa "Ordem e Progresso" */}
                      <path
                        d="M 9.5 11 Q 12 13 14.5 11"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                    <span className="text-[10px] font-medium">PT-BR</span>
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="4"
                        width="20"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M 2 6 L 10 6 L 10 12 L 2 12 Z"
                        fill="currentColor"
                      />
                      <path
                        d="M 2 8 L 22 8"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <path
                        d="M 2 12 L 22 12"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <path
                        d="M 2 16 L 22 16"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                    <span className="text-[10px] font-medium">EN-US</span>
                  </>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
