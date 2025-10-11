import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <div className="flex">
        <Sidebar isDark={isDark} />
        <MainContent isDark={isDark} />
      </div>
    </div>
  );
}

export default App;