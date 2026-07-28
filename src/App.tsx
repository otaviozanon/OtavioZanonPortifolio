import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { isDark, toggleTheme } = useTheme();

  // Apply background color to html element to prevent white bounce
  useEffect(() => {
    document.documentElement.style.backgroundColor = isDark
      ? "#000000"
      : "#ffffff";
  }, [isDark]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/projects" element={<ProjectsPage isDark={isDark} />} />
          <Route path="/contact" element={<ContactPage isDark={isDark} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
