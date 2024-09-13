import { MatchType } from '../../types/match';

interface HistoryTableProps {
  matches: MatchType[] | undefined;
}

const HistoryTable: React.FC<HistoryTableProps> = ({ matches }) => {
  return (
    <div className="h-fit w-full overflow-x-auto">
      <table className="w-full text-left text-sm font-bold text-gray-1">
        <thead className="bg-gray-2 text-gray-1 dark:bg-dark-3">
          <tr>
            <th className="py-2 pl-4">JOGADORES</th>
            <th className="py-2">RESULTADO</th>
            <th className="py-2">DATA</th>
          </tr>
        </thead>
        <tbody>
          {matches?.map((match, index) => (
            <tr
              key={index}
              className="overflow-auto border-b border-gray-2 text-gray-3 last:border-none dark:border-gray-3 dark:text-gray-2"
            >
              <td className="py-2 pl-4">
                <div className="flex flex-col items-start gap-2 text-dark-1 dark:text-gray-1">
                  <div className="flex items-center gap-1">
                    <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md">
                      <img className="object-cover" src={match.winner?.imgUrl} alt="winnerPic" />
                    </span>
                    <span className="font-semibold">{match.winner?.username}</span>
                    <span className="font-extralight">({match.winner?.rating})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md">
                      <img className="object-cover" src={match.loser?.imgUrl} alt="loserPic" />
                    </span>
                    <span className="font-semibold">{match.loser?.username}</span>
                    <span className="font-extralight">({match.loser?.rating})</span>
                  </div>
                </div>
              </td>
              <td className="py-2">
                <div className="flex items-center gap-5">
                  <div className="font-regular flex flex-col items-center gap-6">
                    <span>{match.matchType}</span>
                    <span>{match.matchResult}</span>
                  </div>
                </div>
              </td>
              <td className="py-2">
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
  );
};

export default HistoryTable;
