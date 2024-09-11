import { MatchType } from '../../types/match';
import { UserType } from '../../types/user';
import { History, Joystick, ChartLine, Medal } from 'lucide-react';

interface ProfileCardContentProps {
  user: UserType | null;
  lastMatch: MatchType;
}

const ProfileCardContent: React.FC<ProfileCardContentProps> = ({ user, lastMatch }) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-4 text-gray-3 dark:text-gray-1">
      <div className="group relative flex flex-col items-center gap-1 py-2">
        <span className="bg-gray absolute top-[-24px] rounded-md bg-light px-3 py-2 text-xs font-semibold opacity-0 transition group-hover:opacity-100 dark:bg-dark-3 dark:text-gray-1">
          Rating
        </span>
        <ChartLine size={30} />
        {user && <span className="text-sm font-semibold">{user.rating}</span>}
      </div>
      <div className="group relative flex flex-col items-center gap-1 py-2">
        <span className="bg-gray absolute top-[-24px] rounded-md bg-light px-3 py-2 text-xs font-semibold opacity-0 transition group-hover:opacity-100 dark:bg-dark-3 dark:text-gray-1">
          Partidas jogadas
        </span>
        <Joystick size={30} />
        {user && <span className="text-sm font-semibold">{user.victories + user.defeats}</span>}
      </div>
      <div className="group relative flex flex-col items-center gap-1 py-2">
        <span className="bg-gray absolute top-[-24px] rounded-md bg-light px-3 py-2 text-xs font-semibold opacity-0 transition group-hover:opacity-100 dark:bg-dark-3 dark:text-gray-1">
          Vitórias
        </span>
        <Medal size={30} />
        {user && <span className="text-sm font-semibold">{user.victories}</span>}
      </div>
      <div className="group relative flex flex-col items-center gap-1 py-2">
        <span className="bg-gray absolute top-[-24px] rounded-md bg-light px-3 py-2 text-xs font-semibold opacity-0 transition group-hover:opacity-100 dark:bg-dark-3 dark:text-gray-1">
          Última partida
        </span>
        <History size={30} />
        {/* {user && (
          <span className="text-sm font-semibold">
            {lastMatch.date.getDate().toString().padStart(2, '0')}/
            {(lastMatch.date.getMonth() + 1).toString().padStart(2, '0')}/
            {lastMatch.date.getFullYear()}
          </span>
        )} */}
      </div>
    </div>
  );
};

export default ProfileCardContent;
