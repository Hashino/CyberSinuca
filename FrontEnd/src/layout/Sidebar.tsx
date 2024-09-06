import { History, House, Trophy, User } from 'lucide-react';
import React from 'react';
import DarkModeButton from '../components/DarkModeButton';
import SettingsButton from '../components/SettingsButton';
import SidebarButton from './SidebarButton';
import { useUsercontext } from '../context/userContext';

const Sidebar: React.FC = () => {
  const { user } = useUsercontext();
  return (
    <div className="left-0 z-20 flex h-screen w-fit flex-col justify-between border-r border-r-gray-2 bg-gray-1 py-2 transition-all duration-300 dark:border-r-gray-2 dark:bg-dark-2 max-sm:hidden">
      <div>
        <div className="flex items-center justify-center py-3">LOGO</div>
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

      <div className="bottom-0 flex w-full flex-col items-center justify-center gap-3 py-2 md:flex-row md:gap-4">
        {user && <DarkModeButton iconSize={24} />}
        {user && <SettingsButton iconSize={24} />}
      </div>
    </div>
  );
};

export default Sidebar;