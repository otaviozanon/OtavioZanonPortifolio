import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'technologies'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'technologies', label: 'Technologies' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isDark 
          ? 'bg-slate-900/90 border-slate-700' 
          : 'bg-white/90 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name - Hidden on desktop as it's in sidebar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
            className={`lg:hidden text-xl font-bold transition-colors duration-300 ${
              isDark ? 'text-amber-400' : 'text-blue-600'
            }`}
          >
            Otavio Zanon
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id
                    ? isDark ? 'text-amber-400' : 'text-blue-600'
                    : isDark ? 'text-slate-300 hover:text-amber-400' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span 
                    layoutId="activeSection"
                    className={`absolute -bottom-2 left-0 right-0 h-0.5 rounded-full ${
                      isDark ? 'bg-amber-400' : 'bg-blue-600'
                    }`} 
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-slate-700 hover:bg-slate-600 text-amber-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-blue-600'
              }`}
              aria-label="Toggle theme"
              style={{ marginLeft: '20px' }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden py-4 border-t transition-colors duration-300 ${
              isDark ? 'border-slate-700' : 'border-slate-200'
            }`}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? isDark ? 'text-amber-400' : 'text-blue-600'
                    : isDark ? 'text-slate-300 hover:text-amber-400' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
