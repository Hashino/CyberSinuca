import { History } from 'lucide-react';
import { MatchType } from '../../types/match';
import BottomCard from './BottomCard';
import HistoryContent from './HistoryContent';

interface HistoryCardProps {
  matches: MatchType[];
}

const HistoryCard: React.FC<HistoryCardProps> = ({ matches }) => {
  return (
    <div className="flex h-fit w-full min-w-64 max-w-md flex-col px-4">
      <div className="flex w-full items-center gap-3 rounded-t-md border-b border-b-gray-2 bg-gray-1 py-3 pl-4 dark:bg-dark-2">
        <div className="text-pink">
          <History size={28} />
        </div>
        <span className="font-bold text-dark-2 dark:text-light">ÚLTIMAS PARTIDAS</span>
      </div>

      {matches.map((match, index) => (
        <HistoryContent key={index} match={match} />
      ))}

      <BottomCard path="/matches" />
    </div>
  );
};

export default HistoryCard;
