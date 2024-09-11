import { MatchType } from '../../types/match';

interface HistoryTableProps {
  matches: MatchType[] | undefined;
}

const HistoryTable: React.FC<HistoryTableProps> = ({ matches }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto text-left text-sm">
        <thead>
          <tr className="bg-gray-2 text-gray-1 dark:bg-dark-3">
            <th className="px-4 py-2">JOGADORES</th>
            <th className="px-4 py-2">RESULTADO</th>
            <th className="px-4 py-2">DATA</th>
          </tr>
        </thead>
        <tbody>
          {matches?.map((match, index) => (
            <tr
              key={index}
              className="border-b border-gray-2 text-gray-3 last:border-none dark:border-gray-3 dark:text-gray-2"
            >
              <td className="px-4 py-2">
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
              <td className="px-4 py-2">
                <div className="flex items-center gap-5">
                  <div className="font-regular flex flex-col items-center gap-6">
                    <span>{match.matchType}</span>
                    <span>{match.matchResult}</span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">
                {/* <span>
                  {match.date.getDate().toString().padStart(2, '0')}/
                  {(match.date.getUTCMonth() + 1).toString().padStart(2, '0')}/
                  {match.date.getFullYear()}
                </span> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
