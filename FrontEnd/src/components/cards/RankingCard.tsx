import { Trophy } from 'lucide-react';
import { UserType } from '../../types/user';
import BottomCard from './BottomCard';
import RankingContent from './RankingContent';
import { useQuery } from '@tanstack/react-query';

type ResponseProps = UserType[];

const RankingCard: React.FC = () => {
  const { data: players, isLoading } = useQuery<ResponseProps>({
    queryKey: ['ranking'],
    queryFn: async () => {
      const response = await fetch('http://localhost:8888/usersByRating?_limit=3');
      const data = await response.json();

      return data;
    },
  });

  if (isLoading) {
    return null;
    // return <LoadingCard />;
  }

  return (
    <div className="flex h-fit w-full min-w-72 max-w-md flex-col px-4">
      <div className="flex w-full items-center gap-3 rounded-t-md border-b border-gray-2 bg-gray-1 py-3 pl-4 dark:bg-dark-2">
        <div className="text-yellow">
          <Trophy size={28} />
        </div>
        <span className="font-bold text-dark-2 dark:text-light">RANKING</span>
      </div>

      <div className="max-h-[50vh] overflow-y-auto">
        {Array.isArray(players) &&
          players?.map((user, index) => <RankingContent key={index} user={user} />)}
      </div>

      <BottomCard path="/ranking" />
    </div>
  );
};

export default RankingCard;
