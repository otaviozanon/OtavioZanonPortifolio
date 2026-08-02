import { motion } from "framer-motion";
import Contact from "../components/Contact";

interface ContactPageProps {
  isDark: boolean;
}

export default function ContactPage({ isDark }: ContactPageProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={`min-h-dvh transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24">
        <Contact isDark={isDark} />
      </div>
    </motion.main>
  );
}
