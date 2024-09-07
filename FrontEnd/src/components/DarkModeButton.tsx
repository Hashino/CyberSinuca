import { Moon, Sun } from 'lucide-react';
import { useEffect, useState, SVGProps, ForwardRefExoticComponent} from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string; // Ajuste conforme necessário
}

interface Props {
  size?: number | undefined;
}

const DarkModeButton: React.FC<Props> = ({ size }) => {
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

const Icon : ForwardRefExoticComponent<IconProps> = darkMode ? Moon : Sun;
  return (
    <button onClick={toggleDarkMode}>
      <div className="flex justify-center text-gray-3 transition hover:text-dark-2 dark:text-gray-1 dark:hover:text-light">
        <Icon size={size} />
      </div>
    </button>
  );
};

export default DarkModeButton;
