import { Settings } from 'lucide-react';

interface Props {
  iconSize: number;
}

const SettingsButton: React.FC<Props> = (props: Props) => {
  return (
    <button>
      <div className='"flex dark:hover:text-light" justify-center text-gray-3 transition hover:text-dark-2 dark:text-gray-1 dark:hover:text-light'>
        <Settings size={props.iconSize} />
      </div>
    </button>
  );
};

export default SettingsButton;
