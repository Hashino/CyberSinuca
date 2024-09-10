import { History, House, Trophy, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import DarkModeButton from '../components/DarkModeButton';
import SettingsButton from '../components/SettingsButton';
import SidebarButton from './SidebarButton';
import { useUsercontext } from '../context/userContext';
import { testUser } from '../types/user';

const Sidebar: React.FC = () => {
  const { user, login, logout } = useUsercontext();
  return (
    <div className="border-r-gray-2 bg-gray-1 dark:border-r-gray-2 dark:bg-dark-2 left-0 z-20 flex h-screen w-fit flex-col justify-between border-r py-2 transition-all duration-300 max-sm:hidden">
      <div>
        <Link to="/">
          <div className="flex h-16 w-full items-center justify-center py-3">
            <div className="w-14 px-2 md:hidden">
              <img className="object-cover" src="/icon_logo.png" alt="logo" />
            </div>
            <div className="w-32 px-2 max-md:hidden">
              <img className="object-cover" src="/text_logo.png" alt="logo" />
            </div>
          </div>
        </Link>
        <SidebarButton path="/" text="Home" Icon={House} iconSize={28} />
        <SidebarButton path="/matches" text="Histórico" Icon={History} iconSize={28} />
        <SidebarButton path="/ranking" text="Ranking" Icon={Trophy} iconSize={28} />
        <SidebarButton
          path={user ? '/profile/' + user?.id : '/login'}
          text="Perfil"
          Icon={User}
          iconSize={28}
        />
      </div>

      <div className="absolute right-0 top-60 flex flex-col gap-2">
        <button
          onClick={() => login(testUser)}
          className="bg-dark-3 text-light flex w-full items-center justify-center rounded-md px-2 py-1 text-sm font-semibold"
        >
          Login Test
        </button>
        <button
          onClick={() => logout()}
          className="bg-dark-3 text-light flex w-full items-center justify-center rounded-md px-2 py-1 text-sm font-semibold"
        >
          LogOut Test
        </button>
      </div>

      <div className="bottom-0 flex w-full flex-col items-center justify-center gap-3 py-2 md:flex-row md:gap-4">
        {user && <DarkModeButton size={24} />}
        {user && <SettingsButton size={24} />}
      </div>
    </div>
  );
};

export default Sidebar;
