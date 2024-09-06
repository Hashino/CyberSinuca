import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  iconSize: number;
}

const DarkModeButton: React.FC<Props> = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setDarkMode(currentTheme === 'dark');
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const Icon: React.FC<{ size?: number }> = darkMode ? Sun : Moon;

  return (
    <button onClick={toggleDarkMode}>
      <div className="flex justify-center text-gray-3 transition hover:text-dark-2 dark:text-gray-1 dark:hover:text-light">
        <Icon size={props.iconSize} />
      </div>
    </button>
  );
};

export default DarkModeButton;
