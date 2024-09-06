import { X } from 'lucide-react';
import { MatchType } from '../../types/match';

interface HistoryContentProps {
  match: MatchType;
}

const HistoryContent: React.FC<HistoryContentProps> = ({ match }) => {
  return (
    <div className="flex w-full items-center gap-2 border-b border-gray-2 bg-gray-1 px-2 py-2 text-gray-3 dark:bg-dark-2 dark:text-gray-1">
      <div className="flex w-full items-center gap-2">
        <span className="h-10 w-10 overflow-hidden rounded-md border-2 border-green bg-gray-3 font-extralight">
          {match.winner.imgUrl && (
            <img
              className="h-full w-full object-cover"
              src={match.winner.imgUrl}
              alt="winnerPicture"
            />
          )}
        </span>
        <span>{match.winner.username}</span>
      </div>
      <div>
        <X size={16} />
      </div>
      <div className="flex w-full items-center justify-end gap-2">
        <span>{match.loser.username}</span>

        <span className="h-10 w-10 overflow-hidden rounded-md border-2 border-red bg-gray-3 font-extralight">
          {match.loser.imgUrl && (
            <img
              className="h-full w-full object-cover"
              src={match.loser.imgUrl}
              alt="loserPicture"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default HistoryContent;
