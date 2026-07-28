/**
 * Technologies Component
 *
 * Displays technical skills organized by category with proficiency levels.
 *
 * Features:
 * - Categorized tech stack (languages, frontend, styling, backend, databases, cloud, tools)
 * - Colored icons for each technology
 * - Animated progress bars on scroll into view
 * - Multi-language category labels
 * - Stagger animation for smooth reveal
 * - Responsive grid layout
 *
 * @component
 * @example
 * ```tsx
 * <Technologies isDark={true} />
 * ```
 */

import { motion, easeOut } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiAntdesign,
  SiLess,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiSupabase,
  SiFirebase,
  SiCloudflare,
  SiVercel,
  SiGit,
  SiVite,
} from "react-icons/si";
import {
  FaAws,
  FaDatabase,
  FaMicrosoft,
  FaServer,
  FaTerminal,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";

interface TechnologiesProps {
  /** Whether dark mode is currently active */
  isDark: boolean;
}

interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

interface TechCategory {
  id: string;
  category: string;
  techs: Tech[];
}

export default function Technologies({ isDark }: TechnologiesProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const techStack: TechCategory[] = useMemo(
    () => [
      {
        id: "languages",
        category: t("tech.category.languages"),
        techs: [
          { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
          { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
          { name: "Python", icon: SiPython, color: "#3776AB" },
          { name: "C#", icon: TbBrandCSharp, color: "#239120" },
        ],
      },
      {
        id: "frontend",
        category: t("tech.category.frontend"),
        techs: [
          { name: "React", icon: SiReact, color: "#61DAFB" },
          { name: "Angular", icon: SiAngular, color: "#DD0031" },
          {
            name: "Next.js",
            icon: SiNextdotjs,
            color: isDark ? "#FFFFFF" : "#000000",
          },
          { name: "Redux", icon: SiRedux, color: "#764ABC" },
        ],
      },
      {
        id: "styling",
        category: t("tech.category.styling"),
        techs: [
          { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
          { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
          { name: "AntDesign", icon: SiAntdesign, color: "#0170FE" },
          { name: "Less", icon: SiLess, color: "#1D365D" },
        ],
      },
      {
        id: "backend",
        category: t("tech.category.backend"),
        techs: [{ name: "Node.js", icon: SiNodedotjs, color: "#339933" }],
      },
      {
        id: "databases",
        category: t("tech.category.databases"),
        techs: [
          { name: "MySQL", icon: SiMysql, color: "#4479A1" },
          { name: "Postgres", icon: SiPostgresql, color: "#4169E1" },
          { name: "SQLite", icon: SiSqlite, color: "#003B57" },
          { name: "SQLServer", icon: FaDatabase, color: "#CC2927" },
          { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
          { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ],
      },
      {
        id: "cloud",
        category: t("tech.category.cloud"),
        techs: [
          { name: "AWS", icon: FaAws, color: "#FF9900" },
          { name: "Azure", icon: FaMicrosoft, color: "#0078D4" },
          { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
          {
            name: "Vercel",
            icon: SiVercel,
            color: isDark ? "#FFFFFF" : "#000000",
          },
          { name: "Render", icon: FaServer, color: "#46E3B7" },
        ],
      },
      {
        id: "tools",
        category: t("tech.category.tools"),
        techs: [
          { name: "Git", icon: SiGit, color: "#F05032" },
          { name: "Vite", icon: SiVite, color: "#646CFF" },
          { name: "PowerShell", icon: FaTerminal, color: "#5391FE" },
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      id="technologies"
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
            {t("technologies.title")}
          </motion.h2>
        </motion.div>

        <div className="space-y-6">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="space-y-2"
            >
              {/* Category Header */}
              <motion.h3
                className={`text-sm font-medium transition-colors duration-300 ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
                whileHover={{ x: 3 }}
              >
                ▸ {category.category}/
              </motion.h3>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {category.techs.map((tech, techIndex) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{
                        y: -3,
                        transition: { duration: 0.2 },
                      }}
                      className="group"
                    >
                      <div className="flex items-center gap-2">
                        {/* Icon */}
                        <motion.div
                          whileHover={{
                            rotate: [0, -5, 5, -5, 0],
                            transition: { duration: 0.4 },
                          }}
                          className="flex-shrink-0"
                        >
                          <Icon size={18} style={{ color: tech.color }} />
                        </motion.div>

                        {/* Name */}
                        <span
                          className={`text-xs transition-colors duration-300 ${
                            isDark ? "text-neutral-400" : "text-neutral-600"
                          } group-hover:${isDark ? "text-white" : "text-black"}`}
                        >
                          {tech.name}
                        </span>
                      </div>

                      {/* Minimal Progress Bar */}
                      <motion.div
                        className={`mt-1.5 h-0.5 rounded-full overflow-hidden ${
                          isDark ? "bg-neutral-800" : "bg-neutral-200"
                        }`}
                        style={{ width: "110px" }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: tech.color,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + techIndex * 0.05,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true, amount: 0.5 }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
