import { motion, easeOut } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

interface SidebarProps {
  isDark: boolean;
}

export default function Sidebar({ isDark }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeOut }}
      className={`fixed left-0 top-0 h-screen w-80 p-8 flex flex-col justify-center transition-colors duration-300 hidden lg:flex ${
        isDark ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <div className="space-y-8">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            Otavio Zanon
          </motion.h1>
          <motion.h2
            className={`text-xl font-light transition-colors duration-300 ${
              isDark ? "text-amber-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Front-End Developer
          </motion.h2>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <MapPin size={16} />
          <span>Curitiba, Brazil</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`text-sm leading-relaxed transition-colors duration-300 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Passionate about creating clean, accessible, and functional
          interfaces. I transform ideas into memorable digital experiences
          focused on performance and usability.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex space-x-4"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/otaviozanon/",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/otavio-zanon-820512183",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:otaviozanonn@icloud.com",
              label: "Email",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-amber-400"
                  : "bg-white hover:bg-slate-100 text-slate-600 hover:text-blue-600 shadow-sm hover:shadow-md"
              }`}
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-medium transition-colors duration-300 ${
            isDark
              ? "bg-green-900/30 text-green-400"
              : "bg-green-100 text-green-700"
          }`}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Available for projects
        </motion.div>
      </div>
    </motion.aside>
  );
}
