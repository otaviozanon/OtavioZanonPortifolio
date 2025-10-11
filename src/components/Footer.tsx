import { Github, Linkedin, Mail, Heart } from "lucide-react";

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark
          ? "bg-slate-900 border-t border-slate-700"
          : "bg-slate-50 border-t border-slate-200"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/otaviozanon/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400"
                  : "bg-white hover:bg-slate-100 text-slate-600 hover:text-blue-600 shadow-md hover:shadow-lg"
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
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400"
                  : "bg-white hover:bg-slate-100 text-slate-600 hover:text-blue-600 shadow-md hover:shadow-lg"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:otaviozanonn@icloud.com"
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400"
                  : "bg-white hover:bg-slate-100 text-slate-600 hover:text-blue-600 shadow-md hover:shadow-lg"
              }`}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p
              className={`text-sm transition-colors duration-300 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              © 2024 Otavio Zanon - Todos os direitos reservados
            </p>
            <p
              className={`text-xs flex items-center justify-center space-x-1 transition-colors duration-300 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <span>Feito com</span>
              <Heart
                size={14}
                className={isDark ? "text-amber-400" : "text-blue-600"}
              />
              <span>e muito café</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
