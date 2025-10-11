import { motion, easeOut } from "framer-motion";

interface TechnologiesProps {
  isDark: boolean;
}

export default function Technologies({ isDark }: TechnologiesProps) {
  const technologies = [
    { name: "HTML5", icon: "🌐", level: 100 },
    { name: "Git", icon: "🔧", level: 100 },
    { name: "CSS3", icon: "🎨", level: 95 },
    { name: "JavaScript", icon: "⚡", level: 95 },
    { name: "TypeScript", icon: "📘", level: 95 },
    { name: "React", icon: "⚛️", level: 95 },
    { name: "Angular", icon: "🅰️", level: 70 },
    { name: "Styled Components", icon: "🧵", level: 90 },
    { name: "Next.js", icon: "🚀", level: 80 },
    { name: "Node.js", icon: "🟢", level: 80 },
    { name: "Database Management", icon: "🗄️", level: 80 },
    { name: "GraphQL", icon: "🔗", level: 60 },
    { name: "PostgreSQL", icon: "🐘", level: 60 },
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
      id="technologies"
      className={`min-h-screen py-16 px-6 lg:px-12 transition-colors duration-300 rounded-2xl ${
        isDark ? "bg-slate-800" : "bg-white"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto p-8"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h2
            className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            whileHover={{ x: 10 }}
          >
            Technologies
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                isDark
                  ? "bg-slate-600 hover:bg-slate-500 border border-slate-500 hover:border-amber-400/40"
                  : "bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-blue-600/40"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <motion.h3
                    className={`font-semibold transition-colors duration-300 ${
                      isDark
                        ? "text-slate-200 group-hover:text-amber-400"
                        : "text-slate-700 group-hover:text-blue-600"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {tech.name}
                  </motion.h3>
                </div>
                <motion.span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.level}%
                </motion.span>
              </div>

              <div
                className={`w-full h-2 rounded-full transition-colors duration-300 ${
                  isDark ? "bg-slate-600" : "bg-slate-200"
                }`}
              >
                <motion.div
                  className={`h-full rounded-full transition-colors duration-300 ${
                    isDark ? "bg-amber-400" : "bg-blue-600"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <motion.p
            className={`text-lg transition-colors duration-300 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Always exploring new technologies and improving my skills
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
