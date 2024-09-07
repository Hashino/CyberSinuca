import { Settings } from 'lucide-react';

interface Props {
  size: number;
}

const SettingsButton: React.FC<Props> = ({ size }) => {
  return (
    <button>
      <div className='"flex dark:hover:text-light" justify-center text-gray-3 transition hover:text-dark-2 dark:text-gray-1 dark:hover:text-light'>
        <Settings size={size} />
      </div>
    </button>
  );
};

export default SettingsButton;
