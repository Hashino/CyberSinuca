import { Link } from 'react-router-dom';
import { MatchType } from '../../types/match';
import { UserType } from '../../types/user';
import { Minus, Plus, ChevronRight } from 'lucide-react';

interface ProfileHistoryCardProps {
  matches: MatchType[];
  owner: UserType | undefined;
}

const ProfileHistoryCard: React.FC<ProfileHistoryCardProps> = ({ matches, owner }) => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col overflow-hidden rounded-lg bg-gray-1 shadow-md dark:bg-dark-2">
        <div className="flex items-center justify-between p-4 text-dark-3 dark:text-light">
          <h2 className="text-lg font-bold">Últimas Partidas</h2>
          <Link to={'/history/' + owner?.username}>
            <span className="flex h-6 w-6 items-center justify-center">
              <ChevronRight size={20} strokeWidth={3} />
            </span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="bg-gray-2 text-gray-1 dark:bg-dark-3">
                <th className="px-4 py-2">JOGADORES</th>
                <th className="px-4 py-2">RESULTADO</th>
                <th className="px-4 py-2">DATA</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-2 text-gray-3 last:border-none dark:border-gray-3 dark:text-gray-2"
                >
                  <td className="px-4 py-2">
                    <div className="flex flex-col items-start text-dark-1 dark:text-gray-1">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">{match.winner.username}</span>
                        <span className="font-extralight">({match.winner.rating})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">{match.loser.username}</span>
                        <span className="font-extralight">({match.loser.rating})</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-5">
                      <div className="flex flex-col items-center text-sm">
                        <span>{match.matchType}</span>
                        <span>{match.matchResult}</span>
                      </div>
                      <div>
                        {owner?.username == match.winner.username && (
                          <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-green text-light">
                            <Plus size={14} strokeWidth={3.5} />
                          </span>
                        )}
                        {owner?.username == match.loser.username && (
                          <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-red text-light">
                            <Minus size={14} strokeWidth={3.5} />
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span>
                      {new Date(match.date).getDate().toString().padStart(2, '0')}/
                      {(new Date(match.date).getMonth() + 1).toString().padStart(2, '0')}/
                      {new Date(match.date).getFullYear().toString().padStart(2, '0')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistoryCard;
