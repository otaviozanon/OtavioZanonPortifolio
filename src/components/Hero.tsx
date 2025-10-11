import { ArrowDown, Github, Linkedin } from "lucide-react";

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Otavio Zanon
            </h1>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-light transition-colors duration-300 ${
                isDark ? "text-amber-400" : "text-blue-600"
              }`}
            >
              Front-End Developer
            </h2>
          </div>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Passionate about creating clean, accessible, and functional
            interfaces. I transform ideas into memorable digital experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://linkedin.com/in/otavio-zanon-820512183"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-amber-400"
                  : "bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 shadow-md hover:shadow-lg"
              }`}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/otavio-zanon-820512183"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-amber-400"
                  : "bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 shadow-md hover:shadow-lg"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => scrollToSection("projects")}
              className={`inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              View Projects
              <ArrowDown className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
