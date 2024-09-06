import { Trophy } from 'lucide-react';
import { UserType } from '../../types/user';
import BottomCard from './BottomCard';
import RankingContent from './RankingContent';

interface RankingCardProps {
  users: UserType[];
}

const RankingCard: React.FC<RankingCardProps> = ({ users }) => {
  return (
    <div className="flex h-fit w-full min-w-72 max-w-md flex-col px-4">
      <div className="flex w-full items-center gap-3 rounded-t-md border-b border-gray-2 bg-gray-1 py-3 pl-4 dark:bg-dark-2">
        <div className="text-yellow">
          <Trophy size={28} />
        </div>
        <span className="font-bold text-dark-2 dark:text-light">RANKING</span>
      </div>

      {users.map((user, index) => (
        <RankingContent key={index} user={user} position={index + 1} />
      ))}

      <BottomCard path="/ranking" />
    </div>
  );
};

export default RankingCard;
