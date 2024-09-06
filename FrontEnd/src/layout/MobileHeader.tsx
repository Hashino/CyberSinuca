import DarkModeButton from '../components/DarkModeButton';
import SettingsButton from '../components/SettingsButton';

interface Props {
  authenticated: boolean;
}

const MobileHeader: React.FC<Props> = (props: Props) => {
  return (
    <div className="fixed top-0 z-20 flex h-12 w-screen items-center justify-between border-b border-b-gray-2 px-3 py-1 dark:border-b-gray-1 sm:hidden">
      <div>LOGO</div>
      <div className="flex items-center gap-2">
        {props.authenticated && <DarkModeButton iconSize={20} />}
        {props.authenticated && <SettingsButton iconSize={20} />}
      </div>
    </div>
  );
};

export default MobileHeader;
