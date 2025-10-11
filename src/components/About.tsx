import { motion, easeOut } from "framer-motion";

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`py-20 px-6 lg:px-12 transition-colors duration-300 ${
        isDark ? "bg-slate-800" : "bg-white"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <motion.h2
            id="about-title"
            className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            whileHover={{ x: 10 }}
          >
            About Me
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

        <div className="space-y-8">
          <motion.p
            variants={itemVariants}
            className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Experienced Front-End Developer with over 7 years of expertise in
            Web Development and Process Optimization. Proficient in a broad
            range of technologies and equipped with a flexible, adaptable skill
            set. A collaborative team player who is goal-driven, responsible,
            and proactive — always eager to expand knowledge, explore new
            technologies, and continuously grow. Committed to being a key
            contributor to team success.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`inline-flex px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 pt-4 ${
              isDark
                ? "bg-slate-700 text-amber-400 shadow-lg"
                : "bg-slate-100 text-blue-600 shadow-md"
            }`}
          >
            💡 Always learning, always growing
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
