import { motion } from "framer-motion";
import About from "../components/About";
import Technologies from "../components/Technologies";

interface HomeProps {
  isDark: boolean;
}

export default function Home({ isDark }: HomeProps) {
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
        <About isDark={isDark} />
        <Technologies isDark={isDark} />
      </div>
    </motion.main>
  );
}
