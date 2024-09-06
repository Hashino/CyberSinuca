import { UserType } from '../../types/user';
interface RankingContentProps {
  user: UserType;
  position: number;
}

const RankingContent: React.FC<RankingContentProps> = ({ user, position }) => {
  if (!user || !position) {
    return (
      <div className="w-full">
        <span>Player não Encontrado</span>
      </div>
    );
  }
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-2 bg-gray-1 px-2 py-1 dark:border-b-gray-2 dark:bg-dark-2">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-3 text-xs font-bold text-light dark:bg-gray-1 dark:text-dark-3">
          {'#' + position}
        </span>
        <span className="h-8 w-8 overflow-hidden rounded-md bg-gray-3 dark:bg-gray-1">
          {user.imgUrl && (
            <img className="h-full w-full object-cover" src={user.imgUrl} alt="User Picture" />
          )}
        </span>
        <span className="font-medium text-gray-3 dark:text-gray-1">{user.name}</span>
      </div>
      <div>
        <span className="font-bold text-dark-3 dark:text-light">{user.rating}</span>
      </div>
    </div>
  );
};

export default RankingContent;
