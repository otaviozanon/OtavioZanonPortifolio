import { motion, easeOut } from "framer-motion";
import { ExternalLink, Calendar, Users, Github } from "lucide-react";
import Carousel from "./common/Carousel";
import {
  ranalli1,
  ranalli2,
  ranalli3,
  escola1,
  escola2,
  smarter1,
  glampro1,
  glampro2,
  glampro3,
  glampro4,
  glampro5,
} from "../assets/index";

interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  const projects = [
    {
      title: "Ranalli Advocacia",
      images: [ranalli1, ranalli2, ranalli3],
      description:
        "Corporate website for a law firm featuring a modern design and intelligent tools developed for truck drivers and logistics professionals.",
      tech: ["WordPress", "React", "TailwindCSS", "TypeScript"],
      liveUrl: "https://ranalliadvocacia.com.br",
      year: "2024",
      team: "Solo",
      status: "Completed",
      highlights: [
        "Responsive and accessible",
        "Clean UI/UX",
        "Custom logistics tools",
      ],
    },
    {
      title: "Escola 123",
      images: [escola1, escola2],
      description:
        "Corporate website for a leading nursery and early childhood center, focusing on a safe environment and innovative programs for children aged 4 months to 6 years.",
      tech: ["React", "TypeScript", "TailwindCSS"],
      liveUrl: "https://escola123.com.br",
      year: "2025",
      team: "Solo",
      status: "Completed",
      highlights: [
        "Responsive and accessible",
        "User-friendly dashboard",
        "Clean, maintainable code",
      ],
    },
    {
      title: "GlamPro",
      images: [glampro1, glampro2, glampro3, glampro4, glampro5],
      description:
        "Website aimed at barbers, hairstylists, manicurists, and more to simplify service scheduling with synchronization to Android/iOS calendars.",
      tech: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      githubUrl: "https://github.com/otaviozanon/GlamPro",
      year: "2025",
      team: "Solo",
      status: "Completed",
      highlights: [
        "Service scheduling simplification",
        "Calendar sync with Android/iOS",
        "User-friendly interface",
      ],
    },
    {
      title: "SettFile - Smart Uploader",
      images: [smarter1],
      description:
        "Web application that allows users to upload files to multiple online hosting providers seamlessly. It uses APIs to handle file uploads with progress tracking, automatic retries on failures, and expiration management, providing a reliable and user-friendly experience.",
      tech: ["React", "TypeScript", "Next.js", "TailwindCSS", "XMLHttpRequest"],
      liveUrl: "https://settfile.vercel.app",
      githubUrl: "https://github.com/otaviozanon/settfile",
      year: "2025",
      team: "Solo",
      status: "Completed",
      highlights: [
        "Upload files to multiple providers with automatic retries",
        "Real-time progress tracking and status updates",
        "Detailed logging of upload attempts and results",
        "Drag-and-drop file selection and intuitive interface",
        "Expiration handling for uploaded files",
        "Pagination and table view of supported providers",
      ],
    },
  ];

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
      id="projects"
      className={`py-20 px-6 lg:px-12 transition-colors duration-300 ${
        isDark ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.h2
            className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            whileHover={{ x: 10 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className={`w-20 h-1 rounded-full transition-colors duration-300 ${
              isDark ? "bg-amber-400" : "bg-blue-600"
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Project List */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`group rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400/30"
                  : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-600/30 shadow-sm hover:shadow-lg"
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Project Image */}
                <div className="lg:w-1/3 w-full">
                  <Carousel images={project.images} isDark={isDark} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title + Status */}
                  <div className="flex items-center space-x-3 mb-2">
                    <motion.h3
                      className={`text-xl font-bold transition-colors duration-300 ${
                        isDark
                          ? "text-white group-hover:text-amber-400"
                          : "text-slate-900 group-hover:text-blue-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.span
                      className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                        project.status === "Completed"
                          ? isDark
                            ? "bg-green-900/30 text-green-400"
                            : "bg-green-100 text-green-700"
                          : isDark
                          ? "bg-amber-900/30 text-amber-400"
                          : "bg-amber-100 text-amber-700"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.status}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mb-4 leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                          isDark
                            ? "bg-slate-700 text-slate-300 group-hover:bg-slate-600"
                            : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="flex flex-wrap gap-4 text-xs mb-4">
                    <div
                      className={`flex items-center space-x-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      <Calendar size={12} />
                      <span>{project.year}</span>
                    </div>
                    <div
                      className={`flex items-center space-x-1 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      <Users size={12} />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 rounded text-xs ${
                          isDark
                            ? "bg-amber-900/20 text-amber-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-3 mt-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      View Live
                    </motion.a>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isDark
                            ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                            : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                        }`}
                      >
                        <Github size={14} className="mr-2" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.p
            className={`text-sm ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            More projects available on my GitHub
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
