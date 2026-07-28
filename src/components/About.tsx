/**
 * About Component
 *
 * Displays professional introduction and contact information.
 *
 * Features:
 * - Animated entrance with Framer Motion
 * - Multi-language support (PT-BR/EN-US)
 * - Professional summary and experience highlights
 * - Links to LinkedIn and GitHub
 * - Email contact information
 * - Stagger animation for smooth reveal
 *
 * @component
 * @example
 * ```tsx
 * <About isDark={false} />
 * ```
 */

import { motion, easeOut } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface AboutProps {
  /** Whether dark mode is currently active */
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <motion.section
      id="about"
      aria-labelledby="about-title"
      className={`pb-4 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            id="about-title"
            className={`text-3xl md:text-4xl font-semibold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-black"
            }`}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            {t("about.title")}
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.p
            className={`text-base leading-relaxed mb-5 transition-colors duration-300 ${
              isDark ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            {t("about.description1")}
            <br />
            <br />
            {t("about.description2")}
            <br />
            <br />
            {t("about.links.text")}{" "}
            <motion.a
              href="https://linkedin.com/in/otavio-zanon-820512183"
              rel="noopener noreferrer"
              target="_blank"
              className={`font-bold transition-colors duration-300 ${
                isDark ? "text-white" : "text-black"
              }`}
              whileHover={{
                scale: 1.05,
                textDecoration: "underline",
                transition: { duration: 0.2 },
              }}
              style={{ display: "inline-block" }}
            >
              {t("about.links.linkedin")}
            </motion.a>{" "}
            {t("about.links.and")}{" "}
            <motion.a
              href="https://github.com/otaviozanon/"
              rel="noopener noreferrer"
              target="_blank"
              className={`font-bold transition-colors duration-300 ${
                isDark ? "text-white" : "text-black"
              }`}
              whileHover={{
                scale: 1.05,
                textDecoration: "underline",
                transition: { duration: 0.2 },
              }}
              style={{ display: "inline-block" }}
            >
              {t("about.links.github")}
            </motion.a>
            .
            <br />
            <br />
            {t("about.cta.text")}{" "}
            <motion.button
              onClick={() => navigate("/contact")}
              className={`font-bold transition-colors duration-300 ${
                isDark ? "text-white" : "text-black"
              }`}
              whileHover={{
                scale: 1.05,
                textDecoration: "underline",
                transition: { duration: 0.2 },
              }}
              style={{
                display: "inline-block",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                font: "inherit",
              }}
            >
              {t("about.cta.link")}
            </motion.button>
            .
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
