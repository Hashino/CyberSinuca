import { History, House, Search, Trophy, User } from 'lucide-react';
import BottomMenuButton from './BottomMenuButton';
import { useUsercontext } from '../context/userContext';

const BottomMenu: React.FC = () => {
  const { user } = useUsercontext();
  return (
    <div className="fixed bottom-0 z-20 flex h-14 w-screen justify-between gap-2 border-t border-t-gray-2 bg-light px-4 dark:border-t-gray-1 dark:bg-dark-1 sm:hidden">
      <BottomMenuButton path="/" Icon={House} />
      <BottomMenuButton path="/search" Icon={Search} />
      <BottomMenuButton path="/ranking" Icon={Trophy} />
      <BottomMenuButton path="/matches" Icon={History} />
      <BottomMenuButton path={user ? '/profile/' + user?.id : '/login'} Icon={User} />
    </div>
  );
};

export default BottomMenu;
