import DarkModeButton from '../components/DarkModeButton';
import SettingsButton from '../components/SettingsButton';
import { Link } from 'react-router-dom';

interface Props {
  authenticated: boolean;
}

const MobileHeader: React.FC<Props> = (props: Props) => {
  return (
    <div className="fixed top-0 z-20 flex h-12 w-screen items-center justify-between border-b border-b-gray-2 px-3 py-1 dark:border-b-gray-1 sm:hidden">
      <Link to="/">
        <div className="w-14">
          <img src="/icon_logo.png" className="object-cover" />
        </div>
      </Link>
      <div className="flex items-center gap-2">
        {props.authenticated && <DarkModeButton size={20} />}
        {props.authenticated && <SettingsButton size={20} />}
      </div>
    </div>
  );
};

export default MobileHeader;
