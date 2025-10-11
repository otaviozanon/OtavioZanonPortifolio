import { motion } from 'framer-motion';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';

interface MainContentProps {
  isDark: boolean;
}

export default function MainContent({ isDark }: MainContentProps) {
  return (
    <motion.main 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`lg:ml-80 min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      <div className="pt-16 lg:pt-0">
        <About isDark={isDark} />
        <Projects isDark={isDark} />
        <Technologies isDark={isDark} />
      </div>
    </motion.main>
  );
}