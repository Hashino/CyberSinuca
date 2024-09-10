import { MatchType } from '../../types/match';
import { Check, X } from 'lucide-react';

interface PushNotificationCardProps {
  match: MatchType;
}

const PushNotificationCard: React.FC<PushNotificationCardProps> = ({ match }) => {
  return (
    <div className="fixed bottom-6 right-6 flex h-fit w-full max-w-[290px] flex-col items-center rounded-md border border-gray-2 bg-gray-1 shadow-lg dark:bg-dark-3 max-sm:inset-0 max-sm:top-16 max-sm:mx-auto">
      <div className="absolute right-[-4px] top-[-4px] h-2 w-2">
        <span className="relative flex h-3 w-3">
          <span className="absolute h-full w-full animate-ping rounded-full bg-pink opacity-60"></span>
          <span className="h-full w-full rounded-full bg-pink brightness-75"></span>
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 p-5">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-sm font-bold text-dark-3 dark:text-light">Confirmar Partida</h3>
          <div className="flex w-full items-center justify-between gap-3 text-sm font-light text-dark-1 dark:text-gray-1">
            <span>{match.winner.username}</span>
            <span>
              {match.matchType} - {match.matchResult}
            </span>
            <span>{match.loser.username}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button>
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-green text-light shadow-md hover:animate-pulse hover:brightness-125">
              <Check strokeWidth={3} />
            </div>
          </button>

          <button>
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red text-light shadow-md hover:animate-pulse hover:brightness-75">
              <X strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PushNotificationCard;
