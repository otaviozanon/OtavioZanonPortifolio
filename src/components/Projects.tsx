/**
 * Projects Component
 *
 * Displays portfolio projects in a paginated carousel format.
 *
 * Features:
 * - Category-based project organization (sites, utils, desktop-utils, games)
 * - Paginated carousel (2 projects per page)
 * - Directional slide animations (left/right)
 * - Technology badges with colored icons
 * - Progress bar animation on hover
 * - Live demo and GitHub links
 * - Multi-language support
 * - Responsive grid layout
 *
 * @component
 * @example
 * ```tsx
 * <Projects isDark={true} />
 * ```
 */

import { motion, easeOut } from "framer-motion";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  SiWordpress,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";
import { IconType } from "react-icons";

interface ProjectsProps {
  /** Whether dark mode is currently active */
  isDark: boolean;
}

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tech: TechItem[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCategory {
  id: string;
  category: string;
  projects: Project[];
}

export default function Projects({ isDark }: ProjectsProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [currentIndexes, setCurrentIndexes] = useState<Record<string, number>>(
    {}
  );
  const [direction, setDirection] = useState<Record<string, number>>({});

  const projectCategories: ProjectCategory[] = useMemo(
    () => [
      {
        id: "sites",
        category: t("projects.category.sites"),
        projects: [
          {
            name: t("projects.ranalli.name"),
            description: t("projects.ranalli.description"),
            tech: [
              { name: "WordPress", icon: SiWordpress, color: "#21759B" },
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            ],
            liveUrl: "https://ranalliadvocacia.com.br",
          },
          {
            name: t("projects.escola.name"),
            description: t("projects.escola.description"),
            tech: [
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
            ],
            liveUrl: "https://escola123.com.br",
          },
          {
            name: t("projects.glampro.name"),
            description: t("projects.glampro.description"),
            tech: [
              { name: "React", icon: SiReact, color: "#61DAFB" },
              {
                name: "Next.js",
                icon: SiNextdotjs,
                color: isDark ? "#FFFFFF" : "#000000",
              },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            ],
            githubUrl: "https://github.com/otaviozanon/GlamPro",
          },
        ],
      },
      {
        id: "utils",
        category: t("projects.category.utils"),
        projects: [
          {
            name: t("projects.esportcalendar.name"),
            description: t("projects.esportcalendar.description"),
            tech: [
              { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
              { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
              { name: "CSS3", icon: SiCss, color: "#1572B6" },
            ],
            liveUrl: "https://otaviozanon.github.io/esportCalendar",
            githubUrl: "https://github.com/otaviozanon/esportCalendar",
          },
          {
            name: t("projects.livewatch.name"),
            description: t("projects.livewatch.description"),
            tech: [
              { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
              { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
              { name: "CSS3", icon: SiCss, color: "#1572B6" },
            ],
            liveUrl: "http://ozlivewatch.pages.dev",
            githubUrl: "https://github.com/otaviozanon/LiveWatch",
          },
          {
            name: t("projects.settpaste.name"),
            description: t("projects.settpaste.description"),
            tech: [
              { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
              { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
              { name: "CSS3", icon: SiCss, color: "#1572B6" },
            ],
            liveUrl: "http://settpaste.vercel.app",
            githubUrl: "https://github.com/otaviozanon/settpaste",
          },
          {
            name: t("projects.settfile.name"),
            description: t("projects.settfile.description"),
            tech: [
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
            ],
            liveUrl: "https://settfile.onrender.com/",
            githubUrl: "https://github.com/otaviozanon/settfile",
          },
        ],
      },
      {
        id: "desktop-utils",
        category: t("projects.category.desktop-utils"),
        projects: [
          {
            name: t("projects.settutility.name"),
            description: t("projects.settutility.description"),
            tech: [
              {
                name: "PowerShell",
                icon: TbBrandPowershell,
                color: "#5391FE",
              },
            ],
            githubUrl: "https://github.com/otaviozanon/SettUtility",
          },
          {
            name: t("projects.settmemorycleaner.name"),
            description: t("projects.settmemorycleaner.description"),
            tech: [
              { name: "C#", icon: TbBrandCSharp, color: "#239120" },
              {
                name: "PowerShell",
                icon: TbBrandPowershell,
                color: "#5391FE",
              },
            ],
            githubUrl: "https://github.com/otaviozanon/SETTMemoryCleaner",
          },
        ],
      },
      {
        id: "games",
        category: t("projects.category.games"),
        projects: [
          {
            name: t("projects.otto.name"),
            description: t("projects.otto.description"),
            tech: [
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              {
                name: "Next.js",
                icon: SiNextdotjs,
                color: isDark ? "#FFFFFF" : "#000000",
              },
              { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
            ],
            liveUrl: "http://ottogame.onrender.com",
            githubUrl: "https://github.com/otaviozanon/otto",
          },
          {
            name: t("projects.noway.name"),
            description: t("projects.noway.description"),
            tech: [
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              {
                name: "Next.js",
                icon: SiNextdotjs,
                color: isDark ? "#FFFFFF" : "#000000",
              },
              { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
            ],
            liveUrl: "http://nowaygame.onrender.com",
            githubUrl: "https://github.com/otaviozanon/NoWay",
          },
          {
            name: t("projects.worstfriend.name"),
            description: t("projects.worstfriend.description"),
            tech: [
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              {
                name: "Next.js",
                icon: SiNextdotjs,
                color: isDark ? "#FFFFFF" : "#000000",
              },
              { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
            ],
            liveUrl: "http://worstfriendgame.onrender.com",
            githubUrl: "https://github.com/otaviozanon/WorstFriend",
          },
          {
            name: t("projects.blackjack.name"),
            description: t("projects.blackjack.description"),
            tech: [
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
            ],
            liveUrl: "http://blackjack-pro-seven.vercel.app",
            githubUrl: "https://github.com/otaviozanon/Blackjack",
          },
        ],
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentLang, isDark, t]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const handlePrev = (category: string, length: number) => {
    setDirection((prev) => ({ ...prev, [category]: -1 }));
    setCurrentIndexes((prev) => ({
      ...prev,
      [category]: ((prev[category] || 0) - 1 + length) % length,
    }));
  };

  const handleNext = (category: string, length: number) => {
    setDirection((prev) => ({ ...prev, [category]: 1 }));
    setCurrentIndexes((prev) => ({
      ...prev,
      [category]: ((prev[category] || 0) + 1) % length,
    }));
  };

  return (
    <section
      id="projects"
      className={`pb-32 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="mb-4">
          <motion.h2
            className={`text-2xl font-semibold transition-colors duration-300 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {t("projects.title")}
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          {projectCategories.map((category) => {
            const currentIndex = currentIndexes[category.id] || 0;
            const itemsPerPage = 2;
            const totalPages = Math.ceil(
              category.projects.length / itemsPerPage
            );
            const startIndex = currentIndex * itemsPerPage;
            const visibleProjects = category.projects.slice(
              startIndex,
              startIndex + itemsPerPage
            );
            const currentDirection = direction[category.id] || 1;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* Category Header with Navigation */}
                <div className="flex items-center justify-between">
                  <motion.h3
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isDark ? "text-neutral-500" : "text-neutral-500"
                    }`}
                    whileHover={{ x: 3 }}
                  >
                    ▸ {category.category}/
                  </motion.h3>

                  {/* Navigation Arrows */}
                  {totalPages > 1 && (
                    <div className="flex items-center gap-2">
                      <motion.button
                        onClick={() => handlePrev(category.id, totalPages)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-1 rounded transition-colors duration-200 ${
                          isDark
                            ? "text-neutral-500 hover:text-white hover:bg-neutral-800"
                            : "text-neutral-500 hover:text-black hover:bg-neutral-100"
                        }`}
                      >
                        <ChevronLeft size={16} />
                      </motion.button>
                      <span
                        className={`text-xs ${
                          isDark ? "text-neutral-600" : "text-neutral-400"
                        }`}
                      >
                        {currentIndex + 1}/{totalPages}
                      </span>
                      <motion.button
                        onClick={() => handleNext(category.id, totalPages)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-1 rounded transition-colors duration-200 ${
                          isDark
                            ? "text-neutral-500 hover:text-white hover:bg-neutral-800"
                            : "text-neutral-500 hover:text-black hover:bg-neutral-100"
                        }`}
                      >
                        <ChevronRight size={16} />
                      </motion.button>
                    </div>
                  )}
                </div>

                {/* Projects Grid (2 columns) */}
                <motion.div
                  key={currentIndex}
                  initial={{
                    opacity: 0,
                    x: currentDirection > 0 ? 100 : -100,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: currentDirection > 0 ? -100 : 100,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {visibleProjects.map((project) => (
                    <div
                      key={project.name}
                      className={`group p-3 rounded-lg border transition-all duration-300 ${
                        isDark
                          ? "border-neutral-800 hover:border-neutral-700 bg-neutral-900/30"
                          : "border-neutral-200 hover:border-neutral-300 bg-neutral-50/30"
                      }`}
                    >
                      {/* Project Header */}
                      <div className="mb-2">
                        <motion.h4
                          className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                            isDark ? "text-white" : "text-black"
                          }`}
                          whileHover={{ x: 3 }}
                        >
                          {project.name}
                        </motion.h4>
                        <p
                          className={`text-xs leading-snug ${
                            isDark ? "text-neutral-400" : "text-neutral-600"
                          }`}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tech.map((tech, i) => {
                          const Icon = tech.icon;
                          return (
                            <motion.div
                              key={i}
                              className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs ${
                                isDark
                                  ? "bg-neutral-800 text-neutral-400"
                                  : "bg-neutral-100 text-neutral-600"
                              }`}
                              whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                              }}
                            >
                              <Icon size={14} style={{ color: tech.color }} />
                              <span>{tech.name}</span>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Progress Bar */}
                      <div
                        className={`h-0.5 rounded-full overflow-hidden mb-2 ${
                          isDark ? "bg-neutral-800" : "bg-neutral-200"
                        }`}
                      >
                        <motion.div
                          className="h-full rounded-full group-hover:w-full w-0 transition-all duration-500 ease-out"
                          style={{
                            backgroundColor: isDark ? "#FFFFFF" : "#000000",
                          }}
                        />
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 text-xs">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 2 }}
                            className={`underline transition-colors duration-200 ${
                              isDark
                                ? "text-neutral-500 hover:text-white"
                                : "text-neutral-500 hover:text-black"
                            }`}
                          >
                            {t("projects.viewLive")}
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 2 }}
                            className={`underline transition-colors duration-200 ${
                              isDark
                                ? "text-neutral-500 hover:text-white"
                                : "text-neutral-500 hover:text-black"
                            }`}
                          >
                            {t("projects.code")}
                          </motion.a>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
